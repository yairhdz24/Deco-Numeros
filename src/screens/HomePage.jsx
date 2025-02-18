"use client"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay, EffectFade } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/effect-fade"
import { ShoppingCart, ArrowRight, Sun, Palette, Shield, Star } from "lucide-react"
import BrandShowcase from "../components/BrandShowcase"
import StatsCounter from "../components/StatsCounter"
import AboutUs from "../components/AboutUs"
import ScrollToTop from "../components/ScrollToTop"
import "../css/hero.css"
import image_1 from "../assets/images/deconumeros_products/imagen_38.jpg"
import image_2 from "../assets/images/deconumeros_products/imagen_25.jpg"
import image_3 from "../assets/images/deconumeros_products/imagen_50.jpg"
import image_19 from "../assets/images/deconumeros_products/imagen_19.jpg"
import image_4 from "../assets/images/deconumeros_products/imagen_27.jpg"
import image_5 from "../assets/images/deconumeros_products/imagen_26.jpg"
import image_6 from "../assets/images/deconumeros_products/imagen_1.jpg"

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    title: ["INNOVACIÓN QUE", "TRANSFORMA"],
    subtitle: ["TECNOLOGÍA Y ESTILO", "PARA TU VIDA"],
  },
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    title: ["DISEÑO ÚNICO,", "IMPACTO TOTAL"],
    subtitle: ["DALE A TU ESPACIO UN", "TOQUE EXTRAORDINARIO"],
  },
]

const featuredProducts = [
  {
    id: 1,
    name: "Letrero Empresarial Moderno",
    image: image_4,
    description: "Letras negras con acabado mate sobre una pared beige, ideal para interiores elegantes.",
    style: "Moderno",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Letrero Residencial Minimalista",
    image: image_19,
    description: "Letras metálicas en una fachada moderna, perfectas para casas con diseño contemporáneo.",
    style: "Elegante",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Letrero Comercial Luminoso",
    image: image_5,
    description: "Letras iluminadas con luz LED, destacando en entornos nocturnos y comerciales.",
    style: "Contemporáneo",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Número Metálico Residencial",
    image: image_6,
    description: "Números metálicos montados sobre un muro de piedra, brindando un toque sofisticado.",
    style: "Premium",
    rating: 5.0,
  },
];


const HomePage = () => {
  return (
    <div className="bg-[#F5F5F0]">
      {/* Hero Section */}
      <section className="relative h-[85vh] sm:h-screen">
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          effect="fade"
          pagination={{
            el: ".custom-pagination",
            clickable: true,
            renderBullet: (index, className) => `<span class="${className}"></span>`,
          }}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="h-full hero-swiper"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full w-full overflow-hidden">
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.1 }}
                  transition={{ duration: 8, ease: "linear" }}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 0.8 }}
                      className="space-y-4 sm:space-y-6 lg:space-y-8"
                    >
                      <div className="space-y-2 sm:space-y-4">
                        {slide.title.map((line, i) => (
                          <motion.h1
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 + 0.5 }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-wide hero-text"
                          >
                            {line}
                          </motion.h1>
                        ))}
                        {slide.subtitle.map((line, i) => (
                          <motion.p
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 + 1 }}
                            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 font-light tracking-wide"
                          >
                            {line}
                          </motion.p>
                        ))}
                      </div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5 }}
                        className="flex justify-center mt-6 sm:mt-8 lg:mt-10"
                      >
                        <Link
                          to="/catalogo"
                          className="hero-button secondary group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg lg:text-xl font-medium rounded-lg text-white bg-amber-600 hover:bg-amber-700 transition-all duration-300 transform hover:scale-105"
                        >
                          <ShoppingCart className="mr-2 group-hover:translate-x-1 transition-transform" size={24} />
                          <span>Explora nuestro catálogo</span>
                        </Link>
                      </motion.div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination absolute bottom-6 sm:bottom-8 left-0 right-0 flex justify-center space-x-2 sm:space-x-3" />
      </section>

      {/* Featured Products */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <span className="text-amber-600 font-medium mb-2 block text-sm sm:text-base lg:text-lg">
              Nuestros Diseños Destacados
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Elegancia en cada detalle
            </h2>
            <div className="w-24 sm:w-32 lg:w-40 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group h-full"
              >
                <div className="relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 group-hover:shadow-xl h-full flex flex-col">
                  <div className="aspect-square overflow-hidden">
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-3 flex-grow">{product.description}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-sm font-medium text-amber-600">Estilo {product.style}</span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="text-sm font-medium text-gray-700">{product.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
            <Link
              to="/catalogo"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border border-transparent text-base sm:text-lg lg:text-xl font-medium rounded-lg text-white bg-amber-600 hover:bg-amber-700 transition-all duration-300 transform hover:scale-105"
            >
              Ver todo el catálogo
              <ArrowRight className="ml-2" size={24} />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <AboutUs />

      {/* Letreros Luminosos Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <span className="text-amber-500 font-medium mb-2 block text-sm sm:text-base lg:text-lg">
              Ilumina tu Negocio
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Letreros Luminosos Personalizados
            </h2>
            <div className="w-24 sm:w-32 lg:w-40 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full" />
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-left"
              >
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8">
                  Dale vida a tus ideas con nuestros letreros luminosos personalizados. Creamos diseños únicos que
                  destacan tu marca y transforman cualquier espacio.
                </p>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-4">
                    <Sun className="text-amber-500 h-8 w-8 sm:h-10 sm:w-10" />
                    <span className="text-white text-base sm:text-lg lg:text-xl">Iluminación LED de alta calidad</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Palette className="text-amber-500 h-8 w-8 sm:h-10 sm:w-10" />
                    <span className="text-white text-base sm:text-lg lg:text-xl">
                      Diseños totalmente personalizables
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Shield className="text-amber-500 h-8 w-8 sm:h-10 sm:w-10" />
                    <span className="text-white text-base sm:text-lg lg:text-xl">Materiales premium y duraderos</span>
                  </div>
                </div>
                <Link
                  to="/personalizar-letrero"
                  className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 mt-8 sm:mt-10 border border-transparent text-base sm:text-lg lg:text-xl font-medium rounded-lg text-gray-900 bg-amber-500 hover:bg-amber-400 transition-all duration-300 transform hover:scale-105"
                >
                  Personaliza tu Letrero
                  <ArrowRight className="ml-2 -mr-1 h-5 w-5 sm:h-6 sm:w-6" />
                </Link>
              </motion.div>
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4 sm:gap-6"
              >
                <div className="relative overflow-hidden rounded-lg shadow-xl">
                  <img
                    src={image_2}
                    // src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DGEQENYgpG0tYZCr9CJwJVbZZB1Da0.png"
                    alt="Victoria Spa illuminated sign"
                    className="w-full h-40 sm:h-48 lg:h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="relative overflow-hidden rounded-lg shadow-xl">
                  <img
                    // src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mT12pdMLOAJJQ5rpmEoZfk2P9FMtTx.png"
                    src={image_3}
                    alt="Neon astronaut sign"
                    className="w-full h-40 sm:h-48 lg:h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="relative overflow-hidden rounded-lg shadow-xl col-span-2">
                  <img
                    src={image_1}
                    // src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IL5ZA5WawmQ4G7nXdrGeJRJR4pMrLU.png"
                    alt="Medical Versailles illuminated sign"
                    className="w-full h-40 sm:h-48 lg:h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <BrandShowcase />
      <StatsCounter />
      <ScrollToTop />
    </div>
  )
}

export default HomePage

