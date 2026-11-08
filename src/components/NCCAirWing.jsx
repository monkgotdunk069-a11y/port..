import React, { useState } from 'react';
import { Plane, Award, Compass, Wind, Radio, Shield, Target, ChevronRight } from 'lucide-react';
import { sounds } from '../utils/sound';

export default function NCCAirWing() {
  const [radarActive, setRadarActive] = useState(false);

  const pillars = [
    {
      title: 'Airmanship & Principles of Flight',
      desc: 'Study of aerodynamics, aircraft instruments, meteorology, air navigation, and flight control dynamics.',
      icon: Plane,
      metric: 'AERODYNAMICS & SIMULATION',
    },
    {
      title: 'Military Discipline & Leadership',
      desc: 'Command drills, parade precision, obstacle courses, team coordination under pressure, and officer-like qualities.',
      icon: Shield,
      metric: 'COMMAND & CONTROL',
    },
    {
      title: 'Aeromodelling & Drone Dynamics',
      desc: 'Hands-on construction and flight calibration of control-line and RC aeromodels, fostering hardware and UAV intuition.',
      icon: Target,
      metric: 'UAV & AERO ARCHITECTURE',
    },
    {
      title: 'National Cadet Corps Lineage',
      desc: 'Walking the hallowed corridors of 1 CHD Air Sqn NCC at DAV College Sec-10, where legends like Capt. Vikram Batra PVC trained.',
      icon: Award,
      metric: '1 CHD AIR SQN NCC',
    },
  ];

  const handleRadarSweep = () => {
    sounds.playRadarBeep();
    setRadarActive(true);
    setTimeout(() => setRadarActive(false), 2000);
  };

  return (
    <section id="ncc" className="relative py-20 px-4 max-w-7xl mx-auto overflow-hidden">
      {/* Background cyber aviation grid */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono tracking-widest uppercase">
          <Plane className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span>Aviation Honor & Discipline</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
          1 CHD AIR SQN NCC
        </h2>
        <p className="text-cyan-400 font-mono text-sm sm:text-base">
          1 CHANDIGARH AIR SQUADRON NCC • AIR WING
        </p>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          The sky is not the limit—it is the training ground. Imbibing the Indian Air Force ethos: <em className="text-cyan-200">"Touch the Sky with Glory"</em> (Nabhaḥ-spṛśaṁ Dīptam) and the immortal NCC creed: <strong className="text-white">"Unity and Discipline"</strong>.
        </p>
      </div>

      {/* Main Feature: The Heroic Legacy Card & Photo */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
        {/* Photo with Captain Vikram Batra PVC tribute */}
        <div className="lg:col-span-6 relative group">
          <div className="relative rounded-2xl overflow-hidden border-2 border-cyan-500/40 shadow-2xl shadow-cyan-950/60 bg-slate-950">
            <img
              src="/images/nishant-ncc.jpg"
              alt="Nishant Rawat in 1 CHD AIR SQN NCC Blazer standing next to Captain Vikram Batra PVC"
              className="w-full h-[520px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />

            {/* Gradient Darkening for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

            {/* HUD Callout Plaque */}
            <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-md p-4 rounded-xl border border-cyan-500/30">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-mono text-cyan-400 font-bold flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-yellow-400" />
                  LEGACY OF VALOR & DUTY
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-yellow-500/20 text-yellow-300 border border-yellow-500/30">
                  DAV-10 & 1 CHD AIR SQN
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-snug">
                Cadet Nishant standing proudly beside the portrait of Kargil War Hero <strong className="text-white font-semibold">Capt. Vikram Batra, PVC</strong> (No. 94/10182 Cadet Vikram Batra, 1 CHD Air Sqn NCC). A legacy that instills fearlessness and precision into engineering and life.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Technical Airmanship Pillars */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
              <Radio className="w-5 h-5 text-cyan-400" />
              SQUADRON COMPETENCIES
            </h3>
            <button
              onClick={handleRadarSweep}
              className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-500/30 px-3 py-1 rounded-md transition-all active:scale-95"
            >
              <Compass className={`w-3.5 h-3.5 ${radarActive ? 'animate-spin' : ''}`} />
              <span>{radarActive ? 'PINGING RADAR...' : 'PING RADAR'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={i}
                  className="glass-panel p-5 rounded-xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:text-cyan-300 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 group-hover:text-cyan-400 transition-colors">
                      0{i + 1} // WING
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors mb-1.5">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed mb-3">
                    {pillar.desc}
                  </p>
                  <div className="text-[10px] font-mono font-bold text-cyan-400/80 bg-slate-900/80 px-2 py-1 rounded border border-slate-800">
                    {pillar.metric}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Squadron Motto & Core Creed */}
          <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-cyan-950/40 via-blue-950/40 to-slate-900/60 border border-cyan-500/30 flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-[10px] font-mono text-cyan-400 block tracking-wider">
                INDIAN AIR FORCE MOTTO
              </span>
              <p className="text-sm font-display font-bold text-white">
                नभः स्पृशं दीप्तम् • Touch the Sky with Glory
              </p>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-mono text-yellow-400 block tracking-wider">
                NCC MOTTO
              </span>
              <p className="text-sm font-display font-bold text-white">
                Unity & Discipline
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

