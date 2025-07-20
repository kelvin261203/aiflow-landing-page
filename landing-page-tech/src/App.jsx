import React from 'react'
import Header from './components/layout/Header'
import HeroSection from './components/sections/HeroSection'
import FeaturesSection from './components/sections/FeaturesSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import PricingSection from './components/sections/PricingSection'
import CTASection from './components/sections/CTASection'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default App