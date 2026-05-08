import PageLayout from '@/components/PageLayout';
import { AlertTriangle, Shield, Clock, FileSearch, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CPCSIRT = () => {
  return (
    <PageLayout>
      <section className="relative py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 text-destructive text-xs font-bold uppercase tracking-wider mb-6">
                Emergencia 24/7
              </span>
              <h1 className="text-4xl md:text-6xl font-display font-extrabold mb-6">
                Cyberpeace <span className="text-destructive">CSIRT</span>
              </h1>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Respuesta inmediata ante incidentes de ciberseguridad. Contenemos la amenaza, preservamos evidencia y recuperamos tu operación.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  'Análisis Forense Digital (DFIR)',
                  'Gestión de Crisis y Ransomware',
                  'Preservación de Evidencia',
                  'Recuperación de Desastres'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-destructive w-5 h-5" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Button variant="destructive" size="lg" className="rounded-xl gap-2 h-14 px-8 text-md font-bold">
                Reportar Incidente Ahora <ArrowRight size={18} />
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-destructive/20 blur-[100px] rounded-full" />
              <div className="relative bg-card border border-destructive/20 p-8 rounded-3xl shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                    <Clock className="text-destructive" />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase">Tiempo de Respuesta</p>
                    <p className="text-2xl font-black text-destructive">&lt; 15 Minutos</p>
                  </div>
                </div>
                <div className="p-4 bg-muted/50 rounded-xl border border-border">
                  <p className="text-xs text-muted-foreground italic">"La diferencia entre un incidente y una crisis es el tiempo de reacción."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CPCSIRT;