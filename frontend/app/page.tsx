import type { Metadata } from 'next'
import { HomePageContent } from '@/components/home/HomePageContent'

export const metadata: Metadata = {
  title: 'Fasa Arquitetura | Criamos espaços que transcendem o tempo',
  description:
    'Fasa Arquitetura - Especialistas em design contemporâneo, projetos arquitetônicos, design de interiores e consultoria. Transformamos sua visão em realidade.',
}

export default function Home() {
  return <HomePageContent />
}
