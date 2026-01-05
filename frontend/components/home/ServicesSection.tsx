import type { Service } from '@/types/home'

const services: Service[] = [
  {
    title: 'Projetos Arquitetônicos',
    desc: 'Concepção completa de residências e edifícios comerciais, do estudo preliminar ao executivo.',
  },
  {
    title: 'Design de Interiores',
    desc: 'Curadoria de mobiliário, texturas e iluminação para criar atmosferas únicas e acolhedoras.',
  },
  {
    title: 'Consultoria & Gestão',
    desc: 'Acompanhamento rigoroso de obras para garantir fidelidade ao projeto e controle de qualidade.',
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-stone-900 text-stone-300">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <span className="text-stone-500 uppercase tracking-widest text-sm">
              Expertise
            </span>
            <h2 className="text-4xl md:text-5xl mt-4 font-light text-white leading-tight">
              Soluções completas <br /> para demandas exigentes.
            </h2>
          </div>
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="border-t border-stone-700 pt-8 hover:border-white transition-colors duration-500 group"
              >
                <h3 className="text-2xl text-white font-light mb-3 group-hover:pl-4 transition-all">
                  {service.title}
                </h3>
                <p className="font-light text-stone-400 group-hover:pl-4 transition-all">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
