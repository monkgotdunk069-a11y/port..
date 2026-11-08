// ========================================================
// SUKHOI SU-30MKI 3D VIEWER (INDIAN AIR FORCE SKY THEME)
// High-Fidelity 3D Model with BrahMos & Rudram Loadout
// Powered by Three.js, MTLLoader, OBJLoader & OrbitControls
// ========================================================

function initThreeScene() {
  const container = document.getElementById('hero-canvas-container');
  if (!container || typeof THREE === 'undefined') return;

  // Clear previous canvas if any
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  // 1. SCENE SETUP
  const scene = new THREE.Scene();

  // 2. CAMERA
  const width = container.clientWidth || 500;
  const height = container.clientHeight || 500;
  const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 1000);
  camera.position.set(4.8, 2.6, 6.5);

  // 3. RENDERER
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance',
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.outputEncoding = THREE.sRGBEncoding;
  container.appendChild(renderer.domElement);

  // 4. BALANCED DAYLIGHT SKY LIGHTING (Authentic IAF Daylight)
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.55);
  scene.add(ambientLight);

  const sunLight = new THREE.DirectionalLight(0xffffff, 0.95);
  sunLight.position.set(10, 16, 12);
  scene.add(sunLight);

  const skyFill = new THREE.DirectionalLight(0x7dd3fc, 0.45);
  skyFill.position.set(-10, 6, -8);
  scene.add(skyFill);

  const bounceLight = new THREE.DirectionalLight(0xffffff, 0.3);
  bounceLight.position.set(0, -10, 2);
  scene.add(bounceLight);

  // 5. ORBIT CONTROLS
  let controls = null;
  if (typeof THREE.OrbitControls !== 'undefined') {
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enablePan = true;
    controls.minDistance = 2.5;
    controls.maxDistance = 15.0;
    controls.maxPolarAngle = Math.PI * 0.92;
    controls.minPolarAngle = 0.08;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.8;
    controls.target.set(0, 0, 0);
  }

  // 6. ROOT GROUP
  const rootGroup = new THREE.Group();
  scene.add(rootGroup);

  const loaderOverlay = document.getElementById('su30-loading-overlay');
  const hideLoading = () => {
    if (loaderOverlay) {
      loaderOverlay.style.opacity = '0';
      setTimeout(() => {
        loaderOverlay.style.display = 'none';
      }, 500);
    }
  };

  // Helper for texture palette settings
  function configurePaletteTexture(tex) {
    if (!tex) return;
    tex.magFilter = THREE.NearestFilter;
    tex.minFilter = THREE.NearestFilter;
    tex.generateMipmaps = false;
    tex.encoding = THREE.sRGBEncoding;
    tex.needsUpdate = true;
  }

  // 7. LOAD AUTHENTIC SU-30MKI BRAHMOS MODEL
  let su30Loaded = false;

  if (typeof THREE.MTLLoader !== 'undefined' && typeof THREE.OBJLoader !== 'undefined') {
    const mtlLoader = new THREE.MTLLoader();
    mtlLoader.setPath('./models/');
    mtlLoader.setResourcePath('./models/');

    mtlLoader.load(
      'Su-30MKI.mtl',
      function (materials) {
        materials.preload();

        const objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.setPath('./models/');

        objLoader.load(
          'Su-30MKI.obj',
          function (object) {
            su30Loaded = true;

            // Center geometry pivot
            const box = new THREE.Box3().setFromObject(object);
            const center = new THREE.Vector3();
            box.getCenter(center);
            object.position.sub(center);

            // Scale to fit hero canvas
            const scale = 0.28;
            object.scale.set(scale, scale, scale);

            // Configure each mesh for clean solid PBR rendering
            object.traverse((child) => {
              if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;

                if (child.geometry) {
                  child.geometry.computeVertexNormals();
                }

                const processMat = (mat) => {
                  if (!mat) return mat;
                  const name = (mat.name || '').toLowerCase();

                  if (name.includes('glass')) {
                    // Transparent cockpit canopy glass
                    return new THREE.MeshPhysicalMaterial({
                      color: 0x0284c7,
                      transparent: true,
                      opacity: 0.35,
                      roughness: 0.08,
                      metalness: 0.85,
                      side: THREE.DoubleSide,
                      depthWrite: true,
                    });
                  }

                  if (mat.map) {
                    configurePaletteTexture(mat.map);
                  }

                  // Solid PBR material with FrontSide culling (prevents internal wireframe/rib see-through artifacts)
                  return new THREE.MeshStandardMaterial({
                    map: mat.map || null,
                    color: mat.map ? 0xffffff : (mat.color || 0x94a3b8),
                    roughness: 0.42,
                    metalness: 0.32,
                    side: THREE.FrontSide,
                    transparent: false,
                    depthWrite: true,
                    depthTest: true,
                  });
                };

                if (Array.isArray(child.material)) {
                  child.material = child.material.map(processMat);
                } else if (child.material) {
                  child.material = processMat(child.material);
                }
              }
            });

            rootGroup.add(object);
            hideLoading();
          },
          function (xhr) {},
          function (err) {
            console.warn('OBJ load error, using procedural fallback:', err);
            buildProceduralSu30Fallback();
          }
        );
      },
      function (xhr) {},
      function (err) {
        console.warn('MTL load error, using procedural fallback:', err);
        buildProceduralSu30Fallback();
      }
    );
  } else {
    buildProceduralSu30Fallback();
  }

  // 8. PROCEDURAL FALLBACK IF ASSETS FAIL
  function buildProceduralSu30Fallback() {
    if (su30Loaded) return;
    const procGroup = new THREE.Group();

    const iafGreyMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      metalness: 0.45,
      roughness: 0.4,
    });
    const radomeMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.3,
      roughness: 0.6,
    });
    const canopyMat = new THREE.MeshPhysicalMaterial({
      color: 0x0284c7,
      transparent: true,
      opacity: 0.65,
      roughness: 0.1,
      metalness: 0.9,
    });

    const fuseGeo = new THREE.CylinderGeometry(0.35, 0.48, 4.2, 24);
    fuseGeo.rotateX(Math.PI / 2);
    const fuselage = new THREE.Mesh(fuseGeo, iafGreyMat);
    procGroup.add(fuselage);

    const radomeGeo = new THREE.ConeGeometry(0.35, 1.8, 24);
    radomeGeo.rotateX(Math.PI / 2);
    const radome = new THREE.Mesh(radomeGeo, radomeMat);
    radome.position.set(0, -0.15, 2.8);
    radome.rotation.x = 0.08;
    procGroup.add(radome);

    const canopyGeo = new THREE.SphereGeometry(0.32, 16, 16);
    canopyGeo.scale(0.8, 0.85, 2.6);
    const canopy = new THREE.Mesh(canopyGeo, canopyMat);
    canopy.position.set(0, 0.42, 1.1);
    procGroup.add(canopy);

    const wingShape = new THREE.Shape();
    wingShape.moveTo(0, 0);
    wingShape.lineTo(2.4, -1.2);
    wingShape.lineTo(2.35, -2.0);
    wingShape.lineTo(0, -1.6);
    wingShape.closePath();
    const wingGeo = new THREE.ExtrudeGeometry(wingShape, { depth: 0.06, bevelEnabled: false });
    wingGeo.rotateX(Math.PI / 2);
    const leftWing = new THREE.Mesh(wingGeo, iafGreyMat);
    leftWing.position.set(0.35, 0.05, 0.2);
    procGroup.add(leftWing);
    const rightWing = leftWing.clone();
    rightWing.scale.set(-1, 1, 1);
    rightWing.position.set(-0.35, 0.05, 0.2);
    procGroup.add(rightWing);

    const finShape = new THREE.Shape();
    finShape.moveTo(0, 0);
    finShape.lineTo(0.4, 1.4);
    finShape.lineTo(0.9, 1.35);
    finShape.lineTo(1.1, 0);
    finShape.closePath();
    const finGeo = new THREE.ExtrudeGeometry(finShape, { depth: 0.05, bevelEnabled: false });
    const leftFin = new THREE.Mesh(finGeo, iafGreyMat);
    leftFin.position.set(0.65, 0.2, -1.5);
    leftFin.rotation.z = -0.15;
    procGroup.add(leftFin);
    const rightFin = leftFin.clone();
    rightFin.position.set(-0.65, 0.2, -1.5);
    rightFin.rotation.z = 0.15;
    procGroup.add(rightFin);

    // BrahMos Centerline
    const brahmosGeo = new THREE.CylinderGeometry(0.12, 0.12, 2.2, 16);
    brahmosGeo.rotateX(Math.PI / 2);
    const brahmosMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.8 });
    const brahmos = new THREE.Mesh(brahmosGeo, brahmosMat);
    brahmos.position.set(0, -0.45, 0.2);
    procGroup.add(brahmos);

    rootGroup.add(procGroup);
    hideLoading();
  }

  // 9. CAMERA VIEW PRESET BUTTONS
  const setupPresetBtn = (id, targetPos, targetLookAt) => {
    const btn = document.getElementById(id);
    if (!btn) return;

    btn.addEventListener('click', (e) => {
      e.stopPropagation();

      document.querySelectorAll('#cam-btn-34, #cam-btn-weapons, #cam-btn-cockpit, #cam-btn-top').forEach((b) => {
        b.className = 'px-2 py-0.5 rounded hover:bg-sky-100 text-slate-700 transition-colors';
      });
      btn.className = 'px-2 py-0.5 rounded bg-sky-600 text-white font-semibold transition-colors';

      const startPos = camera.position.clone();
      const endPos = new THREE.Vector3(...targetPos);
      const startTime = performance.now();
      const duration = 750;

      function animCam(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1.0);
        const ease = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
        
        camera.position.lerpVectors(startPos, endPos, ease);
        if (controls) {
          controls.target.set(...targetLookAt);
          controls.update();
        }

        if (progress < 1.0) {
          requestAnimationFrame(animCam);
        }
      }
      requestAnimationFrame(animCam);
    });
  };

  setupPresetBtn('cam-btn-34', [4.8, 2.6, 6.5], [0, 0, 0]);
  setupPresetBtn('cam-btn-weapons', [0, -3.2, 5.5], [0, -0.3, 0]);
  setupPresetBtn('cam-btn-cockpit', [1.6, 1.2, 3.4], [0, 0.3, 1.2]);
  setupPresetBtn('cam-btn-top', [0, 8.2, 0.8], [0, 0, 0]);

  const autoBtn = document.getElementById('cam-btn-auto');
  if (autoBtn && controls) {
    autoBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      controls.autoRotate = !controls.autoRotate;
      autoBtn.classList.toggle('bg-sky-100', controls.autoRotate);
      autoBtn.classList.toggle('text-sky-800', controls.autoRotate);
    });
  }

  // 10. RESIZE HANDLER
  const handleResize = () => {
    if (!container) return;
    const newWidth = container.clientWidth;
    const newHeight = container.clientHeight;
    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(newWidth, newHeight);
  };
  window.addEventListener('resize', handleResize);

  // 11. ANIMATION LOOP
  let clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);

    const elapsed = clock.getElapsedTime();
    rootGroup.position.y = Math.sin(elapsed * 1.4) * 0.05;

    if (controls) {
      controls.update();
    }

    renderer.render(scene, camera);
  }

  animate();
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initThreeScene();
});
