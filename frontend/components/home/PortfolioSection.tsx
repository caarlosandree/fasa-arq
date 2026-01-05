import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Project } from '@/types/home'

const projects: Project[] = [
  {
    id: 1,
    title: 'Residência Arcos',
    category: 'Residencial',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop',
    desc: 'Concreto e luz natural em harmonia.',
  },
  {
    id: 2,
    title: 'Loft Vanguarda',
    category: 'Interiores',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop',
    desc: 'Minimalismo urbano no coração da cidade.',
  },
  {
    id: 3,
    title: 'Sede Horizon',
    category: 'Comercial',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop',
    desc: 'Espaços corporativos que inspiram produtividade.',
  },
  {
    id: 4,
    title: 'Casa da Mata',
    category: 'Residencial',
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop',
    desc: 'Integração total com a natureza.',
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 bg-stone-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span className="text-stone-500 uppercase tracking-widest text-sm">
              Portfólio Selecionado
            </span>
            <h2 className="text-4xl mt-2 font-light text-stone-900">
              Obras Recentes
            </h2>
          </div>
          <Button
            variant="ghost"
            className="hidden md:flex items-center gap-2 text-stone-800 hover:gap-4 transition-all duration-300 uppercase text-sm tracking-widest"
          >
            Ver todos os projetos <ArrowRight size={16} />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer relative overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden bg-stone-300">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1000}
                  height={750}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="bg-white/95 backdrop-blur-sm p-6 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-xs uppercase tracking-widest text-stone-500">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-light text-stone-900 mt-1">
                    {project.title}
                  </h3>
                  <p className="text-stone-600 mt-2 text-sm font-light border-t border-stone-200 pt-2">
                    {project.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Button
          variant="outline"
          className="md:hidden mt-12 w-full border-stone-800 py-4 uppercase tracking-widest text-sm hover:bg-stone-800 hover:text-white transition-colors"
        >
          Ver todos os projetos
        </Button>
      </div>
    </section>
  )
}
