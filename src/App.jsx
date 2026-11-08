import React from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import ProfileCard3D from './components/ProfileCard3D';
import About from './components/About';
import NCCAirWing from './components/NCCAirWing';
import Skills3D from './components/Skills3D';
import Projects from './components/Projects';
import Gallery3D from './components/Gallery3D';
import TerminalConsole from './components/TerminalConsole';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 relative selection:bg-cyan-500 selection:text-black">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px]" />
      </div>

      {/* Main Content Layout */}
      <div className="relative z-10 flex flex-col">
        {/* Navigation Bar */}
        <Navbar />

        {/* Hero 3D Interactive Aerospace & Neural Canvas */}
        <main>
          <section className="relative pt-20">
            <Hero3D />
          </section>

          {/* 3D Holographic Profile Tilt Card & Mission Briefing */}
          <ProfileCard3D />

          {/* Academic Odyssey (Graphic Era MCA AI/DS & DAV-10 BCA) */}
          <About />

          {/* Dedicated 1 CHD AIR SQN NCC & Air Wing Legacy */}
          <NCCAirWing />

          {/* Skills & Technical Arsenal */}
          <Skills3D />

          {/* Mission Deployments & Projects */}
          <Projects />

          {/* Field Journal (High Altitude Summits & NCC Photo Gallery) */}
          <Gallery3D />

          {/* Interactive Telemetry Terminal HUD */}
          <TerminalConsole />

          {/* Transmission & Contact Form */}
          <Contact />
        </main>

        {/* Aerospace Telemetry Footer */}
        <Footer />
      </div>
    </div>
  );
}

