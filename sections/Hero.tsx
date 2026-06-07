'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import MagneticButton from '@/components/common/MagneticButton'
import ParticleScene from '@/components/three/ParticleScene'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!titleRef.current) return

    const text = titleRef.current
    const letters = text.querySelectorAll('span')

    gsap.from(letters, {
      duration: 0.8,
      y: 100,
      opacity: 0,
      stagger: 0.05,
      ease: 'power4.out',
    })
  }, [])

  const handleScroll = () => {
    if (containerRef.current) {
      containerRef.current.nextElementSibling?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Three.js background - commented for now as it needs THREE import fix */}
      {/* <ParticleScene /> */}

      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent-glow via-bg-primary to-bg-primary opacity-30 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container-max px-8 text-center">
        {/* Main title */}
        <div ref={titleRef} className="mb-8">
          <h1 className="text-8xl md:text-9xl lg:text-[140px] font-clash font-bold tracking-tighter leading-none">
            {'NEEL'.split('').map((letter, i) => (
              <span key={i} className="inline-block">{letter}</span>
            ))}
            <br />
            {'PATEL'.split('').map((letter, i) => (
              <span key={i} className="inline-block">{letter}</span>
            ))}
          </h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-xl text-text-secondary font-satoshi max-w-2xl mx-auto mb-12"
        >
          Building immersive digital experiences through code, motion & intelligent systems.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex justify-center gap-6"
        >
          <MagneticButton className="group">
            Explore Work
          </MagneticButton>
          <MagneticButton href="mailto:hello@neelpatel.tech" className="group">
            Get in Touch
          </MagneticButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={handleScroll}
        >
          <div className="w-6 h-10 border-2 border-accent-primary rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-accent-primary rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
