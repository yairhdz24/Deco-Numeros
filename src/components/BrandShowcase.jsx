"use client"
import React from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { ArrowRight } from "lucide-react"

// Datos de cada marca con su logo, descripción, detalles y ruta de personalización
const brands = [
  {
    name: "CLASICO",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chrome-mWL3naAbAIIEiB5KAulyedbhZGEiXu.png",
    description: "Números modernos en acabado negro mate",
    details: "Diseño que combina elegancia y modernidad",
    path: "/customize/clasico",
  },
  {
    name: "HERA",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Diseño%20sin%20título-WAcTWNM4gWizEORc5Wq9dTEffiQHNy.png",
    description: "Estilo industrial en acero inoxidable",
    details: "Resistencia y durabilidad con un toque sofisticado",
    path: "/customize/hera",
  },
  {
    name: "BAOLI",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bhaus-vDDk6zgsjAddtfs4acm5e6ouxDQCHh.png",
    description: "Diseño minimalista con acabado cristal",
    details: "Inspirado en la escuela Bauhaus, funcional y estético",
    path: "/customize/baoli",
  },
  {
    name: "BAOLI V",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/boskino-2CoPUf3i92In7CyFPaCXu8ghGLWGlH.png",
    description: "Diseño vertical con elementos naturales",
    details: "La fusión perfecta entre naturaleza y diseño moderno",
    path: "/customize/baoli-v",
  },
  {
    name: "CALIFORNIA",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/classic-soQ1MXBRb0tzIROrCWgcSmSzyVw0AI.png",
    description: "Números elegantes con acabado metálico",
    details: "Elegancia atemporal para espacios distinguidos",
    path: "/customize/california",
  },
  // {
  //   name: "DARK",
  //   logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dark-xzNb0xcok3Ts8hZC2nK0m42DDilqky.png",
  //   description: "Diseño contemporáneo en tonos oscuros",
  //   details: "Sofisticación y contraste para ambientes modernos",
  //   path: "/customize/dark",
  // },
  // {
  //   name: "SOFT LINE",
  //   logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/soft-YTqWjb7dkmBm8FVf9xw4pDxfyJxjmU.png",
  //   description: "Señalización moderna y minimalista",
  //   details: "Simplicidad y elegancia en cada detalle",
  //   path: "/customize/soft-line",
  // },
]

const BrandShowcase = () => {
  const navigate = useNavigate()

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado de la sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-amber-600 font-medium mb-2 block">
            NUESTRAS MARCAS PRINCIPALES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Diseño y Calidad Superior
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full" />
        </motion.div>

        {/* Grid de tarjetas para cada marca */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-xl">
                {/* Contenedor del logo con fondo degradado */}
                <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 p-8">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-amber-50 to-amber-100" />
                  <img
                    src={brand.logo || "/placeholder.svg"}
                    alt={brand.name}
                    className="w-full h-full object-contain filter drop-shadow-xl relative z-10"
                  />
                </div>

                {/* Información de la marca */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {brand.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{brand.description}</p>
                  <p className="text-sm text-gray-500 mb-6">{brand.details}</p>

                  {/* Botón para redirigir a la personalización */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => navigate(brand.path)}
                    className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center transition-all duration-300 hover:shadow-lg"
                  >
                    <span>Personalizar Diseño</span>
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BrandShowcase