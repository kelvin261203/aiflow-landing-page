import React from 'react'

export default function Card({ 
  children, 
  className = '', 
  variant = 'default',
  padding = 'default',
  hover = true,
  ...props 
}) {
  const baseClasses = 'rounded-lg transition-all duration-200'
  
  const variants = {
    default: 'bg-white border border-gray-200 shadow-sm',
    elevated: 'bg-white shadow-lg border border-gray-100',
    outline: 'bg-white border-2 border-gray-200',
    ghost: 'bg-gray-50 border border-transparent',
    gradient: 'bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100'
  }
  
  const paddings = {
    none: '',
    sm: 'p-4',
    default: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  }
  
  const hoverEffect = hover ? 'hover:shadow-lg hover:scale-105' : ''

  return (
    <div
      className={`
        ${baseClasses} 
        ${variants[variant]} 
        ${paddings[padding]} 
        ${hoverEffect} 
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  )
}

// Componentes adicionales para casos específicos
export function FeatureCard({ icon, title, description, className = '' }) {
  return (
    <Card variant="elevated" className={`text-center ${className}`}>
      <div className="flex justify-center mb-4">
        <div className="bg-blue-100 p-3 rounded-full">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Card>
  )
}

export function PricingCard({ 
  plan, 
  price, 
  period = 'mes', 
  features = [], 
  popular = false,
  className = '' 
}) {
  return (
    <Card 
      variant={popular ? 'gradient' : 'elevated'} 
      className={`relative ${className}`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Badge variant="primary">Más Popular</Badge>
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">{plan}</h3>
        <div className="mb-4">
          <span className="text-4xl font-bold">${price}</span>
          <span className="text-gray-600">/{period}</span>
        </div>
      </div>
      
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      
      <button className={`w-full py-3 rounded-lg font-semibold transition-colors duration-200 ${
        popular 
          ? 'bg-blue-600 text-white hover:bg-blue-700' 
          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
      }`}>
        Seleccionar Plan
      </button>
    </Card>
  )
}