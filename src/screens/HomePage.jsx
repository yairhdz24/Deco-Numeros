"use client"

import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay, EffectFade } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/effect-fade"
import { ShoppingCart, ArrowRight, ChevronDown, Palette, Star } from "lucide-react"
import InfiniteBanner from "../components/InfiniteBar"
import ProductCategories from "./ProductCategories"
import StatsCounter from "../components/StatsCounter"
import AboutUs from "../components/AboutUs"
import "../css/hero.css"
import BrandShowcase from "../components/BrandShowcase"
import QuienesSomos from "../components/QuienesSomos"

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    title: ["INNOVACIÓN QUE TRANSFORMA"],
    subtitle: ["TECNOLOGÍA Y ESTILO PARA TU VIDA"],
  },
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    title: ["DISEÑO ÚNICO, IMPACTO TOTAL"],
    subtitle: ["DALE A TU ESPACIO UN TOQUE EXTRAORDINARIO"],
  },
]

const featuredProducts = [
  {
    id: 1,
    name: "Número Moderno D15",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/03-722lzbLaBLhyrU5L47MUEAgqmLha6U.png",
    description: "Acabado metálico sobre panel de piedra",
    style: "Moderno",
  },
  {
    id: 2,
    name: "Letrero Vertical Ochenta",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/07-KoKUkc6iT5DsIyFzGQOtyEasnyYyPy.png",
    description: "Diseño vertical elegante",
    style: "Elegante",
  },
  {
    id: 3,
    name: "Número 94 Transparente",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/02-yB9i450qaB0ezOqpIWWyvhpZTC3rGy.png",
    description: "Acrílico transparente con números metálicos",
    style: "Contemporáneo",
  },
  {
    id: 4,
    name: "Número 23 Premium",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01-aWsu7hXeDjCEvdLM31CM06HB6YSL7a.png",
    description: "Panel negro con números metálicos",
    style: "Premium",
  },
]

const brands = [
  {
    id: 1,
    name: "Chrome",
    logo: "/path-to-chrome-logo.png",
    description: "Elegancia moderna con acabados metálicos brillantes",
  },
  {
    id: 2,
    name: "Bauhaus",
    logo: "/path-to-bauhaus-logo.png",
    description: "Diseño funcional inspirado en la escuela Bauhaus",
  },
  {
    id: 3,
    name: "Gera",
    logo: "/path-to-gera-logo.png",
    description: "Innovación en iluminación y diseño contemporáneo",
  },
  {
    id: 4,
    name: "Bosquino",
    logo: "/path-to-bosquino-logo.png",
    description: "Materiales naturales con un toque rústico moderno",
  },
]

const HomePage = () => {
  return (
    <div className="bg-[#F5F5F0]">
      {/* Hero Section */}
      <section className="relative h-screen">
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          effect="fade"
          pagination={{
            el: ".custom-pagination",
            clickable: true,
            renderBullet: (index, className) => `<span class="${className}"></span>`,
          }}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="h-full hero-swiper"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-screen w-full overflow-hidden">
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

                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 0.8 }}
                      className="space-y-8"
                    >
                      <div className="space-y-4">
                        {slide.title.map((line, i) => (
                          <motion.h1
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 + 0.5 }}
                            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-wide hero-text"
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
                            className="text-lg sm:text-xl md:text-3xl text-white/90 font-light tracking-wide"
                          >
                            {line}
                          </motion.p>
                        ))}
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5 }}
                        className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-8"
                      >
                        <Link to="/personalizar" className="hero-button primary group">
                          <span className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 rounded-lg" />
                          <span className="relative flex items-center justify-center">
                            <Palette className="mr-2" size={20} />
                            <span className="relative z-10">Personaliza el tuyo</span>
                          </span>
                        </Link>

                        <Link to="/catalogo" className="hero-button secondary group">
                          <span className="absolute inset-0 border-2 border-white rounded-lg group-hover:border-amber-400 transition-colors" />
                          <span className="relative flex items-center justify-center">
                            <ShoppingCart className="mr-2 group-hover:translate-x-1 transition-transform" size={20} />
                            <span>Explora nuestro catálogo</span>
                          </span>
                        </Link>
                      </motion.div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="custom-pagination" />
      </section>

      {/* Featured Products */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Nuestros Diseños Destacados</h2>
            <p className="text-xl text-gray-600">Descubre la elegancia en cada detalle</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-xl bg-white shadow-lg">
                  <div className="aspect-square overflow-hidden">
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-200">{product.description}</p>
                    <div className="flex items-center mt-4">
                      <span className="text-sm font-medium text-amber-400">Estilo {product.style}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Showcase */}
      <QuienesSomos />
      <BrandShowcase />

      {/* <ProductCategories /> */}

      {/* Stats Counter Section */}
      <StatsCounter />

      {/* About Us Section */}
      <AboutUs />

      <InfiniteBanner />
    </div>
  )
}

export default HomePage

