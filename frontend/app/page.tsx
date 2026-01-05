import type { Metadata } from 'next'
import { Navigation } from '@/components/home/Navigation'
import { HeroSection } from '@/components/home/HeroSection'
import { AboutSection } from '@/components/home/AboutSection'
import { PortfolioSection } from '@/components/home/PortfolioSection'
import { ServicesSection } from '@/components/home/ServicesSection'
import { ContactSection } from '@/components/home/ContactSection'
import { Footer } from '@/components/home/Footer'

export const metadata: Metadata = {
  title: 'Fasa Arquitetura | Criamos espaços que transcendem o tempo',
  description:
    'Fasa Arquitetura - Especialistas em design contemporâneo, projetos arquitetônicos, design de interiores e consultoria. Transformamos sua visão em realidade.',
}

export default function Home() {
  return (
    <div className="font-sans text-stone-800 bg-stone-50 selection:bg-stone-200">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
