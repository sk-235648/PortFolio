// components/TypewriterHeading.js
"use client"
import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'

const TypewriterHeading = ({ text }) => {
  const [displayText, setDisplayText] = useState('')
  const controls = useAnimation()
  const [phase, setPhase] = useState('typing') // typing -> filling -> deleting

  useEffect(() => {
    let currentIndex = 0
    let interval

    const startTyping = () => {
      interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.substring(0, currentIndex))
          currentIndex++
        } else {
          clearInterval(interval)
          setPhase('filling')
          controls.start("visible").then(() => {
            setTimeout(() => {
              setPhase('deleting')
              startDeleting()
            }, 2000) // Pause with full text visible
          })
        }
      }, 100)
    }

    const startDeleting = () => {
      currentIndex = text.length
      interval = setInterval(() => {
        if (currentIndex >= 0) {
          setDisplayText(text.substring(0, currentIndex))
          currentIndex--
        } else {
          clearInterval(interval)
          setPhase('typing')
          setTimeout(startTyping, 500) // Pause before restart
        }
      }, 50) // Faster deletion speed
    }

    startTyping()

    return () => clearInterval(interval)
  }, [text])

  return (
    <div className="relative min-h-[2.5rem]">
      {/* Text with border */}
      <motion.h2
        className="text-2xl font-medium inline-block"
        style={{
          WebkitTextStroke: '1px #f97316',
          color: 'transparent',
        }}
      >
        {displayText}
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="ml-1"
        >
          |
        </motion.span>
      </motion.h2>

      {/* Overlay text that fills progressively */}
      {phase === 'filling' && (
        <motion.h2
          className="text-2xl font-medium absolute top-0 left-0 text-orange-400 overflow-hidden whitespace-nowrap"
          initial={{ width: 0 }}
          animate={controls}
          variants={{
            visible: { width: "100%", transition: { duration: 1.5, ease: "easeInOut" } }
          }}
        >
          {text}
        </motion.h2>
      )}
    </div>
  )
}

export default TypewriterHeading