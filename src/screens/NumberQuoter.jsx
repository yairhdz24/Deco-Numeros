// src/screens/NumberQuoter.jsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Power, ArrowRight, ArrowLeft } from "lucide-react";
import { toast, Toaster } from "react-hot-toast";
import { fontOptions, brandFontMapping } from "../components/Fonts";
import { numberColors, plateColors } from "../data/colors";
import ColorModal from "../components/ColorModal";
import PlateModal from "../components/PlateModal";
import { useCart } from "../context/CarContext";
import "../../NumberQuoter.css";

const NumberQuoter = ({ brandName = "CLASSIC", brandLogo }) => {
  const fontId = brandFontMapping[brandName] || "arial";
  const fontConfig = fontOptions.find((f) => f.id === fontId) || fontOptions[0];

  const [inputText, setInputText] = useState("");
  const [size, setSize] = useState(fontConfig.sizes[0].value);
  const [numberColor, setNumberColor] = useState(numberColors.stock[0].id);
  const [plateColor, setPlateColor] = useState(plateColors[0].id);
  const [orientation, setOrientation] = useState("horizontal");
  const [lighting, setLighting] = useState("sin-luz");
  const [showColorModal, setShowColorModal] = useState(false);
  const [showPlateModal, setShowPlateModal] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedFont, setSelectedFont] = useState(fontConfig.id);

  const { addItem } = useCart();

  useEffect(() => {
    const sizeOption = fontConfig.sizes.find((s) => s.value === size);
    if (!sizeOption) return;

    const basePrice =
      lighting === "sin-luz" ? sizeOption.basePrice : sizeOption.lightPrice;
    const plateOption = plateColors.find((p) => p.id === plateColor);
    const platePrice = plateOption?.price || 0;

    setTotalPrice(basePrice + platePrice);
  }, [size, lighting, plateColor, fontConfig]);

  const handleTextChange = (e) => {
    const value = e.target.value.replace(/[^0-9a-zA-Z]/g, "").toUpperCase();
    setInputText(value.slice(0, 8));
  };

  const handleAddToCart = () => {
    // Construye el objeto del producto con la configuración personalizada
    const productConfig = {
      id: new Date().getTime(), // Genera un ID único
      nombre: "Letrero Personalizado",
      precio: totalPrice,
      cantidad: 1,
      imagen: "", // Puedes agregar una URL o placeholder
      personalizacion: {
        texto: inputText,
        colorNumero: numberColor,
        fondoPlaca: plateColor,
        tipografia: selectedFont,
        tamaño: size,
        orientación: orientation,
        iluminación: lighting,
      },
    };

    addItem(productConfig);
    toast.success("¡Agregado al carrito!", {
      duration: 3000,
      position: "top-center",
    });
  };

  const displayText = inputText || "MUESTRA";

  const getLightingStyles = () => {
    if (lighting === "sin-luz") return "";
    if (lighting === "luz-calida")
      return "shadow-[0_0_50px_rgba(251,191,36,0.5)]";
    return "shadow-[0_0_50px_rgba(59,130,246,0.5)]";
  };

  const getPlateStyles = () => {
    if (orientation === "vertical") {
      return {
        mobile: "w-[120px] min-h-[300px] max-h-[400px]",
        desktop: "w-[180px] min-h-[400px] max-h-[500px]",
      };
    }
    return {
      mobile: "w-full min-h-[120px] max-h-[160px]",
      desktop: "w-full min-h-[160px] max-h-[200px]",
    };
  };

  const plateStyles = getPlateStyles();

  // Buscar el color seleccionado en todas las secciones
  const selectedNumberColorObj = Object.values(numberColors)
    .flat()
    .find((c) => c.id === numberColor);

  const renderText = () => {
    if (orientation === "vertical") {
      return displayText.split("").map((char, index) => (
        <span key={index} className="block">
          {char}
        </span>
      ));
    }
    return displayText;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-4 md:p-8">
      <Toaster />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          {brandLogo && (
            <img
              src={brandLogo || "/placeholder.svg"}
              alt={brandName}
              className="h-24 mx-auto mb-4"
            />
          )}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {brandName}
          </h1>
          <p className="text-xl text-gray-300">{fontConfig.name}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                      backgroundImage: `url(${plateColors.find(
                        (p) => p.id === plateColor
                      )?.texture})`,
                      filter: "brightness(1.1)",
                    }}
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="screw-top-left" />
                  <div className="screw-top-right" />
                  <div className="screw-bottom-left" />
                  <div className="screw-bottom-right" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      layout
                      className={`texto3D text-center ${
                        orientation === "vertical" ? "writing-mode-vertical" : ""
                      }`}
                      style={{
                        fontSize: `${
                          Math.min(
                            size * (orientation === "vertical" ? 1.2 : 1.9),
                            120
                          )
                        }px`,
                        fontFamily:
                          fontOptions.find((f) => f.id === selectedFont)
                            ?.fontFamily || fontConfig.fontFamily,
                        backgroundImage: `url(${selectedNumberColorObj?.texture})`,
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                        filter: "brightness(1.2)",
                      }}
                    >
                      {renderText()}
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

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

            <input
              type="text"
              value={inputText}
              onChange={handleTextChange}
              className="w-full p-3 text-2xl text-center bg-gray-800 border-2 border-gray-700 rounded-xl text-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500 transition-all"
              placeholder="Ingresa hasta 8 caracteres"
              maxLength={8}
            />
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-lg font-medium text-white">
                Tipografía
              </label>
              <select
                value={selectedFont}
                onChange={(e) => setSelectedFont(e.target.value)}
                className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-amber-500 focus:ring-2 focus:ring-amber-500"
              >
                {fontOptions.map((font) => (
                  <option
                    key={font.id}
                    value={font.id}
                    style={{ fontFamily: font.fontFamily }}
                  >
                    {font.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-lg font-medium text-white">
                Color del Número
              </label>
              <button
                onClick={() => setShowColorModal(true)}
                className="w-full p-4 text-left bg-gray-800 rounded-xl text-white hover:bg-gray-700 transition-all"
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

            <div className="space-y-2">
              <label className="text-lg font-medium text-white">
                Fondo de la Placa
              </label>
              <button
                onClick={() => setShowPlateModal(true)}
                className="w-full p-4 text-left bg-gray-800 rounded-xl text-white hover:bg-gray-700 transition-all"
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

            <div className="space-y-2">
              <label className="text-lg font-medium text-white">
                Tamaño
              </label>
              <div className="grid grid-cols-4 gap-2">
                {fontConfig.sizes.map((sizeOption) => (
                  <button
                    key={sizeOption.value}
                    onClick={() => setSize(sizeOption.value)}
                    className={`p-2 rounded-lg text-sm font-medium transition-all ${
                      size === sizeOption.value
                        ? "bg-amber-500 text-gray-900"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    }`}
                  >
                    {sizeOption.label}
                  </button>
                ))}
              </div>
            </div>

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
  );
};

export default NumberQuoter;
