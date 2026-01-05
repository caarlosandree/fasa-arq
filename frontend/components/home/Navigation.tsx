'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useScroll } from '@/hooks/useScroll'
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
  const { scrolled, scrollTo } = useScroll(navLinks)

  const handleScrollTo = (id: string) => {
    scrollTo(id)
    setIsMenuOpen(false)
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
          onClick={() => handleScrollTo('home')}
          className={`text-2xl font-bold tracking-[0.2em] cursor-pointer uppercase z-50 transition-colors ${
            scrolled ? 'text-stone-900' : 'text-white'
          }`}
        >
          Fasa<span className="font-light">.Arq</span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12">
          {navLinks.map((link) => (
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
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className={`md:hidden z-50 focus:outline-none transition-colors ${
            scrolled ? 'text-stone-800' : 'text-white'
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
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
