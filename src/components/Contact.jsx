import React, { useState } from 'react';
import { Mail, Github, Linkedin, Instagram, Send, MapPin, CheckCircle, Copy, Radio, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sounds } from '../utils/sound';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    sounds.playSuccess();

    // Trigger confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00f0ff', '#a855f7', '#38bdf8', '#f59e0b'],
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 5000);
  };

  const copyEmail = () => {
    sounds.playHudClick();
    navigator.clipboard.writeText('nishant.rawat.aero.ai@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative py-20 px-4 max-w-7xl mx-auto">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-cyan-300">
          <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>FREQUENCY OPEN</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-black text-white">
          INITIATE TRANSMISSION
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Reach out for AI/Data Science opportunities, research collaborations, aerospace projects, or professional networking.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Links & Squadron Dossier */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-cyan-500/20 space-y-6">
            <div>
              <span className="text-[10px] font-mono text-cyan-400 block tracking-widest uppercase">
                DIRECT SECURE COMMS
              </span>
              <h3 className="text-xl font-display font-bold text-white mt-1">
                Cadet Nishant Rawat
              </h3>
              <p className="text-xs font-mono text-slate-400 mt-1">
                1 CHD AIR SQN NCC • Graphic Era MCA AI/DS
              </p>
            </div>

            {/* Social Links Cards */}
            <div className="space-y-3">
              {/* GitHub */}
              <a
                href="https://github.com/monkgotdunk069-a11y"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sounds.playHudClick()}
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-850 border border-slate-800 hover:border-cyan-400/50 text-slate-300 hover:text-white transition-all group"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-slate-800 text-cyan-400 group-hover:scale-110 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block">GITHUB</span>
                    <span className="text-sm font-bold text-white">monkgotdunk069-a11y</span>
                  </div>
                </div>
                <span className="text-xs font-mono text-cyan-400 group-hover:translate-x-1 transition-transform">
                  EXPLORE ↗
                </span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/nishant-rawat-412796348"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sounds.playHudClick()}
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-850 border border-slate-800 hover:border-blue-400/50 text-slate-300 hover:text-white transition-all group"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-blue-950/60 text-blue-400 group-hover:scale-110 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block">LINKEDIN</span>
                    <span className="text-sm font-bold text-white">nishant-rawat-412796348</span>
                  </div>
                </div>
                <span className="text-xs font-mono text-blue-400 group-hover:translate-x-1 transition-transform">
                  CONNECT ↗
                </span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/nishant_singh_rawat04/?__d=11"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sounds.playHudClick()}
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-850 border border-slate-800 hover:border-pink-400/50 text-slate-300 hover:text-white transition-all group"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-pink-950/60 text-pink-400 group-hover:scale-110 transition-transform">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block">INSTAGRAM</span>
                    <span className="text-sm font-bold text-white">@nishant_singh_rawat04</span>
                  </div>
                </div>
                <span className="text-xs font-mono text-pink-400 group-hover:translate-x-1 transition-transform">
                  FOLLOW ↗
                </span>
              </a>
            </div>

            {/* Base Station Locations */}
            <div className="pt-4 border-t border-slate-800 text-xs font-mono space-y-2">
              <div className="flex items-center justify-between text-slate-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" /> BASE ALPHA
                </span>
                <span className="text-white">Graphic Era Univ, Dehradun</span>
              </div>
              <div className="flex items-center justify-between text-slate-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-yellow-400" /> BASE BRAVO
                </span>
                <span className="text-white">1 CHD AIR SQN NCC / DAV-10 CHD</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Transmission Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-6 sm:p-10 rounded-2xl border border-cyan-500/20">
            <h3 className="text-xl font-display font-bold text-white mb-2">
              DISPATCH TRANSMISSION
            </h3>
            <p className="text-xs font-mono text-slate-400 mb-6">
              Encrypted channel to Cadet Nishant Rawat. All fields processed with low latency.
            </p>

            {submitted ? (
              <div className="p-8 rounded-xl bg-cyan-950/60 border border-cyan-400 text-center space-y-3 animate-fade-in">
                <CheckCircle className="w-12 h-12 text-cyan-400 mx-auto animate-bounce" />
                <h4 className="text-xl font-display font-bold text-white">
                  TRANSMISSION ACKNOWLEDGED!
                </h4>
                <p className="text-xs font-mono text-cyan-300">
                  Message securely logged into telemetry buffer. Cadet Nishant will respond shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      YOUR CALLSIGN / NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Flight Officer Alex / Recruiter"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 focus:border-cyan-400 outline-none text-white text-sm font-mono placeholder:text-slate-600 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      YOUR FREQUENCY / EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@domain.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 focus:border-cyan-400 outline-none text-white text-sm font-mono placeholder:text-slate-600 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">
                    TRANSMISSION SUBJECT *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="AI/DS Project, Internship, NCC Synergy, Full-Time Role"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 focus:border-cyan-400 outline-none text-white text-sm font-mono placeholder:text-slate-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">
                    DISPATCH PAYLOAD / MESSAGE *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Provide details regarding the deployment, problem statement, or opportunity..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 focus:border-cyan-400 outline-none text-white text-sm font-mono placeholder:text-slate-600 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-mono font-bold text-xs uppercase tracking-widest border border-cyan-400/40 shadow-lg shadow-cyan-500/25 active:scale-98 transition-all flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>TRANSMIT DISPATCH PAYLOAD</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

