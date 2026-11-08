import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft } from 'lucide-react';
import { sounds } from '../utils/sound';

export default function TerminalConsole() {
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: 'CADET NISHANT RAWAT // AIR_WING_OS v4.2 [1 CHD AIR SQN NCC]',
    },
    {
      type: 'system',
      text: 'AI/DS SUBROUTINE LOADED: Graphic Era Deemed University & DAV-10 CHD.',
    },
    {
      type: 'info',
      text: 'Type "help" to display available commands or click quick-run chips below.',
    },
  ]);
  const [inputVal, setInputVal] = useState('');
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const runCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    sounds.playHudClick();

    const newHistory = [...history, { type: 'user', text: `$ ${cmd}` }];

    switch (trimmed) {
      case 'help':
        newHistory.push({
          type: 'response',
          text: `AVAILABLE COMMANDS:
  • whoami / bio    : Overview of Nishant Rawat
  • education       : Graphic Era (MCA AI/DS) & DAV College-10 (BCA)
  • ncc             : 1 CHD AIR SQN NCC details & legacy
  • skills          : AI/ML, Data Science, Python, Three.js
  • projects        : Deployed repositories & architectures
  • socials         : GitHub, LinkedIn & Instagram links
  • boost           : Engage afterburner sound & telemetry
  • clear           : Clear console logs`,
        });
        break;

      case 'whoami':
      case 'bio':
        newHistory.push({
          type: 'response',
          text: `[CALLSIGN]  : Nishant Rawat
[STATUS]    : Master of Computer Applications (AI & Data Science)
[ALMA MATER]: Graphic Era Deemed to be University (MCA AI/DS)
              DAV College Sector 10 Chandigarh (BCA)
[AIR WING]  : 1 CHD AIR SQN NCC (1 Chandigarh Air Squadron)
[PASSIONS]  : Deep Learning, Computer Vision, Aviation, High-Altitude Trekking`,
        });
        break;

      case 'education':
        newHistory.push({
          type: 'response',
          text: `[1] MCA (AI & Data Science) - Graphic Era Deemed to be University
    Focus: Deep Learning, Transformers, Computer Vision, Big Data Architecture.
[2] BCA (Computer Applications) - DAV College Sector 10 Chandigarh
    Focus: Algorithms, C++, Database Management, Software Engineering.`,
        });
        break;

      case 'ncc':
        newHistory.push({
          type: 'response',
          text: `[SQUADRON] : 1 CHD AIR SQN NCC (1 Chandigarh Air Squadron NCC)
[WING]     : Air Wing, National Cadet Corps
[TRIBUTE]  : Training at DAV College Sector 10 under the shadow of Kargil War
             Hero Capt. Vikram Batra PVC (No. 94/10182 Cadet Vikram Batra).
[CREED]    : "Touch the Sky with Glory" & "Unity and Discipline"`,
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'response',
          text: `AI & ML       : PyTorch, YOLO, OpenCV, Transformers, Scikit-Learn
DATA SCIENCE  : Pandas, NumPy, EDA, Statistical Modeling, Seaborn
DEV & 3D      : Python, C++, SQL, React.js, Three.js, Linux/Bash, Git
AIR WING      : Airmanship, Flight Dynamics, Aeromodelling, Leadership`,
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'response',
          text: `1. NeuroAero     : Autonomous Aerial Object Tracking (YOLOv8 + PyTorch)
2. AeroTelemetry : 3D WebGL Flight Cockpit HUD (Three.js)
3. DataPulse     : Enterprise Predictive Analytics Engine (Scikit-Learn + Pandas)
4. OmniBrain     : Multimodal Semantic RAG Assistant (LangChain + Transformers)
Repo: https://github.com/monkgotdunk069-a11y`,
        });
        break;

      case 'socials':
        newHistory.push({
          type: 'response',
          text: `GitHub    : https://github.com/monkgotdunk069-a11y
LinkedIn  : https://www.linkedin.com/in/nishant-rawat-412796348
Instagram : https://www.instagram.com/nishant_singh_rawat04/`,
        });
        break;

      case 'boost':
        sounds.playThrust();
        newHistory.push({
          type: 'response',
          text: `[AFTERBURNER ENGAGED] Twin turbines spinning at 100% military power.
Velocity: Mach 3.8. G-Force: 6.2G. All systems nominal.`,
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case '':
        break;

      default:
        newHistory.push({
          type: 'error',
          text: `Command not recognized: "${trimmed}". Type "help" for command matrix.`,
        });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      runCommand(inputVal);
    }
  };

  return (
    <section id="terminal" className="relative py-20 px-4 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-cyan-300">
          <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
          <span>AIR WING CLI CONSOLE</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-display font-black text-white">
          INTERACTIVE TELEMETRY HUD
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm">
          Execute direct system queries to interrogate Cadet Nishant Rawat's dossier.
        </p>
      </div>

      {/* Terminal Window */}
      <div className="rounded-2xl border border-cyan-500/30 bg-[#060b18] shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
        {/* Terminal Title Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-950/90 border-b border-slate-800">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
            <span className="text-slate-400 text-xs ml-2">cadet@1-chd-air-sqn-ncc:~</span>
          </div>
          <div className="text-[10px] text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
            BASH // UTF-8
          </div>
        </div>

        {/* Quick Command Chips */}
        <div className="px-4 py-2.5 bg-slate-900/60 border-b border-slate-800/80 flex flex-wrap gap-2 items-center">
          <span className="text-[10px] text-slate-500 uppercase tracking-wider">Quick Commands:</span>
          {['whoami', 'education', 'ncc', 'skills', 'projects', 'socials', 'boost', 'clear'].map((chip) => (
            <button
              key={chip}
              onClick={() => runCommand(chip)}
              className="text-[11px] px-2.5 py-0.5 rounded bg-slate-800 hover:bg-cyan-500/20 text-cyan-300 border border-slate-700 hover:border-cyan-400/50 transition-all"
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Terminal Log Output */}
        <div className="p-4 sm:p-6 max-h-96 overflow-y-auto space-y-2 select-text">
          {history.map((item, idx) => (
            <div key={idx}>
              {item.type === 'system' && (
                <p className="text-cyan-400 font-bold">{item.text}</p>
              )}
              {item.type === 'info' && (
                <p className="text-slate-400">{item.text}</p>
              )}
              {item.type === 'user' && (
                <p className="text-yellow-300 font-bold">{item.text}</p>
              )}
              {item.type === 'response' && (
                <pre className="text-slate-200 whitespace-pre-wrap leading-relaxed">
                  {item.text}
                </pre>
              )}
              {item.type === 'error' && (
                <p className="text-red-400 font-semibold">{item.text}</p>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Prompt Input Line */}
        <div className="flex items-center px-4 py-3 bg-slate-950/80 border-t border-slate-800">
          <span className="text-cyan-400 font-bold mr-2">cadet@1-chd-air:~$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="type 'help', 'ncc', 'skills'..."
            className="flex-1 bg-transparent border-none outline-none text-white font-mono placeholder:text-slate-600"
          />
          <button
            onClick={() => runCommand(inputVal)}
            className="p-1.5 rounded bg-cyan-600 hover:bg-cyan-500 text-white transition-colors"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}

