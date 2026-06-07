'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import MagneticButton from '@/components/common/MagneticButton'

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section
      ref={containerRef}
      id="contact"
      className="relative min-h-screen py-32 px-8 bg-bg-primary flex items-center overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent-glow via-bg-primary to-bg-primary opacity-40 pointer-events-none" />

      <div className="container-max text-center">
        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-7xl md:text-8xl lg:text-9xl font-clash font-bold tracking-tighter leading-none mb-8">
            LET'S BUILD
            <br />
            SOMETHING
            <br />
            EXTRAORDINARY
          </h2>
          <p className="text-xl text-text-secondary font-satoshi max-w-2xl mx-auto mt-8">
            Ready to collaborate on your next project? Let's create something amazing together.
          </p>
        </motion.div>

        {/* Contact methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-center items-center gap-12 my-24"
        >
          {/* Email */}
          <div className="text-center">
            <p className="text-sm font-montreal text-text-secondary tracking-widest mb-3">EMAIL</p>
            <MagneticButton href="mailto:hello@neelpatel.tech">
              hello@neelpatel.tech
            </MagneticButton>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-12 bg-accent-primary/30" />

          {/* Social */}
          <div className="flex gap-8">
            {[
              { label: 'GitHub', url: '#' },
              { label: 'LinkedIn', url: '#' },
              { label: 'Twitter', url: '#' },
            ].map((social) => (
              <MagneticButton key={social.label} href={social.url}>
                {social.label}
              </MagneticButton>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-32 pt-12 border-t border-accent-primary/20 text-text-secondary font-general text-sm"
        >
          <p>
            © 2025 Neel Patel. Crafted with motion & intention.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
