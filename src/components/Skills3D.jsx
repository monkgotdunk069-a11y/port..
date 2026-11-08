import React, { useState } from 'react';
import { Cpu, Brain, Database, Code, Shield, Terminal, Zap, Star } from 'lucide-react';
import { sounds } from '../utils/sound';

export default function Skills3D() {
  const [activeCategory, setActiveCategory] = useState('ai');

  const categories = [
    { id: 'ai', name: 'AI & Deep Learning', icon: Brain, color: 'text-cyan-400' },
    { id: 'ds', name: 'Data Science & Analytics', icon: Database, color: 'text-purple-400' },
    { id: 'dev', name: 'Programming & Web3D', icon: Code, color: 'text-emerald-400' },
    { id: 'aero', name: 'Air Wing & Leadership', icon: Shield, color: 'text-yellow-400' },
  ];

  const skillData = {
    ai: [
      { name: 'PyTorch & Neural Networks', level: 92, tag: 'Deep Learning', desc: 'Custom CNN, RNN architectures & training pipelines' },
      { name: 'Computer Vision & YOLO', level: 90, tag: 'Vision AI', desc: 'Object detection, classification, OpenCV tracking' },
      { name: 'Natural Language Processing', level: 88, tag: 'NLP & LLMs', desc: 'Transformers, embeddings, sentiment & text analysis' },
      { name: 'Machine Learning Algorithms', level: 94, tag: 'Scikit-Learn', desc: 'Ensemble methods, regression, clustering, SVMs' },
      { name: 'Model Optimization & Inference', level: 85, tag: 'Deployment', desc: 'Quantization, pipeline serialization, REST endpoints' },
    ],
    ds: [
      { name: 'Pandas & NumPy Vectorization', level: 95, tag: 'Data Wrangling', desc: 'High-throughput data cleaning & array processing' },
      { name: 'Exploratory Data Analysis (EDA)', level: 92, tag: 'Analytics', desc: 'Pattern discovery, hypothesis testing, insights' },
      { name: 'Statistical Modeling & Probability', level: 88, tag: 'Mathematics', desc: 'Bayesian inference, distributions, regression analysis' },
      { name: 'Data Visualization & Storytelling', level: 90, tag: 'Seaborn / Plotly', desc: 'Multi-dimensional plots, dashboards, visual reports' },
      { name: 'Feature Engineering & ETL', level: 87, tag: 'Pipelines', desc: 'Outlier detection, scaling, encoding, missing imputation' },
    ],
    dev: [
      { name: 'Python (OOP & Functional)', level: 95, tag: 'Core Language', desc: 'Async IO, typing, decorators, computational libraries' },
      { name: 'C++ & Data Structures', level: 88, tag: 'System Computing', desc: 'DAV-10 foundation: algorithms, memory management' },
      { name: 'SQL & Database Design', level: 90, tag: 'Relational DB', desc: 'Complex joins, indexing, normalization, transactions' },
      { name: 'JavaScript / React.js / Three.js', level: 85, tag: 'Frontend 3D', desc: 'Modern reactive UI, interactive WebGL canvases' },
      { name: 'Linux / Bash & Git / GitHub', level: 90, tag: 'DevOps & Tools', desc: 'CLI proficiency, versioning, automated workflows' },
    ],
    aero: [
      { name: '1 CHD AIR SQN NCC Discipline', level: 98, tag: 'Air Wing Honor', desc: 'Rigorous parade drills, punctuality & unwavering focus' },
      { name: 'Principles of Flight & Aerodynamics', level: 90, tag: 'Aviation Science', desc: 'Lift, drag, thrust, airfoil design & flight mechanics' },
      { name: 'Aeromodelling & UAV Intuition', level: 86, tag: 'Flight Hardware', desc: 'Fuselage balance, RC controls, flight test logging' },
      { name: 'Tactical Team Leadership', level: 94, tag: 'Cadet Command', desc: 'Coordinating squads, clear communication in stress' },
      { name: 'High Altitude Endurance & Grit', level: 96, tag: 'Alpine Resilience', desc: 'Mental toughness forged in high Himalayan ridges' },
    ],
  };

  return (
    <section id="skills" className="relative py-20 px-4 max-w-7xl mx-auto">
      {/* Background radial accent */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-cyan-300">
          <Zap className="w-3.5 h-3.5 text-cyan-400" />
          <span>TECHNICAL & SQUADRON ARSENAL</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-black text-white">
          SKILLS & CAPABILITIES
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Engineering intelligent models with code, sharpened by military precision and aeronautical discipline.
        </p>
      </div>

      {/* Category Selection Tabs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto mb-12">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => {
                sounds.playHudClick();
                setActiveCategory(cat.id);
              }}
              className={`p-4 rounded-xl border flex flex-col items-center text-center transition-all duration-200 group ${
                isActive
                  ? 'bg-slate-900 border-cyan-400 shadow-lg shadow-cyan-500/20 scale-102'
                  : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/70'
              }`}
            >
              <div className={`p-2.5 rounded-lg mb-2 transition-transform group-hover:scale-110 ${isActive ? 'bg-cyan-500/20' : 'bg-slate-800'}`}>
                <Icon className={`w-5 h-5 ${cat.color}`} />
              </div>
              <span className={`text-xs font-mono font-bold ${isActive ? 'text-white' : 'text-slate-300'}`}>
                {cat.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Skills Proficiency Display */}
      <div className="glass-panel p-6 sm:p-10 rounded-2xl border border-cyan-500/20 max-w-5xl mx-auto">
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
            <h3 className="text-xl font-display font-bold text-white tracking-wide">
              {categories.find((c) => c.id === activeCategory)?.name}
            </h3>
          </div>
          <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-3 py-1 rounded">
            MATRIX: OPTIMIZED
          </span>
        </div>

        <div className="space-y-6">
          {skillData[activeCategory].map((skill, index) => (
            <div key={index} className="space-y-2 group">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div className="flex items-center gap-2.5">
                  <Star className="w-4 h-4 text-cyan-400 flex-shrink-0 group-hover:rotate-45 transition-transform" />
                  <span className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    {skill.tag}
                  </span>
                </div>
                <div className="text-right flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-cyan-400">
                    {skill.level}%
                  </span>
                </div>
              </div>

              {/* Animated Progress Bar */}
              <div className="w-full h-2.5 rounded-full bg-slate-900 border border-slate-800 overflow-hidden p-0.5">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 transition-all duration-1000 relative group-hover:brightness-125"
                  style={{ width: `${skill.level}%` }}
                >
                  <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/80 rounded-full animate-pulse" />
                </div>
              </div>

              <p className="text-xs text-slate-400 font-mono pl-6">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

