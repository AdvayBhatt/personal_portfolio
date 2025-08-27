"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface IntroAnimationProps {
  onComplete: () => void
}

export function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  const steps = ["Hello", "I'm Advay", "Aspiring Data Scientist", "Welcome"]

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1)
      } else {
        setTimeout(() => {
          setIsComplete(true)
          setTimeout(onComplete, 800)
        }, 2000)
      }
    }, 1500)

    return () => clearTimeout(timer)
  }, [currentStep, onComplete])

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        >
          <div className="text-center">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 1.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative"
            >
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                {steps[currentStep]}
              </h1>

              {/* Animated underline */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto mt-4 rounded-full"
              />
            </motion.div>

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    x: [0, Math.random() * 200 - 100],
                    y: [0, Math.random() * 200 - 100],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 1,
                  }}
                  className="absolute top-1/2 left-1/2 w-2 h-2 bg-cyan-400 rounded-full"
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
