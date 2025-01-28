import React from "react"
import { motion } from "framer-motion"
import {
  Truck,
  Shield,
  Scissors,
  Lightbulb,
  CaseSensitiveIcon as LetterCase,
  Clock,
  Flag,
  SignpostBig,
} from "lucide-react"

const features = [
  {
    Icon: Truck,
    title: "ENVÍO NACIONAL",
    description: "Envíos a toda la República",
  },
  {
    Icon: Shield,
    title: "MATERIALES DE ALTA RESISTENCIA",
    description: "Calidad garantizada",
  },
  {
    Icon: Scissors,
    title: "CORTE CNC",
    description: "Precisión milimétrica",
  },
  {
    Icon: Lightbulb,
    title: "ANUNCIOS LUMINOSOS",
    description: "Alta visibilidad",
  },
  {
    Icon: LetterCase,
    title: "LETRAS ACRÍLICAS",
    description: "Diseños personalizados",
  },
  {
    Icon: Clock,
    title: "PRODUCCIÓN 1.5",
    description: "Tiempos óptimos",
  },
  {
    Icon: Flag,
    title: "HECHO EN MÉXICO",
    description: "Calidad nacional",
  },
  {
    Icon: SignpostBig,
    title: "SEÑALÉTICA",
    description: "Señalización profesional",
  },
]

export const InfiniteBanner = () => {
  return (
    <div className="bg-gray-900 py-6 overflow-hidden">
      <div className="relative">
        <div className="flex space-x-12">
          <motion.div
            className="flex space-x-12"
            animate={{
              x: [0, -1920],
            }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {[...features, ...features].map((feature, index) => (
              <div key={index} className="flex flex-col items-center justify-center w-20 shrink-0">
                <feature.Icon className="w-8 h-8 text-white mb-2" />
                <p className="text-white text-[10px] text-center font-medium leading-tight">{feature.title}</p>
                <p className="text-gray-400 text-[8px] text-center mt-0.5 leading-tight">{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default InfiniteBanner

