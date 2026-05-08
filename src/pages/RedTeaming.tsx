import PageLayout from '@/components/PageLayout';
import { Crosshair, Shield, Target } from 'lucide-react';

const RedTeaming = () => {
  return (
    <PageLayout>
      <section className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-4 block">Exposición y Validación</span>
            <h1 className="text-4xl md:text-6xl font-display font-extrabold text-foreground mb-6">Red Teaming & Pentesting</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Identificamos y validamos rutas de ataque reales antes de que los adversarios las exploten.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Crosshair, title: 'Red Teaming', desc: 'Simulaciones de adversarios reales para probar la capacidad de detección y respuesta.' },
              { icon: Target, title: 'Pentesting Avanzado', desc: 'Pruebas de intrusión profundas en infraestructura, aplicaciones y APIs.' },
              { icon: Shield, title: 'Attack Surface Management', desc: 'Visibilidad continua de tu superficie de ataque expuesta en internet.' }
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border p-8 rounded-2xl hover:border-primary/30 transition-all">
                <item.icon className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default RedTeaming;