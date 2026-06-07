export interface Project {
  id: number
  title: string
  category: string
  description: string
  features: string[]
  tech: string[]
  year: string
  featured?: boolean
  image?: string
  link?: string
}

export interface TimelineItem {
  year: string
  title: string
  description: string
}

export interface Capability {
  category: string
  skills: string[]
  color: string
}

export interface SocialLink {
  label: string
  url: string
  icon?: string
}

export interface ContactInfo {
  email: string
  github: string
  linkedin: string
  twitter: string
}
