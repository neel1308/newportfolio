'use client'

import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import Loader from '@/components/common/Loader'
import Cursor from '@/components/common/Cursor'
import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Timeline from '@/sections/Timeline'
import Projects from '@/sections/Projects'
import CapabilityMatrix from '@/sections/CapabilityMatrix'
import Motion from '@/sections/Motion'
import Philosophy from '@/sections/Philosophy'
import Contact from '@/sections/Contact'

export default function Home() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical' as const,
      gestureDirection: 'vertical' as const,
      smoothWheel: true,
      smoothTouch: false,
      infinite: false,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <main className="relative bg-bg-primary overflow-hidden">
      <Loader />
      <Cursor />

      {/* Ambient glow */}
      <div className="ambient-glow" />

      {/* Grain texture */}
      <div className="grain" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 pointer-events-none">
        <div className="flex justify-between items-center px-8 py-6 pointer-events-auto">
          <div className="text-xl font-clash font-bold tracking-wider">NEEL</div>
          <div className="flex gap-6 text-sm font-montreal">
            <a href="#projects" className="text-text-secondary hover:text-accent-primary transition">Work</a>
            <a href="#about" className="text-text-secondary hover:text-accent-primary transition">About</a>
            <a href="#contact" className="text-text-secondary hover:text-accent-primary transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <Hero />
      <About />
      <Timeline />
      <Projects />
      <CapabilityMatrix />
      <Motion />
      <Philosophy />
      <Contact />
    </main>
  )
}
