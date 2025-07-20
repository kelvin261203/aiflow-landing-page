import React, { useState } from 'react'
import { Check, Zap, Crown, Rocket } from 'lucide-react'

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: "Básico",
      icon: Zap,
      price: isAnnual ? 99 : 9,
      period: isAnnual ? "año" : "mes",
      description: "Perfecto para comenzar",
      features: [
        "Hasta 5 proyectos",
        "10GB de almacenamiento",
        "Soporte por email",
        "Análisis básicos",
        "SSL incluido"
      ],
      popular: false,
      color: "from-blue-500 to-purple-600"
    },
    {
      name: "Pro",
      icon: Crown,
      price: isAnnual ? 199 : 19,
      period: isAnnual ? "año" : "mes",
      description: "Para equipos en crecimiento",
      features: [
        "Proyectos ilimitados",
        "100GB de almacenamiento",
        "Soporte 24/7",
        "Análisis avanzados",
        "API personalizada",
        "Integraciones premium"
      ],
      popular: true,
      color: "from-purple-600 to-pink-600"
    },
    {
      name: "Enterprise",
      icon: Rocket,
      price: isAnnual ? 499 : 49,
      period: isAnnual ? "año" : "mes",
      description: "Para grandes empresas",
      features: [
        "Todo de Pro +",
        "Almacenamiento ilimitado",
        "Manager dedicado",
        "SLA garantizado",
        "Configuración personalizada",
        "Auditorías de seguridad"
      ],
      popular: false,
      color: "from-emerald-500 to-teal-600"
    }
  ]

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
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 p-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4">
            Planes y Precios
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto mb-6">
            Elige el plan perfecto para tu negocio
          </p>
          
          {/* Toggle Switch */}
          <div className="flex items-center justify-center gap-4 bg-gray-800/50 backdrop-blur-sm rounded-full p-2 border border-gray-700/50 inline-flex mb-12">
            <span className={`px-4 py-2 text-sm font-medium transition-all ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Mensual
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-14 h-7 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-300 ${isAnnual ? 'shadow-lg shadow-purple-500/25' : ''}`}
            >
              <div className={`absolute top-0.5 w-6 h-6 bg-white rounded-full transition-all duration-300 ${isAnnual ? 'left-7' : 'left-0.5'}`}></div>
            </button>
            <span className={`px-4 py-2 text-sm font-medium transition-all ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Anual
            </span>
            {isAnnual && (
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                -20%
              </span>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon
            return (
              <div
                key={plan.name}
                className={`relative group transition-all duration-500 hover:scale-105 ${
                  plan.popular ? 'md:-mt-8' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-bold px-9 py-1 rounded-full shadow-lg whitespace-nowrap mt-4">
                      MÁS POPULAR
                    </span>
                  </div>
                )}
                
                <div className={`relative bg-gray-800/50 backdrop-blur-sm rounded-xl border ${
                  plan.popular ? 'border-purple-500/50 shadow-xl shadow-purple-500/25' : 'border-gray-700/50'
                } p-6 h-full group-hover:border-purple-500/50 transition-all duration-500`}>
                  
                  {/* Card Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-5 rounded-2xl group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    {/* Plan Header */}
                    <div className="text-center mb-6">
                      <div className={`inline-flex p-2 rounded-full bg-gradient-to-r ${plan.color} mb-3`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                      <p className="text-gray-400 text-sm">{plan.description}</p>
                    </div>

                    {/* Price */}
                    <div className="text-center mb-6">
                      <div className="flex items-end justify-center gap-1">
                        <span className="text-3xl font-black text-white">${plan.price}</span>
                        <span className="text-gray-400 mb-1">/{plan.period}</span>
                      </div>
                      {isAnnual && (
                        <p className="text-xs text-green-400">
                          Ahorras ${(plan.name === 'Básico' ? 9*12 - 99 : plan.name === 'Pro' ? 19*12 - 199 : 49*12 - 499)}
                        </p>
                      )}
                    </div>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {plan.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className={`flex-shrink-0 w-4 h-4 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center`}>
                            <Check className="w-2 h-2 text-white" />
                          </div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:shadow-purple-500/25'
                        : 'bg-gray-700 text-white hover:bg-gray-600'
                    }`}>
                      {plan.popular ? 'Comenzar' : 'Elegir'}
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}