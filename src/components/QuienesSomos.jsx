"use client"

import React from "react"
import { motion } from "framer-motion"
import { Palette, Shield, Sparkles, Building2, Clock, PenTool, ArrowRight, CheckCircle, Star } from "lucide-react"
import { useNavigate } from "react-router-dom"

const QuienesSomos = () => {
  const navigate = useNavigate()

  const features = [
    {
      icon: Shield,
      title: "Diseño y Durabilidad",
      description:
        "Descubre nuestra exclusiva colección de letreros personalizados, diseñados para ofrecer un equilibrio perfecto entre estética y resistencia. Cada pieza es elaborada con materiales de alta calidad para garantizar durabilidad y elegancia.",
      benefits: ["Materiales Premium", "Acabados Duraderos", "Diseños Exclusivos"],
    },
    {
      icon: Building2,
      title: "Impacto Visual en el Exterior",
      description:
        "Mejora la imagen de tu negocio con letreros que destacan. Nuestra variedad de estilos y acabados asegura que tu identidad visual refleje profesionalismo y distinción.",
      benefits: ["Visibilidad Garantizada", "Diseños Profesionales", "Acabados Premium"],
    },
    {
      icon: PenTool,
      title: "Personalización Total",
      description:
        "¡Compra de forma sencilla y rápida! Personaliza tu letrero ideal seleccionando materiales, efectos y tamaño, y obtén un diseño único que se adapte a tu espacio.",
      benefits: ["Proceso Simple", "Diseños a Medida", "Resultados Únicos"],
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 flex items-center justify-center"
          >
            <Star className="w-8 h-8 text-white" />
          </motion.div>
          <span className="text-amber-400 font-medium mb-2 block">¿QUIÉNES SOMOS?</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Expertos en Señalización</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full" />
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="h-full bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-300">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.2, type: "spring" }}
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400/20 to-amber-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                >
                  <feature.icon className="w-8 h-8 text-amber-400" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-amber-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>

                {/* Benefits */}
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                <div className="absolute transform rotate-45 bg-amber-400/20 text-white text-xs font-bold py-1 right-[-35px] top-[15px] w-[120px]" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button
            onClick={() => navigate("/personalizar")}
            className="group inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-amber-500 to-amber-600 rounded-full hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105"
          >
            Cotiza tu Letrero Ahora
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default QuienesSomos

