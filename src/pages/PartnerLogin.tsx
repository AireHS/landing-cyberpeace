import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ShieldCheck, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const PartnerLogin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6">
      <div className="w-full max-w-md space-y-8 bg-card border border-border p-10 rounded-3xl shadow-2xl">
        <div className="text-center">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <ShieldCheck className="text-primary w-8 h-8" />
            <span className="font-display font-bold text-xl tracking-tight">CYBERPEACE</span>
          </Link>
          <h2 className="text-2xl font-bold">Portal de Partners</h2>
          <p className="text-muted-foreground text-sm mt-2">Ingresa tus credenciales para acceder</p>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <Input type="email" placeholder="email@empresa.com" required />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <label className="text-sm font-medium">Contraseña</label>
              <Link to="/reset-password" className="text-xs text-primary hover:underline">¿La olvidaste?</Link>
            </div>
            <Input type="password" placeholder="••••••••" required />
          </div>
          <Button className="w-full h-11 rounded-xl font-bold gap-2">
            <Lock size={16} /> Iniciar Sesión
          </Button>
        </form>

        <p className="text-center text-xs text-muted-foreground">
          ¿No eres partner? <Link to="/partners#registro" className="text-primary font-bold hover:underline">Aplica aquí</Link>
        </p>
      </div>
    </div>
  );
};

export default PartnerLogin;