import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 aurora-bg opacity-40"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
          <ShieldCheck size={16} />
          <span>Protección Inteligente 24/7</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-6 tracking-tight">
          El nuevo estándar en <br />
          <span className="gradient-text">ciberseguridad.</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Protegemos tu infraestructura crítica ante las amenazas de nueva generación con inteligencia artificial y operaciones de élite.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/contacto" className="inline-flex justify-center items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-bold hover:opacity-90 transition-all shadow-lg shadow-primary/25">
            Solicitar Demo <ArrowRight size={18} />
          </Link>
          <Link to="/soc-360" className="inline-flex justify-center items-center gap-2 bg-card border border-border text-foreground px-8 py-3.5 rounded-xl font-bold hover:border-primary/50 transition-all shadow-sm">
            Conocer SOC360
          </Link>
        </div>
      </div>
    </section>
  );
}