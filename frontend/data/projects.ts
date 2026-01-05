import type { Project } from '@/types/home'

export const projects: Project[] = [
  {
    id: 1,
    title: 'Residência Arcos',
    category: 'Residencial',
    location: 'Jurerê Internacional, Florianópolis',
    year: '2024',
    area: '450m²',
    investment: 'R$ 3.2M',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop',
    desc: 'Concreto e luz natural em harmonia.',
    concept:
      'O desafio foi criar privacidade em um lote de esquina sem perder a conexão com a luz solar. A solução veio através de grandes empenas de concreto curvo que abraçam a casa, criando pátios internos protegidos.',
    execution:
      'Utilizamos concreto aparente ripado moldado in loco. O desafio técnico foi a curvatura das vigas de balanço de 4 metros.',
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop',
    ],
  },
  {
    id: 2,
    title: 'Loft Vanguarda',
    category: 'Interiores',
    location: 'Centro, São Paulo',
    year: '2023',
    area: '120m²',
    investment: 'R$ 850k',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop',
    desc: 'Minimalismo urbano no coração da cidade.',
    concept:
      'Transformar um antigo galpão industrial em um refúgio de silêncio. A paleta monocromática serve como pano de fundo para a coleção de arte do cliente.',
    execution:
      'Restauração do piso original de madeira e instalação de caixilharia acústica de alta performance.',
    gallery: [
      'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1593696140826-c58b5e636894?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1484154218962-a1c002085d2f?q=80&w=800&auto=format&fit=crop',
    ],
  },
  {
    id: 3,
    title: 'Sede Horizon',
    category: 'Comercial',
    location: 'Alphaville, Barueri',
    year: '2023',
    area: '1.200m²',
    investment: 'R$ 5.5M',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop',
    desc: 'Espaços corporativos que inspiram produtividade.',
    concept:
      'A transparência como valor corporativo traduzida em arquitetura. Divisórias de vidro e um átrio central conectam todos os departamentos visualmente.',
    execution:
      'Estrutura metálica aparente e lajes steel deck para agilidade na obra. Sistema de automação predial integrado.',
    gallery: [
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1565514020176-db7936a537f6?q=80&w=800&auto=format&fit=crop',
    ],
  },
  {
    id: 4,
    title: 'Casa da Mata',
    category: 'Residencial',
    location: 'Serra da Mantiqueira, MG',
    year: '2022',
    area: '320m²',
    investment: 'R$ 2.1M',
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop',
    desc: 'Integração total com a natureza.',
    concept:
      'Elevar a casa do solo para preservar a topografia e a vegetação nativa. A casa funciona como um mirante para o vale.',
    execution:
      'Estrutura mista de pedra local e madeira laminada colada (MLC). Telhado verde para conforto térmico.',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop',
    ],
  },
]

export function getProjectById(id: number): Project | undefined {
  return projects.find((project) => project.id === id)
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(
    (project) =>
      project.title.toLowerCase().replace(/\s+/g, '-') === slug.toLowerCase()
  )
}
