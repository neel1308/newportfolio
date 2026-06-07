'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

export default function Motion() {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!textRef.current) return

    const text = new SplitType(textRef.current, { types: 'lines' })

    gsap.from(text.lines, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 40%',
        end: 'center 40%',
        scrub: 1,
      },
      opacity: 0.2,
      y: 40,
      stagger: 0.2,
    })

    return () => {
      text.revert()
    }
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen py-32 px-8 bg-bg-primary flex items-center overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent-glow via-transparent to-transparent opacity-40 pointer-events-none" />

      <div className="container-max">
        <div
          ref={textRef}
          className="max-w-5xl space-y-8 text-6xl md:text-7xl lg:text-8xl font-clash font-bold leading-tight tracking-tighter"
        >
          <p>
            I don't just build <span className="text-accent-primary">interfaces</span>.
          </p>
          <p>
            I build <span className="text-accent-primary">experiences</span> that feel <span className="text-accent-primary">alive</span>.
          </p>
          <p>
            Every pixel moves with <span className="text-accent-primary">intention</span>.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-32">
          {[
            { label: 'Projects', value: '15+' },
            { label: 'Animation Libraries', value: '5+' },
            { label: 'Years in Tech', value: '2+' },
          ].map((stat, i) => (
            <div key={i} className="space-y-2">
              <p className="text-text-secondary font-general text-sm tracking-widest">{stat.label}</p>
              <p className="text-3xl md:text-4xl font-clash font-bold text-accent-primary">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
