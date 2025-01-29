"use client"

import React, { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Coffee, CheckCircle, Users, FolderCheck } from "lucide-react"

const stats = [
  {
    number: 85,
    label: "PROYECTOS",
    sublabel: "COMPLETADOS",
    icon: <FolderCheck className="w-8 h-8" />,
  },
  {
    number: 127,
    label: "CLIENTES",
    sublabel: "FELICIES",
    icon: <Users className="w-8 h-8" />,
  },
  {
    number: 36,
    label: "FELICITACIONES",
    sublabel: "RECIBIDAS",
    icon: <CheckCircle className="w-8 h-8" />,
  },
  {
    number: 74,
    label: "TAZAS",
    sublabel: "DE CAFÉ",
    icon: <Coffee className="w-8 h-8" />,
  },
]

const Counter = ({ number, duration }) => {
  const counterRef = useRef(null)
  const controls = useAnimation()
  const isInView = useInView(counterRef, { once: true })

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.5,
        },
      })
    }
  }, [isInView, controls])

  useEffect(() => {
    if (isInView) {
      const start = 0
      const end = Number.parseInt(number)
      const range = end - start
      let current = start
      const increment = end > start ? 1 : -1
      const stepTime = Math.abs(Math.floor(duration / range))

      const timer = setInterval(() => {
        current += increment
        if (counterRef.current) {
          counterRef.current.textContent = current.toString()
        }
        if (current === end) {
          clearInterval(timer)
        }
      }, stepTime)

      return () => clearInterval(timer)
    }
  }, [number, duration, isInView])

  return (
    <motion.span
      ref={counterRef}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={controls}
      className="text-6xl md:text-7xl font-bold text-[#E5A355] tabular-nums"
    >
      0
    </motion.span>
  )
}

const StatsCounter = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="flex flex-col items-center space-y-4">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.2, type: "spring" }}
                  className="p-4 rounded-full bg-amber-100 text-amber-500"
                >
                  {stat.icon}
                </motion.div>
                <Counter number={stat.number} duration={2000} />
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-gray-800">{stat.label}</h3>
                  <p className="text-gray-600 font-medium">{stat.sublabel}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex items-start space-x-4"
            >
              <div className="flex-shrink-0">
                <Counter number={stat.number} duration={2000} />
              </div>
              <div className="pt-3">
                <h3 className="text-xl font-bold text-gray-800 uppercase tracking-wide">{stat.label}</h3>
                <p className="text-gray-800 font-medium uppercase tracking-wide">{stat.sublabel}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsCounter

