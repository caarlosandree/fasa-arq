import Image from 'next/image'

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=1000&auto=format&fit=crop"
              alt="Escritório"
              width={1000}
              height={500}
              className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-xl"
            />
          </div>
          <div className="md:w-1/2 space-y-6">
            <span className="text-stone-500 uppercase tracking-widest text-sm border-l-2 border-stone-800 pl-4">
              Sobre o Estúdio
            </span>
            <h2 className="text-4xl md:text-5xl font-light leading-tight text-stone-900">
              Criamos espaços que <br /> transcendem o tempo.
            </h2>
            <p className="text-stone-600 leading-relaxed text-lg font-light">
              Na Fasa Arquitetura, acreditamos que cada linha desenhada deve ter
              um propósito. Nossa abordagem une o rigor técnico da engenharia com
              a sensibilidade artística, resultando em projetos que não apenas
              abrigam pessoas, mas elevam suas experiências de vida.
            </p>
            <p className="text-stone-600 leading-relaxed font-light">
              Especialistas em design contemporâneo, buscamos a essência dos
              materiais naturais e a pureza das formas geométricas.
            </p>
            <div className="pt-4">
              <div className="h-12 w-48 border-t border-stone-300 pt-2">
                <p className="text-stone-400 text-sm font-serif italic">
                  FASA Arquitetos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
