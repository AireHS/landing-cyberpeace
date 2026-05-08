import { useEffect, useRef } from "react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Instagram, Linkedin, Send } from "lucide-react";

const Index = () => {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="bg-[#050917] min-h-screen flex flex-col font-sans antialiased text-white">
      <Navbar />
      
      <main className="relative flex-grow overflow-hidden">
        {/* Fondo de red y circuitos */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 opacity-[0.05]" style={{
            backgroundImage: 'linear-gradient(rgba(10, 15, 30, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(10, 15, 30, 0.5) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}></div>

          <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="glow" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor: 'rgba(6, 182, 212, 0)', stopOpacity: 0}} />
                <stop offset="50%" style={{stopColor: 'rgba(6, 182, 212, 0.6)', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: 'rgba(6, 182, 212, 0)', stopOpacity: 0}} />
              </linearGradient>
            </defs>
            <g stroke="url(#glow)" strokeWidth="0.75" fill="none">
              <path d="M100 200 L300 150 L500 250 L400 400 L200 450 Z" />
              <path d="M600 100 L800 120 L900 300 L750 450 L650 350 Z" />
              <path d="M400 400 L650 350" />
              <path d="M500 250 L900 300" />
            </g>
            <g fill="rgba(6, 182, 212, 0.7)" stroke="none">
              <circle cx="100" cy="200" r="2" />
              <circle cx="300" cy="150" r="2" />
              <circle cx="500" cy="250" r="2" />
              <circle cx="400" cy="400" r="2" />
              <circle cx="200" cy="450" r="2" />
              <circle cx="600" cy="100" r="2" />
              <circle cx="800" cy="120" r="2" />
              <circle cx="900" cy="300" r="2" />
              <circle cx="750" cy="450" r="2" />
              <circle cx="650" cy="350" r="2" />
            </g>
          </svg>

          <div className="absolute top-[10%] left-[-10%] w-[120%] h-[120%] opacity-20">
            <svg viewBox="0 0 1000 1000" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <g stroke="rgba(6, 182, 212, 0.4)" strokeWidth="1.5" fill="none">
                <rect x="350" y="350" width="300" height="300" rx="20" stroke="rgba(6, 182, 212, 1)" strokeWidth="3" fill="rgba(5, 9, 23, 0.8)"/>
                <path d="M350 400 L100 300 H0M350 500 L100 600 H0M650 400 L900 300 H1000M650 500 L900 600 H1000M500 350 L400 100 V0M500 350 L600 100 V0M500 650 L400 900 V1000M500 650 L600 900 V1000" strokeDasharray="10 5"/>
              </g>
              <text x="500" y="525" fontSize="40" fontWeight="bold" textAnchor="middle" fill="rgba(6, 182, 212, 0.9)" letterSpacing="5">CYBERPEACE</text>
              <circle cx="500" cy="500" r="10" fill="white" filter="blur(15px)" opacity="0.6"/>
            </svg>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="relative z-10 container mx-auto px-6 py-12 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Columna Izquierda */}
            <div className="space-y-6 max-w-xl">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tighter">
                IMPULSAMOS LA <br />
                <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">SEGURIDAD DIGITAL</span><br />
                DE TU EMPRESA
              </h1>
              <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed">
                Blindaje integral para su infraestructura crítica y datos sensibles. Protegemos su negocio contra amenazas avanzadas con soluciones de ciberseguridad a medida.
              </p>
            </div>

            {/* Columna Derecha */}
            <div className="relative p-[1px] bg-[#0a0f1e]/80 rounded-3xl shadow-[0_0_50px_-15px_rgba(6,182,212,0.4)] overflow-hidden backdrop-blur-md">
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-cyan-500/40 via-transparent to-cyan-500/40 opacity-50"></div>
                
                <div className="relative z-10 p-8 md:p-10 space-y-8 bg-[#050917]/95 rounded-3xl h-full">
                    <div className="text-center space-y-2">
                        <h2 className="text-xl md:text-2xl font-semibold tracking-wide text-white/80">PUNTO DE CONTACTO <span className="text-cyan-400 font-bold">CYBERPEACE</span></h2>
                        <h3 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-cyan-400">Contáctanos</h3>
                    </div>

                    <div className="space-y-8">
                        <div className="flex items-center justify-center gap-6">
                            <span className="text-lg text-slate-300">Visítanos en:</span>
                            <div className="flex gap-4">
                                <a href="#" aria-label="Instagram" className="p-3 bg-slate-900/50 border border-slate-700 rounded-full text-cyan-400 hover:bg-cyan-950 hover:border-cyan-500 transition-all shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                                    <Instagram size={20} />
                                </a>
                                <a href="#" aria-label="LinkedIn" className="p-3 bg-slate-900/50 border border-slate-700 rounded-full text-cyan-400 hover:bg-cyan-950 hover:border-cyan-500 transition-all shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                                    <Linkedin size={20} />
                                </a>
                            </div>
                        </div>

                        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                            <input 
                                type="text" 
                                placeholder="Nombre" 
                                className="w-full px-5 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder:text-slate-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all"
                            />
                            <input 
                                type="text" 
                                placeholder="Empresa" 
                                className="w-full px-5 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder:text-slate-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all"
                            />
                            <input 
                                type="email" 
                                placeholder="Email" 
                                className="w-full px-5 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder:text-slate-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all"
                            />
                            <textarea 
                                placeholder="Mensaje" 
                                rows={3}
                                className="w-full px-5 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder:text-slate-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all resize-none"
                            ></textarea>
                            
                            <button type="submit" className="relative group w-full p-[1px] rounded-xl overflow-hidden mt-2">
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-cyan-400 to-cyan-600 opacity-70 group-hover:opacity-100 transition-opacity"></div>
                                <div className="relative flex items-center justify-center gap-2 px-6 py-3 bg-[#050917] rounded-xl text-lg font-bold text-cyan-400 group-hover:bg-transparent group-hover:text-white transition-colors duration-300">
                                    Enviar
                                    <Send size={20} className="transform group-hover:translate-x-1 transition-transform"/>
                                </div>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;