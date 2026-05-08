import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contacto = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulación de envío
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Mensaje enviado",
        description: "Un especialista se pondrá en contacto contigo a la brevedad.",
      });
    }, 1500);
  };

  return (
    <PageLayout>
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl md:text-6xl font-display font-extrabold mb-6">Hablemos de <span className="gradient-text">seguridad.</span></h1>
            <p className="text-muted-foreground text-lg mb-12">Estamos listos para ayudarte a fortalecer tu postura de ciberseguridad.</p>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider">Email</p>
                  <p className="text-muted-foreground">ventas@cyberpeace.tech</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider">Teléfono</p>
                  <p className="text-muted-foreground">+52 55 8111 5800</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border p-8 rounded-3xl shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Nombre</label>
                  <Input placeholder="Tu nombre" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Empresa</label>
                  <Input placeholder="Nombre de tu empresa" required />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email corporativo</label>
                <Input type="email" placeholder="email@empresa.com" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Mensaje</label>
                <Textarea placeholder="¿Cómo podemos ayudarte?" className="min-h-[120px]" required />
              </div>
              <Button type="submit" className="w-full h-12 rounded-xl gap-2 font-bold" disabled={loading}>
                {loading ? "Enviando..." : "Enviar mensaje"} <Send size={16} />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contacto;