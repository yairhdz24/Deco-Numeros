"use client"
import { motion, AnimatePresence } from "framer-motion"
import {
  Trash2,
  Plus,
  Minus,
  ShoppingCart,
  Truck,
  Shield,
  PenToolIcon as Tool,
  ThumbsUp,
  Info,
  ArrowRight,
} from "lucide-react"
import { toast } from "react-hot-toast"
import { useCart } from "../context/CarContext"

const guaranteeInfo = [
  {
    icon: Truck,
    title: "Entrega Rápida",
    description:
      "5 a 10 días hábiles para pedidos personalizados. Recolección al día siguiente para productos en stock.",
  },
  {
    icon: Shield,
    title: "Garantía de 1 Año",
    description:
      "Cubrimos partes eléctricas por 1 año. No nos responsabilizamos de conexiones mal elaboradas por el usuario.",
  },
  {
    icon: Tool,
    title: "Materiales de Alta Gama",
    description: "Fabricados en aluminio o acero, resistentes a cualquier clima. Aptos para interior y exterior.",
  },
  {
    icon: ThumbsUp,
    title: "Durabilidad Comprobada",
    description: "Productos con más de 25 años en óptimas condiciones. Calidad que perdura en el tiempo.",
  },
]

const CartPage = () => {
  const { cartItems, removeItem, updateItemQuantity } = useCart()

  const calcularTotal = () => {
    return cartItems.reduce((total, item) => total + item.precio * item.cantidad, 0).toFixed(2)
  }

  const finalizarCompra = async () => {
    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: cartItems }),
      })

      const data = await response.json()
      if (data.sessionId) {
        toast.success("Redirigiendo al checkout...")
      }
    } catch (error) {
      console.error("Error al crear la sesión de pago:", error)
      toast.error("Error al iniciar el pago")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-center"
        >
          Tu Carrito de Compras
        </motion.h1>

        {cartItems.length === 0 ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
            <div className="flex flex-col items-center gap-4">
              <ShoppingCart className="w-16 h-16 text-gray-400" />
              <h2 className="text-2xl font-semibold text-gray-600">Tu carrito está vacío</h2>
              <p className="text-gray-500 max-w-md mx-auto">
                Parece que aún no has agregado ningún producto a tu carrito. ¡Explora nuestro catálogo y encuentra el
                diseño perfecto para ti!
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 px-6 py-3 bg-amber-500 text-white rounded-lg font-medium flex items-center gap-2"
              >
                Explorar Productos
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Lista de Productos */}
            <div className="lg:col-span-2 space-y-4">
              <AnimatePresence>
                {cartItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                      {/* Imagen del producto */}
                      <div className="relative w-full sm:w-32 h-32 rounded-lg overflow-hidden bg-gray-100">
                        <img
                          src={item.imagen || "https://via.placeholder.com/150"}
                          alt={item.nombre}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Información del producto */}
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">{item.nombre}</h3>
                        <p className="text-2xl font-bold text-amber-500 mt-1">${item.precio.toFixed(2)}</p>

                        {item.personalizacion && (
                          <div className="mt-2 space-y-1">
                            <p className="text-sm text-gray-600">
                              <span className="font-medium">Texto:</span> {item.personalizacion.texto}
                            </p>
                            <p className="text-sm text-gray-600">
                              <span className="font-medium">Color:</span> {item.personalizacion.colorNumero}
                            </p>
                            <p className="text-sm text-gray-600">
                              <span className="font-medium">Fondo:</span> {item.personalizacion.fondoPlaca}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Controles de cantidad */}
                      <div className="flex items-center gap-4">
                        <div className="flex items-center border border-gray-200 rounded-lg">
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => updateItemQuantity(item.id, item.cantidad - 1)}
                            className="p-2 hover:bg-gray-50 transition-colors"
                            disabled={item.cantidad <= 1}
                          >
                            <Minus className="w-4 h-4" />
                          </motion.button>
                          <span className="w-12 text-center font-medium">{item.cantidad}</span>
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => updateItemQuantity(item.id, item.cantidad + 1)}
                            className="p-2 hover:bg-gray-50 transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </motion.button>
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => removeItem(item.id)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Resumen y Checkout */}
            <div className="lg:sticky lg:top-4 space-y-6">
              {/* Resumen de compra */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
              >
                <h2 className="text-xl font-bold mb-4">Resumen del Pedido</h2>
                <div className="space-y-3">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>${calcularTotal()}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Envío</span>
                    <span className="text-green-500">Gratis</span>
                  </div>
                  <div className="border-t border-gray-100 pt-3 flex justify-between items-center">
                    <span className="text-lg font-bold">Total</span>
                    <span className="text-2xl font-bold text-amber-500">${calcularTotal()}</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={finalizarCompra}
                  className="w-full mt-6 bg-amber-500 text-white py-3 rounded-lg font-medium hover:bg-amber-600 transition-colors flex items-center justify-center gap-2"
                >
                  Finalizar Compra
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>

              {/* Información de garantía */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Info className="w-5 h-5 text-amber-500" />
                  <h2 className="text-xl font-bold">Información Importante</h2>
                </div>
                <div className="grid gap-4">
                  {guaranteeInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-3"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                          <info.icon className="w-4 h-4 text-amber-500" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{info.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{info.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CartPage

