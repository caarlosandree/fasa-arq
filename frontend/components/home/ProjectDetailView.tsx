'use client'

import Image from 'next/image'
import { ArrowLeft, MapPin, Clock, Layers, DollarSign } from 'lucide-react'
import { motion } from 'framer-motion'
import { useProjectStore } from '@/stores/projectStore'
import { Button } from '@/components/ui/button'

export function ProjectDetailView() {
  const { selectedProject, closeProject } = useProjectStore()

  if (!selectedProject) return null

  const handleBackToHome = () => {
    closeProject()
    setTimeout(() => {
      const element = document.getElementById('portfolio')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="font-sans text-stone-800 bg-white selection:bg-stone-200 min-h-screen"
    >
      {/* Botão Voltar */}
      <div className="pt-24 pb-8 px-6 container mx-auto">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={handleBackToHome}
          className="mb-8 flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors uppercase text-xs tracking-widest"
        >
          <ArrowLeft size={16} /> Voltar ao portfólio
        </motion.button>

        {/* Hero do Projeto */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-12"
        >
          <motion.div variants={itemVariants}>
            <span className="text-stone-500 uppercase tracking-widest text-sm block mb-2">
              {selectedProject.category}
            </span>
            <h1 className="text-5xl md:text-7xl font-light text-stone-900 leading-tight">
              {selectedProject.title}
            </h1>
            <div className="flex items-center gap-2 mt-4 text-stone-400">
              <MapPin size={16} />
              <span className="text-sm font-light uppercase tracking-wider">
                {selectedProject.location}
              </span>
            </div>
          </motion.div>

          {/* Dados Técnicos */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-8 lg:justify-end text-stone-600 border-t lg:border-t-0 lg:border-l border-stone-200 pt-6 lg:pt-0 lg:pl-8"
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-stone-400 mb-1 flex items-center gap-2">
                <Clock size={14} /> Ano
              </p>
              <p className="text-xl font-light">{selectedProject.year}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-stone-400 mb-1 flex items-center gap-2">
                <Layers size={14} /> Área
              </p>
              <p className="text-xl font-light">{selectedProject.area}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-stone-400 mb-1 flex items-center gap-2">
                <DollarSign size={14} /> Investimento
              </p>
              <p className="text-xl font-light">{selectedProject.investment}</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Imagem Principal */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="w-full h-[60vh] md:h-[80vh] bg-stone-200 overflow-hidden mb-16 relative"
        >
          <Image
            src={selectedProject.image}
            alt={selectedProject.title}
            fill
            priority
            quality={90}
            className="object-cover"
          />
        </motion.div>

        {/* Narrativa do Arquiteto */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24"
        >
          {/* O Conceito - Sticky */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-4 sticky top-32 h-fit"
          >
            <h3 className="text-2xl font-light mb-6 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-stone-900"></span> O Conceito
            </h3>
            <p className="text-stone-600 font-light leading-relaxed text-lg">
              &ldquo;{selectedProject.concept}&rdquo;
            </p>
          </motion.div>

          {/* A Execução - Grid de Imagens */}
          <motion.div variants={itemVariants} className="md:col-span-8 space-y-16">
            {/* Grid de 2 imagens com descrição */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative w-full h-[400px] overflow-hidden">
                <Image
                  src={selectedProject.gallery[0]}
                  alt="Detalhe do projeto"
                  fill
                  className="object-cover hover:brightness-90 transition-all duration-500"
                />
              </div>
              <div className="bg-stone-50 p-8 flex flex-col justify-center">
                <h4 className="uppercase tracking-widest text-sm text-stone-400 mb-2">
                  A Execução
                </h4>
                <p className="text-stone-700 font-light leading-relaxed">
                  {selectedProject.execution}
                </p>
              </div>
            </div>

            {/* Imagem Full Width */}
            <div className="relative w-full h-[600px] overflow-hidden">
              <Image
                src={selectedProject.gallery[1]}
                alt="Perspectiva do projeto"
                fill
                className="object-cover"
              />
            </div>

            {/* Grid 2x2 de Detalhes */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative w-full aspect-square overflow-hidden">
                <Image
                  src={selectedProject.gallery[2]}
                  alt="Interior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full aspect-square overflow-hidden">
                <Image
                  src={selectedProject.gallery[3]}
                  alt="Construção"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="bg-stone-900 text-white p-16 text-center mb-12"
        >
          <h3 className="text-3xl font-light mb-6">Gostou deste projeto?</h3>
          <p className="text-stone-400 font-light mb-8 max-w-xl mx-auto">
            Cada projeto é único. Vamos discutir como podemos trazer essa mesma
            excelência para o seu.
          </p>
          <Button
            onClick={() => {
              const element = document.getElementById('contact')
              if (element) {
                closeProject()
                setTimeout(() => {
                  element.scrollIntoView({ behavior: 'smooth' })
                }, 100)
              }
            }}
            className="border border-white bg-transparent hover:bg-white hover:text-stone-900 transition-colors px-8 py-3 uppercase tracking-widest text-sm"
          >
            Iniciar meu projeto
          </Button>
        </motion.div>
      </div>

      {/* Footer Simples */}
      <footer className="bg-stone-50 py-8 border-t border-stone-200 text-center">
        <p className="text-xs uppercase tracking-widest text-stone-400">
          Fasa Arquitetura • {selectedProject.title}
        </p>
      </footer>
    </motion.div>
  )
}
