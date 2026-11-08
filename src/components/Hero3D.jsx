import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { sounds } from '../utils/sound';

export default function Hero3D() {
  const mountRef = useRef(null);
  const [boosted, setBoosted] = useState(false);
  const [telemetry, setTelemetry] = useState({
    mach: '2.4',
    alt: '24,800',
    bearing: '042°',
    targetLock: 'ACQUIRED',
  });

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // SCENE SETUP
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030712, 0.025);

    const camera = new THREE.PerspectiveCamera(
      45,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 1.8, 8.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    currentMount.appendChild(renderer.domElement);

    // LIGHTING
    const ambientLight = new THREE.AmbientLight(0x0a192f, 2.5);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x00f0ff, 3);
    dirLight.position.set(5, 10, 7);
    scene.add(dirLight);

    const purpleLight = new THREE.DirectionalLight(0xa855f7, 2.5);
    purpleLight.position.set(-6, -4, -5);
    scene.add(purpleLight);

    const pointLight = new THREE.PointLight(0x38bdf8, 2, 20);
    pointLight.position.set(0, 0, 2);
    scene.add(pointLight);

    // ==========================================
    // 3D FIGHTER JET (1 CHD AIR SQN NCC TRIBUTE)
    // ==========================================
    const jetGroup = new THREE.Group();

    // Metallic stealth material
    const stealthMaterial = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      metalness: 0.85,
      roughness: 0.25,
      wireframe: false,
    });

    const accentMaterial = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      metalness: 0.9,
      roughness: 0.2,
      emissive: 0x0369a1,
      emissiveIntensity: 0.3,
    });

    const glowCyanMaterial = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
    });

    // 1. Fuselage
    const fuselageGeom = new THREE.ConeGeometry(0.55, 4.2, 8);
    fuselageGeom.rotateX(Math.PI / 2);
    const fuselage = new THREE.Mesh(fuselageGeom, stealthMaterial);
    fuselage.scale.set(0.9, 0.45, 1);
    jetGroup.add(fuselage);

    // 2. Cockpit canopy
    const cockpitGeom = new THREE.SphereGeometry(0.4, 16, 16);
    cockpitGeom.scale(0.55, 0.5, 2.2);
    const cockpitMat = new THREE.MeshPhysicalMaterial({
      color: 0x00f0ff,
      metalness: 0.1,
      roughness: 0.1,
      transmission: 0.85,
      thickness: 0.5,
      emissive: 0x00f0ff,
      emissiveIntensity: 0.35,
    });
    const cockpit = new THREE.Mesh(cockpitGeom, cockpitMat);
    cockpit.position.set(0, 0.25, 0.3);
    jetGroup.add(cockpit);

    // 3. Main Delta Wings
    const wingShape = new THREE.Shape();
    wingShape.moveTo(0, 0);
    wingShape.lineTo(3.2, -1.8);
    wingShape.lineTo(3.2, -2.4);
    wingShape.lineTo(0.5, -2.1);
    wingShape.lineTo(0, -1.6);
    wingShape.closePath();

    const wingExtrudeSettings = { depth: 0.06, bevelEnabled: true, bevelSegments: 2, steps: 1, bevelSize: 0.02, bevelThickness: 0.02 };
    const rightWingGeom = new THREE.ExtrudeGeometry(wingShape, wingExtrudeSettings);
    rightWingGeom.rotateX(Math.PI / 2);
    const rightWing = new THREE.Mesh(rightWingGeom, stealthMaterial);
    rightWing.position.set(0, 0, 0.5);
    jetGroup.add(rightWing);

    const leftWingShape = new THREE.Shape();
    leftWingShape.moveTo(0, 0);
    leftWingShape.lineTo(-3.2, -1.8);
    leftWingShape.lineTo(-3.2, -2.4);
    leftWingShape.lineTo(-0.5, -2.1);
    leftWingShape.lineTo(0, -1.6);
    leftWingShape.closePath();

    const leftWingGeom = new THREE.ExtrudeGeometry(leftWingShape, wingExtrudeSettings);
    leftWingGeom.rotateX(Math.PI / 2);
    const leftWing = new THREE.Mesh(leftWingGeom, stealthMaterial);
    leftWing.position.set(0, 0, 0.5);
    jetGroup.add(leftWing);

    // 4. Twin Vertical Stabilizers (Rudders)
    const finShape = new THREE.Shape();
    finShape.moveTo(0, 0);
    finShape.lineTo(0.5, 1.2);
    finShape.lineTo(0.9, 1.2);
    finShape.lineTo(1.1, 0);
    finShape.closePath();

    const finGeom = new THREE.ExtrudeGeometry(finShape, { depth: 0.04, bevelEnabled: false });
    const rightFin = new THREE.Mesh(finGeom, accentMaterial);
    rightFin.position.set(0.4, 0.1, -1.9);
    rightFin.rotation.z = -0.22; // Canted fin
    jetGroup.add(rightFin);

    const leftFin = new THREE.Mesh(finGeom, accentMaterial);
    leftFin.position.set(-0.4, 0.1, -1.9);
    leftFin.rotation.z = 0.22;
    leftFin.rotation.y = Math.PI;
    jetGroup.add(leftFin);

    // 5. Twin Afterburners with glowing engine nozzles
    const engineGeom = new THREE.CylinderGeometry(0.18, 0.22, 0.9, 16);
    engineGeom.rotateX(Math.PI / 2);
    const engine1 = new THREE.Mesh(engineGeom, stealthMaterial);
    engine1.position.set(0.28, -0.05, -2.0);
    jetGroup.add(engine1);

    const engine2 = new THREE.Mesh(engineGeom, stealthMaterial);
    engine2.position.set(-0.28, -0.05, -2.0);
    jetGroup.add(engine2);

    // Flame glows
    const flameGeom = new THREE.ConeGeometry(0.16, 1.4, 12);
    flameGeom.rotateX(-Math.PI / 2);
    const flameMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.85,
    });
    const flame1 = new THREE.Mesh(flameGeom, flameMat);
    flame1.position.set(0.28, -0.05, -2.9);
    jetGroup.add(flame1);

    const flame2 = new THREE.Mesh(flameGeom, flameMat);
    flame2.position.set(-0.28, -0.05, -2.9);
    jetGroup.add(flame2);

    // Wingtip Formation Lights (Red & Green)
    const redLight = new THREE.Mesh(
      new THREE.SphereGeometry(0.06, 8, 8),
      new THREE.MeshBasicMaterial({ color: 0xef4444 })
    );
    redLight.position.set(-3.2, 0, -1.2);
    jetGroup.add(redLight);

    const greenLight = new THREE.Mesh(
      new THREE.SphereGeometry(0.06, 8, 8),
      new THREE.MeshBasicMaterial({ color: 0x22c55e })
    );
    greenLight.position.set(3.2, 0, -1.2);
    jetGroup.add(greenLight);

    // Position the Jet
    jetGroup.position.set(0, 0.2, 0);
    jetGroup.scale.set(0.9, 0.9, 0.9);
    scene.add(jetGroup);

    // ==========================================
    // 3D NEURAL DATA MATRIX & PARTICLES (AI/DS)
    // ==========================================
    const particleCount = 750;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const radius = THREE.MathUtils.randFloat(3.5, 9.0);
      const theta = THREE.MathUtils.randFloat(0, Math.PI * 2);
      const phi = THREE.MathUtils.randFloat(0, Math.PI);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      // Cyan to Purple neon gradient
      const mixRatio = Math.random();
      colors[i * 3] = THREE.MathUtils.lerp(0.0, 0.65, mixRatio);     // R
      colors[i * 3 + 1] = THREE.MathUtils.lerp(0.94, 0.33, mixRatio); // G
      colors[i * 3 + 2] = THREE.MathUtils.lerp(1.0, 0.97, mixRatio);  // B
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Cyber Rings around the Jet
    const ringGeom = new THREE.RingGeometry(3.2, 3.25, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.2,
      wireframe: true,
    });
    const ring1 = new THREE.Mesh(ringGeom, ringMat);
    ring1.rotation.x = Math.PI / 2;
    scene.add(ring1);

    const ring2 = new THREE.Mesh(new THREE.RingGeometry(4.4, 4.45, 64), ringMat);
    ring2.rotation.x = Math.PI / 2.3;
    ring2.rotation.y = 0.3;
    scene.add(ring2);

    // Speed Lines / Space Dust for Afterburner
    const speedLineCount = 120;
    const speedLineGeom = new THREE.BufferGeometry();
    const speedPositions = new Float32Array(speedLineCount * 6);
    for (let i = 0; i < speedLineCount; i++) {
      const x = THREE.MathUtils.randFloatSpread(14);
      const y = THREE.MathUtils.randFloatSpread(8);
      const z = THREE.MathUtils.randFloatSpread(20);
      speedPositions[i * 6] = x;
      speedPositions[i * 6 + 1] = y;
      speedPositions[i * 6 + 2] = z;
      speedPositions[i * 6 + 3] = x;
      speedPositions[i * 6 + 4] = y;
      speedPositions[i * 6 + 5] = z - 2.5;
    }
    speedLineGeom.setAttribute('position', new THREE.BufferAttribute(speedPositions, 3));
    const speedLineMat = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.25,
    });
    const speedLines = new THREE.LineSegments(speedLineGeom, speedLineMat);
    scene.add(speedLines);

    // ==========================================
    // INTERACTION & MOUSE TRACKING
    // ==========================================
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;

    const onMouseMove = (e) => {
      mouseX = (e.clientX - windowHalfX) * 0.0012;
      mouseY = (e.clientY - windowHalfY) * 0.0012;
    };

    const onTouchMove = (e) => {
      if (e.touches.length > 0) {
        mouseX = (e.touches[0].clientX - windowHalfX) * 0.0012;
        mouseY = (e.touches[0].clientY - windowHalfY) * 0.0012;
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove);

    // RESIZE
    const handleResize = () => {
      if (!currentMount) return;
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // ANIMATION LOOP
    let clock = new THREE.Clock();
    let frameId;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Pitch, Roll, Yaw of the Jet
      jetGroup.rotation.y = -targetX * 1.5;
      jetGroup.rotation.z = -targetX * 2.2; // Bank into turn
      jetGroup.rotation.x = targetY * 1.2;

      // Gentle hover floating bob
      jetGroup.position.y = 0.2 + Math.sin(elapsedTime * 2) * 0.12;

      // Afterburner flame pulsing
      const flameScale = 1.0 + Math.sin(elapsedTime * 30) * 0.25;
      flame1.scale.set(1, 1, flameScale);
      flame2.scale.set(1, 1, flameScale);

      // Rotate Neural network & rings
      particles.rotation.y = elapsedTime * 0.05;
      particles.rotation.x = Math.sin(elapsedTime * 0.03) * 0.1;
      ring1.rotation.z = elapsedTime * 0.2;
      ring2.rotation.z = -elapsedTime * 0.15;

      // Stream speed lines
      const positionsArr = speedLines.geometry.attributes.position.array;
      for (let i = 0; i < speedLineCount; i++) {
        positionsArr[i * 6 + 2] += 0.25;
        positionsArr[i * 6 + 5] += 0.25;
        if (positionsArr[i * 6 + 2] > 10) {
          positionsArr[i * 6 + 2] = -15;
          positionsArr[i * 6 + 5] = -17.5;
        }
      }
      speedLines.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('resize', handleResize);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const triggerBoost = () => {
    sounds.playThrust();
    setBoosted(true);
    setTelemetry((prev) => ({
      ...prev,
      mach: '3.8 SUPERSONIC',
      alt: '35,000',
    }));
    setTimeout(() => {
      setBoosted(false);
      setTelemetry({
        mach: '2.4',
        alt: '24,800',
        bearing: '042°',
        targetLock: 'ACQUIRED',
      });
    }, 2500);
  };

  return (
    <div className="relative w-full h-[600px] md:h-[750px] lg:h-[820px] overflow-hidden flex items-center justify-center">
      {/* Three.js Canvas Container */}
      <div ref={mountRef} className="absolute inset-0 cursor-grab active:cursor-grabbing" />

      {/* Cyber HUD Overlay Grid & Crosshairs */}
      <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-between p-4 md:p-8">
        {/* Top HUD Bar */}
        <div className="flex items-center justify-between text-xs font-mono text-cyan-400/80">
          <div className="flex items-center space-x-2 bg-slate-950/70 border border-cyan-500/30 px-3 py-1.5 rounded-md backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="tracking-widest">CALLSIGN: NISHANT RAWAT</span>
            <span className="text-slate-500">|</span>
            <span className="text-yellow-400 font-semibold">1 CHD AIR SQN NCC</span>
          </div>
          <div className="hidden sm:flex items-center space-x-4 bg-slate-950/70 border border-cyan-500/30 px-3 py-1.5 rounded-md backdrop-blur-sm">
            <span>MACH: <strong className="text-white">{telemetry.mach}</strong></span>
            <span>ALT: <strong className="text-white">{telemetry.alt} FT</strong></span>
            <span>SYS: <strong className="text-green-400">AI/DS NOMINAL</strong></span>
          </div>
        </div>

        {/* Center Target Lock HUD Graphics */}
        <div className="mx-auto flex flex-col items-center justify-center opacity-40 hover:opacity-80 transition-opacity">
          <div className="w-32 h-32 md:w-48 md:h-48 border border-dashed border-cyan-400/50 rounded-full flex items-center justify-center animate-spin" style={{ animationDuration: '20s' }}>
            <div className="w-20 h-20 border border-purple-500/60 rounded-full flex items-center justify-center animate-pulse" />
          </div>
          <div className="mt-2 text-[10px] font-mono tracking-widest text-cyan-300">
            [ TARGET_LOCK: 1 CHD AIR SQN NCC ]
          </div>
        </div>

        {/* Bottom Interactive HUD Telemetry & Boost Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
          <div className="bg-slate-950/80 border border-slate-800 p-2.5 rounded-lg text-slate-300 backdrop-blur-md flex items-center space-x-4">
            <div>
              <span className="text-slate-500 block text-[10px]">RADAR BEARING</span>
              <span className="text-cyan-400 font-bold">{telemetry.bearing} NE</span>
            </div>
            <div className="h-6 w-px bg-slate-800" />
            <div>
              <span className="text-slate-500 block text-[10px]">RADAR LOCK</span>
              <span className="text-emerald-400 font-bold">{telemetry.targetLock}</span>
            </div>
            <div className="h-6 w-px bg-slate-800" />
            <div>
              <span className="text-slate-500 block text-[10px]">NEURAL CORE</span>
              <span className="text-purple-400 font-bold">ACTIVE (GEU MCA)</span>
            </div>
          </div>

          <button
            onClick={triggerBoost}
            className="pointer-events-auto group relative px-5 py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-mono font-bold text-xs uppercase tracking-widest rounded-lg border border-cyan-400/50 shadow-lg shadow-cyan-500/25 active:scale-95 transition-all overflow-hidden"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-yellow-300 animate-pulse" />
              <span>{boosted ? 'AFTERBURNER ENGAGED!' : 'ENGAGE AFTERBURNER'}</span>
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
}
