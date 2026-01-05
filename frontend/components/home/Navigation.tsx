'use client'

import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X, ArrowLeft } from 'lucide-react'
import { useScroll } from '@/hooks/useScroll'
import { useProjectStore } from '@/stores/projectStore'
import type { NavLink } from '@/types/home'

const navLinks: NavLink[] = [
  { name: 'Início', id: 'home' },
  { name: 'O Estúdio', id: 'about' },
  { name: 'Projetos', id: 'portfolio' },
  { name: 'Serviços', id: 'services' },
  { name: 'Contato', id: 'contact' },
]

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { scrolled, scrollTo } = useScroll(navLinks)
  const { activeView, closeProject } = useProjectStore()

  // Detectar se estamos em uma rota de projeto
  const isProjectPage = pathname?.startsWith('/projeto/')

  const handleScrollTo = (id: string) => {
    scrollTo(id)
    setIsMenuOpen(false)
  }

  const handleBackToHome = () => {
    closeProject()
    setIsMenuOpen(false)
    if (isProjectPage) {
      router.push('/#portfolio')
    } else {
      setTimeout(() => {
        const element = document.getElementById('portfolio')
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button
          type="button"
          onClick={
            activeView === 'project' || isProjectPage
              ? handleBackToHome
              : () => handleScrollTo('home')
          }
          className={`text-2xl font-bold tracking-[0.2em] cursor-pointer uppercase z-50 transition-colors flex items-center gap-2 ${
            activeView === 'project' || isProjectPage
              ? 'text-stone-900'
              : scrolled
                ? 'text-stone-900'
                : 'text-white'
          }`}
        >
          {(activeView === 'project' || isProjectPage) && (
            <ArrowLeft size={20} className="md:hidden" />
          )}
          Fasa<span className="font-light">.Arq</span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12">
          {activeView === 'home' && !isProjectPage ? (
            navLinks.map((link) => (
              <button
                key={link.name}
                type="button"
                onClick={() => handleScrollTo(link.id)}
                className={`text-sm uppercase tracking-widest transition-colors relative group ${
                  scrolled
                    ? 'text-stone-900 hover:text-stone-500'
                    : 'text-white hover:text-stone-200'
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-2 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${
                    scrolled ? 'bg-stone-800' : 'bg-white'
                  }`}
                ></span>
              </button>
            ))
          ) : (
            <button
              type="button"
              onClick={handleBackToHome}
              className="text-sm uppercase tracking-widest hover:opacity-70 transition-opacity flex items-center gap-2 text-stone-900"
            >
              <ArrowLeft size={16} /> Voltar ao Início
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className={`md:hidden z-50 focus:outline-none transition-colors ${
            activeView === 'project' || isProjectPage
              ? 'text-stone-900'
              : scrolled
                ? 'text-stone-800'
                : 'text-white'
          }`}
          onClick={
            activeView === 'home' && !isProjectPage
              ? () => setIsMenuOpen(!isMenuOpen)
              : handleBackToHome
          }
          aria-label={
            activeView === 'home' && !isProjectPage ? 'Toggle menu' : 'Voltar'
          }
        >
          {activeView === 'home' &&
            !isProjectPage &&
            (isMenuOpen ? <X size={28} /> : <Menu size={28} />)}
          {(activeView === 'project' || isProjectPage) && (
            <ArrowLeft size={28} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-stone-100 flex flex-col justify-center items-center space-y-8 transition-transform duration-500 md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {navLinks.map((link) => (
          <button
            key={link.name}
            type="button"
            onClick={() => handleScrollTo(link.id)}
            className="text-2xl font-light uppercase tracking-widest hover:text-stone-500 transition-colors"
          >
            {link.name}
          </button>
        ))}
      </div>
    </nav>
  )
}
