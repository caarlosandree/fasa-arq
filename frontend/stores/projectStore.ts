import { create } from 'zustand'
import type { Project } from '@/types/home'

type ActiveView = 'home' | 'project'

interface ProjectStore {
  activeView: ActiveView
  selectedProject: Project | null
  openProject: (project: Project) => void
  closeProject: () => void
}

export const useProjectStore = create<ProjectStore>((set) => ({
  activeView: 'home',
  selectedProject: null,
  openProject: (project) =>
    set({ activeView: 'project', selectedProject: project }),
  closeProject: () => set({ activeView: 'home', selectedProject: null }),
}))
