import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { ShoppingCart, Search, Tag, Filter, X } from "lucide-react"
import moderno from "../assets/images/moderno.jpg"
import rustico from "../assets/images/rustico.webp"
import familiar from "../assets/images/familiar.webp"

// Datos de productos
const productosData = [
  {
    id: 1,
    nombre: "Letrero Familiar Rústico",
    descripcion: "Elegante letrero de madera para entrada de casa",
    precio: 89.99,
    imagen: rustico,
      // "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    categorias: ["Madera", "Rústico"],
    material: "Madera de Roble",
  },
  {
    id: 2,
    nombre: "Número de Casa Moderno",
    descripcion: "Números metálicos contemporáneos con iluminación LED",
    precio: 129.99,
    imagen:
      "https://images.unsplash.com/photo-1518707399486-6d702a84ff00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    categorias: ["Metal", "Moderno"],
    material: "Acero Inoxidable",
  },
  {
    id: 3,
    nombre: "Letrero de Bienvenida Vintage",
    descripcion: "Cartel de bienvenida con diseño retro",
    precio: 69.99,
    imagen:
      "https://images.unsplash.com/photo-1531685250784-7569952593d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    categorias: ["Madera", "Vintage"],
    material: "Madera Reciclada",
  },
  {
    id: 4,
    nombre: "Placa de Dirección Personalizada",
    descripcion: "Placa elegante con tu dirección grabada",
    precio: 49.99,
    imagen:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    categorias: ["Metal", "Personalizado"],
    material: "Latón Pulido",
  },
  {
    id: 5,
    nombre: "Letrero Neón Personalizado",
    descripcion: "Letrero luminoso neón para interiores",
    precio: 199.99,
    imagen:
      "https://images.unsplash.com/photo-1519608425089-7f3bfa6f6bb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    categorias: ["Neón", "Moderno"],
    material: "Tubo de Neón y Acrílico",
  },
  {
    id: 6,
    nombre: "Letrero de Madera Tallada",
    descripcion: "Letrero artesanal con diseño tallado a mano",
    precio: 159.99,
    imagen:
      "https://images.unsplash.com/photo-1614898983622-f20044c60b30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    categorias: ["Madera", "Artesanal"],
    material: "Madera de Cedro",
  },
  {
    id: 7,
    nombre: "Placa Conmemorativa de Bronce",
    descripcion: "Placa elegante para conmemorar eventos especiales",
    precio: 299.99,
    imagen:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01621c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    categorias: ["Metal", "Elegante"],
    material: "Bronce Fundido",
  },
  {
    id: 8,
    nombre: "Letrero LED Programable",
    descripcion: "Pantalla LED para mensajes personalizables",
    precio: 249.99,
    imagen:
      "https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    categorias: ["LED", "Moderno"],
    material: "Aluminio y LED",
  },
  {
    id: 9,
    nombre: "Letrero de Pizarra Vintage",
    descripcion: "Pizarra decorativa para mensajes cambiantes",
    precio: 79.99,
    imagen:
      "https://images.unsplash.com/photo-1581344895000-ee10f3cc0c3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    categorias: ["Pizarra", "Vintage"],
    material: "Madera y Pizarra",
  },
  {
    id: 10,
    nombre: "Letrero de Mosaico Personalizado",
    descripcion: "Letrero artístico hecho con mosaicos de colores",
    precio: 189.99,
    imagen:
      "https://images.unsplash.com/photo-1616486788371-62d930495c44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    categorias: ["Mosaico", "Artesanal"],
    material: "Cerámica y Vidrio",
  },
]

const ProductCatalog = () => {
  const [productos, setProductos] = useState(productosData)
  const [filtros, setFiltros] = useState({
    categoria: "",
    precioMinimo: 0,
    precioMaximo: 500,
  })
  const [terminoBusqueda, setTerminoBusqueda] = useState("")
  const [mostrarFiltros, setMostrarFiltros] = useState(false)

  useEffect(() => {
    const productosFiltrados = productosData.filter((producto) => {
      const cumplePrecio = producto.precio >= filtros.precioMinimo && producto.precio <= filtros.precioMaximo
      const cumpleCategoria = !filtros.categoria || producto.categorias.includes(filtros.categoria)
      const cumpleBusqueda =
        producto.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
        producto.descripcion.toLowerCase().includes(terminoBusqueda.toLowerCase())
      return cumplePrecio && cumpleCategoria && cumpleBusqueda
    })
    setProductos(productosFiltrados)
  }, [filtros, terminoBusqueda])

  return (
    <div className="container mx-auto px-4 py-8    ">
      <h1 className="text-4xl font-bold text-[#4A4A4A] mb-8 text-center">Nuestros Letreros Exclusivos</h1>

      {/* Barra de búsqueda y botón de filtros */}
      <div className="flex justify-center mb-8">
        <div className="relative w-full max-w-xl">
          <input
            type="text"
            placeholder="Buscar letreros..."
            value={terminoBusqueda}
            onChange={(e) => setTerminoBusqueda(e.target.value)}
            className="w-full border-2 border-[#8B7D6B] rounded-full pl-12 pr-4 py-2 focus:outline-none focus:border-[#5D4037]"
          />
          <Search className="absolute left-4 top-3 text-[#8B7D6B]" size={20} />
          <button
            onClick={() => setMostrarFiltros(!mostrarFiltros)}
            className="absolute right-4 top-2 bg-[#8B7D6B] text-white p-1 rounded-full hover:bg-[#5D4037] transition-colors duration-300"
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
            className="bg-white rounded-lg shadow-md p-4 mb-8"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-[#4A4A4A]">Filtros</h2>
              <button onClick={() => setMostrarFiltros(false)} className="text-[#8B7D6B] hover:text-[#5D4037]">
                <X size={20} />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="categoria" className="block text-sm font-medium text-[#4A4A4A] mb-1">
                  Categoría
                </label>
                <select
                  id="categoria"
                  value={filtros.categoria}
                  onChange={(e) => setFiltros({ ...filtros, categoria: e.target.value })}
                  className="w-full border border-[#8B7D6B] rounded-md px-3 py-2 focus:outline-none focus:border-[#5D4037]"
                >
                  <option value="">Todas las Categorías</option>
                  <option value="Madera">Madera</option>
                  <option value="Metal">Metal</option>
                  <option value="Rústico">Rústico</option>
                  <option value="Moderno">Moderno</option>
                  <option value="Neón">Neón</option>
                  <option value="LED">LED</option>
                  <option value="Artesanal">Artesanal</option>
                </select>
              </div>
              <div>
                <label htmlFor="precio" className="block text-sm font-medium text-[#4A4A4A] mb-1">
                  Precio Máximo: ${filtros.precioMaximo}
                </label>
                <input
                  type="range"
                  id="precio"
                  min="0"
                  max="500"
                  value={filtros.precioMaximo}
                  onChange={(e) => setFiltros({ ...filtros, precioMaximo: Number(e.target.value) })}
                  className="w-full"
                />
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
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {productos.map((producto) => (
          <motion.div
            key={producto.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:shadow-lg"
          >
            <div className="relative">
              <img
                src={producto.imagen || "/placeholder.svg"}
                alt={producto.nombre}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white px-4 py-2">
                <span className="text-2xl font-bold">${producto.precio.toFixed(2)}</span>
              </div>
            </div>

            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-[#4A4A4A]">{producto.nombre}</h2>
              <p className="text-[#6B6B6B] mb-4 text-sm">{producto.descripcion}</p>

              <div className="flex items-center mb-4">
                <Tag className="text-[#8B7D6B] mr-2" size={18} />
                <span className="text-sm font-medium text-[#8B7D6B]">{producto.material}</span>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex flex-wrap gap-2">
                  {producto.categorias.map((categoria, index) => (
                    <span
                      key={index}
                      className="bg-[#F0EAE3] text-[#5D4037] text-xs font-semibold px-2.5 py-0.5 rounded"
                    >
                      {categoria}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/producto/${producto.id}`}
                  className="bg-[#8B7D6B] hover:bg-[#5D4037] text-white px-4 py-2 rounded-full flex items-center transition duration-300"
                >
                  <ShoppingCart className="mr-2" size={18} />
                  Ver Detalles
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {productos.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center py-16 text-[#4A4A4A]"
        >
          <p className="text-2xl font-semibold">No se encontraron productos</p>
          <p className="mt-2">Intenta ajustar tus filtros o términos de búsqueda</p>
        </motion.div>
      )}
    </div>
  )
}

export default ProductCatalog

