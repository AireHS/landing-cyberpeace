import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Handshake, Rocket, Award, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const PartnerPortal = () => {
  return (
    <PageLayout>
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-display font-extrabold mb-6">Programa de <span className="gradient-text">Partners</span></h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Únete a nuestro ecosistema y escala tu negocio de ciberseguridad con el respaldo de SOC360.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { icon: Handshake, title: 'Beneficios Exclusivos', desc: 'Acceso a márgenes preferenciales y registro de oportunidades.' },
              { icon: Rocket, title: 'Co-Marketing', desc: 'Material de ventas, fondos de marketing y soporte en eventos.' },
              { icon: Award, title: 'Certificación', desc: 'Entrenamiento técnico y comercial para tu equipo de ingeniería.' }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-card border border-border rounded-2xl">
                <item.icon className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">¿Listo para comenzar?</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="rounded-xl px-8">
                <Link to="/partner-login">Acceso al Portal</Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-xl px-8">
                Registrarse como Partner
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PartnerPortal;