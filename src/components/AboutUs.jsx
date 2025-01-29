"use client"

import React from "react"
import { motion } from "framer-motion"
import { Home, Building2, Palette, Laptop } from "lucide-react"

const services = [
  {
    icon: <Home className="w-12 h-12" />,
    title: "FABRICANTE DE NUMEROS RESIDENCIALES",
    description: "Sugerimos la mejor opción para lograr el último detalle que armoniza su hogar o negocio",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: <Building2 className="w-12 h-12" />,
    title: "FABRICANTE DE ANUNCIOS LUMINOSOS",
    description: "Materializamos sus logotipos logrando la mejor imagen para su negocio",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    icon: <Palette className="w-12 h-12" />,
    title: "FABRICANTE DE MUROS 3D",
    description: "Elaboramos diversas opciones en diferentes materiales paredes 3d dando vida a su espacio",
    gradient: "from-amber-500 to-amber-600",
  },
  {
    icon: <Laptop className="w-12 h-12" />,
    title: "VENTANAS INTELIGENTES",
    description:
      "Dele un toque de modernidad a su casa, y automatice algunos rincones de su hogar con estas ventanas con tecnología IoT.",
    gradient: "from-emerald-500 to-emerald-600",
  },
]

const AboutUs = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-amber-400 font-medium mb-2 block">NUESTRA ESPECIALIDAD</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">¿QUE HACEMOS?</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div
                className={`p-6 rounded-xl bg-gradient-to-br ${service.gradient} hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full`}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.2, type: "spring" }}
                  className="w-20 h-20 rounded-full bg-white/10 text-white flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">{service.title}</h3>
                <p className="text-white/80 text-center leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutUs

