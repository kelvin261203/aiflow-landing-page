import React from 'react'

export default function Badge({ 
  children, 
  variant = 'default', 
  size = 'default',
  className = '',
  ...props 
}) {
  const baseClasses = 'inline-flex items-center font-medium rounded-full transition-colors'
  
  const variants = {
    default: 'bg-gray-100 text-gray-800',
    primary: 'bg-blue-100 text-blue-800',
    secondary: 'bg-purple-100 text-purple-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    danger: 'bg-red-100 text-red-800',
    info: 'bg-cyan-100 text-cyan-800',
    dark: 'bg-gray-800 text-gray-100',
    outline: 'border border-gray-300 text-gray-700 bg-transparent'
  }
  
  const sizes = {
    sm: 'px-2 py-1 text-xs',
    default: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base'
  }

  return (
    <span
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}

// Badges específicos para casos comunes
export function StatusBadge({ status, className = '' }) {
  const statusVariants = {
    active: 'success',
    inactive: 'default',
    pending: 'warning',
    error: 'danger'
  }
  
  return (
    <Badge variant={statusVariants[status]} className={className}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </Badge>
  )
}

export function CategoryBadge({ category, className = '' }) {
  return (
    <Badge variant="primary" size="sm" className={className}>
      {category}
    </Badge>
  )
}

export function NewBadge({ className = '' }) {
  return (
    <Badge variant="success" size="sm" className={`animate-pulse ${className}`}>
      ¡Nuevo!
    </Badge>
  )
}

export function PopularBadge({ className = '' }) {
  return (
    <Badge variant="warning" className={className}>
      🔥 Popular
    </Badge>
  )
}