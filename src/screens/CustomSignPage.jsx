"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Type,
  Ruler,
  PaintBucket,
  ShoppingCart,
  Zap,
  Smartphone,
  Palette,
  ChevronDown,
  X,
  Clock,
  Sparkles,
  Shield,
} from "lucide-react"
import toast, { Toaster } from "react-hot-toast"
import "../../NumberQuoter.css"

const backgrounds = {
  metallic: {
    name: "Metal Premium",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/metallic.jpg-oAHsLjF8szwHiCvdCaf46rDaUafu8G.jpeg",
    price: 150,
    icon: <Smartphone className="w-5 h-5" />,
  },
  brushed: {
    name: "Metal Cepillado",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brushed-metal.jpg-NGLY0sTnAvOoGCU4lYWzKwxFUfNlBL.jpeg",
    price: 130,
    icon: <PaintBucket className="w-5 h-5" />,
  },
  wood: {
    name: "Madera Rústica",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wood-black.jpg-OgYVAumycX6zyY5etVtyI3HRWHsH8R.jpeg",
    price: 100,
    icon: <Palette className="w-5 h-5" />,
  },
  marble: {
    name: "Mármol Elegante",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marble.jpg-CBJ49T0KzUvd1k9qs1SdGy5WW792BN.jpeg",
    price: 180,
    icon: <Palette className="w-5 h-5" />,
  },
}

const effects = {
  "3d": { name: "Efecto 3D", price: 50, icon: <Zap className="w-5 h-5" /> },
  inset: { name: "Metal Clásico", price: 30, icon: <Smartphone className="w-5 h-5" /> },
  glow: { name: "Neón LED", price: 80, icon: <Zap className="w-5 h-5" /> },
}

const NumberQuoter = () => {
  const [text, setText] = useState("")
  const [size, setSize] = useState(30)
  const [background, setBackground] = useState("metallic")
  const [effect, setEffect] = useState("3d")
  const [totalPrice, setTotalPrice] = useState(0)
  const [showBackgroundModal, setShowBackgroundModal] = useState(false)

  useEffect(() => {
    const basePrice = backgrounds[background].price
    const effectPrice = effects[effect].price
    const sizeMultiplier = size / 30
    const charCount = Math.max(text.length, 1)

    const total = (basePrice + effectPrice) * sizeMultiplier * charCount
    setTotalPrice(Math.round(total))
  }, [text, background, effect, size])

  const handleTextChange = (e) => {
    const value = e.target.value.replace(/[^0-9a-zA-Z\s]/g, "").toUpperCase()
    setText(value.slice(0, 8))
  }

  const handleAddToCart = () => {
    toast.success("¡Agregado al carrito!", {
      duration: 3000,
      position: "top-right",
      icon: "🛒",
    })
  }

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 text-white">
      <Toaster />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center">
            <Type className="inline-block mr-2 mb-1" />
            Diseña tu Letrero Personalizado
          </h1>
          <p className="text-xl text-gray-300">Crea un letrero único que refleje tu estilo</p>
        </motion.div>

        {/* Main Content */}
        <div className="lg:flex lg:space-x-8 space-y-8 lg:space-y-0">
          {/* Preview Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-2/3"
          >
            <div className="relative aspect-video bg-gray-800 rounded-lg shadow-lg p-8 flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${background}-${effect}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full flex items-center justify-center"
                >
                  <div
                    className="relative overflow-hidden rounded-lg shadow-lg w-full h-40 lg:h-60"
                    style={{
                      backgroundImage: `url(${backgrounds[background].url})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >

                    <div className="absolute inset-0 bg-black/20" />
                    <div className="screw-top-left" />
                    <div className="screw-top-right" />
                    <div className="screw-bottom-left" />
                    <div className="screw-bottom-right" />

                    <div className="w-full h-full flex items-center justify-center">
                      <span
                        className={`font-bold ${effect === "3d" ? "texto3D" : effect === "inset" ? "textoInset" : "glow"
                          }`}
                        style={{
                          fontSize: `${Math.min(size * 1.6, 120)}px`,
                        }}
                      >
                        {text || "MUESTRA"}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Text Input */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6"
            >
              <input
                type="text"
                value={text}
                onChange={handleTextChange}
                className="w-full p-3 text-xl border-2 border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all bg-gray-800 text-white"
                placeholder="Escribe tu texto aquí (máx. 8 caracteres)"
                maxLength={8}
              />
            </motion.div>
          </motion.div>

          {/* Customization Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:w-1/3 space-y-6"
          >
            {/* Background Selection */}
            <div className="space-y-2">
              <label className="text-lg font-medium">Fondo</label>
              <button
                onClick={() => setShowBackgroundModal(true)}
                className="w-full p-3 text-left border-2 border-gray-600 rounded-lg hover:border-amber-500 transition-all flex items-center justify-between bg-gray-800"
              >
                <span className="text-lg">{backgrounds[background].name}</span>
                <ChevronDown className="w-6 h-6 text-gray-400" />
              </button>
            </div>

            {/* Effect and Size Options */}
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-lg font-medium">Efecto</label>
                <div className="grid grid-cols-3 gap-3">
                  {Object.entries(effects).map(([key, value]) => (
                    <motion.button
                      key={key}
                      onClick={() => setEffect(key)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 rounded-lg transition-all flex flex-col items-center justify-center gap-2 border-2 ${effect === key
                          ? "bg-amber-500 text-gray-900 border-amber-600"
                          : "bg-gray-800 text-gray-200 hover:bg-gray-700 border-gray-600"
                        }`}
                    >
                      {value.icon}
                      <span className="text-sm font-medium">{value.name}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-lg font-medium">Tamaño</label>
                <div className="grid grid-cols-3 gap-3">
                  {[30, 40, 50].map((s) => (
                    <motion.button
                      key={s}
                      onClick={() => setSize(s)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 rounded-lg transition-all flex flex-col items-center justify-center gap-2 border-2 ${size === s
                          ? "bg-amber-500 text-gray-900 border-amber-600"
                          : "bg-gray-800 text-gray-200 hover:bg-gray-700 border-gray-600"
                        }`}
                    >
                      <Ruler className="w-6 h-6" />
                      <span className="text-sm font-medium">{s} cm</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Price and Add to Cart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg border-2 border-gray-700"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold">Precio Total:</span>
                <span className="text-3xl font-bold text-amber-500">${totalPrice.toLocaleString()}</span>
              </div>
              <button
                onClick={handleAddToCart}
                disabled={!text}
                className={`w-full py-3 px-6 rounded-lg text-xl font-bold transition-all flex items-center justify-center gap-3 ${text
                    ? "bg-amber-500 text-gray-900 hover:bg-amber-600"
                    : "bg-gray-700 text-gray-400 cursor-not-allowed"
                  }`}
              >
                <ShoppingCart className="w-6 h-6" />
                Agregar al Carrito
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-center mb-8">¿Por qué elegir nuestros letreros?</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center space-x-4">
              <Clock className="w-10 h-10 text-amber-500" />
              <div>
                <h4 className="text-lg font-semibold">Entrega Rápida</h4>
                <p className="text-gray-400">Fabricación y envío en tiempo récord</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Sparkles className="w-10 h-10 text-amber-500" />
              <div>
                <h4 className="text-lg font-semibold">Diseño Personalizado</h4>
                <p className="text-gray-400">Letreros únicos que reflejan tu estilo</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Shield className="w-10 h-10 text-amber-500" />
              <div>
                <h4 className="text-lg font-semibold">Garantía de Calidad</h4>
                <p className="text-gray-400">Materiales duraderos y acabados profesionales</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Modal */}
      <AnimatePresence>
        {showBackgroundModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-gray-800 rounded-lg p-6 w-full max-w-lg"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-semibold text-white">Selecciona el fondo</h3>
                <button onClick={() => setShowBackgroundModal(false)} className="text-gray-400 hover:text-gray-200">
                  <X className="w-8 h-8" />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(backgrounds).map(([key, value]) => (
                  <motion.button
                    key={key}
                    onClick={() => {
                      setBackground(key)
                      setShowBackgroundModal(false)
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${background === key
                        ? "border-amber-500 ring-2 ring-amber-300"
                        : "border-gray-600 hover:border-amber-400"
                      }`}
                  >
                    <img
                      src={value.url || "/placeholder.svg"}
                      alt={value.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent p-4">
                      <span className="text-white text-lg font-semibold">{value.name}</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default NumberQuoter

