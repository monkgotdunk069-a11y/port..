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
  // 4. INTERACTIVE RECRUITER TERMINAL CONSOLE
  // ==========================================
  const termContainer = document.getElementById('terminal-container');
  const termForm = document.getElementById('terminal-form');
  const termInput = document.getElementById('terminal-input');
  const termOutput = document.getElementById('terminal-output');

  // Command History Navigation
  const commandHistory = [];
  let historyIndex = -1;

  // Supported commands for Tab completion
  const knownCommands = [
    'help', 'summary', 'projects', 'skills', 'education', 
    'ncc', 'hobbies', 'quote', 'whoami', 'contact', 
    'ls', 'clear'
  ];

  const escapeHtml = (str) => {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  };

  const initialWelcomeMsg = `
    <div class="text-sky-400 font-semibold flex items-center gap-2">
      <span>✈️</span>
      <span>Nishant Rawat — AI & Data Science Candidate • 1 CHD AIR SQN NCC</span>
    </div>
    <p class="text-slate-400 text-xs">
      Type <span class="text-sky-300 font-bold bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800">help</span> to view all commands, use <span class="text-amber-300 font-bold">↑</span> / <span class="text-amber-300 font-bold">↓</span> for command history, or click the quick action chips above.
    </p>
  `;

  // Focus input when clicking anywhere in terminal
  if (termContainer && termInput) {
    termContainer.addEventListener('click', (e) => {
      // Don't focus if user selected text
      if (window.getSelection().toString().length === 0) {
        termInput.focus();
      }
    });
  }

  // Window traffic dots
  const closeBtn = document.getElementById('term-btn-close');
  const minBtn = document.getElementById('term-btn-min');
  const maxBtn = document.getElementById('term-btn-max');

  if (closeBtn && termOutput) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      termOutput.innerHTML = '';
      if (termInput) termInput.focus();
    });
  }
  if (minBtn && termOutput) {
    minBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      termOutput.innerHTML = initialWelcomeMsg;
      if (termInput) termInput.focus();
    });
  }
  if (maxBtn && termOutput) {
    maxBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      termOutput.scrollTop = termOutput.scrollHeight;
      if (termInput) termInput.focus();
    });
  }

  const executeCommand = (rawCmd) => {
    if (!termOutput) return;
    const cmd = (rawCmd || '').trim();
    if (!cmd) return;

    // Track in history
    commandHistory.push(cmd);
    historyIndex = commandHistory.length;

    // Echo input prompt
    const userLine = document.createElement('div');
    userLine.className = 'flex items-center gap-2 text-slate-300 font-mono text-xs pt-1';
    userLine.innerHTML = `<span class="text-sky-400 font-bold font-mono">nishant@geu:~$</span> <span class="text-white font-semibold">${escapeHtml(cmd)}</span>`;
    termOutput.appendChild(userLine);

    const parts = cmd.toLowerCase().split(/\s+/);
    const mainCmd = parts[0];
    const arg = parts.slice(1).join(' ');

    let respHtml = '';

    switch (mainCmd) {
      case 'help':
      case '?':
      case 'commands':
      case 'man':
        respHtml = `<div class="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1.5 text-xs text-slate-300">
          <div class="text-sky-400 font-bold border-b border-slate-800 pb-1 flex items-center justify-between">
            <span>AVAILABLE DOSSIER COMMANDS</span>
            <span class="text-[10px] text-slate-500 font-normal">IAF BASH SHELL</span>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 font-mono text-xs pt-1">
            <div><span class="text-sky-300 font-bold">summary</span>   : Official Verified Career Dossier</div>
            <div><span class="text-sky-300 font-bold">whoami</span>    : Candidate Identity & Background</div>
            <div><span class="text-sky-300 font-bold">projects</span>  : Major AI & ML Deployed Repos</div>
            <div><span class="text-sky-300 font-bold">skills</span>    : PyTorch, ML, Vision & SDE Stack</div>
            <div><span class="text-sky-300 font-bold">education</span> : MCA (Graphic Era), BCA 72%, KV</div>
            <div><span class="text-sky-300 font-bold">ncc</span>       : 1 CHD AIR SQN NCC ('A' Grade)</div>
            <div><span class="text-sky-300 font-bold">hobbies</span>   : Trekking, Camping & Photography</div>
            <div><span class="text-sky-300 font-bold">quote</span>     : Nimsdai Purja 14 Peaks Creed</div>
            <div><span class="text-sky-300 font-bold">contact</span>   : Email, GitHub & LinkedIn Comms</div>
            <div><span class="text-sky-300 font-bold">ls</span>        : List available virtual files</div>
            <div><span class="text-sky-300 font-bold">cat &lt;file&gt;</span> : Read a virtual file</div>
            <div><span class="text-sky-300 font-bold">clear</span>     : Clear terminal console screen</div>
          </div>
        </div>`;
        break;

      case 'summary':
      case 'dossier':
      case 'profile':
        respHtml = `<pre class="text-sky-300 font-mono text-xs leading-relaxed whitespace-pre-wrap break-words bg-slate-900/60 p-3 rounded border border-sky-900/40">
[PROFESSIONAL SUMMARY & TARGET ROLES]
Target Roles : Software Development Engineer (SDE) | Machine Learning Engineer | Data Scientist
Summary      : Aspiring SDE and AI/ML Specialist with hands-on expertise building production-ready
               software architectures, deep neural network frameworks (InsightFace SCRFD + PyTorch),
               and predictive intelligence pipelines (XGBoost, Scikit-Learn).
Academic Base: MCA (AI & Data Science) • Graphic Era Deemed to be University, Dehradun
               BCA (72% Aggregate) • DAV College Sector 10 Chandigarh (Panjab University)
Cadetship    : 1 CHD AIR SQN NCC • 'A' Grade in NCC 'C' Certificate (Highest Distinction)</pre>`;
        break;

      case 'quote':
      case 'motto':
      case 'creed':
      case 'nimsdai':
        respHtml = `<pre class="text-amber-300 font-mono text-xs leading-relaxed whitespace-pre-wrap break-words bg-slate-900/60 p-3 rounded border border-amber-900/40">
“Giving up is not in the blood, sir. It's not in the blood.”
— Nimsdai Purja, MBE (14 Peaks: Nothing Is Impossible)
Mountaineering Legend & British Special Forces Veteran</pre>`;
        break;

      case 'hobbies':
      case 'passions':
      case 'trekking':
      case 'camping':
      case 'photography':
        respHtml = `<pre class="text-emerald-300 font-mono text-xs leading-relaxed whitespace-pre-wrap break-words bg-slate-900/60 p-3 rounded border border-emerald-900/40">
[FIELD EXPEDITIONS & HOBBIES]
• Trekking    : Dhauladhar Range, Triund alpine ridge ascents, high-altitude endurance
• Camping     : Wilderness alpine bivouacs, sub-zero night outposts under clear Himalayan skies
• Photography : Landscape & dawn blue hour framing at Sukhna Lake, dynamic weather storytelling</pre>`;
        break;

      case 'whoami':
      case 'bio':
      case 'about':
      case 'identity':
        respHtml = `<pre class="text-slate-200 font-mono text-xs leading-relaxed whitespace-pre-wrap break-words bg-slate-900/60 p-3 rounded border border-slate-800">
Name       : Nishant Rawat
Current    : MCA Candidate (Artificial Intelligence & Data Science)
University : Graphic Era Deemed to be University, Dehradun (2024 - Present)
Graduation : BCA, DAV College Sector 10 Chandigarh (Panjab University) — 72% Aggregate
Schooling  : Kendriya Vidyalaya OCF Sector 29-B, Chandigarh
             • Class 12 Science: 74% | Class 10: 79%
Air Wing   : 1 CHD AIR SQN NCC — 'C' Certificate with 'A' Grade Distinction
Target     : SDE, Machine Learning Engineering, Computer Vision, Predictive Data Science</pre>`;
        break;

      case 'education':
      case 'academics':
      case 'degrees':
      case 'college':
      case 'school':
        respHtml = `<pre class="text-slate-200 font-mono text-xs leading-relaxed whitespace-pre-wrap break-words bg-slate-900/60 p-3 rounded border border-slate-800">
[1] Graphic Era Deemed to be University, Dehradun (2024 – Present)
    • Degree: Master of Computer Applications (MCA) in AI & Data Science
[2] DAV College Sector 10 Chandigarh • Panjab University (PU)
    • Degree: Bachelor of Computer Applications (BCA) — First Class 72% Aggregate
[3] Kendriya Vidyalaya OCF Sector 29-B, Chandigarh (https://chandigarhocf.kvs.ac.in/en/)
    • Senior Secondary (Class 12 Science Stream): 74%
    • Secondary School (Class 10 Examination)   : 79%
[4] National Cadet Corps (1 CHD AIR SQN NCC)
    • Awarded 'A' Grade in NCC 'C' Certificate (Highest Distinction)</pre>`;
        break;

      case 'projects':
      case 'work':
      case 'repos':
      case 'github':
        respHtml = `<pre class="text-slate-200 font-mono text-xs leading-relaxed whitespace-pre-wrap break-words bg-slate-900/60 p-3 rounded border border-slate-800">
[MAJOR DEPLOYED PROJECTS]
1. DeepDetect AI        : Multi-domain spatial-temporal deepfake forensics (PyTorch + InsightFace)
2. CrimeWatch Platform  : NCRB predictive crime analysis & geospatial heatmapping (XGBoost)
3. Employee Attrition   : End-to-end ML retention predictor deployed on Render
4. MIT-BIH Arrhythmia   : Cardiac ECG classification using Deep CNN
5. Airbnb Analytics     : India hospitality dataset exploratory analytics & Tableau BI
6. Zepto Analytics      : Quick-commerce catalog & pricing intelligence pipeline
GitHub Repository: https://github.com/monkgotdunk069-a11y</pre>`;
        break;

      case 'ncc':
      case 'airforce':
      case 'iaf':
      case 'cadet':
      case 'wings':
        respHtml = `<pre class="text-sky-300 font-mono text-xs leading-relaxed whitespace-pre-wrap break-words bg-slate-900/60 p-3 rounded border border-sky-900/40">
[INDIAN AIR FORCE AIR WING CADETSHIP]
Squadron    : 1 Chandigarh Air Squadron NCC (1 CHD AIR SQN NCC)
Certificate : NCC 'C' Certificate awarded with prestigious 'A' Grade
Heritage    : Trained at DAV College Sector 10, the alma mater of Kargil War legend
              Capt. Vikram Batra, PVC (Param Vir Chakra).
Motto       : Unity and Discipline • "Touch the Sky with Glory" (Nabha Sparsham Deeptam)</pre>`;
        break;

      case 'skills':
      case 'stack':
      case 'tech':
      case 'arsenal':
        respHtml = `<pre class="text-slate-200 font-mono text-xs leading-relaxed whitespace-pre-wrap break-words bg-slate-900/60 p-3 rounded border border-slate-800">
AI & ML    : PyTorch, Scikit-Learn, XGBoost, Random Forest, CNNs, Transformers
Computer Vision: InsightFace SCRFD, OpenCV, Spatial-Temporal Deepfake Forensics
Languages  : Python, C++, SQL, JavaScript
Full-Stack : Flask, FastAPI, TailwindCSS, React, RESTful Architecture
Data & BI  : Pandas, NumPy, Tableau, Feature Engineering, EDA
Platforms  : Linux, Docker, Git/GitHub, Cloud Deployment</pre>`;
        break;

      case 'contact':
      case 'email':
      case 'socials':
      case 'reach':
        respHtml = `<pre class="text-sky-300 font-mono text-xs leading-relaxed whitespace-pre-wrap break-words bg-slate-900/60 p-3 rounded border border-sky-900/40">
Email    : monkgotdunk069@gmail.com
GitHub   : https://github.com/monkgotdunk069-a11y
LinkedIn : https://www.linkedin.com/in/nishant-rawat-412796348
Location : Dehradun, Uttarakhand / Chandigarh, India</pre>`;
        break;

      case 'ls':
      case 'dir':
        respHtml = `<pre class="text-slate-300 font-mono text-xs leading-relaxed whitespace-pre-wrap break-words">
total 8
-rw-r--r--  1 nishant  iaf   1024  summary.txt
-rw-r--r--  1 nishant  iaf   2048  education.md
-rw-r--r--  1 nishant  iaf   4096  projects.json
-rw-r--r--  1 nishant  iaf   1536  skills.yml
-rw-r--r--  1 nishant  iaf    512  ncc_air_wing.dossier
-rw-r--r--  1 nishant  iaf    256  quote.txt
drwxr-xr-x  1 nishant  iaf   4096  hobbies/
-rwxr-xr-x  1 nishant  iaf    128  contact.sh
(Type "cat <file>" or command names directly to view)</pre>`;
        break;

      case 'cat':
        if (!arg) {
          respHtml = `<p class="text-amber-400 font-mono text-xs">Usage: cat &lt;filename&gt; (e.g. cat summary.txt, cat quote.txt)</p>`;
        } else {
          const file = arg.replace(/\.(txt|md|json|yml|dossier|sh)$/, '');
          if (['summary', 'education', 'projects', 'skills', 'ncc', 'quote', 'hobbies', 'contact'].includes(file)) {
            executeCommand(file);
            return;
          } else {
            respHtml = `<p class="text-rose-400 font-mono text-xs">cat: ${escapeHtml(arg)}: No such file or directory</p>`;
          }
        }
        break;

      case 'date':
      case 'time':
        respHtml = `<p class="text-slate-300 font-mono text-xs">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>`;
        break;

      case 'history':
        respHtml = `<div class="font-mono text-xs text-slate-300 space-y-0.5">
          ${commandHistory.map((c, i) => `<div>${i + 1}  ${escapeHtml(c)}</div>`).join('')}
        </div>`;
        break;

      case 'sudo':
        respHtml = `<p class="text-emerald-400 font-mono text-xs">Access granted. Cadet Nishant Rawat is root. Mission protocol engaged. ✈️</p>`;
        break;

      case 'clear':
      case 'cls':
      case 'reset':
        termOutput.innerHTML = '';
        if (termInput) termInput.value = '';
        return;

      case 'exit':
      case 'quit':
        respHtml = `<p class="text-slate-400 font-mono text-xs">Terminal session stays active. Type "clear" to reset screen.</p>`;
        break;

      default:
        respHtml = `<p class="text-rose-400 font-mono text-xs">Command not recognized: "${escapeHtml(cmd)}". Type <span class="text-sky-300 font-bold underline cursor-pointer" onclick="document.getElementById('terminal-input').value='help';document.getElementById('terminal-form').requestSubmit();">help</span> for a list of valid commands.</p>`;
        break;
    }

    if (respHtml) {
      const respDiv = document.createElement('div');
      respDiv.className = 'py-0.5';
      respDiv.innerHTML = respHtml;
      termOutput.appendChild(respDiv);
    }

    termOutput.scrollTop = termOutput.scrollHeight;
    if (termInput) {
      termInput.value = '';
    }
  };

  // Form submit (Handles Enter on desktop & mobile Go/Submit)
  if (termForm && termInput) {
    termForm.addEventListener('submit', (e) => {
      e.preventDefault();
      executeCommand(termInput.value);
    });

    // Arrow keys & Tab key handling
    termInput.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (commandHistory.length > 0 && historyIndex > 0) {
          historyIndex--;
          termInput.value = commandHistory[historyIndex] || '';
        } else if (commandHistory.length > 0 && historyIndex === -1) {
          historyIndex = commandHistory.length - 1;
          termInput.value = commandHistory[historyIndex] || '';
        }
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (historyIndex < commandHistory.length - 1 && historyIndex !== -1) {
          historyIndex++;
          termInput.value = commandHistory[historyIndex] || '';
        } else {
          historyIndex = -1;
          termInput.value = '';
        }
      } else if (e.key === 'Tab') {
        e.preventDefault();
        const current = termInput.value.trim().toLowerCase();
        if (current) {
          const match = knownCommands.find((c) => c.startsWith(current));
          if (match) {
            termInput.value = match;
          }
        }
      }
    });
  }

  // Quick Action Chips Click Handlers
  document.querySelectorAll('.term-chip-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const cmd = btn.dataset.cmd;
      executeCommand(cmd);
      if (termInput) termInput.focus();
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
