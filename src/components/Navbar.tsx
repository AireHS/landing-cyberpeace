import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, ChevronDown, Menu, X, Crosshair, Zap } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all ${scrolled ? 'bg-background/95 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-[68px] flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">CYBERPEACE</Link>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-6">
          <Link to="/soc-360" className="text-sm font-medium hover:text-primary transition-colors">SOC360</Link>
          <Link to="/pricing" className="text-sm font-medium hover:text-primary transition-colors">Pricing</Link>
        </div>

        {/* Acciones Premium */}
        <div className="hidden lg:flex items-center gap-4">
          <Link to="/contacto" className="border px-4 py-2 rounded-lg text-sm font-semibold hover:bg-muted">Contacto</Link>
          <Link to="/partners#registro" className="bg-primary text-white px-5 py-2 rounded-lg text-sm font-semibold btn-premium-shine">
            Solicitar Demo
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;