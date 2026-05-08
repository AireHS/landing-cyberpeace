import PageLayout from '@/components/PageLayout';
import { Users, Globe, Shield, Rocket, Award } from 'lucide-react';

const About = () => {
  return (
    <PageLayout>
      <section className="py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-4 block">Nuestra Empresa</span>
            <h1 className="text-4xl md:text-6xl font-display font-extrabold mb-6">
              Más que ciberseguridad,<br /><span className="gradient-text">resiliencia digital.</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Cyberpeace nació con una misión clara: democratizar la ciberseguridad avanzada y proteger las operaciones críticas de las organizaciones modernas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {[
              { icon: Users, label: 'Talento Especializado', value: '+200 Profesionales' },
              { icon: Globe, label: 'Presencia Global', value: '5 Países' },
              { icon: Shield, label: 'Operación Continua', value: 'Follow-the-Sun' },
              { icon: Award, label: 'Certificaciones', value: 'ISO 27001 & SOC 2' }
            ].map((stat, i) => (
              <div key={i} className="bg-card border border-border p-6 rounded-2xl text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-2xl font-bold mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-primary/5 border border-primary/20 p-10 rounded-3xl">
              <Rocket className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">Nuestra Misión</h3>
              <p className="text-muted-foreground leading-relaxed">
                Empoderar a las organizaciones para que operen sin miedo en el entorno digital mediante inteligencia táctica, tecnología disruptiva y un equipo humano de élite.
              </p>
            </div>
            <div className="bg-card border border-border p-10 rounded-3xl">
              <Shield className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">Nuestra Visión</h3>
              <p className="text-muted-foreground leading-relaxed">
                Convertirnos en el estándar global de resiliencia operativa, siendo el escudo invisible pero inquebrantable de la economía digital en LATAM y el mundo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;