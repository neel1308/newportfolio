'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const capabilities = [
  {
    category: 'Frontend Engineering',
    skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Performance'],
    color: 'from-blue-500/20 to-blue-500/5',
  },
  {
    category: 'Motion Design',
    skills: ['GSAP', 'Framer Motion', 'ScrollTrigger', 'Lenis', 'Micro-interactions'],
    color: 'from-purple-500/20 to-purple-500/5',
  },
  {
    category: 'AI Systems',
    skills: ['Machine Learning', 'AI Integration', 'Data Visualization', 'APIs', 'LLMs'],
    color: 'from-cyan-500/20 to-cyan-500/5',
  },
  {
    category: 'UI/UX Design',
    skills: ['Component Systems', 'Accessibility', 'User Research', 'Interaction Design', 'Design Systems'],
    color: 'from-pink-500/20 to-pink-500/5',
  },
  {
    category: '3D & Interactive',
    skills: ['Three.js', 'React Three Fiber', 'WebGL', 'Blender', 'Canvas API'],
    color: 'from-green-500/20 to-green-500/5',
  },
  {
    category: 'Creative Technology',
    skills: ['Storytelling', 'Innovation', 'Product Thinking', 'Startup Mindset', 'Digital Strategy'],
    color: 'from-orange-500/20 to-orange-500/5',
  },
]

export default function CapabilityMatrix() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll('[data-card]')
    if (!cards) return

    cards.forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
          markers: false,
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.1,
      })
    })
  }, [])

  return (
    <section ref={containerRef} className="relative py-32 px-8 bg-bg-secondary overflow-hidden">
      <div className="container-max">
        {/* Header */}
        <div className="mb-24">
          <span className="text-sm font-montreal text-accent-primary tracking-widest">CAPABILITIES</span>
          <h2 className="text-6xl md:text-7xl font-clash font-bold mt-4 mb-8">
            Skill Matrix
          </h2>
          <p className="text-text-secondary font-satoshi text-lg max-w-2xl">
            A comprehensive set of capabilities spanning frontend engineering, motion design, and creative technology.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, i) => (
            <motion.div
              key={i}
              data-card
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className={`p-8 rounded-xl bg-gradient-to-br ${capability.color} border border-accent-primary/20 hover:border-accent-primary/50 transition backdrop-blur-sm cursor-pointer`}>
                <h3 className="text-xl font-clash font-bold mb-6 group-hover:text-accent-primary transition">
                  {capability.category}
                </h3>
                <div className="space-y-3">
                  {capability.skills.map((skill, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
                      <span className="text-sm font-general text-text-secondary group-hover:text-text-primary transition">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
