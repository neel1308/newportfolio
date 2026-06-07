'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const philosophies = [
  {
    quote: 'Technology should create emotion.',
    description: 'Beyond functionality, great digital products inspire and delight.',
  },
  {
    quote: 'Motion is communication.',
    description: 'Every animation tells a story and guides the user through experience.',
  },
  {
    quote: 'Details matter.',
    description: 'Micro-interactions and polish are what separate good from exceptional.',
  },
]

export default function Philosophy() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen py-32 px-8 bg-bg-secondary flex items-center overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent-glow via-transparent to-transparent opacity-30 pointer-events-none" />

      <div className="container-max">
        <div className="space-y-24">
          {philosophies.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true, margin: '-50px' }}
              className="max-w-3xl"
            >
              <h3 className="text-5xl md:text-6xl font-clash font-bold mb-6 text-accent-primary">
                {item.quote}
              </h3>
              <p className="text-xl text-text-secondary font-satoshi leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
