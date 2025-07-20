import React, { useState, useEffect } from 'react';

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen bg-gray-900 flex items-center justify-center overflow-hidden pt-20">
      {/* Background dinámico unificado con el header */}
      

       <div className="absolute inset-0 pointer-events-none">
        {/* Primary floating orbs */}
        {/* <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-float-1"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-float-2"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-pink-500/10 rounded-full blur-xl animate-float-3"></div> */}
        
        {/* Secondary floating elements */}
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-cyan-500/8 rounded-full blur-lg animate-float-4"></div>
        <div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-indigo-500/8 rounded-full blur-lg animate-float-5"></div>
        <div className="absolute top-1/4 right-10 w-12 h-12 bg-rose-500/8 rounded-full blur-lg animate-float-6"></div>
        
        {/* Gradient mesh overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-900/5 to-transparent animate-gradient-shift"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-transparent to-pink-900/5 animate-gradient-shift-reverse"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="space-y-8">
          {/* Badge animado */}
      

          {/* Título principal */}
          <div className="space-y-6 mt-12 pt-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <span className="block mb-2">Automatiza tu</span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient bg-size-200">
                trabajo con IA
              </span>
            </h1>
            
            <div className="relative">
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                La plataforma más avanzada para automatizar procesos con{' '}
                <span className="text-white font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  inteligencia artificial
                </span>
              </p>
            </div>
          </div>

          {/* Botones CTA */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 min-w-[200px]">
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span>Empezar ahora</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </button>

            <button className="group px-8 py-4 text-white border-2 border-white/20 rounded-xl font-semibold text-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm min-w-[200px]">
              <span className="flex items-center justify-center space-x-2">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Ver demo</span>
              </span>
            </button>
          </div>

          {/* Estadísticas mejoradas */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
            {[
              { number: '10k+', label: 'Usuarios activos', color: 'blue' },
              { number: '99.9%', label: 'Disponibilidad', color: 'purple' },
              { number: '500+', label: 'Automatizaciones', color: 'pink' },
              { number: '24/7', label: 'Soporte técnico', color: 'cyan' }
            ].map((stat, index) => (
              <div key={index} className="group text-center p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
                <div className={`text-3xl lg:text-4xl font-black mb-2 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-r ${
                  stat.color === 'blue' ? 'from-blue-400 to-blue-600' :
                  stat.color === 'purple' ? 'from-purple-400 to-purple-600' :
                  stat.color === 'pink' ? 'from-pink-400 to-pink-600' :
                  'from-cyan-400 to-cyan-600'
                } bg-clip-text text-transparent`}>
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Características destacadas */}
          <div className="flex flex-wrap justify-center gap-6 mt-12 animate-fadeInUp" style={{ animationDelay: '1s' }}>
            {[
              { icon: '🚀', text: 'Implementación rápida' },
              { icon: '🔒', text: 'Seguridad empresarial' },
              { icon: '⚡', text: 'Rendimiento optimizado' }
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <span className="text-lg">{feature.icon}</span>
                <span className="text-gray-300 text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
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
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out both;
        }
      `}</style>
    </section>
  );
}