"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Upload,
  Send,
  Ruler,
  Sun,
  Zap,
  ArrowRight,
  Check,
  Lightbulb,
} from "lucide-react";
// import confetti from "canvas-confetti"  // Si deseas agregar confetti

const LetreroPersonalizado = () => {
  const [formData, setFormData] = useState({
    nombreEmpresa: "",
    tipoLuz: "",
    colorLuz: "#ff00ff",
    tamano: "",
    mensaje: "",
    imagen: null,
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const tamanos = [
    { value: "40", label: "40cm", price: "4,999" },
    { value: "60", label: "60cm", price: "6,999" },
    { value: "80", label: "80cm", price: "8,999" },
    { value: "100", label: "100cm", price: "10,999" },
  ];

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
  ];

  // Actualiza el estado del formulario
  const handleInputChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Maneja la carga de imagen y genera un preview
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          imagen: {
            file,
            preview: reader.result,
          },
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Función simulada de "upload" de imagen que retorna una URL de ejemplo
  const uploadImage = async (file) => {
    // En una implementación real, subirías la imagen a un servicio y obtendrías su URL pública.
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("https://example.com/imagen_referencia.jpg");
      }, 1500);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Opcional: puedes activar confetti aquí
    // confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });

    let mensaje = `¡Hola! 👋\n\n*Cotización de Letrero con Luz Personalizado:*\n\n`;
    mensaje += `📝 *Nombre/Texto:* ${formData.nombreEmpresa}\n`;
    mensaje += `💡 *Tipo de Iluminación:* ${tiposLuz.find((t) => t.value === formData.tipoLuz)?.label}\n`;
    if (formData.tipoLuz === "neon") {
      mensaje += `🎨 *Color de Neón:* ${formData.colorLuz}\n`;
    }
    mensaje += `📏 *Tamaño:* ${tamanos.find((t) => t.value === formData.tamano)?.label}\n\n`;
    mensaje += `💬 *Mensaje Adicional:*\n${formData.mensaje || "No se incluyó mensaje adicional"}\n\n`;

    // Si hay imagen, subirla y agregar la URL al mensaje
    if (formData.imagen && formData.imagen.file) {
      const uploadedUrl = await uploadImage(formData.imagen.file);
      mensaje += `📎 *Imagen de referencia:* ${uploadedUrl}\n`;
    }

    mensaje += `\n¡Gracias! ✨ Espero su respuesta.`;

    // Número de WhatsApp (incluye código de país, ej: 52 para México)
    const numeroWhatsApp = "5213317659254"; 
    const enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

    // Abrir WhatsApp en una nueva pestaña
    window.open(enlaceWhatsApp, "_blank");
    setIsSubmitting(false);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.nombreEmpresa.length >= 3;
      case 2:
        return formData.tipoLuz !== "";
      case 3:
        return formData.tamano !== "";
      default:
        return true;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-amber-500 font-medium mb-2 block">
            Personalización Única
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Crea tu Letrero Luminoso
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mb-4" />
          <p className="text-gray-300 max-w-xl mx-auto">
            Diseña un letrero que refleje la esencia de tu marca. Personaliza cada
            detalle y recibe una cotización al instante.
          </p>
        </motion.div>

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
                  <div
                    className={`flex-1 h-1 mx-2 rounded ${
                      step < currentStep ? "bg-green-500" : "bg-gray-700"
                    }`}
                  />
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
                  className="space-y-4"
                >
                  <h2 className="text-xl font-semibold text-white mb-4">
                    ¿Qué texto deseas para tu letrero?
                  </h2>
                  <input
                    type="text"
                    value={formData.nombreEmpresa}
                    onChange={(e) => handleInputChange("nombreEmpresa", e.target.value)}
                    placeholder="Ej: Coffee House, Juan's Bar, Casa Linda..."
                    className="w-full bg-gray-700/50 border border-gray-600 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/50 placeholder-gray-400"
                    required
                  />
                  <p className="text-sm text-gray-400">
                    Este será el texto principal que aparecerá en tu letrero luminoso.
                  </p>
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
                  <h2 className="text-xl font-semibold text-white mb-4">
                    Selecciona el tipo de iluminación
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {tiposLuz.map((tipo) => {
                      const Icon = tipo.icon;
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
                            className={`w-8 h-8 mb-2 ${
                              formData.tipoLuz === tipo.value
                                ? "text-amber-500"
                                : "text-gray-400"
                            }`}
                          />
                          <h3 className="text-white font-medium mb-1">{tipo.label}</h3>
                          <p className="text-sm text-gray-400">{tipo.description}</p>
                          {formData.tipoLuz === tipo.value && (
                            <div className="absolute top-2 right-2">
                              <Check className="w-4 h-4 text-amber-500" />
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                  {formData.tipoLuz === "neon" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4"
                    >
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
                  <h2 className="text-xl font-semibold text-white mb-4">
                    ¿De qué tamaño lo deseas?
                  </h2>
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
                          className={`w-6 h-6 mb-2 mx-auto ${
                            formData.tamano === tam.value
                              ? "text-amber-500"
                              : "text-gray-400"
                          }`}
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
                  <h2 className="text-xl font-semibold text-white mb-4">
                    Detalles finales
                  </h2>
                  <div className="space-y-4">
                    <label className="block text-sm font-medium text-gray-300">
                      Mensaje adicional (opcional)
                    </label>
                    <textarea
                      value={formData.mensaje}
                      onChange={(e) => handleInputChange("mensaje", e.target.value)}
                      placeholder="¿Algún detalle específico que debamos saber?"
                      rows="3"
                      className="w-full bg-gray-700/50 border border-gray-600 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/50 placeholder-gray-400"
                    />
                  </div>

                  <div className="space-y-4">
                    <label className="block text-sm font-medium text-gray-300">
                      Imagen de referencia (opcional)
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        onChange={handleImageUpload}
                        accept="image/*"
                        className="hidden"
                        id="imagen"
                      />
                      <label
                        htmlFor="imagen"
                        className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-xl cursor-pointer transition-all ${
                          formData.imagen
                            ? "border-amber-500 bg-amber-500/10"
                            : "border-gray-600 bg-gray-700/50 hover:bg-gray-700"
                        }`}
                      >
                        {formData.imagen ? (
                          <div className="relative w-full h-full">
                            <img
                              src={formData.imagen.preview || "/placeholder.svg"}
                              alt="Preview"
                              className="w-full h-full object-cover rounded-xl"
                            />
                            <div className="absolute inset-0 bg-black/50 rounded-xl flex items-center justify-center">
                              <p className="text-white text-sm">Click para cambiar</p>
                            </div>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center justify-center">
                            <Upload className="w-8 h-8 mb-2 text-gray-400" />
                            <p className="text-sm text-gray-400">
                              Click para subir o arrastra una imagen
                            </p>
                          </div>
                        )}
                      </label>
                    </div>
                  </div>
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
              {currentStep < 4 ? (
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
              ) : (
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
      </div>
    </div>
  );
};

export default LetreroPersonalizado;
