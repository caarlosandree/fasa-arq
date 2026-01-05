export interface NavLink {
  name: string
  id: string
}

export interface Project {
  id: number
  title: string
  category: string
  image: string
  desc: string
  location: string
  year: string
  area: string
  investment: string
  concept: string
  execution: string
  gallery: string[]
}

export interface Service {
  title: string
  desc: string
}
