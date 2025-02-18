"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sun, Moon, Power, ArrowRight, ArrowLeft, Ruler } from "lucide-react"
import { toast, Toaster } from "react-hot-toast"
import { fontOptions, brandFontMapping } from "../components/Fonts" // Ajusta la ruta a donde tengas tus fuentes
import { numberColors, plateColors } from "../data/colors" // Ajusta la ruta a tus datos de color
import ColorModal from "../components/ColorModal"          // Ajusta la ruta a tu componente
import PlateModal from "../components/PlateModal"          // Ajusta la ruta a tu componente
import { useCart } from "../context/CarContext"            // Ajusta la ruta a tu context
import "../../NumberQuoter.css"                            // Ajusta la ruta a tu CSS

const NumberQuoter = ({ brandName = "CLASSIC", brandLogo }) => {
  const fontId = brandFontMapping[brandName] || "arial"
  const fontConfig = fontOptions.find((f) => f.id === fontId) || fontOptions[0]

  // Filtramos los colores de stock para que no se seleccione "dorado" por defecto
  const nonGoldenColors = numberColors.stock.filter((c) => c.name.toLowerCase() !== "dorado")
  const defaultNumberColorObj = nonGoldenColors.length > 0 ? nonGoldenColors[0] : numberColors.stock[0]

  const [inputText, setInputText] = useState("")
  const [size, setSize] = useState(fontConfig.sizes[0].value)
  const [numberColor, setNumberColor] = useState(defaultNumberColorObj.id)
  const [plateColor, setPlateColor] = useState(plateColors[0].id)
  const [orientation, setOrientation] = useState("horizontal")
  const [lighting, setLighting] = useState("sin-luz")
  const [showColorModal, setShowColorModal] = useState(false)
  const [showPlateModal, setShowPlateModal] = useState(false)
  const [totalPrice, setTotalPrice] = useState(0)
  const [selectedFont, setSelectedFont] = useState(fontConfig.id)

  const { addItem } = useCart()

  // Cálculo del precio total basado en el tamaño y la iluminación
  useEffect(() => {
    const sizeOption = fontConfig.sizes.find((s) => s.value === size)
    if (!sizeOption) return

    const basePrice = lighting === "sin-luz" ? sizeOption.basePrice : sizeOption.lightPrice
    const plateOption = plateColors.find((p) => p.id === plateColor)
    const platePrice = plateOption?.price || 0

    setTotalPrice(basePrice + platePrice)
  }, [size, lighting, plateColor, fontConfig])

  // Permitir solo 0-9, a-z, A-Z y convertir a mayúsculas
  const handleTextChange = (e) => {
    const value = e.target.value.replace(/[^0-9a-zA-Z]/g, "").toUpperCase()
    setInputText(value.slice(0, 8))
  }

  // Agregar el producto al carrito
  const handleAddToCart = () => {
    const productConfig = {
      id: new Date().getTime(),
      nombre: "Letrero Personalizado",
      precio: totalPrice,
      cantidad: 1,
      imagen: "",
      personalizacion: {
        texto: inputText,
        colorNumero: numberColor,
        fondoPlaca: plateColor,
        tipografia: selectedFont,
        tamaño: size,
        orientación: orientation,
        iluminación: lighting,
      },
    }

    addItem(productConfig)
    toast.success("¡Agregado al carrito!", {
      duration: 3000,
      position: "top-center",
    })
  }

  const displayText = inputText || "MUESTRA"

  // Sombras para la iluminación
  const getLightingStyles = () => {
    if (lighting === "sin-luz") return ""

    if (lighting === "luz-calida") {
      return "shadow-[0_0_20px_rgba(251,191,36,0.8),0_0_40px_rgba(251,191,36,0.6),0_0_60px_rgba(251,191,36,0.3)]"
    }

    // "luz-fria"/"luz-neutra" con tono azulado
    return "shadow-[0_0_20px_rgba(59,130,246,0.8),0_0_40px_rgba(59,130,246,0.6),0_0_60px_rgba(59,130,246,0.3)]"
  }

  // Definimos estilos de la placa según la orientación
  const getPlateStyles = () => {
    if (orientation === "vertical") {
      return {
        mobile: "w-[120px] min-h-[300px] max-h-[400px]",
        desktop: "w-[180px] min-h-[400px] max-h-[500px]",
      }
    }
    return {
      mobile: "w-full min-h-[120px] max-h-[160px]",
      desktop: "w-full min-h-[160px] max-h-[200px]",
    }
  }

  const plateStyles = getPlateStyles()

  const selectedNumberColorObj = Object.values(numberColors)
    .flat()
    .find((c) => c.id === numberColor)

  // Renderizar texto en vertical u horizontal
  const renderText = () => {
    if (orientation === "vertical") {
      return displayText.split("").map((char, index) => (
        <span key={index} className="block">
          {char}
        </span>
      ))
    }
    return displayText
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-4 md:p-8">
      <Toaster />
      <div className="max-w-7xl mx-auto mt-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {brandName}
          </h1>
          <p className="text-xl text-gray-300">{fontConfig.name}</p>
        </div>

        {/* Contenido principal en 2 columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Columna Izquierda: Vista Previa */}
          <div className="space-y-5">
            <div className="relative bg-gray-700 rounded-md shadow-xl w-full flex justify-center p-4">
              <div
                className={`relative transition-all duration-300 ${
                  orientation === "vertical" ? "w-auto" : "w-full"
                } ${getLightingStyles()}`}
              >
                <div
                  className={`relative bg-gray-800 rounded-lg overflow-hidden shadow-inner ${
                    orientation === "vertical"
                      ? `${plateStyles.desktop} ${plateStyles.mobile}`
                      : `${plateStyles.desktop} ${plateStyles.mobile}`
                  }`}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center rounded-md"
                    style={{
                      backgroundImage: `url(${plateColors.find((p) => p.id === plateColor)?.texture})`,
                      filter: "brightness(1.1)",
                    }}
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  {/* Tornillos decorativos */}
                  <div className="screw-top-left" />
                  <div className="screw-top-right" />
                  <div className="screw-bottom-left" />
                  <div className="screw-bottom-right" />
                  {/* Texto 3D */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      layout
                      data-text={renderText()}
                      className={`texto3D text-center ${
                        orientation === "vertical" ? "writing-mode-vertical" : ""
                      }`}
                      style={{
                        fontSize: `${Math.min(
                          size * (orientation === "vertical" ? 2.0 : 2.5),
                          130
                        )}px`,
                        fontFamily:
                          fontOptions.find((f) => f.id === selectedFont)
                            ?.fontFamily || fontConfig.fontFamily,
                        backgroundImage: selectedNumberColorObj?.texture
                          ? `url(${selectedNumberColorObj?.texture})`
                          : "linear-gradient(145deg, #e6e6e6 0%, #b8b8b8 30%, #d4d4d4 50%, #919191 70%, #757575 100%)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                        filter: "brightness(1.2) contrast(1.1)",
                        transform: `perspective(1000px) rotateX(10deg)`,
                      }}
                    >
                      {renderText()}
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            {/* Botones de Iluminación */}
            <div className="flex justify-center space-x-4">
              {["sin-luz", "luz-calida", "luz-neutra"].map((option) => (
                <button
                  key={option}
                  onClick={() => setLighting(option)}
                  className={`p-2 rounded-lg transition-all flex flex-col items-center ${
                    lighting === option
                      ? "bg-amber-500 text-gray-900"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {option === "luz-calida" ? (
                    <Sun className="w-6 h-6" />
                  ) : option === "luz-neutra" ? (
                    <Moon className="w-6 h-6" />
                  ) : (
                    <Power className="w-6 h-6" />
                  )}
                  <span className="text-sm font-medium capitalize mt-1">
                    {option.replace("-", " ")}
                  </span>
                </button>
              ))}
            </div>

            {/* Input de Texto */}
            <input
              type="text"
              value={inputText}
              onChange={handleTextChange}
              className="w-full p-3 text-2xl text-center bg-gray-800 border-2 border-gray-700 rounded-xl text-white
                         focus:border-amber-500 focus:ring-2 focus:ring-amber-500 transition-all"
              placeholder="Ingresa hasta 8 caracteres"
              maxLength={8}
            />
          </div>

          {/* Columna Derecha: Opciones de Configuración */}
          <div className="space-y-6">

            {/* Tipografía */}
            <div className="space-y-2">
              <label className="text-lg font-medium text-white">
                Tipografía
              </label>
              <select
                value={selectedFont}
                onChange={(e) => setSelectedFont(e.target.value)}
                className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700
                           focus:border-amber-500 focus:ring-2 focus:ring-amber-500"
                style={{ fontSize: "20px" }} // Forzar el tamaño del texto seleccionado
              >
                {fontOptions.map((font) => (
                  <option
                    key={font.id}
                    value={font.id}
                    style={{
                      fontFamily: font.fontFamily,
                      fontSize: "20px", // Forzar mismo tamaño dentro del menú
                    }}
                  >
                    {font.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Color del Número */}
            <div className="space-y-2">
              <label className="text-lg font-medium text-white">
                Color del Número
              </label>
              <button
                onClick={() => setShowColorModal(true)}
                className="w-full p-4 text-left bg-gray-800 rounded-xl text-white
                           hover:bg-gray-700 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg"
                    style={{
                      backgroundImage: `url(${selectedNumberColorObj?.texture})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      filter: "brightness(1.2)",
                    }}
                  />
                  <span>{selectedNumberColorObj?.name}</span>
                </div>
              </button>
            </div>

            {/* Fondo de la Placa */}
            <div className="space-y-2">
              <label className="text-lg font-medium text-white">
                Fondo de la Placa
              </label>
              <button
                onClick={() => setShowPlateModal(true)}
                className="w-full p-4 text-left bg-gray-800 rounded-xl text-white
                           hover:bg-gray-700 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg"
                    style={{
                      backgroundImage: `url(${plateColors.find(
                        (p) => p.id === plateColor
                      )?.texture})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <span>
                    {plateColors.find((p) => p.id === plateColor)?.name}
                  </span>
                </div>
              </button>
            </div>

            {/* Tamaño */}
            <div className="space-y-2">
              <label className="text-lg font-medium text-white">
                Tamaño
              </label>
              <div className="grid grid-cols-4 gap-2">
                {fontConfig.sizes.map((sizeOption) => (
                  <button
                    key={sizeOption.value}
                    onClick={() => setSize(sizeOption.value)}
                    className={`p-2 rounded-lg text-sm font-medium transition-all
                                flex items-center justify-center gap-1 ${
                      size === sizeOption.value
                        ? "bg-amber-500 text-gray-900"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    }`}
                  >
                    <Ruler className="w-4 h-4" />
                    <span>{sizeOption.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Orientación */}
            <div className="space-y-2">
              <label className="text-lg font-medium text-white">
                Orientación
              </label>
              <div className="flex items-center justify-center bg-gray-800 rounded-xl p-2">
                <button
                  onClick={() => setOrientation("horizontal")}
                  className={`flex-1 p-2 rounded-lg transition-all flex items-center justify-center ${
                    orientation === "horizontal"
                      ? "bg-amber-500 text-gray-900"
                      : "text-gray-300"
                  }`}
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  <span>Horizontal</span>
                </button>
                <div className="w-px h-8 bg-gray-600 mx-2" />
                <button
                  onClick={() => setOrientation("vertical")}
                  className={`flex-1 p-2 rounded-lg transition-all flex items-center justify-center ${
                    orientation === "vertical"
                      ? "bg-amber-500 text-gray-900"
                      : "text-gray-300"
                  }`}
                >
                  <ArrowLeft className="w-5 h-5 mr-2 rotate-90" />
                  <span>Vertical</span>
                </button>
              </div>
            </div>

            {/* Precio y botón Agregar al Carrito */}
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl text-white">Precio Total:</span>
                <span className="text-3xl font-bold text-amber-500">
                  ${totalPrice.toLocaleString()}
                </span>
              </div>
              <button
                onClick={handleAddToCart}
                disabled={!inputText}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                  inputText
                    ? "bg-amber-500 text-gray-900 hover:bg-amber-600"
                    : "bg-gray-700 text-gray-500 cursor-not-allowed"
                }`}
              >
                Agregar al Carrito
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modales */}
      <AnimatePresence mode="wait">
        {showColorModal && (
          <ColorModal
            key="color-modal"
            isOpen={true}
            onClose={() => setShowColorModal(false)}
            colors={numberColors}
            selectedColor={numberColor}
            onSelectColor={setNumberColor}
          />
        )}
        {showPlateModal && (
          <PlateModal
            key="plate-modal"
            isOpen={true}
            onClose={() => setShowPlateModal(false)}
            plates={plateColors}
            selectedPlate={plateColor}
            onSelectPlate={setPlateColor}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default NumberQuoter
