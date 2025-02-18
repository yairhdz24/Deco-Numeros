"use client"

import { Shield, Building2, ArrowRight, Star, Lightbulb, Truck, PenToolIcon as Tool, ThumbsUp } from "lucide-react"
import { useNavigate } from "react-router-dom"

const QuienesSomos = () => {
  const navigate = useNavigate()

  const features = [
    {
      icon: Shield,
      title: "FABRICANTE ESPECIALIZADO",
      description:
        "Más de 25 años fabricando números y letreros de alta calidad con materiales premium, resistentes a la intemperie y aptos para interior y exterior.",
    },
    {
      icon: Building2,
      title: "SEÑALIZACIÓN PROFESIONAL",
      description:
        "Especialistas en números residenciales, señalizaciones y anuncios luminosos personalizados, con instalación limpia y discreta.",
    },
    {
      icon: Lightbulb,
      title: "ILUMINACIÓN LED",
      description:
        "Sistemas de iluminación LED de última generación con opciones de luz cálida y neutra, compatibles con 110V y 220V; se puede agregar un timer para programar el encendido/apagado.",
    },
  ]

  const guaranteeInfo = [
    {
      icon: Truck,
      title: "Entrega Rápida",
      description:
        "5 a 10 días hábiles para pedidos personalizados. Recolección al día siguiente para productos en stock.",
    },
    {
      icon: Shield,
      title: "Garantía de 1 Año",
      description:
        "Cubrimos partes eléctricas por 1 año. No nos responsabilizamos de conexiones mal elaboradas por el usuario.",
    },
    {
      icon: Tool,
      title: "Materiales de Alta Gama",
      description:
        "Fabricados en aluminio o acero, resistentes a cualquier clima. Aptos para interior y exterior.",
    },
    {
      icon: ThumbsUp,
      title: "Durabilidad Comprobada",
      description:
        "Productos con más de 25 años en óptimas condiciones. Calidad que perdura en el tiempo.",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 flex items-center justify-center">
            <Star className="w-10 h-10 text-white" />
          </div>
          <span className="text-amber-400 font-medium mb-2 block text-lg">QUIÉNES SOMOS</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Expertos en Señalización</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full" />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="relative">
              <div className="h-full bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">NUESTRA GARANTÍA Y SERVICIO</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guaranteeInfo.map((item, index) => (
              <div key={index} className="flex items-start space-x-4 bg-gray-800/30 p-6 rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-amber-400">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button
            onClick={() => navigate("/personalizar")}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-amber-500 to-amber-600 rounded-full shadow-lg"
          >
            Cotiza tu Letrero Ahora
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default QuienesSomos
