import React, { useState, useRef } from 'react';
import { Shield, Sparkles, MapPin, GraduationCap, Plane, Github, Linkedin, Instagram, ExternalLink, Award } from 'lucide-react';
import { sounds } from '../utils/sound';

export default function ProfileCard3D() {
  const [activePhoto, setActivePhoto] = useState('ncc');
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const photos = {
    ncc: {
      src: '/images/nishant-ncc.jpg',
      label: '1 CHD AIR SQN NCC',
      subtitle: 'Air Wing Cadet • DAV & Capt Vikram Batra PVC Legacy',
      badge: 'AIR WING CADET',
      badgeColor: 'border-cyan-400 bg-cyan-950/80 text-cyan-300',
    },
    rock: {
      src: '/images/nishant-rock.jpg',
      label: 'High Altitude Summit',
      subtitle: 'Dhauladhar Range • Himalayan Trekker',
      badge: 'PEAK EXPLORER',
      badgeColor: 'border-amber-400 bg-amber-950/80 text-amber-300',
    },
    mountain: {
      src: '/images/nishant-mountain.jpg',
      label: 'Triund Alpine Base',
      subtitle: 'Dhauladhars • High-Pressure Resilience',
      badge: 'EXPEDITION',
      badgeColor: 'border-emerald-400 bg-emerald-950/80 text-emerald-300',
    },
    summit: {
      src: '/images/nishant-summit.jpg',
      label: 'Prayer Flags Peak',
      subtitle: 'Mountain Ridge • Endurance & Focus',
      badge: 'ZENITH',
      badgeColor: 'border-purple-400 bg-purple-950/80 text-purple-300',
    },
  };

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div className="relative py-12 px-4 max-w-6xl mx-auto">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* LEFT: 3D Holographic Interactive Tilt Card */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, 1)`,
              transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
            }}
            className="relative w-full max-w-sm rounded-2xl p-1 bg-gradient-to-b from-cyan-500/40 via-purple-500/20 to-cyan-500/40 shadow-2xl shadow-cyan-950/50 preserve-3d group cursor-pointer"
          >
            {/* Inner holographic card container */}
            <div className="relative rounded-[14px] bg-[#0b1329]/95 overflow-hidden border border-cyan-500/30 p-4">
              {/* Scanline overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent pointer-events-none animate-scan" />

              {/* Top Card HUD Header */}
              <div className="flex items-center justify-between pb-3 border-b border-cyan-500/20 text-[11px] font-mono text-cyan-400">
                <span className="flex items-center gap-1.5">
                  <Plane className="w-3.5 h-3.5 text-cyan-300 animate-pulse" />
                  <span>1 CHD AIR SQN NCC</span>
                </span>
                <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-bold">
                  ID: NR-2026-AIR
                </span>
              </div>

              {/* Photo Display with Hologram Filter */}
              <div className="relative mt-3 w-full h-[400px] rounded-xl overflow-hidden border border-cyan-500/20 group-hover:border-cyan-400/60 transition-colors">
                <img
                  src={photos[activePhoto].src}
                  alt="Nishant Rawat"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Cyber Corner HUD Brackets */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />

                {/* Hologram Badge Overlay */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-slate-950/85 backdrop-blur-md px-3 py-2 rounded-lg border border-cyan-500/30">
                  <div>
                    <p className="text-xs font-mono font-bold text-white tracking-wider">
                      {photos[activePhoto].label}
                    </p>
                    <p className="text-[10px] text-slate-400 font-mono">
                      {photos[activePhoto].subtitle}
                    </p>
                  </div>
                  <span className={`text-[9px] font-mono font-bold px-2 py-1 rounded border ${photos[activePhoto].badgeColor}`}>
                    {photos[activePhoto].badge}
                  </span>
                </div>
              </div>

              {/* Photo Selector Switcher */}
              <div className="grid grid-cols-4 gap-2 mt-3 pt-3 border-t border-cyan-500/20">
                {Object.keys(photos).map((key) => (
                  <button
                    key={key}
                    onClick={(e) => {
                      e.stopPropagation();
                      sounds.playHudClick();
                      setActivePhoto(key);
                    }}
                    className={`relative rounded-lg overflow-hidden border-2 transition-all p-0.5 ${
                      activePhoto === key
                        ? 'border-cyan-400 shadow-md shadow-cyan-500/40 scale-105'
                        : 'border-slate-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={photos[key].src}
                      alt={photos[key].label}
                      className="w-full h-12 object-cover rounded"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-3 text-xs font-mono text-cyan-400/70 text-center flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
            Interactive 3D Holographic Tilt Card • Hover & Rotate
          </p>
        </div>

        {/* RIGHT: Profile Credentials & Mission Log */}
        <div className="lg:col-span-7 space-y-6">
          {/* Header Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-400/30">
              <Plane className="w-3.5 h-3.5 text-cyan-400" />
              1 CHD AIR SQN NCC CADET
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-purple-500/10 text-purple-300 border border-purple-400/30">
              <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
              MCA (AI & DATA SCIENCE)
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-amber-500/10 text-amber-300 border border-amber-400/30">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              GRAPHIC ERA & DAV-10 ALUMNUS
            </span>
          </div>

          {/* Name & Headline */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400 tracking-tight">
              NISHANT RAWAT
            </h1>
            <p className="mt-2 text-lg sm:text-xl font-mono text-cyan-300/90 flex items-center gap-2">
              <span className="text-yellow-400">⚡</span>
              AI/Data Science Innovator & Air Wing Aviator
            </p>
          </div>

          {/* Mission Bio */}
          <div className="glass-panel p-6 rounded-2xl border border-cyan-500/20 space-y-4">
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Combining the analytical rigor of <strong className="text-cyan-300 font-semibold">Artificial Intelligence & Data Science</strong> with the unshakeable military discipline, leadership, and aerial focus forged at <strong className="text-white font-semibold">1 Chandigarh Air Squadron NCC (1 CHD AIR SQN NCC)</strong>.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Currently pursuing <strong className="text-purple-300">MCA in AI & Data Science at Graphic Era Deemed to be University</strong>, backed by a solid foundational <strong className="text-purple-300">BCA degree from DAV College Sector 10 Chandigarh</strong> — the historic home of Kargil War legend Capt. Vikram Batra PVC. Driven by an explorer spirit, high-altitude alpine resilience, and the ambition to engineer intelligent systems that elevate human capability.
            </p>

            {/* Quick Milestone Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <span className="text-[11px] font-mono text-cyan-400 block">POST-GRADUATION</span>
                <span className="text-sm font-bold text-white block mt-0.5">MCA AI & DS</span>
                <span className="text-[11px] text-slate-400">Graphic Era University</span>
              </div>
              <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <span className="text-[11px] font-mono text-purple-400 block">GRADUATION</span>
                <span className="text-sm font-bold text-white block mt-0.5">BCA</span>
                <span className="text-[11px] text-slate-400">DAV College Sector 10</span>
              </div>
              <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <span className="text-[11px] font-mono text-amber-400 block">AIR WING</span>
                <span className="text-sm font-bold text-white block mt-0.5">1 CHD AIR SQN</span>
                <span className="text-[11px] text-slate-400">Air Force NCC Unit</span>
              </div>
            </div>
          </div>

          {/* Social Links & Action Callouts */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="https://github.com/monkgotdunk069-a11y"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sounds.playHudClick()}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-400 text-sm font-mono text-white transition-all shadow-md group"
            >
              <Github className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span>monkgotdunk069-a11y</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400" />
            </a>

            <a
              href="https://www.linkedin.com/in/nishant-rawat-412796348"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sounds.playHudClick()}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-950/60 hover:bg-blue-900/60 border border-blue-700/50 hover:border-blue-400 text-sm font-mono text-white transition-all shadow-md group"
            >
              <Linkedin className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
              <span>LinkedIn Profile</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400" />
            </a>

            <a
              href="https://www.instagram.com/nishant_singh_rawat04/?__d=11"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sounds.playHudClick()}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-pink-950/60 hover:bg-pink-900/60 border border-pink-700/50 hover:border-pink-400 text-sm font-mono text-white transition-all shadow-md group"
            >
              <Instagram className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" />
              <span>@nishant_singh_rawat04</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-pink-400" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

