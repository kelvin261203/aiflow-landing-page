import React from 'react';

export default function CTASection() {
  return (
 <section className="relative min-h-screen bg-gray-900 flex items-center justify-center overflow-hidden pt-20">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary floating orbs */}
        {/* <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-float-1"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-float-2"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-pink-500/10 rounded-full blur-xl animate-float-3"></div>
         */}
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
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          
          {/* Título principal con gradiente */}
          <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            ¿Listo para empezar?
          </h2>
          
          {/* Subtítulo elegante */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
            Únete a miles de empresas que ya están transformando su futuro con
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold"> AIFlow</span>
          </p>
          
          {/* Estadísticas impresionantes */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm">
            <div className="flex items-center space-x-2 text-gray-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>+10,000 empresas activas</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span>99.9% uptime garantizado</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span>Soporte 24/7</span>
            </div>
          </div>
          
          {/* Botones CTA con efectos avanzados */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl">
              <span className="relative z-10 flex items-center space-x-2">
                <span>Comenzar gratis</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
            </button>
            
            <button className="group bg-gray-800/50 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-700/60 transition-all duration-300 border border-gray-600/50 hover:border-purple-400/50">
              <span className="flex items-center space-x-2">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Ver demo</span>
              </span>
            </button>
          </div>
          
          {/* Texto de garantía */}
          <p className="text-sm text-gray-500 mt-6">
            Sin tarjeta de crédito • Configuración en 2 minutos • Cancela cuando quieras
          </p>
        </div>
        
        {/* Línea decorativa inferior */}
        <div className="mt-16 flex justify-center">
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
}