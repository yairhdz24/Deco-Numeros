"use client"
import { motion } from "framer-motion"
import { Home, Building2, Palette, Laptop } from "lucide-react"
import { Link } from "react-router-dom"

const services = [
  {
    icon: <Home className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "NÚMEROS RESIDENCIALES",
    description: "Armonizamos su hogar o negocio con el último detalle",
    gradient: "from-amber-400 to-amber-600",
    link: "/numeros-residenciales",
  },
  {
    icon: <Building2 className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "ANUNCIOS LUMINOSOS",
    description: "Materializamos logotipos para la mejor imagen de su negocio",
    gradient: "from-amber-400 to-amber-600",
    link: "/anuncios-luminosos",
  },
  {
    icon: <Palette className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "MUROS 3D",
    description: "Damos vida a su espacio con paredes 3D en diversos materiales",
    gradient: "from-amber-400 to-amber-600",
    link: "/muros-3d",
  },
  {
    icon: <Laptop className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "VENTANAS INTELIGENTES",
    description: "Modernizamos su hogar con tecnología IoT en sus ventanas",
    gradient: "from-amber-400 to-amber-600",
    link: "/ventanas-inteligentes",
  },
]

const AboutUs = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')] opacity-10 bg-fixed bg-cover bg-center" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-amber-400 font-semibold mb-2 sm:mb-4 block text-base sm:text-lg uppercase tracking-wider"
          >
            NUESTRA ESPECIALIDAD
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight"
          >
            ¿QUÉ HACEMOS?
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 sm:p-6 hover:bg-white/10 transition-all duration-300 h-full flex flex-col justify-between border border-white/10 hover:border-amber-500/50">
                <div>
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.4, type: "spring", stiffness: 200, damping: 10 }}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-white flex items-center justify-center mb-3 sm:mb-4 mx-auto group-hover:scale-110 transition-transform duration-300"
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2 text-center leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-white/80 text-center text-xs sm:text-sm leading-relaxed">{service.description}</p>
                </div>
                <Link to={service.link}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-3 sm:mt-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-amber-400 to-amber-600 text-white rounded-full font-semibold transition-all duration-300 text-xs uppercase tracking-wider hover:shadow-lg hover:shadow-amber-500/25 w-full"
                  >
                    Saber más
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-amber-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-10 right-10 w-20 h-20 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-10 left-20 w-20 h-20 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
    </section>
  )
}

export default AboutUs

