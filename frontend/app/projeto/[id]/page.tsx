import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getProjectById } from '@/data/projects'
import { ProjectDetailPage } from '@/components/project/ProjectDetailPage'

interface ProjectPageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params
  const project = getProjectById(Number(id))

  if (!project) {
    return {
      title: 'Projeto não encontrado | Fasa Arquitetura',
    }
  }

  return {
    title: `${project.title} | Fasa Arquitetura`,
    description: project.desc,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params
  const project = getProjectById(Number(id))

  if (!project) {
    notFound()
  }

  return <ProjectDetailPage project={project} />
}
