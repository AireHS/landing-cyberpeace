import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Check, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <PageLayout>
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-display font-extrabold mb-6">Planes de <span className="gradient-text">SOC360</span></h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Protección continua, transparente y escalable para organizaciones de cualquier tamaño.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Essential */}
            <div className="bg-card border border-border rounded-3xl p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-2">Essential</h3>
              <p className="text-muted-foreground text-sm mb-6">Protección base para empresas en crecimiento.</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold">Personalizado</span>
              </div>
              <Button asChild className="w-full mb-8 rounded-xl" variant="outline">
                <Link to="/contacto">Contactar a Ventas</Link>
              </Button>
              <ul className="space-y-4">
                {['Monitoreo 24/7/365', 'Ingesta SIEM hasta 50 GB/día', 'Respuesta guiada L1', 'SLA de detección 30 mins'].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Advanced (Recomendado) */}
            <div className="bg-card border border-primary relative rounded-3xl p-8 shadow-2xl shadow-primary/10 transform lg:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full">
                Más Elegido
              </div>
              <h3 className="text-xl font-bold mb-2">Advanced</h3>
              <p className="text-muted-foreground text-sm mb-6">Cobertura MDR completa con caza de amenazas.</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold">Personalizado</span>
              </div>
              <Button asChild className="w-full mb-8 rounded-xl bg-primary hover:bg-primary/90">
                <Link to="/contacto">Contactar a Ventas</Link>
              </Button>
              <ul className="space-y-4">
                {['Todo lo de Essential', 'Threat Hunting Proactivo', 'Contención Automatizada (SOAR)', 'Threat Intelligence Integrado', 'Portal Ejecutivo de Métricas'].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Enterprise */}
            <div className="bg-card border border-border rounded-3xl p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-2">Enterprise</h3>
              <p className="text-muted-foreground text-sm mb-6">Para operaciones críticas e infraestructura compleja.</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold">A Medida</span>
              </div>
              <Button asChild className="w-full mb-8 rounded-xl" variant="outline">
                <Link to="/contacto">Contactar a Ventas</Link>
              </Button>
              <ul className="space-y-4">
                {['Todo lo de Advanced', 'Ingesta Ilimitada BYO-SIEM', 'Retainer de Incident Response', 'Integración OT/IoT', 'Dedicated Security Analyst'].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Pricing;