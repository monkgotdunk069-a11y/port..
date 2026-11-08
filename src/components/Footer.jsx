import React from 'react';
import { Plane, ArrowUp, Github, Linkedin, Instagram, Heart, Shield } from 'lucide-react';
import { sounds } from '../utils/sound';

export default function Footer() {
  const scrollToTop = () => {
    sounds.playThrust();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 px-4 overflow-hidden text-xs font-mono">
      {/* Top ambient glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

      <div className="max-w-7xl mx-auto space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-cyan-600 flex items-center justify-center text-white border border-cyan-400">
                <Plane className="w-4 h-4" />
              </div>
              <span className="font-display font-black text-lg text-white tracking-wider">
                NISHANT RAWAT
              </span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Master of Computer Applications (AI/DS) from Graphic Era Deemed to be University • BCA from DAV College Sector 10 Chandigarh • Cadet, 1 CHD AIR SQN NCC.
            </p>
            <div className="text-[11px] text-cyan-400 flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-yellow-400" />
              <span>1 CHD AIR SQN NCC • Unity & Discipline</span>
            </div>
          </div>

          {/* Telemetry Coords */}
          <div className="md:col-span-4 bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-1.5">
            <span className="text-[10px] text-slate-500 uppercase tracking-widest block">
              BASE TELEMETRY
            </span>
            <div className="flex justify-between text-slate-300">
              <span className="text-slate-400">CHANDIGARH (CHD):</span>
              <span className="text-cyan-400 font-bold">30.7333° N, 76.7794° E</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span className="text-slate-400">DEHRADUN (GEU):</span>
              <span className="text-purple-400 font-bold">30.3165° N, 78.0322° E</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span className="text-slate-400">RADAR STATUS:</span>
              <span className="text-emerald-400 font-bold">ACTIVE & SCANNING</span>
            </div>
          </div>

          {/* Socials & Back to Top */}
          <div className="md:col-span-3 flex flex-col md:items-end justify-between space-y-4">
            <div className="flex items-center space-x-3">
              <a
                href="https://github.com/monkgotdunk069-a11y"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sounds.playHudClick()}
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-cyan-400 text-slate-400 hover:text-white transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/nishant-rawat-412796348"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sounds.playHudClick()}
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-blue-400 text-slate-400 hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="https://www.instagram.com/nishant_singh_rawat04/?__d=11"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sounds.playHudClick()}
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-pink-400 text-slate-400 hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-cyan-500/20 border border-slate-800 hover:border-cyan-400/50 text-cyan-400 transition-all active:scale-95"
            >
              <ArrowUp className="w-4 h-4" />
              <span>RETURN TO APEX</span>
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-slate-500 text-[11px] gap-3">
          <p>
            © {new Date().getFullYear()} Nishant Rawat. Built with Three.js, React & Tailwind CSS.
          </p>
          <p className="flex items-center gap-1.5 text-cyan-400/80">
            <span>IAF Motto: नभः स्पृशं दीप्तम्</span>
            <span>•</span>
            <span>Touch the Sky with Glory</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

