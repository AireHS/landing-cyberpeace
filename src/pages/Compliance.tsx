import PageLayout from '@/components/PageLayout';
import { Scale, FileCheck, ShieldCheck, ClipboardCheck } from 'lucide-react';

const Compliance = () => {
  return (
    <PageLayout>
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Riesgo, Madurez y Gobierno</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Alineamos tus capacidades técnicas con los objetivos de negocio y requerimientos regulatorios internacionales.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Scale, title: 'Riesgo Cibernético', desc: 'Identificación y priorización de riesgos basados en impacto de negocio.' },
            { icon: FileCheck, title: 'Gap Analysis', desc: 'Evaluación contra frameworks como ISO 27001, NIST y CIS Controls.' },
            { icon: ShieldCheck, title: 'vCISO Services', desc: 'Liderazgo estratégico de seguridad bajo demanda para tu organización.' },
            { icon: ClipboardCheck, title: 'Third-Party Risk', desc: 'Gestión y avaliação del riesgo en tu cadena de suministro.' }
          ].map((item, i) => (
            <div key={i} className="p-6 bg-card border border-border rounded-xl">
              <item.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default Compliance;