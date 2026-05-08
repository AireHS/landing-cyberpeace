import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ShieldCheck, X } from 'lucide-react';

const CookieConsent = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setShow(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-[400px] z-[100] animate-in fade-in slide-in-from-bottom-4">
      <div className="bg-background/95 backdrop-blur-xl border border-border p-6 rounded-2xl shadow-2xl">
        <div className="flex items-start gap-4 mb-4">
          <div className="bg-primary/10 p-2 rounded-lg">
            <ShieldCheck className="text-primary w-5 h-5" />
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-bold mb-1">Privacidad y Cookies</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Utilizamos cookies para mejorar tu experiencia y analizar el tráfico de nuestro SOC360.
            </p>
          </div>
          <button onClick={() => setShow(false)} className="text-muted-foreground hover:text-foreground">
            <X size={16} />
          </button>
        </div>
        <div className="flex gap-3">
          <Button onClick={accept} className="flex-1 rounded-xl text-xs h-9">Aceptar</Button>
          <Button variant="outline" onClick={() => setShow(false)} className="flex-1 rounded-xl text-xs h-9">Configurar</Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;