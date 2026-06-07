'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const projectsData = [
  {
    id: 1,
    title: 'AI-GIS Land Use System',
    category: 'AI / GIS / Frontend',
    description: 'Intelligent satellite imagery analysis for land use classification',
    features: ['Satellite Analysis', 'AI Classification', 'Interactive Mapping', 'Real-time Visualization'],
    tech: ['React', 'Python', 'GIS', 'Machine Learning'],
    year: '2024',
    featured: true,
  },
  {
    id: 2,
    title: 'Premium Dental Platform',
    category: 'UI / UX / Frontend',
    description: 'Modern healthcare platform with premium interactions',
    features: ['Responsive Design', 'Smooth Animations', 'Booking System', 'Elegant Interface'],
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    year: '2024',
  },
  {
    id: 3,
    title: 'Interactive Web Experiments',
    category: 'Creative Development',
    description: 'Collection of immersive motion design experiences',
    features: ['Motion Systems', 'Scroll Storytelling', 'Interactive Elements', 'Creative Coding'],
    tech: ['GSAP', 'Three.js', 'React', 'WebGL'],
    year: '2024',
  },
]

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section
      ref={containerRef}
      id="projects"
      className="relative py-32 px-8 bg-bg-primary overflow-hidden"
    >
      <div className="container-max">
        {/* Header */}
        <div className="mb-32">
          <span className="text-sm font-montreal text-accent-primary tracking-widest">WORK</span>
          <h2 className="text-6xl md:text-7xl font-clash font-bold mt-4">Featured Projects</h2>
          <p className="text-text-secondary mt-6 max-w-2xl font-satoshi text-lg">
            A selection of premium digital experiences that demonstrate cinematic frontend engineering and creative technology.
          </p>
        </div>

        {/* Projects grid */}
        <div className="space-y-24">
          {projectsData.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true, margin: '-100px' }}
              className="group"
            >
              {/* Project card */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className={project.featured ? 'md:order-2' : ''}>
                  <span className="text-sm font-montreal text-accent-primary tracking-widest">
                    {project.category}
                  </span>
                  <h3 className="text-4xl md:text-5xl font-clash font-bold mt-4 mb-6 group-hover:text-accent-primary transition">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary font-satoshi text-lg mb-8">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {project.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-accent-primary" />
                        <span className="text-sm font-general text-text-secondary">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 rounded-full bg-accent-glow text-accent-primary text-xs font-montreal"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-2 text-accent-primary font-montreal text-sm tracking-wider hover:gap-4 transition-all"
                  >
                    View Project →
                  </motion.button>
                </div>

                {/* Visual placeholder */}
                <div className={project.featured ? 'md:order-1' : ''}>
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent-primary/20 to-accent-primary/5 overflow-hidden border border-accent-primary/20 group-hover:border-accent-primary/50 transition">
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-text-secondary font-clash text-lg">
                        {project.year}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider */}
              {i < projectsData.length - 1 && (
                <div className="mt-24 h-px bg-gradient-to-r from-accent-primary/30 via-accent-primary/10 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
