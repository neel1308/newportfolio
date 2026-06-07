'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 1 },
    exit: {
      opacity: 0,
      transition: { duration: 0.8, ease: 'easeInOut' },
    },
  }

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15 + 0.2,
        duration: 0.8,
        ease: 'easeOut',
      },
    }),
    exit: (i: number) => ({
      opacity: 0,
      y: -20,
      transition: {
        delay: (2 - i) * 0.1,
        duration: 0.6,
      },
    }),
  }

  const progressVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 1.8, ease: 'easeInOut' },
    },
    exit: {
      scaleX: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          exit="exit"
          className="fixed inset-0 bg-bg-primary z-50 flex flex-col items-center justify-center"
        >
          {/* Main text */}
          <div className="text-center space-y-6">
            {['NEEL', 'PATEL'].map((text, i) => (
              <motion.div
                key={text}
                custom={i}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <h1 className="text-7xl md:text-9xl font-clash font-bold tracking-tighter">
                  {text}
                </h1>
              </motion.div>
            ))}
          </div>

          {/* Subtitle */}
          <motion.p
            custom={2}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="text-text-secondary font-montreal text-sm tracking-widest mt-8"
          >
            CREATIVE FRONTEND ENGINEER
          </motion.p>

          {/* Progress bar */}
          <motion.div
            className="absolute bottom-12 left-12 right-12 h-0.5 bg-accent-primary origin-left"
            variants={progressVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
