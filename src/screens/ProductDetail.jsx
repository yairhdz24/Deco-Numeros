import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Thumbs } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { ShoppingCart, Truck, Star, Gift, ChevronDown } from "lucide-react"
import toast, { Toaster } from "react-hot-toast"
// import familia from "../assets/images/familiar.webp"
// import familia1 from "../assets/images/familiar1.webp"
// import familia2 from "../assets/images/familiar2.webp"



const productosData = [
  {
    id: 1,
    nombre: "Letrero Familiar Clásico",
    descripcion:
      "Elegante letrero personalizado para la entrada de tu hogar. Perfecto para dar la bienvenida a tus invitados con un toque personal y sofisticado.",
    precio: 89.99,
    imagenes: [
      // familia,
      // familia1,
      // familia2,
    ],
    materiales: ["Madera", "Metal", "Cristal", "Plástico"],
    fuentes: ["Roboto", "Playfair Display", "Montserrat"],
    estilos: ["Rústico", "Moderno", "Minimalista"],
  },
]

const ProductDetail = () => {
  const { id } = useParams()
  const [producto, setProducto] = useState(null)
  const [customText, setCustomText] = useState("")
  const [selectedMaterial, setSelectedMaterial] = useState("")
  const [selectedFont, setSelectedFont] = useState("Roboto")
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  useEffect(() => {
    const productoEncontrado = productosData.find((p) => p.id === Number.parseInt(id))
    setProducto(productoEncontrado)
    setSelectedMaterial(productoEncontrado?.materiales[0] || "")
  }, [id])

  const agregarAlCarrito = () => {
    if (!customText.trim()) {
      toast.error("Por favor, ingresa un texto personalizado")
      return
    }

    const productoPersonalizado = {
      id: `custom-${Date.now()}`,
      nombre: producto.nombre,
      texto: customText,
      material: selectedMaterial,
      fuente: selectedFont,
      precio: producto.precio,
    }

    toast.success("¡Producto añadido al carrito!")
  }

  if (!producto) return <div className="text-center py-12">Cargando...</div>

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-b from-[#F5F5F0] to-white">
      <Toaster position="top-right" />
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/2 space-y-4">
          <Swiper
            modules={[Navigation, Pagination, Thumbs]}
            navigation
            pagination={{ clickable: true }}
            thumbs={{ swiper: thumbsSwiper }}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            {producto.imagenes.map((imagen, index) => (
              <SwiperSlide key={index}>
                <img
                  src={imagen || "/placeholder.svg"}
                  alt={`Vista ${index + 1}`}
                  className="w-full h-[300px] md:h-[400px] object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            watchSlidesProgress
            className="product-thumbnails"
          >
            {producto.imagenes.map((imagen, index) => (
              <SwiperSlide key={index}>
                <img
                  src={imagen || "/placeholder.svg"}
                  alt={`Miniatura ${index + 1}`}
                  className="w-full h-20 object-cover rounded-md cursor-pointer border-2 border-transparent hover:border-[#8B7D6B] transition-all duration-300"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="w-full lg:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold text-[#4A4A4A]">{producto.nombre}</h1>
          <p className="text-[#6B6B6B] text-lg">{producto.descripcion}</p>
          <div className="text-3xl font-bold text-[#8B7D6B]">${producto.precio.toFixed(2)}</div>

          <div className="space-y-4 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-[#4A4A4A] mb-4">Personaliza tu Letrero</h2>

            <div>
              <label className="block text-sm font-medium text-[#4A4A4A] mb-1">Texto Personalizado *</label>
              <input
                type="text"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                placeholder="Escribe tu texto aquí"
                className="w-full border-2 border-[#8B7D6B] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#5D4037] transition-all duration-300"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#4A4A4A] mb-1">Material</label>
              <div className="relative">
                <select
                  value={selectedMaterial}
                  onChange={(e) => setSelectedMaterial(e.target.value)}
                  className="w-full border-2 border-[#8B7D6B] rounded-md px-4 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-[#5D4037] transition-all duration-300"
                >
                  {producto.materiales.map((material) => (
                    <option key={material} value={material}>
                      {material}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#8B7D6B]" size={20} />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#4A4A4A] mb-1">Fuente</label>
              <div className="relative">
                <select
                  value={selectedFont}
                  onChange={(e) => setSelectedFont(e.target.value)}
                  className="w-full border-2 border-[#8B7D6B] rounded-md px-4 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-[#5D4037] transition-all duration-300"
                  style={{ fontFamily: selectedFont }}
                >
                  {producto.fuentes.map((fuente) => (
                    <option key={fuente} value={fuente} style={{ fontFamily: fuente }}>
                      {fuente}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#8B7D6B]" size={20} />
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-[#4A4A4A] mb-2">Vista Previa</h3>
              <div
                className="p-6 border-2 border-[#8B7D6B] rounded-md text-center bg-[#F5F5F0] shadow-inner"
                style={{
                  fontFamily: selectedFont,
                  fontSize: "24px",
                }}
              >
                {customText || "Tu texto personalizado aquí"}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-[#4A4A4A]">¿Por qué elegir nuestro producto?</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-[#6B6B6B]">
                <Star className="mr-2 text-[#8B7D6B]" size={20} />
                Calidad premium garantizada
              </li>
              <li className="flex items-center text-[#6B6B6B]">
                <Gift className="mr-2 text-[#8B7D6B]" size={20} />
                Perfecto para regalo
              </li>
              <li className="flex items-center text-[#6B6B6B]">
                <Truck className="mr-2 text-[#8B7D6B]" size={20} />
                Envío gratis en pedidos superiores a $100
              </li>
            </ul>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={agregarAlCarrito}
            className="w-full bg-[#8B7D6B] hover:bg-[#5D4037] text-white py-4 rounded-md flex items-center justify-center transition-colors duration-300 text-lg font-semibold shadow-md"
          >
            <ShoppingCart className="mr-2" size={24} />
            Añadir al Carrito
          </motion.button>
        </div>
      </div>
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

export default ProductDetail

