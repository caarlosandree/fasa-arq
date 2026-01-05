'use client'

import { useState, useEffect } from 'react'

interface UseScrollReturn {
  scrolled: boolean
  activeSection: string
  scrollTo: (id: string) => void
}

export function useScroll(navLinks: Array<{ id: string }>): UseScrollReturn {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Detectar seção ativa baseado na posição do scroll
      const sections = navLinks.map((link) => link.id)
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Verificar estado inicial

    return () => window.removeEventListener('scroll', handleScroll)
  }, [navLinks])

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(id)
    }
  }

  return { scrolled, activeSection, scrollTo }
}
