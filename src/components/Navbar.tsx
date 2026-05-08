import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[#050917]/90 backdrop-blur-sm border-b border-slate-800 font-sans">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-3xl font-extrabold tracking-tighter text-white">
          CYBER<span className="text-cyan-400">PEACE</span>
        </Link>
        
        {/* Enlaces de Navegación del Diseño Objetivo */}
        <div className="flex items-center gap-8">
          {['Servicios', 'Nosotros', 'Casos de Éxito', 'Noticias'].map(link => (
            <Link 
              key={link}
              to="#" // Ajustar rutas según necesidad
              className="text-lg text-slate-300 hover:text-cyan-400 transition-colors"
            >
              {link}
            </Link>
          ))}
          
          {/* Botón Contáctanos */}
          <Link 
            to="/contacto"
            className="px-6 py-2 border-2 border-cyan-400 text-cyan-400 rounded-full font-semibold hover:bg-cyan-400 hover:text-[#050917] transition-all duration-300"
          >
            Contáctanos
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;