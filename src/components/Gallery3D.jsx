import React, { useState } from 'react';
import { Camera, Mountain, Award, Maximize2, X, Compass, MapPin, Sparkles } from 'lucide-react';
import { sounds } from '../utils/sound';

export default function Gallery3D() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const galleryItems = [
    {
      id: 'ncc',
      src: '/images/nishant-ncc.jpg',
      title: '1 CHD Air Sqn NCC • Legacy of Capt. Vikram Batra PVC',
      location: '1 CHD Air Sqn NCC Unit, Chandigarh',
      altitude: '1,150 FT (MSL)',
      category: 'Air Wing NCC',
      desc: 'Standing beside the portrait of Param Vir Chakra awardee Capt. Vikram Batra (No. 94/10182 Cadet Vikram Batra, 1 CHD Air Sqn NCC Chandigarh & DAV College alumnus). Carrying forward the torch of courage and duty.',
      badge: 'AIR FORCE NCC',
      badgeColor: 'border-yellow-400 text-yellow-300 bg-yellow-950/80',
    },
    {
      id: 'rock',
      src: '/images/nishant-rock.jpg',
      title: 'Dhauladhar Crest Ascent',
      location: 'Dhauladhar Mountain Range, Himachal Pradesh',
      altitude: '9,760 FT',
      category: 'High Altitude Trek',
      desc: 'Perched on high altitude rock terrain facing the snow-bound mountain peaks. Where physical resilience and psychological focus are tested and elevated.',
      badge: 'SUMMIT RIDGE',
      badgeColor: 'border-cyan-400 text-cyan-300 bg-cyan-950/80',
    },
    {
      id: 'mountain',
      src: '/images/nishant-mountain.jpg',
      title: 'Triund Alpine Outpost',
      location: 'Triund Plateau, Kangra Valley',
      altitude: '9,350 FT',
      category: 'High Altitude Trek',
      desc: 'Standing against the sheer vertical granite faces of the Dhauladhars and alpine shelter. Clear skies, cold winds, and uninterrupted panoramic perspectives.',
      badge: 'ALPINE BASE',
      badgeColor: 'border-emerald-400 text-emerald-300 bg-emerald-950/80',
    },
    {
      id: 'summit',
      src: '/images/nishant-summit.jpg',
      title: 'Tibetan Prayer Flags & Solitude',
      location: 'Himalayan Ridge Pass',
      altitude: '10,200 FT',
      category: 'Himalayan Summit',
      desc: 'Sitting atop the summit rock surrounded by sacred Buddhist prayer flags whispering in the high mountain breeze against majestic snow walls.',
      badge: 'HIGH ZENITH',
      badgeColor: 'border-purple-400 text-purple-300 bg-purple-950/80',
    },
  ];

  return (
    <section id="gallery" className="relative py-20 px-4 max-w-7xl mx-auto">
      {/* Background cyber grid */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-cyan-300">
          <Camera className="w-3.5 h-3.5 text-cyan-400" />
          <span>VISUAL LOGS & EXPEDITIONS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-black text-white">
          THE FIELD JOURNAL
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          From the ceremonial halls of 1 CHD AIR SQN NCC to the towering ridges of the Himalayas. Real moments of grit and pride.
        </p>
      </div>

      {/* Interactive 3D Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              sounds.playHudClick();
              setSelectedPhoto(item);
            }}
            className="group relative rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-cyan-400/60 bg-slate-950 shadow-xl cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-cyan-950/60"
          >
            {/* Image */}
            <div className="relative h-96 w-full overflow-hidden">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

              {/* Badge */}
              <div className="absolute top-3 left-3">
                <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded border backdrop-blur-md ${item.badgeColor}`}>
                  {item.badge}
                </span>
              </div>

              {/* Expand Icon on Hover */}
              <div className="absolute top-3 right-3 p-2 rounded-lg bg-slate-950/80 border border-cyan-500/30 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Bottom text info */}
              <div className="absolute bottom-3 left-3 right-3 space-y-1">
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-cyan-300">
                  <MapPin className="w-3 h-3 text-cyan-400" />
                  <span className="truncate">{item.location}</span>
                </div>
                <h3 className="text-sm font-display font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <div className="text-[10px] font-mono text-slate-400 flex items-center justify-between pt-1">
                  <span>ALT: {item.altitude}</span>
                  <span className="text-cyan-400">INSPECT ↗</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 border border-cyan-500/40 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-slate-950/80 border border-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Image View */}
            <div className="md:w-1/2 max-h-[500px] md:max-h-[600px] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="w-full h-full object-contain md:object-cover"
              />
            </div>

            {/* Right Telemetry Details */}
            <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded border ${selectedPhoto.badgeColor}`}>
                    {selectedPhoto.badge}
                  </span>
                  <span className="text-xs font-mono text-cyan-400">
                    {selectedPhoto.category}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-2">
                  {selectedPhoto.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {selectedPhoto.desc}
                </p>

                {/* Telemetry metadata */}
                <div className="space-y-2 bg-slate-950/70 p-4 rounded-xl border border-slate-800 text-xs font-mono">
                  <div className="flex items-center justify-between text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" /> LOCATION
                    </span>
                    <span className="text-white font-bold">{selectedPhoto.location}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Mountain className="w-3.5 h-3.5 text-purple-400" /> ELEVATION
                    </span>
                    <span className="text-white font-bold">{selectedPhoto.altitude}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-yellow-400" /> CADET UNIT
                    </span>
                    <span className="text-yellow-300 font-bold">1 CHD AIR SQN NCC</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] font-mono text-cyan-400/80">
                  CONFIRMED FIELD RECORD • NISHANT RAWAT
                </span>
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="px-4 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-mono font-bold transition-colors"
                >
                  DISMISS
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

