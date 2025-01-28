import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import "../../number-quoter.css"

const backgrounds = {
  metallic: "/assets/backgrounds/metallic.jpg",
  brushed: "/assets/backgrounds/brushed-metal.jpg",
  steel: "/assets/backgrounds/steel.jpg",
  wood: "/assets/backgrounds/wood.jpg",
  darkWood: "/assets/backgrounds/dark-wood.jpg",
  marble: "/assets/backgrounds/marble.jpg",
}

const NumberQuoter = () => {
  const [text, setText] = useState("")
  const [position, setPosition] = useState("horizontal")
  const [size, setSize] = useState(20)
  const [background, setBackground] = useState("metallic")
  const [totalMeasure, setTotalMeasure] = useState(0)
  const [cost, setCost] = useState(0)
  const [effect, setEffect] = useState("3d")

  // Constants for calculations
  const BASE_PRICE = 100
  const SIZE_MULTIPLIER = {
    20: 1,
    25: 1.25,
    30: 1.5,
  }

  useEffect(() => {
    const charCount = text.length
    const newTotalMeasure = size * charCount
    setTotalMeasure(newTotalMeasure)

    const newCost = Math.ceil(BASE_PRICE * charCount * SIZE_MULTIPLIER[size])
    setCost(newCost)
  }, [text, size])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-6 space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-800">Cotizador de Números</h1>
          <p className="text-gray-600">Personaliza tus números y obtén una cotización al instante</p>
        </div>

        <div className="space-y-6">
          {/* Text Input */}
          <div className="space-y-2">
            <label htmlFor="number-input" className="block text-sm font-medium text-gray-700">
              Ingresa los números
            </label>
            <input
              id="number-input"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value.toUpperCase())}
              className="w-full text-center text-xl p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ejemplo: 123"
              maxLength={8}
            />
            <p className="text-sm text-center text-gray-500">Caracteres: {text.length}</p>
          </div>

          {/* Preview */}
          <AnimatePresence mode="wait">
            {text && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`relative w-full aspect-[3/1] rounded-lg overflow-hidden shadow-xl ${position === "horizontal" ? "placa1" : "placa2"}`}
                style={{
                  backgroundImage: `url(${backgrounds[background]})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/20" />
                <div
                  className={`w-full h-full flex items-center justify-center ${
                    position === "vertical" ? "verticaltext" : "horizontaltext"
                  }`}
                >
                  <span
                    className={`text-6xl md:text-8xl font-bold ${
                      effect === "3d" ? "texto3D" : effect === "inset" ? "textoInset" : "glow"
                    }`}
                  >
                    {text}
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Controls */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Posición</label>
              <div className="flex gap-2">
                <button
                  onClick={() => setPosition("horizontal")}
                  className={`flex-1 px-4 py-2 rounded-md ${
                    position === "horizontal"
                      ? "bg-blue-500 text-white"
                      : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Horizontal
                </button>
                <button
                  onClick={() => setPosition("vertical")}
                  className={`flex-1 px-4 py-2 rounded-md ${
                    position === "vertical"
                      ? "bg-blue-500 text-white"
                      : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Vertical
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Material de Fondo</label>
              <select
                value={background}
                onChange={(e) => setBackground(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="metallic">Metálico Clásico</option>
                <option value="brushed">Cepillado</option>
                <option value="steel">Acero Inoxidable</option>
                <option value="wood">Madera Natural</option>
                <option value="darkWood">Madera Oscura</option>
                <option value="marble">Mármol</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Medida (cm)</label>
              <div className="flex gap-2">
                {[20, 25, 30].map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`flex-1 px-4 py-2 rounded-md ${
                      size === s
                        ? "bg-blue-500 text-white"
                        : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {s} cm
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Efecto</label>
              <div className="flex gap-2">
                {["3d", "inset", "glow"].map((e) => (
                  <button
                    key={e}
                    onClick={() => setEffect(e)}
                    className={`flex-1 px-4 py-2 rounded-md ${
                      effect === e
                        ? "bg-blue-500 text-white"
                        : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {e.charAt(0).toUpperCase() + e.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Measurements and Cost */}
          <div className="pt-6 border-t space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">Medida Total:</span>
              <span className="text-lg font-bold text-gray-900">{totalMeasure} cm</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="text-lg font-medium text-gray-700">Costo Total:</span>
              <motion.span
                key={cost}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                className="text-3xl font-bold text-blue-600"
              >
                ${cost.toLocaleString()}
              </motion.span>
            </div>
            <button
              className={`w-full py-3 px-4 rounded-md text-white font-medium ${
                text ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"
              }`}
              disabled={!text}
            >
              Realizar Pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NumberQuoter

