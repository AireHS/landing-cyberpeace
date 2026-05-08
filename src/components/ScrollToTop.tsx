import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Muestra el botón cuando el usuario baja 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 p-3 bg-slate-900 border border-cyan-500 text-cyan-400 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)] hover:bg-slate-800 hover:text-cyan-300 transition-all duration-300 z-50"
      aria-label="Volver arriba"
    >
      <ArrowUp size={24} />
    </button>
  );
};

export default ScrollToTop;