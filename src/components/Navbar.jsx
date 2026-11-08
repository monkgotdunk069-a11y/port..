import React, { useState, useEffect } from 'react';
import { Plane, Volume2, VolumeX, Menu, X, Shield, Terminal, Send, Sparkles } from 'lucide-react';
import { sounds } from '../utils/sound';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAudio = () => {
    const newState = sounds.toggle();
    setSoundOn(newState);
    if (newState) {
      sounds.playHudClick();
    }
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: '1 CHD Air Sqn NCC', href: '#ncc' },
    { name: 'Skills & Arsenal', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Field Journal', href: '#gallery' },
    { name: 'Terminal', href: '#terminal' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = () => {
    sounds.playHudClick();
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-cyan-500/20 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Callsign */}
        <a
          href="#"
          onClick={() => sounds.playHudClick()}
          className="flex items-center space-x-2.5 group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-600 to-blue-600 flex items-center justify-center border border-cyan-400/40 shadow-md shadow-cyan-500/30 group-hover:scale-105 transition-transform">
            <Plane className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="font-display font-black text-sm sm:text-base tracking-wider text-white group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
              <span>NISHANT RAWAT</span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/30 font-normal">
                AI/DS
              </span>
            </span>
            <span className="block text-[10px] font-mono text-cyan-400/80 -mt-0.5">
              1 CHD AIR SQN NCC CADET
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 bg-slate-900/60 border border-slate-800/80 px-4 py-1.5 rounded-full backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleNavClick}
              className="text-xs font-mono text-slate-300 hover:text-cyan-400 px-3 py-1 rounded-md transition-colors hover:bg-cyan-500/10"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Controls: Sound Toggle & CTA */}
        <div className="hidden sm:flex items-center space-x-3">
          {/* Sound Synthesizer Toggle */}
          <button
            onClick={toggleAudio}
            title={soundOn ? 'Sound FX Enabled' : 'Sound FX Muted'}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-400/40 text-slate-300 hover:text-cyan-400 transition-all flex items-center gap-1 text-xs font-mono"
          >
            {soundOn ? (
              <>
                <Volume2 className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span className="text-[10px]">SFX ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-slate-500" />
                <span className="text-[10px] text-slate-500">MUTED</span>
              </>
            )}
          </button>

          {/* Quick Contact CTA */}
          <a
            href="#contact"
            onClick={() => sounds.playHudClick()}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs font-mono font-bold tracking-wider uppercase border border-cyan-400/40 shadow-md shadow-cyan-500/25 active:scale-95 transition-all"
          >
            <Send className="w-3.5 h-3.5" />
            <span>TRANSMIT</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center space-x-2">
          <button
            onClick={toggleAudio}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400"
          >
            {soundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden px-4 pt-3 pb-6 bg-slate-950/95 border-b border-cyan-500/30 backdrop-blur-xl animate-fade-in space-y-2 mt-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleNavClick}
              className="block text-sm font-mono text-slate-300 hover:text-cyan-400 py-2 border-b border-slate-900"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={handleNavClick}
            className="block text-center mt-4 py-2.5 rounded-lg bg-cyan-600 text-white font-mono text-xs font-bold uppercase tracking-wider"
          >
            TRANSMIT MESSAGE
          </a>
        </div>
      )}
    </header>
  );
}

