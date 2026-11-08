import React, { useState } from 'react';
import { GraduationCap, BookOpen, Cpu, Brain, Award, Mountain, CheckCircle2, Terminal } from 'lucide-react';
import { sounds } from '../utils/sound';

export default function About() {
  const [activeTab, setActiveTab] = useState('mca');

  const tracks = {
    mca: {
      institution: 'Graphic Era Deemed to be University',
      degree: 'Master of Computer Applications (MCA)',
      specialization: 'Artificial Intelligence & Data Science (AI/DS)',
      location: 'Dehradun, Uttarakhand',
      period: 'Post-Graduation • Current',
      description:
        'Engaged in advanced research and practical implementations in deep neural networks, computer vision architectures, generative AI, and high-performance predictive analytics.',
      highlights: [
        'Advanced Deep Learning (CNNs, RNNs, Transformers, Attention Mechanisms)',
        'Machine Learning & Predictive Modeling (Supervised, Unsupervised, Ensemble)',
        'Computer Vision & Object Detection (YOLO, OpenCV, Image Segmentation)',
        'Natural Language Processing & Large Language Model fine-tuning',
        'Scalable Data Pipelines, Feature Engineering & Statistical Analysis',
        'Model Deployment, Optimization & Production Inference (Docker, APIs)',
      ],
      badge: 'MCA SPECIALIZATION',
      badgeColor: 'border-cyan-400 bg-cyan-950/80 text-cyan-300',
    },
    bca: {
      institution: 'DAV College Sector 10',
      degree: 'Bachelor of Computer Applications (BCA)',
      specialization: 'Computer Science & Software Systems',
      location: 'Chandigarh',
      period: 'Undergraduate Foundation',
      description:
        'Built an unshakeable software foundation in core computing theory, algorithm design, memory management, relational database architecture, and full-stack software development.',
      highlights: [
        'Data Structures & Algorithms (Trees, Graphs, Dynamic Programming, Complexity)',
        'Object-Oriented Programming & System Design (C++, Java, Python)',
        'Relational Database Management Systems (SQL, Schema Normalization, ACID)',
        'Operating System Architecture, Process Scheduling & Memory Virtualization',
        'Web Architecture & Networking Protocols (HTTP/S, TCP/IP, RESTful APIs)',
        'Software Engineering Life Cycle, Testing & Version Control (Git)',
      ],
      badge: 'UNDERGRADUATE ROOTS',
      badgeColor: 'border-purple-400 bg-purple-950/80 text-purple-300',
    },
    ncc: {
      institution: '1 Chandigarh Air Squadron NCC',
      degree: 'Air Wing Cadetship (1 CHD AIR SQN NCC)',
      specialization: 'Aviation Theory, Drill & Military Leadership',
      location: 'Chandigarh Air Base / Sector 10',
      period: 'Air Wing Training',
      description:
        'Trained under the Indian Air Force officers and instructors, mastering drill precision, airmanship principles, military decorum, high-stakes decision making, and team cohesion.',
      highlights: [
        'Principles of Flight, Aerodynamics & Aircraft Anatomy',
        'Air Navigation, Compass Calculations & Meteorological Interpretation',
        'Aeromodelling, Control-Line Gliders & Remote Control Flight Tuning',
        'Squadron Drill, Command Voice, Rifle Drill & Guard of Honor Protocol',
        'High-Pressure Crisis Management & Unshakeable Comradeship',
        'Living the IAF Creed: Nabhaḥ-spṛśaṁ Dīptam (Touch the Sky with Glory)',
      ],
      badge: 'AIR FORCE NCC',
      badgeColor: 'border-yellow-400 bg-yellow-950/80 text-yellow-300',
    },
    mountains: {
      institution: 'High Altitude Himalayan Expeditions',
      degree: 'Alpine Trekker & Summit Explorer',
      specialization: 'Endurance, High Altitude Grit & Environmental Focus',
      location: 'Dhauladhar Ranges • Triund • Himachal Pradesh',
      period: 'Lifelong Pursuit',
      description:
        'The mountains are where theory meets raw nature. Navigating steep ascents, sudden weather shifts, and thin air has forged a high-endurance problem-solving philosophy.',
      highlights: [
        'Ascents across rigorous Himalayan trails and rocky high-altitude ridges',
        'Mental fortitude and acute decision making under physical exhaustion',
        'Altitude acclimatization, survival gear readiness & orienteering',
        'Deep respect for nature, serenity, and unwavering focus under stress',
        'Translating alpine grit into debugging complex models and system crashes',
      ],
      badge: 'HIGH ALTITUDE',
      badgeColor: 'border-emerald-400 bg-emerald-950/80 text-emerald-300',
    },
  };

  const current = tracks[activeTab];

  return (
    <section id="about" className="relative py-20 px-4 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-cyan-300">
          <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
          <span>DUAL-CORE ARCHITECTURE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-black text-white">
          THE ODYSSEY
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          From the algorithmic depths of <span className="text-cyan-300 font-semibold">Graphic Era & DAV-10</span> to the skies with <span className="text-yellow-400 font-semibold">1 CHD AIR SQN NCC</span> and the summits of the Himalayas.
        </p>
      </div>

      {/* Interactive Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
        <button
          onClick={() => {
            sounds.playHudClick();
            setActiveTab('mca');
          }}
          className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-semibold transition-all duration-200 border ${
            activeTab === 'mca'
              ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-lg shadow-cyan-500/20'
              : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
          }`}
        >
          <Brain className="w-4 h-4 text-cyan-400" />
          <span>MCA AI & DS (Graphic Era)</span>
        </button>

        <button
          onClick={() => {
            sounds.playHudClick();
            setActiveTab('bca');
          }}
          className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-semibold transition-all duration-200 border ${
            activeTab === 'bca'
              ? 'bg-purple-500/20 border-purple-400 text-purple-300 shadow-lg shadow-purple-500/20'
              : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
          }`}
        >
          <GraduationCap className="w-4 h-4 text-purple-400" />
          <span>BCA (DAV-10 CHD)</span>
        </button>

        <button
          onClick={() => {
            sounds.playHudClick();
            setActiveTab('ncc');
          }}
          className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-semibold transition-all duration-200 border ${
            activeTab === 'ncc'
              ? 'bg-yellow-500/20 border-yellow-400 text-yellow-300 shadow-lg shadow-yellow-500/20'
              : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
          }`}
        >
          <Award className="w-4 h-4 text-yellow-400" />
          <span>1 CHD AIR SQN NCC</span>
        </button>

        <button
          onClick={() => {
            sounds.playHudClick();
            setActiveTab('mountains');
          }}
          className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-semibold transition-all duration-200 border ${
            activeTab === 'mountains'
              ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-lg shadow-emerald-500/20'
              : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
          }`}
        >
          <Mountain className="w-4 h-4 text-emerald-400" />
          <span>Himalayan Expeditions</span>
        </button>
      </div>

      {/* Tab Content Display Card */}
      <div className="glass-panel p-6 sm:p-10 rounded-2xl border border-cyan-500/25 relative overflow-hidden">
        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded border ${current.badgeColor}`}>
                {current.badge}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {current.period}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
              {current.degree}
            </h3>
            <p className="text-sm font-mono text-cyan-300 mt-0.5">
              {current.institution} • {current.location}
            </p>
          </div>

          <div className="px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-700 text-right">
            <span className="text-[10px] font-mono text-slate-400 block">FOCUS DOMAIN</span>
            <span className="text-xs font-mono font-bold text-cyan-400">
              {current.specialization}
            </span>
          </div>
        </div>

        {/* Narrative Description */}
        <p className="mt-6 text-slate-300 text-sm sm:text-base leading-relaxed">
          {current.description}
        </p>

        {/* Key Competencies / Modules Grid */}
        <div className="mt-8">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            CORE CAPABILITIES & CURRICULUM
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {current.highlights.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/30 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-slate-300 leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

