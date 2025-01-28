import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-fade"
import { PenTool, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react"
import InfiniteBanner from "../components/InfiniteBar"
import ProductCategories from "./Productcategories"
// import "../../number-quoter.css"
import "../css/hero.css"
const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    title: ["TECNOLOGÍAS", "INNOVADORAS"],
    subtitle: ["PARA SU HOGAR", "O NEGOCIO"],
  },
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    title: ["DISEÑOS", "EXCLUSIVOS"],
    subtitle: ["QUE DESTACAN", "TU ESPACIO"],
  },
]

const CustomNavButton = ({ direction, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className={`custom-nav-button ${direction}`}
    onClick={onClick}
  >
    {direction === "prev" ? <ChevronLeft size={28} /> : <ChevronRight size={28} />}
  </motion.button>
)

const HomePage = () => {
  return (
    <div className="bg-[#F5F5F0]">
      {/* Hero Section */}
      <section className="relative h-screen">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          effect="fade"
          navigation={{
            prevEl: ".custom-nav-button.prev",
            nextEl: ".custom-nav-button.next",
          }}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
            renderBullet: (index, className) => `<span class="${className}"></span>`,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="h-full hero-swiper"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-screen w-full overflow-hidden">
                {/* Background Image with Blur */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] scale-110"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    filter: "blur(8px)",
                    transform: "scale(1.1)",
                  }}
                />

                {/* Clear Image Overlay */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                  }}
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.8 }}
                      className="text-center space-y-6"
                    >
                      <div className="space-y-2">
                        {slide.title.map((line, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.2 + 0.5 }}
                          >
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-wider hero-text">
                              {line}
                            </h1>
                          </motion.div>
                        ))}
                        {slide.subtitle.map((line, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.2 + 1 }}
                          >
                            <p className="text-2xl md:text-4xl lg:text-5xl text-white/90 font-light tracking-wide">
                              {line}
                            </p>
                          </motion.div>
                        ))}
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5 }}
                        className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
                      >
                        <Link to="/personalizar" className="hero-button primary">
                          <PenTool className="mr-2" size={24} />
                          Personalizar
                        </Link>

                        <Link to="/catalogo" className="hero-button secondary">
                          <ShoppingCart className="mr-2" size={24} />
                          Ver Catálogo
                        </Link>
                      </motion.div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation */}
        <CustomNavButton direction="prev" />
        <CustomNavButton direction="next" />

        {/* Custom Pagination */}
        <div className="custom-pagination" />

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="scroll-indicator"
        >
          <span className="text-white/80 text-sm tracking-wider font-light">Descubre más</span>
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
            className="scroll-line"
          >
            <div className="scroll-dot" />
          </motion.div>
        </motion.div>
      </section>

      <ProductCategories />
      <InfiniteBanner />
    </div>
  )
}

export default HomePage

