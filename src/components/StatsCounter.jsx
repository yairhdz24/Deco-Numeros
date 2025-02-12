"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Coffee, CheckCircle, Users, FolderCheck, Award } from "lucide-react"

const stats = [
  {
    number: 857,
    label: "PROYECTOS",
    sublabel: "COMPLETADOS",
    icon: <FolderCheck className="w-8 h-8" />,
  },
  {
    number: 754,
    label: "CLIENTES",
    sublabel: "FELICES",
    icon: <Users className="w-8 h-8" />,
  },
  {
    number: 492,
    label: "FELICITACIONES",
    sublabel: "RECIBIDAS",
    icon: <CheckCircle className="w-8 h-8" />,
  },
  {
    number: 203,
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
      duration =  1000
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
      className="text-5xl md:text-6xl font-bold text-[#E5A355] tabular-nums"
    >
      0
    </motion.span>
  )
}

const StatsCounter = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-amber-100 rounded-full">
              <Award className="w-8 h-8 text-amber-600" />
            </div>
          </div>
          <span className="text-amber-600 font-medium mb-2 block">NUESTROS LOGROS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Números que Hablan por Sí Mismos</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full" />
        </motion.div>

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

        {/* Enhanced Mobile Layout */}
        <div className="md:hidden space-y-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex items-center space-x-5"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.2, type: "spring" }}
                className="p-3 rounded-full bg-amber-100 text-amber-500 flex-shrink-0"
              >
                {stat.icon}
              </motion.div>
              <div>
                <Counter number={stat.number} duration={2000} />
                <h3 className="text-lg font-bold text-gray-800 uppercase tracking-wide">{stat.label}</h3>
                <p className="text-amber-600 font-medium uppercase tracking-wide text-sm">{stat.sublabel}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsCounter
