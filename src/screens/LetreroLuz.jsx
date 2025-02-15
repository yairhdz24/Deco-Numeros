"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, Ruler, Sun, Zap, ArrowRight, Check, Lightbulb, ImageIcon, CheckCircle } from "lucide-react"

const LetreroPersonalizado = () => {
  const [formData, setFormData] = useState({
    tipoLetrero: "",
    textoLetrero: "",
    tipoLuz: "",
    colorLuz: "#ff00ff",
    tamano: "",
    mensaje: "",
  })
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [cotizacionEnviada, setCotizacionEnviada] = useState(false)

  const tamanos = [
    { value: "40", label: "40cm", price: "4,999" },
    { value: "60", label: "60cm", price: "6,999" },
    { value: "80", label: "80cm", price: "8,999" },
    { value: "100", label: "100cm", price: "10,999" },
  ]

  const tiposLuz = [
    {
      value: "neon",
      label: "Neón LED",
      icon: Zap,
      description: "Brillante y llamativo, perfecto para destacar",
    },
    {
      value: "calida",
      label: "Luz Cálida",
      icon: Sun,
      description: "Suave y acogedor, ideal para ambientes elegantes",
    },
    {
      value: "led",
      label: "LED Regular",
      icon: Lightbulb,
      description: "Eficiente y duradero, excelente para uso diario",
    },
  ]

  const tiposLetrero = [
    {
      value: "texto",
      label: "Letrero con Texto",
      description: "Ideal para nombres de negocios o mensajes específicos",
    },
    {
      value: "logo",
      label: "Letrero con Logo/Diseño",
      description: "Perfecto para reproducir logotipos o diseños personalizados",
    },
  ]

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Detección básica del dispositivo
    const isMobile = /Mobi|Android/i.test(navigator.userAgent)

    let mensaje = ""
    if (isMobile) {
      // Plantilla para móviles con emojis
      mensaje += `¡Hola! 👋\n\n*Cotización de Letrero con Luz Personalizado:*\n\n`
      mensaje += `📝 *Tipo de Letrero:* ${
        formData.tipoLetrero === "texto" ? "Letrero con Texto" : "Letrero con Logo/Diseño"
      }\n`
      if (formData.tipoLetrero === "texto") {
        mensaje += `✍️ *Texto:* ${formData.textoLetrero}\n`
      } else {
        mensaje += `🎨 *Nota:* Por favor, envía tu logo o diseño como imagen en el siguiente mensaje.\n`
      }
      mensaje += `💡 *Tipo de Iluminación:* ${
        tiposLuz.find((t) => t.value === formData.tipoLuz)?.label
      }\n`
      if (formData.tipoLuz === "neon") {
        mensaje += `🎨 *Color de Neón:* ${formData.colorLuz}\n`
      }
      mensaje += `📏 *Tamaño:* ${tamanos.find((t) => t.value === formData.tamano)?.label}\n`
      if (formData.mensaje) {
        mensaje += `\n💬 *Mensaje Adicional:*\n${formData.mensaje}\n`
      }
      if (formData.tipoLetrero === "logo") {
        mensaje += `\n📸 *Importante:* Por favor, envía la imagen de tu logo o diseño en el siguiente mensaje para poder procesar tu cotización.\n`
      }
      mensaje += `\n¡Gracias! ✨ Esperamos crear algo increíble juntos.`
    } else {
      // Plantilla para escritorio sin emojis
      mensaje += `¡Hola!\n\nCotización de Letrero con Luz Personalizado:\n\n`
      mensaje += `Tipo de Letrero: ${
        formData.tipoLetrero === "texto" ? "Letrero con Texto" : "Letrero con Logo/Diseño"
      }\n`
      if (formData.tipoLetrero === "texto") {
        mensaje += `Texto: ${formData.textoLetrero}\n`
      } else {
        mensaje += `Nota: Por favor, envía tu logo o diseño como imagen en el siguiente mensaje.\n`
      }
      mensaje += `Tipo de Iluminación: ${
        tiposLuz.find((t) => t.value === formData.tipoLuz)?.label
      }\n`
      if (formData.tipoLuz === "neon") {
        mensaje += `Color de Neón: ${formData.colorLuz}\n`
      }
      mensaje += `Tamaño: ${tamanos.find((t) => t.value === formData.tamano)?.label}\n`
      if (formData.mensaje) {
        mensaje += `\nMensaje Adicional:\n${formData.mensaje}\n`
      }
      if (formData.tipoLetrero === "logo") {
        mensaje += `\nImportante: Por favor, envía la imagen de tu logo o diseño en el siguiente mensaje para poder procesar tu cotización.\n`
      }
      mensaje += `\n¡Gracias! Esperamos crear algo increíble juntos.`
    }

    const numeroWhatsApp = "5213317659254"
    // Usar esquema whatsapp:// en móviles o https://wa.me/ para escritorio
    const enlaceWhatsApp = isMobile
      ? `whatsapp://send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensaje)}`
      : `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`

    window.open(enlaceWhatsApp, "_blank")
    setIsSubmitting(false)
    setCotizacionEnviada(true)
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return (
          formData.tipoLetrero !== "" &&
          (formData.tipoLetrero === "logo" || (formData.tipoLetrero === "texto" && formData.textoLetrero.length >= 3))
        )
      case 2:
        return formData.tipoLuz !== ""
      case 3:
        return formData.tamano !== ""
      default:
        return true
    }
  }

  const ConfirmacionCotizacion = () => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-800/50 backdrop-blur-xl rounded-2xl shadow-xl p-6 md:p-8 text-center"
      >
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-white mb-4">¡Cotización Enviada!</h2>
        <p className="text-gray-300 mb-6">
          Gracias por tu interés en nuestros letreros luminosos personalizados. Hemos recibido tu solicitud de cotización.
        </p>
        <div className="bg-amber-500/10 border border-amber-500 text-amber-500 p-4 rounded-xl">
          <h3 className="text-lg font-semibold mb-2">Próximos pasos:</h3>
          <ul className="list-disc list-inside text-left">
            <li>Revisaremos los detalles de tu solicitud.</li>
            <li>Nos pondremos en contacto contigo a través de WhatsApp en breve.</li>
            <li>Responderemos a cualquier pregunta adicional que puedas tener.</li>
            <li>Te proporcionaremos una cotización detallada.</li>
          </ul>
        </div>
        <p className="text-gray-400 mt-6">
          Si tienes alguna pregunta urgente, no dudes en contactarnos directamente a través de WhatsApp.
        </p>
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <span className="text-amber-500 font-medium mb-2 block">Personalización Única</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Crea tu Letrero Luminoso</h1>
          <div className="bg-amber-500/10 border border-amber-500 text-amber-500 p-4 rounded-xl mt-4 mb-8">
            <h3 className="text-lg font-semibold mb-2">¡Nota importante!</h3>
            <p>
              Este formulario es para solicitar una cotización. Una vez que lo envíes, nos pondremos en contacto contigo
              a través de WhatsApp para finalizar los detalles y procesar tu pedido.
            </p>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mb-4" />
          <p className="text-gray-300 max-w-xl mx-auto">
            Diseña un letrero que refleje la esencia de tu marca. Personaliza cada detalle y recibe una cotización al instante.
          </p>
        </motion.div>

        {cotizacionEnviada ? (
          <ConfirmacionCotizacion />
        ) : (
          <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl shadow-xl p-6 md:p-8">
            <div className="flex justify-between items-center mb-8">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className={`flex items-center ${step < 4 ? "flex-1" : ""}`}>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step === currentStep
                        ? "bg-amber-500 text-gray-900"
                        : step < currentStep
                          ? "bg-green-500 text-white"
                          : "bg-gray-700 text-gray-400"
                    }`}
                  >
                    {step < currentStep ? <Check size={16} /> : <span>{step}</span>}
                  </div>
                  {step < 4 && (
                    <div className={`flex-1 h-1 mx-2 rounded ${step < currentStep ? "bg-green-500" : "bg-gray-700"}`} />
                  )}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <AnimatePresence mode="wait">
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h2 className="text-xl font-semibold text-white mb-4">¿Qué tipo de letrero deseas?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {tiposLetrero.map((tipo) => (
                        <button
                          key={tipo.value}
                          type="button"
                          onClick={() => {
                            handleInputChange("tipoLetrero", tipo.value)
                            if (tipo.value === "logo") {
                              handleInputChange("textoLetrero", "")
                            }
                          }}
                          className={`relative p-6 rounded-xl border-2 text-left transition-all ${
                            formData.tipoLetrero === tipo.value
                              ? "border-amber-500 bg-amber-500/10"
                              : "border-gray-700 bg-gray-800/50 hover:border-gray-600"
                          }`}
                        >
                          {tipo.value === "texto" ? (
                            <span className="text-2xl mb-3 block">ABC</span>
                          ) : (
                            <ImageIcon className="w-8 h-8 mb-3" />
                          )}
                          <h3 className="text-white font-medium mb-2">{tipo.label}</h3>
                          <p className="text-sm text-gray-400">{tipo.description}</p>
                          {formData.tipoLetrero === tipo.value && (
                            <div className="absolute top-2 right-2">
                              <Check className="w-4 h-4 text-amber-500" />
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                    <div className="bg-blue-500/10 border border-blue-500 text-blue-500 p-4 rounded-xl mt-4">
                      <h3 className="text-lg font-semibold mb-2">¡Consejo!</h3>
                      <p>
                        Elige "Letrero con Texto" si quieres que escribamos algo específico, o "Letrero con Logo/Diseño"
                        si tienes una imagen que quieres que recreemos en luces.
                      </p>
                    </div>
                    {formData.tipoLetrero === "texto" && (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                        <input
                          type="text"
                          value={formData.textoLetrero}
                          onChange={(e) => handleInputChange("textoLetrero", e.target.value)}
                          placeholder="Ingresa el texto para tu letrero..."
                          className="w-full bg-gray-700/50 border border-gray-600 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/50 placeholder-gray-400"
                        />
                        <p className="text-sm text-gray-400">
                          Este será el texto que aparecerá en tu letrero luminoso.
                        </p>
                      </motion.div>
                    )}

                    {formData.tipoLetrero === "logo" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-amber-500/10 border border-amber-500/50 rounded-xl p-4 text-sm text-amber-100"
                      >
                        Podrás enviar tu logo o diseño directamente por WhatsApp al finalizar el proceso de cotización.
                      </motion.div>
                    )}
                  </motion.div>
                )}

                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <h2 className="text-xl font-semibold text-white mb-4">Selecciona el tipo de iluminación</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {tiposLuz.map((tipo) => {
                        const Icon = tipo.icon
                        return (
                          <button
                            key={tipo.value}
                            type="button"
                            onClick={() => handleInputChange("tipoLuz", tipo.value)}
                            className={`relative p-4 rounded-xl border-2 transition-all ${
                              formData.tipoLuz === tipo.value
                                ? "border-amber-500 bg-amber-500/10"
                                : "border-gray-700 bg-gray-800/50 hover:border-gray-600"
                            }`}
                          >
                            <Icon
                              className={`w-8 h-8 mb-2 ${formData.tipoLuz === tipo.value ? "text-amber-500" : "text-gray-400"}`}
                            />
                            <h3 className="text-white font-medium mb-1">{tipo.label}</h3>
                            <p className="text-sm text-gray-400">{tipo.description}</p>
                            {formData.tipoLuz === tipo.value && (
                              <div className="absolute top-2 right-2">
                                <Check className="w-4 h-4 text-amber-500" />
                              </div>
                            )}
                          </button>
                        )
                      })}
                    </div>
                    <div className="bg-green-500/10 border border-green-500 text-green-500 p-4 rounded-xl mt-4">
                      <h3 className="text-lg font-semibold mb-2">¡Dato interesante!</h3>
                      <p>
                        El neón LED es nuestra opción más brillante y llamativa, perfecta para destacar en cualquier espacio.
                      </p>
                    </div>
                    {formData.tipoLuz === "neon" && (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-4">
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Selecciona el color del neón
                        </label>
                        <input
                          type="color"
                          value={formData.colorLuz}
                          onChange={(e) => handleInputChange("colorLuz", e.target.value)}
                          className="w-full h-12 rounded-xl cursor-pointer"
                        />
                      </motion.div>
                    )}
                  </motion.div>
                )}

                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <h2 className="text-xl font-semibold text-white mb-4">¿De qué tamaño lo deseas?</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {tamanos.map((tam) => (
                        <button
                          key={tam.value}
                          type="button"
                          onClick={() => handleInputChange("tamano", tam.value)}
                          className={`relative p-4 rounded-xl border-2 transition-all ${
                            formData.tamano === tam.value
                              ? "border-amber-500 bg-amber-500/10"
                              : "border-gray-700 bg-gray-800/50 hover:border-gray-600"
                          }`}
                        >
                          <Ruler
                            className={`w-6 h-6 mb-2 mx-auto ${formData.tamano === tam.value ? "text-amber-500" : "text-gray-400"}`}
                          />
                          <div className="text-white font-medium">{tam.label}</div>
                          <div className="text-sm text-amber-500 mt-1">${tam.price}</div>
                          {formData.tamano === tam.value && (
                            <div className="absolute top-2 right-2">
                              <Check className="w-4 h-4 text-amber-500" />
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                    <div className="bg-purple-500/10 border border-purple-500 text-purple-500 p-4 rounded-xl mt-4">
                      <h3 className="text-lg font-semibold mb-2">¡Recuerda!</h3>
                      <p>
                        El tamaño afecta tanto el impacto visual como el precio. Elige el que mejor se adapte a tu
                        espacio y presupuesto.
                      </p>
                    </div>
                  </motion.div>
                )}

                {currentStep === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h2 className="text-xl font-semibold text-white mb-4">Detalles finales</h2>
                    <div className="space-y-4">
                      <label className="block text-sm font-medium text-gray-300">Mensaje adicional (opcional)</label>
                      <textarea
                        value={formData.mensaje}
                        onChange={(e) => handleInputChange("mensaje", e.target.value)}
                        placeholder="¿Algún detalle específico que debamos saber?"
                        rows="3"
                        className="w-full bg-gray-700/50 border border-gray-600 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/50 placeholder-gray-400"
                      />
                    </div>
                    <div className="bg-red-500/10 border border-red-500 text-red-500 p-4 rounded-xl mt-4 mb-4">
                      <h3 className="text-lg font-semibold mb-2">¡Atención!</h3>
                      <p>
                        Al hacer clic en "Solicitar Cotización", serás redirigido a WhatsApp para finalizar tu pedido.
                        Asegúrate de tener toda la información lista.
                      </p>
                    </div>
                    {formData.tipoLetrero === "logo" && (
                      <div className="bg-amber-500/10 border border-amber-500/50 rounded-xl p-4">
                        <h3 className="text-amber-500 font-medium mb-2">Importante: Envío de logo/diseño</h3>
                        <p className="text-sm text-amber-100">
                          Al hacer clic en "Solicitar Cotización", serás redirigido a WhatsApp donde podrás enviar la
                          imagen de tu logo o diseño junto con tu solicitud.
                        </p>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex justify-between pt-6">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={() => setCurrentStep((prev) => prev - 1)}
                    className="px-6 py-2 rounded-xl border border-gray-600 text-gray-300 hover:bg-gray-700/50 transition-all"
                  >
                    Anterior
                  </button>
                )}
                {currentStep < 4 && (
                  <button
                    type="button"
                    onClick={() => setCurrentStep((prev) => prev + 1)}
                    disabled={!canProceed()}
                    className={`ml-auto px-6 py-2 rounded-xl flex items-center ${
                      canProceed()
                        ? "bg-amber-500 hover:bg-amber-600 text-gray-900"
                        : "bg-gray-700 text-gray-500 cursor-not-allowed"
                    } transition-all`}
                  >
                    Siguiente
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                )}
                {currentStep === 4 && (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="ml-auto px-6 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-gray-900 flex items-center transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        Solicitar Cotización
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

export default LetreroPersonalizado
