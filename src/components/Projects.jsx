import React, { useState } from 'react';
import { Github, ExternalLink, Code2, Cpu, Eye, Database, Plane, Compass, Sparkles, Layers } from 'lucide-react';
import { sounds } from '../utils/sound';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const projectList = [
    {
      title: 'NeuroAero: Aerial Object Tracking & UAV Vision',
      category: 'ai',
      badge: 'FLAGSHIP AI/VISION',
      desc: 'Real-time high-speed aerial tracking and flight trajectory prediction utilizing YOLOv8 and DeepSORT. Designed for UAV aerial detection with low-latency inference on video streams.',
      tags: ['YOLOv8', 'PyTorch', 'OpenCV', 'DeepSORT', 'Python'],
      icon: Eye,
      github: 'https://github.com/monkgotdunk069-a11y',
      metrics: '60 FPS • 94.2% mAP',
      color: 'from-cyan-500/20 to-blue-500/10 border-cyan-500/30',
    },
    {
      title: 'AeroTelemetry 3D: Air Wing Flight Cockpit HUD',
      category: 'aero',
      badge: '1 CHD AIR SQN TRIBUTE',
      desc: 'Interactive 3D aerospace cockpit simulation with pitch/yaw/roll gyro responsiveness, radar sweeps, artificial horizon, and procedural sonic boom sound effects.',
      tags: ['Three.js', 'WebGL', 'React.js', 'Tailwind', 'Web Audio'],
      icon: Plane,
      github: 'https://github.com/monkgotdunk069-a11y',
      metrics: 'WebGL 3D • Realtime Audio',
      color: 'from-yellow-500/20 to-amber-500/10 border-yellow-500/30',
    },
    {
      title: 'DataPulse: Predictive Analytics & Anomaly Detection',
      category: 'ds',
      badge: 'BIG DATA & ML',
      desc: 'End-to-end data science pipeline with automated feature engineering, outlier detection, and predictive regression models for high-dimensional time-series data.',
      tags: ['Pandas', 'NumPy', 'Scikit-Learn', 'FastAPI', 'Seaborn'],
      icon: Database,
      github: 'https://github.com/monkgotdunk069-a11y',
      metrics: 'Automated ETL • Multi-model Benchmark',
      color: 'from-purple-500/20 to-indigo-500/10 border-purple-500/30',
    },
    {
      title: 'OmniBrain: Multimodal Semantic RAG Assistant',
      category: 'ai',
      badge: 'GENERATIVE AI',
      desc: 'Context-aware question answering and semantic document search assistant leveraging transformer embeddings, vector search (FAISS), and LLM reasoning.',
      tags: ['Transformers', 'LangChain', 'FAISS', 'PyTorch', 'Python'],
      icon: Cpu,
      github: 'https://github.com/monkgotdunk069-a11y',
      metrics: 'Sub-second Vector Search',
      color: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/30',
    },
    {
      title: 'AltitudeGrit: Alpine Trail & Weather Predictor',
      category: 'ds',
      badge: 'EXPEDITION TECH',
      desc: 'Alpine weather forecasting and trail risk assessment tool designed for Himalayan circuits (Triund & Dhauladhars), combining atmospheric metrics with ML risk scoring.',
      tags: ['Python', 'Open-Meteo', 'Machine Learning', 'Data Viz'],
      icon: Compass,
      github: 'https://github.com/monkgotdunk069-a11y',
      metrics: 'Himalayan Ridge Tested',
      color: 'from-blue-500/20 to-cyan-500/10 border-blue-500/30',
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projectList 
    : projectList.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-20 px-4 max-w-7xl mx-auto">
      {/* Background glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-cyan-300">
          <Code2 className="w-3.5 h-3.5 text-cyan-400" />
          <span>MISSION DEPLOYMENTS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-black text-white">
          FEATURED PROJECTS
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Real-world applications spanning Computer Vision, Aerial Telemetry, Machine Learning, and Predictive Data Science.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {[
          { id: 'all', label: 'All Deployments' },
          { id: 'ai', label: 'AI & Computer Vision' },
          { id: 'ds', label: 'Data Science & ML' },
          { id: 'aero', label: 'Air Wing & 3D WebGL' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              sounds.playHudClick();
              setFilter(tab.id);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all border ${
              filter === tab.id
                ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-md shadow-cyan-500/20'
                : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, idx) => {
          const Icon = project.icon;
          return (
            <div
              key={idx}
              className={`glass-panel rounded-2xl p-6 border bg-gradient-to-br ${project.color} flex flex-col justify-between hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-950/40 transition-all duration-300 group`}
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-cyan-400 group-hover:text-cyan-300 group-hover:scale-110 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-slate-950/90 text-cyan-300 border border-cyan-500/30">
                    {project.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-display font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {project.desc}
                </p>

                {/* Metrics Pill */}
                <div className="mb-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-950/90 border border-slate-800 text-[11px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{project.metrics}</span>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900/80 text-slate-300 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sounds.playHudClick()}
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold text-white hover:text-cyan-300 transition-colors group/link"
                >
                  <Github className="w-4 h-4 text-cyan-400 group-hover/link:rotate-12 transition-transform" />
                  <span>View Repository</span>
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sounds.playHudClick()}
                  className="p-2 rounded-lg bg-slate-900 hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/40 transition-colors"
                  aria-label="Open project details"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

