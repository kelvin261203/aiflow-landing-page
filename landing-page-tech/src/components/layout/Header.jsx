import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Efecto de scroll para cambiar el header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Tracking del mouse para efectos interactivos
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const navItems = [
    { href: '#features', label: 'Características', color: 'blue' },
    { href: '#pricing', label: 'Precios', color: 'purple' },
    { href: '#solutions', label: 'Soluciones', color: 'pink' },
    { href: '#contact', label: 'Contacto', color: 'cyan' }
  ];

  const colorClasses = {
    blue: 'bg-blue-400 group-hover:shadow-blue-400/50',
    purple: 'bg-purple-400 group-hover:shadow-purple-400/50',
    pink: 'bg-pink-400 group-hover:shadow-pink-400/50',
    cyan: 'bg-cyan-400 group-hover:shadow-cyan-400/50'
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-gray-900/95 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      {/* Background dinámico con gradientes animados */}
      

      {/* Partículas flotantes mejoradas */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full animate-pulse`}
            style={{
              left: `${10 + (i * 8)}%`,
              top: `${20 + Math.sin(i) * 30}%`,
              backgroundColor: ['#60A5FA', '#A78BFA', '#F472B6', '#22D3EE'][i % 4],
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + (i % 3)}s`,
            }}
          />
        ))}
      </div>

      {/* Borde superior animado */}
      <div className="h-px bg-gradient-to-r from-transparent via-blue-500 via-purple-500 via-pink-500 to-transparent animate-pulse" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 lg:py-6">
          
          {/* Logo mejorado con animaciones */}
          <div className="flex items-center group cursor-pointer">
            <div className="relative">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-blue-400 via-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent bg-size-200 animate-gradient">
                AIFlow
              </h1>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10" />
            </div>
            <div className="ml-3 relative">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-ping" />
              <div className="absolute inset-0 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:scale-150 transition-all duration-500" />
            </div>
          </div>
          
          {/* Navegación desktop mejorada */}
          <nav className="hidden lg:flex space-x-2">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 group font-medium rounded-lg hover:bg-white/5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">{item.label}</span>
                <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 ${colorClasses[item.color]} group-hover:w-3/4 transition-all duration-300 rounded-full`} />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg" />
              </a>
            ))}
          </nav>
          
          {/* Botones CTA mejorados */}
          <div className="hidden sm:flex items-center space-x-3">
            <button className="px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 font-medium rounded-lg hover:bg-white/10 backdrop-blur-sm">
              Iniciar Sesión
            </button>
            <button className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 active:scale-95 transition-all duration-300 group shadow-lg hover:shadow-purple-500/25">
              <span className="relative z-10 flex items-center space-x-2">
                <span>Comenzar</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </button>
          </div>
          
          {/* Botón menú móvil mejorado */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative w-10 h-10 flex flex-col justify-center items-center space-y-1 hover:scale-110 transition-all duration-300 rounded-lg hover:bg-white/10"
          >
            <div className={`w-6 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <div className={`w-6 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 bg-gradient-to-r from-pink-400 to-cyan-400 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>
      </div>

      {/* Menú móvil expandido */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 py-6 bg-gray-900/95 backdrop-blur-xl border-t border-white/10">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300 py-3 px-4 rounded-lg hover:bg-white/10 group"
                style={{ 
                  animation: isMenuOpen ? `slideIn 0.3s ease-out ${index * 0.1}s both` : 'none'
                }}
              >
                <div className={`w-2 h-2 ${colorClasses[item.color]} rounded-full group-hover:scale-125 transition-all duration-300`} />
                <span className="font-medium">{item.label}</span>
              </a>
            ))}
            <div className="pt-4 border-t border-white/10">
              <button className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
                Comenzar Ahora
              </button>
            </div>
          </nav>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .bg-size-200 {
          background-size: 200% 200%;
        }
      `}</style>
    </header>
  );
}