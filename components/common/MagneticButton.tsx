'use client'

import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface MagneticButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  className?: string
}

export default function MagneticButton({
  children,
  href,
  onClick,
  className = '',
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!buttonRef.current) return

      const rect = buttonRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const distance = 100
      const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX)
      const x = Math.cos(angle) * distance
      const y = Math.sin(angle) * distance

      const distanceToButton = Math.sqrt(
        (e.clientX - centerX) ** 2 + (e.clientY - centerY) ** 2
      )

      if (distanceToButton < distance) {
        setPosition({
          x: x * (1 - distanceToButton / distance),
          y: y * (1 - distanceToButton / distance),
        })
      } else {
        setPosition({ x: 0, y: 0 })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const Tag = href ? 'a' : 'button'

  return (
    <motion.div
      ref={buttonRef}
      animate={position}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      className={`relative ${className}`}
    >
      <Tag
        href={href}
        onClick={onClick}
        className="magnetic-button relative px-8 py-3 rounded-full border border-accent-primary text-accent-primary font-montreal text-sm tracking-wider hover:text-bg-primary transition-colors duration-300"
      >
        {children}
      </Tag>
    </motion.div>
  )
}
