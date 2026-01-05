'use client'

import Image from 'next/image'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion' // Requer: npm install framer-motion

export function HeroSection() {
  // Função simples de scroll nativo, removendo a dependência de hooks externos
  const handleScrollToPortfolio = () => {
    const element = document.getElementById('portfolio')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Variantes de animação para orquestrar a entrada dos elementos
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Atraso entre cada elemento filho
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } // Easing suave
    },
  }

  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-stone-950"
    >
      {/* Camada da Imagem de Fundo com efeito de Zoom lento */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          <Image
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000&auto=format&fit=crop"
            alt="Arquitetura Moderna Minimalista"
            fill
            priority
            quality={90}
            className="object-cover"
          />
        </motion.div>
        
        {/* Overlay com Gradiente para melhor leitura de texto */}
        <div className="absolute inset-0 bg-stone-900/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-stone-950/30" />
      </div>

      {/* Conteúdo Central */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Tagline / Nome da Empresa */}
          <motion.h2 
            variants={itemVariants}
            className="text-xs md:text-sm font-medium uppercase tracking-[0.4em] mb-6 text-stone-300 border border-stone-400/30 py-2 px-4 rounded-full backdrop-blur-sm bg-white/5"
          >
            FASA Arquitetos
          </motion.h2>

          {/* Título Principal */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 leading-[1.1] tracking-tight text-shadow-lg"
          >
            Exploramos o <span className="font-semibold text-white">Design</span>
            <br />
            e provocamos uma <span className="font-serif italic font-normal text-stone-200">nova experiência</span>
          </motion.h1>

          {/* Botão de Ação (Substituindo componente externo por Tailwind puro) */}
          <motion.button
            variants={itemVariants}
            onClick={handleScrollToPortfolio}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group mt-6 flex items-center gap-3 px-8 py-4 bg-transparent border border-white/30 text-white hover:bg-white hover:text-stone-900 transition-all duration-500 rounded-sm uppercase tracking-widest text-sm"
          >
            Ver Projetos
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </motion.button>
        </motion.div>
      </div>

      {/* Indicador de Scroll Animado */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-20 text-white/70 hover:text-white transition-colors"
        onClick={handleScrollToPortfolio}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-widest opacity-60">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={28} strokeWidth={1.5} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}