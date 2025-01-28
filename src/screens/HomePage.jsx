import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { PenTool, Star, ShoppingCart, Quote, Award, Users, ChevronRight } from "lucide-react"
import Historia from "../assets/images/Casa_Deco.jpg"
import deco2 from "../assets/images/Deco2.jpg"
import moderno from "../assets/images/moderno.jpg"
import rustico from "../assets/images/rustico.webp"
import familiar from "../assets/images/familiar.webp"

const productosDestacados = [
  {
    id: 1,
    nombre: "Letrero Familiar Clásico",
    precio: 89.99,
    imagen: familiar,
      // "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    nombre: "Número de Casa Moderno",
    precio: 59.99,
    imagen: moderno,
      // "https://images.unsplash.com/photo-1518707399486-6d702a84ff00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    nombre: "Letrero Rústico",
    precio: 79.99,
    imagen: rustico,
      // "https://images.unsplash.com/photo-1614898983622-f20044c60b30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
]

const testimonios = [
  {
    nombre: "María Fernández",
    texto: "¡Un letrero increíble que ha transformado la entrada de mi casa!",
    imagen: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    nombre: "Carlos Rodríguez",
    texto: "Servicio profesional y diseño personalizado excepcional.",
    imagen: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    nombre: "Laura Martínez",
    texto: "La calidad de los materiales es simplemente impresionante.",
    imagen: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    nombre: "Javier López",
    texto: "Un detalle único que realza la personalidad de mi hogar.",
    imagen: "https://randomuser.me/api/portraits/men/2.jpg",
  },
]

const HomePage = () => {
  return (
    <div className="bg-[#F5F5F0]">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white py-24 text-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80)",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0,0,0,0.4)",
        }}
      >
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 drop-shadow-lg">Letreros Únicos para Tu Hogar</h1>

          <p className="text-xl mb-8 max-w-2xl mx-auto">Personaliza tu espacio con letreros que cuentan tu historia</p>

          <div className="flex justify-center space-x-4">
            <Link
              to="/personalizar"
              className="bg-[#8B7D6B] text-white px-6 py-3 rounded-lg flex items-center hover:bg-[#5D4037] transition duration-300"
            >
              <PenTool className="mr-2" size={24} /> Personalizar
            </Link>

            <Link
              to="/catalogo"
              className="bg-white text-[#5D4037] px-6 py-3 rounded-lg flex items-center hover:bg-[#F0EAE3] transition duration-300"
            >
              <ShoppingCart className="mr-2" size={24} /> Ver Catálogo
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Nuestra Historia */}
      <section className="container mx-auto py-16 px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold mb-6 flex items-center text-[#4A4A4A]">
              <Award className="mr-4 text-[#8B7D6B]" size={40} /> Nuestra Historia
            </h2>
            <p className="text-[#6B6B6B] mb-4 text-lg">
              Fundada en 2015, Deco Numeros nació de la pasión por transformar espacios con diseños personalizados.
              Comenzamos como un pequeño taller familiar y hoy somos líderes en letreros personalizados.
            </p>
            <p className="text-[#6B6B6B] text-lg">
              Nuestra misión es crear productos únicos que reflejen la personalidad de cada hogar, combinando artesanía
              tradicional con tecnología moderna.
            </p>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src={deco2}
            alt="Taller de Deco Numeros"
            className="rounded-lg shadow-lg w-full h-[400px] object-cover"
          />
        </div>
      </section>

      {/* Productos Destacados */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#4A4A4A]">Productos Destacados</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {productosDestacados.map((producto) => (
              <motion.div
                key={producto.id}
                whileHover={{ scale: 1.03 }}
                className="bg-[#F5F5F0] rounded-xl shadow-md overflow-hidden transition duration-300"
              >
                <img
                  src={producto.imagen || "/placeholder.svg"}
                  alt={producto.nombre}
                  className="w-full h-64 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#4A4A4A] mb-2">{producto.nombre}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-[#8B7D6B] font-bold text-2xl">${producto.precio.toFixed(2)}</span>
                    <Link
                      to={`/producto/${producto.id}`}
                      className="bg-[#8B7D6B] text-white px-4 py-2 rounded-lg flex items-center hover:bg-[#5D4037] transition duration-300"
                    >
                      Ver Detalles <ChevronRight size={20} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios en Carrusel */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 flex justify-center items-center text-[#4A4A4A]">
            <Users className="mr-4 text-[#8B7D6B]" size={40} />
            Lo Que Dicen Nuestros Clientes
          </h2>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
            }}
          >
            {testimonios.map((testimonio, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-lg flex items-start"
                >
                  <img
                    src={testimonio.imagen || "/placeholder.svg"}
                    alt={testimonio.nombre}
                    className="w-20 h-20 rounded-full mr-6 object-cover border-4 border-[#F0EAE3]"
                  />

                  <div>
                    <Quote className="text-[#8B7D6B] mb-2" size={30} />
                    <p className="italic mb-4 text-[#6B6B6B]">"{testimonio.texto}"</p>
                    <h4 className="font-semibold text-[#4A4A4A]">- {testimonio.nombre}</h4>
                    <div className="flex text-[#FFD700] mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={20} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #5D4037 !important;
        }
        .swiper-pagination-bullet-active {
          background: #5D4037 !important;
        }
      `}</style> */}
    </div>
  )
}

export default HomePage

