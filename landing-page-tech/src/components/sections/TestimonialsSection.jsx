import React, { useState } from 'react'
import { Star, Quote } from 'lucide-react'

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      name: "María García",
      role: "CEO, TechStart",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
      content: "Esta plataforma transformó completamente nuestro flujo de trabajo. La productividad de nuestro equipo aumentó un 300%.",
      rating: 5,
      company: "TechStart"
    },
    {
      name: "Carlos Mendoza",
      role: "Director de Marketing",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "Increíble facilidad de uso y resultados excepcionales. Nuestras campañas nunca habían sido tan efectivas.",
      rating: 5,
      company: "Digital Pro"
    },
    {
      name: "Ana Rodríguez",
      role: "Fundadora, CreativeHub",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "El soporte al cliente es extraordinario y la plataforma supera todas nuestras expectativas. Altamente recomendado.",
      rating: 5,
      company: "CreativeHub"
    }
  ]

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Descubre por qué miles de empresas confían en nosotros
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="mb-8">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-8 max-w-4xl mx-auto relative group hover:border-purple-500/50 transition-all duration-500">
            {/* Quote Icon */}
            <div className="absolute -top-4 left-8">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-full">
                <Quote className="w-6 h-6 text-white" />
              </div>
            </div>

            <div className="pt-4">
              {/* Content */}
              <p className="text-xl text-gray-200 mb-6 leading-relaxed">
                "{testimonials[activeTestimonial].content}"
              </p>

              {/* Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[activeTestimonial].avatar}
                  alt={testimonials[activeTestimonial].name}
                  className="w-12 h-12 rounded-full border-2 border-purple-500/50"
                />
                <div className="text-center">
                  <h4 className="font-bold text-white">{testimonials[activeTestimonial].name}</h4>
                  <p className="text-gray-400 text-sm">
                    {testimonials[activeTestimonial].role}, {testimonials[activeTestimonial].company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-6 mb-8">
          <button
            onClick={prevTestimonial}
            className="p-2 rounded-full bg-gray-700 hover:bg-purple-600 transition-all duration-300 text-white"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeTestimonial
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextTestimonial}
            className="p-2 rounded-full bg-gray-700 hover:bg-purple-600 transition-all duration-300 text-white"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Mini Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                index === activeTestimonial
                  ? 'bg-purple-600/20 border-purple-500/50'
                  : 'bg-gray-800/30 border-gray-700/50 hover:border-purple-500/30'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <p className="text-white text-sm font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-xs">{testimonial.company}</p>
                </div>
              </div>
              <div className="flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}