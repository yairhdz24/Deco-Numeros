"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Tag, Filter, X, Ruler } from "lucide-react"

// Importa las imágenes
import imagen_1 from "../assets/images/deconumeros_products/imagen_1.jpg"
import imagen_2 from "../assets/images/deconumeros_products/imagen_23.jpg"
import imagen_3 from "../assets/images/deconumeros_products/imagen_3.jpg"
import imagen_4 from "../assets/images/deconumeros_products/imagen_4.jpg"
import imagen_5 from "../assets/images/deconumeros_products/imagen_21.jpg"
import imagen_6 from "../assets/images/deconumeros_products/imagen_6.jpg"
import imagen_7 from "../assets/images/deconumeros_products/imagen_7.jpg"
import imagen_8 from "../assets/images/deconumeros_products/imagen_8.jpg"
import imagen_9 from "../assets/images/deconumeros_products/imagen_9.jpg"
import imagen_10 from "../assets/images/deconumeros_products/imagen_10.jpg"

// Datos de productos (sin cambios)
const productosData = [
  {
    id: 1,
    nombre: "Números Modernos Plateados",
    descripcion:
      "Números individuales en acabado plateado brillante, diseño minimalista sin placa. Ideal para fachadas modernas.",
    precio: 1395,
    imagen: imagen_1,
    categorias: ["Sin Placa", "Plateado"],
    material: "Acabado Plateado",
    opciones: ["Luz Cálida", "Luz Neutra", "Sin Luz"],
  },
  {
    id: 2,
    nombre: "Números Elegantes Negro Mate",
    descripcion:
      "Números en elegante acabado negro mate, diseño sobrio y contemporáneo. Perfecto para exteriores modernos.",
    precio: 1295,
    imagen: imagen_2,
    categorias: ["Sin Placa", "Negro Mate"],
    material: "Acabado Negro Mate",
    opciones: ["Luz Cálida", "Luz Neutra", "Sin Luz"],
  },
  {
    id: 3,
    nombre: "Números Espejo Plateados",
    descripcion: "Set de tres números con acabado espejo plateado. Efecto reflectante de alta calidad.",
    precio: 1195,
    imagen: imagen_3,
    categorias: ["Sin Placa", "Espejo"],
    material: "Acabado Espejo",
    opciones: ["Luz Cálida", "Luz Neutra", "Sin Luz"],
  },
  {
    id: 4,
    nombre: "Números Negro Mate Premium",
    descripcion: "Conjunto de tres números en acabado negro mate, diseño elegante y contemporáneo.",
    precio: 1095,
    imagen: imagen_4,
    categorias: ["Sin Placa", "Negro Mate"],
    material: "Acabado Negro Mate",
    opciones: ["Luz Cálida", "Luz Neutra", "Sin Luz"],
  },
  {
    id: 5,
    nombre: "Placa LED Moderna",
    descripcion: "Placa negra elegante con números integrados y sistema de iluminación LED cálida incluido.",
    precio: 1495,
    imagen: imagen_5,
    categorias: ["Con Placa", "LED"],
    material: "Placa Negra Premium",
    opciones: ["Luz Cálida", "Luz Neutra"],
  },
  {
    id: 6,
    nombre: "Números Plateados Deluxe",
    descripcion: "Números en acabado plateado premium, diseño sofisticado para entradas elegantes.",
    precio: 1195,
    imagen: imagen_6,
    categorias: ["Sin Placa", "Plateado"],
    material: "Acabado Plateado",
    opciones: ["Luz Cálida", "Luz Neutra", "Sin Luz"],
  },
  {
    id: 7,
    nombre: "Números Plateados Premium",
    descripcion: "Números con acabado plateado de alta calidad, diseño moderno y elegante.",
    precio: 1195,
    imagen: imagen_7,
    categorias: ["Sin Placa", "Plateado"],
    material: "Acabado Plateado",
    opciones: ["Luz Cálida", "Luz Neutra", "Sin Luz"],
  },
  {
    id: 8,
    nombre: "Números Especiales Plateados",
    descripcion: "Diseño especial con acabado plateado único, perfecto para casas contemporáneas.",
    precio: 1195,
    imagen: imagen_8,
    categorias: ["Sin Placa", "Plateado"],
    material: "Acabado Plateado",
    opciones: ["Luz Cálida", "Luz Neutra", "Sin Luz"],
  },
  {
    id: 9,
    nombre: "Placa LED Contemporánea",
    descripcion: "Placa moderna con números integrados e iluminación LED, acabado premium.",
    precio: 1295,
    imagen: imagen_9,
    categorias: ["Con Placa", "LED"],
    material: "Placa Premium",
    opciones: ["Luz Cálida", "Luz Neutra"],
  },
  {
    id: 10,
    nombre: "Números Plateados Exclusivos",
    descripcion: "Números individuales en acabado plateado exclusivo, diseño limpio sin placa.",
    precio: 1195,
    imagen: imagen_10,
    categorias: ["Sin Placa", "Plateado"],
    material: "Acabado Plateado",
    opciones: ["Luz Cálida", "Luz Neutra", "Sin Luz"],
  },
]

const ProductCatalog = () => {
  const [productos, setProductos] = useState(productosData)
  const [filtros, setFiltros] = useState({
    categoria: "",
    precioRango: "",
  })
  const [terminoBusqueda, setTerminoBusqueda] = useState("")
  const [mostrarFiltros, setMostrarFiltros] = useState(false)

  const rangosPrecios = [
    { label: "Todos los precios", value: "" },
    { label: "$1000 - $1200", value: "1000-1200" },
    { label: "$1201 - $1300", value: "1201-1300" },
    { label: "$1301 - $1400", value: "1301-1400" },
    { label: "Más de $1400", value: "1401-9999" },
  ]

  useEffect(() => {
    const productosFiltrados = productosData.filter((producto) => {
      const cumplePrecio = filtros.precioRango
        ? (() => {
            const [min, max] = filtros.precioRango.split("-").map(Number)
            return producto.precio >= min && producto.precio <= max
          })()
        : true
      const cumpleCategoria = !filtros.categoria || producto.categorias.includes(filtros.categoria)
      const cumpleBusqueda =
        producto.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
        producto.descripcion.toLowerCase().includes(terminoBusqueda.toLowerCase())
      return cumplePrecio && cumpleCategoria && cumpleBusqueda
    })
    setProductos(productosFiltrados)
  }, [filtros, terminoBusqueda])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-4 md:p-8">
      <div className="max-w-7xl mx-auto mt-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-400 mb-4 text-center">
          Nuestros Letreros Exclusivos
        </h1>

        {/* Barra de búsqueda y botón de filtros */}
        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              placeholder="Buscar letreros..."
              value={terminoBusqueda}
              onChange={(e) => setTerminoBusqueda(e.target.value)}
              className="w-full border-2 border-gray-700 bg-gray-800 text-white rounded-full pl-12 pr-4 py-2 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500"
            />
            <Search className="absolute left-4 top-3 text-gray-400" size={20} />
            <button
              onClick={() => setMostrarFiltros(!mostrarFiltros)}
              className="absolute right-4 top-2 bg-amber-500 text-gray-900 p-1 rounded-full hover:bg-amber-600 transition-colors duration-300"
            >
              <Filter size={20} />
            </button>
          </div>
        </div>

        {/* Panel de filtros */}
        <AnimatePresence>
          {mostrarFiltros && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-gray-800 rounded-lg shadow-md p-4 mb-8"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-white">Filtros</h2>
                <button onClick={() => setMostrarFiltros(false)} className="text-gray-400 hover:text-white">
                  <X size={20} />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="categoria" className="block text-sm font-medium text-gray-300 mb-1">
                    Categoría
                  </label>
                  <select
                    id="categoria"
                    value={filtros.categoria}
                    onChange={(e) => setFiltros({ ...filtros, categoria: e.target.value })}
                    className="w-full bg-gray-700 border border-gray-600 text-white rounded-md px-3 py-2 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="">Todas las Categorías</option>
                    <option value="Sin Placa">Sin Placa</option>
                    <option value="Con Placa">Con Placa</option>
                    <option value="LED">Con LED</option>
                    <option value="Plateado">Plateado</option>
                    <option value="Negro Mate">Negro Mate</option>
                    <option value="Espejo">Espejo</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="precioRango" className="block text-sm font-medium text-gray-300 mb-1">
                    Rango de Precio
                  </label>
                  <select
                    id="precioRango"
                    value={filtros.precioRango}
                    onChange={(e) => setFiltros({ ...filtros, precioRango: e.target.value })}
                    className="w-full bg-gray-700 border border-gray-600 text-white rounded-md px-3 py-2 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500"
                  >
                    {rangosPrecios.map((rango) => (
                      <option key={rango.value} value={rango.value}>
                        {rango.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Grid de Productos */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.2,
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {productos.map((producto) => (
            <motion.div
              key={producto.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-800 rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:shadow-lg flex flex-col"
            >
              <div className="relative">
                <img
                  src={producto.imagen || "/placeholder.svg"}
                  alt={producto.nombre}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white px-2 py-1">
                  <span className="text-base sm:text-lg md:text-xl font-bold">${producto.precio.toFixed(2)}</span>
                </div>
              </div>

              <div className="p-3 sm:p-4 flex flex-col flex-grow">
                <h2 className="text-sm sm:text-base md:text-lg font-semibold mb-1 sm:mb-2 text-white line-clamp-2">
                  {producto.nombre}
                </h2>
                <p className="text-gray-400 mb-2 sm:mb-3 text-xs sm:text-sm flex-grow line-clamp-3">
                  {producto.descripcion}
                </p>

                <div className="flex items-center mb-2 sm:mb-3">
                  <Tag className="text-amber-500 mr-1 sm:mr-2" size={14} />
                  <span className="text-xs sm:text-sm font-medium text-amber-500">{producto.material}</span>
                </div>

                <div className="flex flex-wrap gap-1 sm:gap-2 mb-3">
                  {producto.categorias.map((categoria, index) => (
                    <span
                      key={index}
                      className="bg-gray-700 text-amber-500 text-xs font-semibold px-1.5 py-0.5 rounded"
                    >
                      {categoria}
                    </span>
                  ))}
                </div>

                <Link
                  to="/personalizar"
                  className="bg-amber-500 hover:bg-amber-600 text-gray-900 px-3 py-1.5 rounded-full flex items-center justify-center transition duration-300 text-xs sm:text-sm font-medium w-full"
                >
                  <Ruler className="mr-1 sm:mr-2" size={14} />
                  Personalizar
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {productos.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-16 text-white"
          >
            <p className="text-xl sm:text-2xl font-semibold">No se encontraron productos</p>
            <p className="mt-2 text-sm sm:text-base">Intenta ajustar tus filtros o términos de búsqueda</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default ProductCatalog

