import React from 'react';

export default function FeaturesSection() {
  return (
    <section className="relative min-h-screen bg-gray-900 flex items-center justify-center overflow-hidden pt-20 m-12">
      {/* Enhanced animated background elements */}
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
      
      <div className="relative">
        {/* Título principal con animación de entrada */}
        <div className="text-center mb-16 transform transition-all duration-1000 ease-out">
          <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in">
            Características principales
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light opacity-0 animate-fade-in-delay">
            Descubre las funcionalidades que hacen de AIFlow la plataforma de IA más avanzada del mercado
          </p>
          <div className="mt-6 w-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full animate-expand-line"></div>
        </div>
        
        {/* Grid de características con animación escalonada */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Feature 1 - IA Avanzada */}
          <div className="group text-center transform opacity-0 translate-y-8 animate-slide-up">
            <div className="relative mb-6">
              {/* Círculo de fondo con gradiente y efectos mejorados */}
              <div className="relative bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm border border-blue-400/20 group-hover:scale-110 transition-all duration-500 group-hover:rotate-12">
                <div className="text-3xl group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg">🧠</div>
                {/* Rotating border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 animate-spin-slow transition-opacity duration-300" style={{background: 'conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)', maskImage: 'radial-gradient(transparent 70%, black 72%)'}}></div>
              </div>
              {/* Efecto de brillo mejorado */}
              <div className="absolute inset-0 w-24 h-24 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500 -z-10"></div>
              {/* Múltiples anillos animados */}
              <div className="absolute inset-0 w-20 h-20 mx-auto border-2 border-blue-400/30 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
              <div className="absolute inset-0 w-16 h-16 mx-auto border border-purple-400/40 rounded-full animate-ping opacity-0 group-hover:opacity-100 delay-150"></div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-300 transition-all duration-300 group-hover:scale-105">
              IA Avanzada
            </h3>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
              Algoritmos inteligentes de última generación que aprenden y se adaptan a tu forma de trabajar
            </p>
            
            {/* Indicadores de progreso con animación */}
            <div className="mt-4 space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
              <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span>Machine Learning</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-300"></div>
                <span>Deep Learning</span>
              </div>
            </div>
          </div>
          
          {/* Feature 2 - Súper Rápido */}
          <div className="group text-center transform opacity-0 translate-y-8 animate-slide-up-delay">
            <div className="relative mb-6">
              {/* Círculo de fondo con gradiente y efectos mejorados */}
              <div className="relative bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-cyan-600/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm border border-purple-400/20 group-hover:scale-110 transition-all duration-500 group-hover:-rotate-12">
                <div className="text-3xl group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg">⚡</div>
                {/* Rotating border */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 animate-spin-slow transition-opacity duration-300" style={{background: 'conic-gradient(from 90deg, #8b5cf6, #ec4899, #06b6d4, #8b5cf6)', maskImage: 'radial-gradient(transparent 70%, black 72%)'}}></div>
              </div>
              {/* Efecto de brillo mejorado */}
              <div className="absolute inset-0 w-24 h-24 mx-auto bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500 -z-10"></div>
              {/* Múltiples anillos animados */}
              <div className="absolute inset-0 w-20 h-20 mx-auto border-2 border-purple-400/30 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
              <div className="absolute inset-0 w-16 h-16 mx-auto border border-pink-400/40 rounded-full animate-ping opacity-0 group-hover:opacity-100 delay-150"></div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-300 transition-all duration-300 group-hover:scale-105">
              Súper Rápido
            </h3>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
              Procesa miles de tareas complejas en cuestión de segundos con nuestra infraestructura optimizada
            </p>
            
            {/* Indicadores de rendimiento con animación */}
            <div className="mt-4 space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
              <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <span> 100ms respuesta</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-300"></div>
                <span>99.9% uptime</span>
              </div>
            </div>
          </div>
          
          {/* Feature 3 - 100% Seguro */}
          <div className="group text-center transform opacity-0 translate-y-8 animate-slide-up-delay-2">
            <div className="relative mb-6">
              {/* Círculo de fondo con gradiente y efectos mejorados */}
              <div className="relative bg-gradient-to-br from-pink-600/20 via-cyan-600/20 to-blue-600/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm border border-pink-400/20 group-hover:scale-110 transition-all duration-500 group-hover:rotate-12">
                <div className="text-3xl group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg">🛡️</div>
                {/* Rotating border */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 animate-spin-slow transition-opacity duration-300" style={{background: 'conic-gradient(from 180deg, #ec4899, #06b6d4, #3b82f6, #ec4899)', maskImage: 'radial-gradient(transparent 70%, black 72%)'}}></div>
              </div>
              {/* Efecto de brillo mejorado */}
              <div className="absolute inset-0 w-24 h-24 mx-auto bg-gradient-to-r from-pink-500 via-cyan-500 to-blue-500 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500 -z-10"></div>
              {/* Múltiples anillos animados */}
              <div className="absolute inset-0 w-20 h-20 mx-auto border-2 border-pink-400/30 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
              <div className="absolute inset-0 w-16 h-16 mx-auto border border-cyan-400/40 rounded-full animate-ping opacity-0 group-hover:opacity-100 delay-150"></div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 group-hover:text-pink-300 transition-all duration-300 group-hover:scale-105">
              100% Seguro
            </h3>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
              Encriptación de nivel empresarial y protocolos de seguridad que protegen tus datos las 24/7
            </p>
            
            {/* Indicadores de seguridad con animación */}
            <div className="mt-4 space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
              <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                <span>AES-256 Encryption</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-300"></div>
                <span>ISO 27001 Certified</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Estadísticas adicionales con animación de contador */}
        <div className="mt-20 text-center transform opacity-0 translate-y-8 animate-stats-appear">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2 group cursor-default">
              <div className="text-3xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                99.9%
              </div>
              <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Uptime</div>
            </div>
            <div className="space-y-2 group cursor-default">
              <div className="text-3xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                10K+
              </div>
              <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Empresas</div>
            </div>
            <div className="space-y-2 group cursor-default">
              <div className="text-3xl font-black bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                1M+
              </div>
              <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Usuarios</div>
            </div>
            <div className="space-y-2 group cursor-default">
              <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                24/7
              </div>
              <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Soporte</div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-delay {
          0%, 30% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes expand-line {
          0%, 40% { width: 0; }
          100% { width: 6rem; }
        }
        
        @keyframes slide-up {
          0%, 50% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up-delay {
          0%, 60% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up-delay-2 {
          0%, 70% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes stats-appear {
          0%, 80% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
          25% { transform: translate(10px, -15px) scale(1.1); opacity: 0.8; }
          50% { transform: translate(-5px, -25px) scale(0.9); opacity: 1; }
          75% { transform: translate(-15px, -10px) scale(1.05); opacity: 0.7; }
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
          33% { transform: translate(-12px, 18px) scale(1.2); opacity: 0.9; }
          66% { transform: translate(8px, -12px) scale(0.8); opacity: 0.6; }
        }
        
        @keyframes float-3 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
          20% { transform: translate(15px, 10px) scale(1.15); opacity: 0.4; }
          40% { transform: translate(-8px, 20px) scale(0.95); opacity: 0.8; }
          60% { transform: translate(12px, -15px) scale(1.1); opacity: 0.6; }
          80% { transform: translate(-20px, 5px) scale(0.85); opacity: 0.9; }
        }
        
        @keyframes float-4 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.3; }
          50% { transform: translate(20px, -20px) rotate(180deg); opacity: 0.7; }
        }
        
        @keyframes float-5 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.4; }
          33% { transform: translate(-15px, 25px) rotate(120deg); opacity: 0.6; }
          66% { transform: translate(25px, -15px) rotate(240deg); opacity: 0.3; }
        }
        
        @keyframes float-6 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); opacity: 0.5; }
          25% { transform: translate(8px, -12px) scale(1.3) rotate(90deg); opacity: 0.8; }
          50% { transform: translate(-10px, -8px) scale(0.7) rotate(180deg); opacity: 0.3; }
          75% { transform: translate(-15px, 15px) scale(1.1) rotate(270deg); opacity: 0.6; }
        }
        
        @keyframes gradient-shift {
          0%, 100% { opacity: 1; transform: translateY(0px); }
          50% { opacity: 0.7; transform: translateY(-10px); }
        }
        
        @keyframes gradient-shift-reverse {
          0%, 100% { opacity: 0.8; transform: translateX(0px); }
          50% { opacity: 0.4; transform: translateX(15px); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 1.2s ease-out forwards;
        }
        
        .animate-fade-in-delay {
          animation: fade-in-delay 1.8s ease-out forwards;
        }
        
        .animate-expand-line {
          animation: expand-line 2s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slide-up 1.5s ease-out forwards;
        }
        
        .animate-slide-up-delay {
          animation: slide-up-delay 1.5s ease-out forwards;
        }
        
        .animate-slide-up-delay-2 {
          animation: slide-up-delay-2 1.5s ease-out forwards;
        }
        
        .animate-stats-appear {
          animation: stats-appear 2s ease-out forwards;
        }
        
        .animate-float-1 {
          animation: float-1 15s ease-in-out infinite;
        }
        
        .animate-float-2 {
          animation: float-2 12s ease-in-out infinite 2s;
        }
        
        .animate-float-3 {
          animation: float-3 18s ease-in-out infinite 1s;
        }
        
        .animate-float-4 {
          animation: float-4 10s ease-in-out infinite 3s;
        }
        
        .animate-float-5 {
          animation: float-5 14s ease-in-out infinite 1.5s;
        }
        
        .animate-float-6 {
          animation: float-6 8s ease-in-out infinite 4s;
        }
        
        .animate-gradient-shift {
          animation: gradient-shift 20s ease-in-out infinite;
        }
        
        .animate-gradient-shift-reverse {
          animation: gradient-shift-reverse 25s ease-in-out infinite reverse;
        }
      `}</style>
    </section>
  );
}