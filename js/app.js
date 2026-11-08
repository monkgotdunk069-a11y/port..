// Application Controller for Nishant Rawat Portfolio

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // 1. 3D PROFILE CARD PARALLAX TILT
  // ==========================================
  const profileCard = document.getElementById('profile-3d-card');
  const profileImg = document.getElementById('profile-main-img');
  const photoTitle = document.getElementById('photo-card-title');
  const photoSubtitle = document.getElementById('photo-card-subtitle');

  const photoData = {
    ncc: {
      src: './images/nishant-ncc.jpg',
      title: '1 CHD Air Sqn NCC Cadet',
      subtitle: 'Air Wing Cadet • DAV & Capt. Vikram Batra PVC Legacy',
    },
    rock: {
      src: './images/nishant-rock.jpg',
      title: 'Himalayan Ridge Ascent',
      subtitle: 'Dhauladhar Mountain Range • High Altitude Resilience',
    },
    mountain: {
      src: './images/nishant-mountain.jpg',
      title: 'Triund Alpine Outpost',
      subtitle: 'Kangra Valley • Mountain Expeditions',
    },
    summit: {
      src: './images/nishant-summit.jpg',
      title: 'Himalayan Summit',
      subtitle: 'High Altitude Focus & Mental Fortitude',
    },
    quote: {
      src: './images/nimsdai-quote.jpg',
      title: 'Nimsdai Purja — 14 Peaks Philosophy',
      subtitle: '"Giving up is not in the blood, sir. It\'s not in the blood."',
    },
    photography: {
      src: './images/nishant-photography.jpg',
      title: 'Landscape & Dawn Lake Photography',
      subtitle: 'Atmospheric Blue Hour Framing • Sukhna Lake Promenade',
    },
  };

  document.querySelectorAll('.photo-thumb-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.photo;
      if (!photoData[key] || !profileImg) return;

      document.querySelectorAll('.photo-thumb-btn').forEach((b) => {
        b.className = 'photo-thumb-btn rounded-lg overflow-hidden border border-slate-200 opacity-70 hover:opacity-100 p-0.5 transition-all';
      });

      btn.className = 'photo-thumb-btn rounded-lg overflow-hidden border-2 border-sky-600 ring-2 ring-sky-200 p-0.5 transition-all';

      profileImg.style.opacity = '0';
      setTimeout(() => {
        profileImg.src = photoData[key].src;
        if (photoTitle) photoTitle.innerText = photoData[key].title;
        if (photoSubtitle) photoSubtitle.innerText = photoData[key].subtitle;
        profileImg.style.opacity = '1';
      }, 150);
    });
  });

  if (profileCard) {
    profileCard.addEventListener('mousemove', (e) => {
      const rect = profileCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;

      profileCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    profileCard.addEventListener('mouseleave', () => {
      profileCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    });
  }

  // ==========================================
  // 2. ACADEMIC & LEADERSHIP TABS
  // ==========================================
  const academicTabs = {
    mca: {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Graphic Era Deemed to be University • Dehradun, Uttarakhand',
      period: '2024 – Present • Master\'s Program',
      focus: 'Artificial Intelligence & Data Science (AI/DS)',
      desc: 'Pursuing advanced specialization in machine learning architectures, deep neural networks, computer vision, natural language processing, and high-performance predictive systems.',
      highlights: [
        'Deep Learning Frameworks & Neural Networks (PyTorch, TensorFlow, CNNs, Transformers)',
        'Computer Vision & Biometric Forensics (InsightFace, YOLO, Spatial-Temporal Analysis)',
        'Predictive Machine Learning & Ensembles (XGBoost, Random Forest, Scikit-Learn)',
        'High-dimensional Data Analytics, Feature Engineering, and Anomaly Detection',
        'End-to-End Model Deployment, REST APIs (FastAPI, Flask) & Cloud Hosting',
      ],
    },
    bca: {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'DAV College Sector 10 Chandigarh • Panjab University (PU)',
      period: 'Graduated • First Class 72% Aggregate',
      focus: '72% in BCA (Panjab University) • Software Engineering',
      desc: 'Graduated with a first-class 72% aggregate under Panjab University at the prestigious DAV College Sector 10 Chandigarh. Built an unshakeable computer science foundation in algorithmic problem solving, data structures, relational database management, and object-oriented software engineering.',
      highlights: [
        'Graduated with 72% Aggregate Score under Panjab University (PU)',
        'Data Structures & Algorithms (Trees, Graphs, Sorting Algorithms, Complexity)',
        'Object-Oriented Programming & Systems Architecture (C++, Java, Python)',
        'Relational Database Management Systems (SQL Normalization, Indexing, ACID Principles)',
        'Operating Systems, Process Management & Virtual Memory Architecture',
        'Full-Stack Web Development, REST Protocols & Git Version Control',
      ],
    },
    school: {
      degree: 'Senior Secondary (12th Science) & Secondary (10th)',
      institution: 'Kendriya Vidyalaya OCF Sector 29-B, Chandigarh',
      period: '12th Science: 74% | 10th: 79%',
      focus: 'CBSE Science Stream • Mathematics, Physics & Computer Science',
      desc: 'Completed senior secondary schooling (Class 12 Science with 74%) and secondary school (Class 10 with 79%) at Kendriya Vidyalaya Ordnance Cable Factory (OCF) Sector 29-B, Chandigarh, building early excellence in scientific analytical inquiry, mathematics, and computing fundamentals.',
      highlights: [
        'Class 12 (Senior Secondary - Science Stream): 74% from Kendriya Vidyalaya OCF Sector 29-B',
        'Class 10 (Secondary School Examination): 79% from Kendriya Vidyalaya OCF Sector 29-B',
        'Core curriculum in Physics, Chemistry, Mathematics & Computer Science',
        'Official School Portal: https://chandigarhocf.kvs.ac.in/en/',
        'Active participant in school science exhibitions, sports, and foundational co-curriculars',
      ],
    },
    ncc: {
      degree: 'NCC \'C\' Certificate — \'A\' Grade (Highest Distinction)',
      institution: '1 Chandigarh Air Squadron NCC (1 CHD AIR SQN NCC) • Air Wing',
      period: 'Air Wing Cadetship & Senior Division Certification',
      focus: '\'A\' Grade in \'C\' Certificate • Flight Dynamics & Leadership',
      desc: 'Achieved the highest distinction of \'A\' Grade in the coveted National Cadet Corps (NCC) \'C\' Certificate examination under 1 Chandigarh Air Squadron NCC. Trained under the mentorship of Indian Air Force personnel at DAV College Sector 10 Chandigarh—walking the footsteps of Kargil War legend Capt. Vikram Batra, PVC.',
      highlights: [
        'Achieved the coveted \'A\' Grade in the NCC \'C\' Certificate examination',
        '1 CHD AIR SQN NCC (1 Chandigarh Air Squadron) Air Wing Cadetship',
        'Aviation Theory, Aerodynamics, Aircraft Anatomy & Principles of Flight',
        'Air Navigation, Compass Drift Calculations & Meteorological Mapping',
        'Aeromodelling, Control Line Aircraft Construction & Remote Flight Balancing',
        'Military Drill, Parade Commands, Obstacle Discipline & Officer Qualities',
      ],
    },
  };

  document.querySelectorAll('.odyssey-tab-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.tab;
      const data = academicTabs[key];
      if (!data) return;

      document.querySelectorAll('.odyssey-tab-btn').forEach((b) => {
        b.className = 'odyssey-tab-btn px-4 py-2 rounded-lg text-xs font-bold border border-slate-200 bg-white text-slate-700 hover:border-sky-300 transition-colors';
      });

      btn.className = 'odyssey-tab-btn px-4 py-2 rounded-lg text-xs font-bold border bg-sky-600 text-white shadow-sm transition-colors';

      const degreeEl = document.getElementById('odyssey-degree');
      const instEl = document.getElementById('odyssey-inst');
      const periodEl = document.getElementById('odyssey-period');
      const focusEl = document.getElementById('odyssey-focus');
      const descEl = document.getElementById('odyssey-desc');
      const listEl = document.getElementById('odyssey-highlights');

      if (degreeEl) degreeEl.innerText = data.degree;
      if (instEl) instEl.innerText = data.institution;
      if (periodEl) periodEl.innerText = data.period;
      if (focusEl) focusEl.innerText = data.focus;
      if (descEl) descEl.innerText = data.desc;

      if (listEl) {
        listEl.innerHTML = data.highlights
          .map(
            (item) => `
            <div class="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-700">
              <span class="text-sky-600 font-bold">✓</span>
              <span class="leading-relaxed font-medium">${item}</span>
            </div>`
          )
          .join('');
      }
    });
  });

  // ==========================================
  // 3. PROJECT FILTERING
  // ==========================================
  document.querySelectorAll('.project-filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.filter;
      document.querySelectorAll('.project-filter-btn').forEach((b) => {
        b.className = 'project-filter-btn px-4 py-2 rounded-lg text-xs font-semibold transition-all border border-slate-200 bg-white text-slate-700 hover:border-sky-300';
      });
      btn.className = 'project-filter-btn px-4 py-2 rounded-lg text-xs font-semibold transition-all border bg-sky-600 text-white shadow-sm';

      document.querySelectorAll('.project-card').forEach((card) => {
        if (cat === 'all' || card.dataset.category === cat) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ==========================================
  // 4. INTERACTIVE RECRUITER TERMINAL
  // ==========================================
  const termInput = document.getElementById('terminal-input');
  const termOutput = document.getElementById('terminal-output');

  const executeCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    const userLine = document.createElement('div');
    userLine.innerHTML = `<span class="text-sky-400 font-mono font-medium">$ ${cmd}</span>`;
    termOutput.appendChild(userLine);

    let respHtml = '';

    switch (trimmed) {
      case 'help':
        respHtml = `<pre class="text-slate-300 font-mono text-xs leading-relaxed">
Available commands:
  • summary    : Official verified Professional Summary
  • whoami     : Bio, current standing & institutional affiliations
  • education  : Academic degrees (Graphic Era University, DAV-10, KV OCF)
  • projects   : Overview of major deployed projects on GitHub
  • ncc        : 1 CHD AIR SQN NCC Air Wing background
  • hobbies    : Trekking, Camping & Photography expeditions
  • quote      : Nimsdai Purja (14 Peaks) mountaineering creed
  • skills     : Technical stack (PyTorch, Machine Learning, Data Analytics)
  • contact    : Email, LinkedIn, and GitHub links
  • clear      : Clear terminal screen</pre>`;
        break;

      case 'summary':
        respHtml = `<pre class="text-sky-300 font-mono text-xs leading-relaxed">
[PROFESSIONAL CAREER PROFILE & TARGET ROLES]
Role Target : Software Development Engineer (SDE) | Machine Learning Engineer | Data Scientist
Summary     : Aspiring SDE and AI/ML Specialist with hands-on expertise building production-ready
              software architectures, deep learning vision frameworks (InsightFace SCRFD + PyTorch),
              and predictive machine learning pipelines (XGBoost, Scikit-Learn).
Credentials : MCA (AI & Data Science) • Graphic Era Deemed to be University
              BCA (CS & Software Engg) • DAV College Sector 10 Chandigarh (Panjab University)
Cadetship   : 1 CHD AIR SQN NCC • 'A' Grade in 'C' Certificate (Highest Distinction)</pre>`;
        break;

      case 'quote':
        respHtml = `<pre class="text-amber-300 font-mono text-xs leading-relaxed">
“Giving up is not in the blood, sir. It's not in the blood.”
— Nimsdai Purja, MBE (14 Peaks: Nothing Is Impossible)
Mountaineering Legend & Special Forces Veteran</pre>`;
        break;

      case 'hobbies':
      case 'passions':
        respHtml = `<pre class="text-emerald-300 font-mono text-xs leading-relaxed">
[FIELD EXPEDITIONS & HOBBIES]
• Trekking    : Dhauladhar Mountain Range, Triund alpine ridge ascents, high-altitude endurance
• Camping     : Wilderness alpine bivouacs, sub-zero night outposts under clear Himalayan skies
• Photography : Mountain landscapes, dynamic weather framing, natural light documentary storytelling</pre>`;
        break;

      case 'whoami':
      case 'bio':
        respHtml = `<pre class="text-slate-200 font-mono text-xs">
Name       : Nishant Rawat
Current    : MCA Candidate (Artificial Intelligence & Data Science)
University : Graphic Era Deemed to be University, Dehradun
Graduation : BCA, DAV College Sector 10 Chandigarh (Panjab University) — 72%
Schooling  : Kendriya Vidyalaya OCF Sector 29-B, Chandigarh
             • Class 12 (Science): 74% | Class 10: 79%
Air Wing   : 1 CHD AIR SQN NCC — 'C' Certificate with 'A' Grade
Focus      : Deep Learning, Computer Vision, Geospatial ML, Business Analytics</pre>`;
        break;

      case 'education':
        respHtml = `<pre class="text-slate-200 font-mono text-xs">
[1] Graphic Era Deemed to be University (2024 - Present)
    Degree : Master of Computer Applications (MCA) - AI & Data Science
[2] DAV College Sector 10 Chandigarh • Panjab University
    Degree : Bachelor of Computer Applications (BCA) — Scored 72%
[3] Kendriya Vidyalaya OCF Sector 29-B, Chandigarh (https://chandigarhocf.kvs.ac.in/en/)
    • Class 12 (Senior Secondary - Science Stream): 74%
    • Class 10 (Secondary School Examination)     : 79%
[4] National Cadet Corps (1 CHD AIR SQN NCC)
    • NCC 'C' Certificate: Awarded 'A' Grade (Highest Distinction)</pre>`;
        break;

      case 'projects':
        respHtml = `<pre class="text-slate-200 font-mono text-xs">
1. DeepDetect AI        : Multi-domain spatial-temporal deepfake forensics
2. CrimeWatch Platform  : NCRB predictive crime analysis & heatmapping (XGBoost)
3. Employee Attrition   : ML retention predictor deployed on Render
4. MIT-BIH Arrhythmia   : Cardiac ECG classification using Deep CNN
5. Airbnb Analytics     : India hospitality dataset EDA & Tableau BI
6. Zepto Analytics      : Quick-commerce catalog & pricing analytics
GitHub Profile: https://github.com/monkgotdunk069-a11y</pre>`;
        break;

      case 'ncc':
        respHtml = `<pre class="text-slate-200 font-mono text-xs">
Squadron    : 1 CHD AIR SQN NCC (1 Chandigarh Air Squadron NCC)
Certificate : NCC 'C' Certificate awarded with prestigious 'A' Grade
Heritage    : Trained at DAV College Sector 10, the alma mater of Kargil War
              legend Capt. Vikram Batra, PVC (Param Vir Chakra).
Motto       : Unity and Discipline • "Touch the Sky with Glory"</pre>`;
        break;

      case 'skills':
        respHtml = `<pre class="text-slate-200 font-mono text-xs">
AI & ML   : PyTorch, Scikit-Learn, XGBoost, Random Forest, CNNs, Transformers
Vision    : InsightFace SCRFD, OpenCV, Deepfake Forensic Classifiers
Analytics : Pandas, NumPy, Tableau, EDA, Statistical Modeling
Languages : Python, C++, SQL, JavaScript
Tools     : Git, GitHub, Flask, FastAPI, Linux, Docker</pre>`;
        break;

      case 'contact':
        respHtml = `<pre class="text-sky-300 font-mono text-xs">
GitHub   : https://github.com/monkgotdunk069-a11y
LinkedIn : https://www.linkedin.com/in/nishant-rawat-412796348
Instagram: https://www.instagram.com/nishant_singh_rawat04/</pre>`;
        break;

      case 'clear':
        termOutput.innerHTML = '';
        termInput.value = '';
        return;

      default:
        respHtml = `<p class="text-red-400 font-mono text-xs">Command not recognized: "${trimmed}". Type "help" for a list of commands.</p>`;
        break;
    }

    const respDiv = document.createElement('div');
    respDiv.innerHTML = respHtml;
    termOutput.appendChild(respDiv);
    termOutput.scrollTop = termOutput.scrollHeight;
    termInput.value = '';
  };

  if (termInput) {
    termInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        executeCommand(termInput.value);
      }
    });
  }

  document.querySelectorAll('.term-chip-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const cmd = btn.dataset.cmd;
      executeCommand(cmd);
    });
  });

  // ==========================================
  // 5. CONTACT FORM
  // ==========================================
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success-box');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (typeof confetti === 'function') {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#38bdf8', '#818cf8', '#0284c7'],
        });
      }

      contactForm.classList.add('hidden');
      if (formSuccess) formSuccess.classList.remove('hidden');

      setTimeout(() => {
        contactForm.reset();
        contactForm.classList.remove('hidden');
        if (formSuccess) formSuccess.classList.add('hidden');
      }, 5000);
    });
  }
});
