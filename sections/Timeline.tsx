'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const timelineData = [
  {
    year: '2022',
    title: 'Web Development',
    description: 'Started learning HTML, CSS, and JavaScript fundamentals',
  },
  {
    year: '2023',
    title: 'Frontend Engineering',
    description: 'Mastered React.js and built first production projects',
  },
  {
    year: '2024',
    title: 'Motion Design',
    description: 'Deep dive into GSAP, Framer Motion, and animation systems',
  },
  {
    year: '2024',
    title: 'AI/GIS Systems',
    description: 'Built satellite imagery-based land use classification system',
  },
  {
    year: '2025',
    title: 'Creative Technology',
    description: 'Focusing on cinematic interfaces and premium digital experiences',
  },
]

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.to(lineRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 50%',
        end: 'bottom 50%',
        scrub: 1,
      },
      scaleY: 1,
      transformOrigin: 'top',
    })
  }, [])

  return (
    <section ref={containerRef} className="relative py-32 px-8 bg-bg-secondary overflow-hidden">
      <div className="container-max">
        {/* Header */}
        <div className="mb-24">
          <span className="text-sm font-montreal text-accent-primary tracking-widest">JOURNEY</span>
          <h2 className="text-6xl md:text-7xl font-clash font-bold mt-4">Timeline</h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl">
          {/* Vertical line */}
          <div
            ref={lineRef}
            className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-accent-primary to-transparent scale-y-0"
          />

          {/* Timeline items */}
          <div className="space-y-12 pl-16">
            {timelineData.map((item, i) => (
              <div key={i} className="relative">
                {/* Dot */}
                <div className="absolute -left-16 top-0 w-6 h-6 rounded-full border-2 border-accent-primary bg-bg-primary" />

                {/* Content */}
                <div className="group cursor-pointer">
                  <p className="text-sm font-montreal text-accent-primary tracking-widest mb-2">
                    {item.year}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-clash font-bold mb-3 group-hover:text-accent-primary transition">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary font-satoshi max-w-xl">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
