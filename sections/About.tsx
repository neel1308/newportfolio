'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!textRef.current) return

    const text = new SplitType(textRef.current, { types: 'words,chars' })

    gsap.from(text.chars, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 60%',
        end: 'top 30%',
        scrub: 1,
      },
      opacity: 0.3,
      stagger: 0.02,
    })

    return () => {
      text.revert()
    }
  }, [])

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative py-32 px-8 bg-bg-primary overflow-hidden"
    >
      <div className="container-max">
        {/* Header */}
        <div className="mb-24">
          <span className="text-sm font-montreal text-accent-primary tracking-widest">ABOUT</span>
          <h2 className="text-6xl md:text-7xl font-clash font-bold mt-4 mb-8">
            Creative Engineer
          </h2>
        </div>

        {/* Main text */}
        <div
          ref={textRef}
          className="max-w-4xl space-y-6 text-xl md:text-2xl text-text-primary font-satoshi leading-relaxed"
        >
          <p>
            I design and build cinematic digital systems where engineering meets visual storytelling.
          </p>
          <p>
            My work combines precision frontend development with creative motion design, creating experiences that feel alive and intentional.
          </p>
          <p>
            Specializing in React, Next.js, and advanced animation systems, I craft interfaces that communicate through motion and interaction.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mt-24">
          {[
            { value: '2+', label: 'Years Experience' },
            { value: '15+', label: 'Projects Completed' },
            { value: '100%', label: 'Client Satisfaction' },
          ].map((stat, i) => (
            <div key={i} className="space-y-4">
              <div className="text-4xl md:text-5xl font-clash font-bold text-accent-primary">
                {stat.value}
              </div>
              <p className="text-text-secondary font-general">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
