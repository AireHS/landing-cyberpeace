import PageLayout from '@/components/PageLayout';
import { Eye, Globe, ShieldAlert, Search, ShieldCheck } from 'lucide-react';

const BrandProtection = () => {
  return (
    <PageLayout>
      <div className="py-24 max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Protección de Marca y Riesgo Digital</h1>
          <p className="text-muted-foreground text-lg">Monitoreamos el uso no autorizado de tu marca, detectamos phishing y eliminamos infraestructura maliciosa antes de que impacte a tus clientes.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: Search, title: 'Detección de Phishing', desc: 'Identificación temprana de dominios fraudulentos e impersonación de marca.' },
            { icon: Globe, title: 'Monitoreo de Deep & Dark Web', desc: 'Búsqueda activa de credenciales filtradas y menciones a tu organización.' },
            { icon: ShieldAlert, title: 'Takedown Service', desc: 'Gestión operativa para dar de baja sitios y perfiles maliciosos.' },
            { icon: ShieldCheck, title: 'Anti-Fraud Intelligence', desc: 'Análisis de campañas de fraude dirigidas específicamente a tu sector.' }
          ].map((s, i) => (
            <div key={i} className="p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-colors">
              <s.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default BrandProtection;