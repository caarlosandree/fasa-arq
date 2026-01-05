'use client'

import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Navigation } from '@/components/home/Navigation'
import { HeroSection } from '@/components/home/HeroSection'
import { AboutSection } from '@/components/home/AboutSection'
import { PortfolioSection } from '@/components/home/PortfolioSection'
import { ServicesSection } from '@/components/home/ServicesSection'
import { ContactSection } from '@/components/home/ContactSection'
import { Footer } from '@/components/home/Footer'
import { ProjectDetailView } from '@/components/home/ProjectDetailView'
import { useProjectStore } from '@/stores/projectStore'

export function HomePageContent() {
  const { activeView } = useProjectStore()

  // Scroll to top when changing views
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [activeView])

  return (
    <AnimatePresence mode="wait">
      {activeView === 'home' ? (
        <div
          key="home"
          className="font-sans text-stone-800 bg-stone-50 selection:bg-stone-200"
        >
          <Navigation />
          <HeroSection />
          <AboutSection />
          <PortfolioSection />
          <ServicesSection />
          <ContactSection />
          <Footer />
        </div>
      ) : (
        <div key="project">
          <Navigation />
          <ProjectDetailView />
        </div>
      )}
    </AnimatePresence>
  )
}
