"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  ExternalLink,
  Facebook,
  Instagram,
  PhoneIcon as WhatsApp,
} from "lucide-react"
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"
import toast from "react-hot-toast"
import "../css/ContactPage.css"

mapboxgl.accessToken = "pk.eyJ1IjoieWFpcmhkejI0IiwiYSI6ImNtNnVjdjUxMzBjbDMybHB1NTQ2NTE1N2wifQ.tQXdn7ZFLsCACA41UPGOLQ"

const ContactPage = () => {
  const mapContainer = useRef(null)
  const map = useRef(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formulario, setFormulario] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  })

  const storeLocation = [-103.351742, 20.664449]

  useEffect(() => {
    if (map.current) return
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/yairhdz24/clmtz4wh605jz01qb1gdr328m",
      center: storeLocation,
      zoom: 15,
    })

    new mapboxgl.Marker({ color: "#f59e0b" }) // Color ámbar para destacar
      .setLngLat(storeLocation)
      .setPopup(
        new mapboxgl.Popup({ offset: 10, closeButton: false, closeOnClick: true }) // Offset más alto para que se "salga" más del mapa
          .setHTML(`
          <div >
            <div class="flex items-center space-x-2">
              <div class="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shadow-md">
                D
              </div>
              <h3 class="font-semibold text-gray-900 text-sm">Deco Números</h3>
            </div>
            <p class="text-gray-600 mt-1 text-xs">
              📍 Av Niños Héroes 1023, Moderna, Guadalajara, Jal.
            </p>
            <div class="mt-2 flex justify-end">
              <a 
                href="https://goo.gl/maps/dXKq5H1wxg2X9cZv7" 
                target="_blank"
                class="text-xs text-blue-500 hover:underline flex items-center font-medium"
              >
                Ver en Google Maps
                <svg class="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 17l5-5-5-5v10z"></path>
                </svg>
              </a>
            </div>
          </div>
        `)
      )
      .addTo(map.current);


    return
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormulario({ ...formulario, [name]: value })
  }

  const enviarMensaje = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      toast.success("¡Mensaje enviado exitosamente!")
      setFormulario({ nombre: "", email: "", telefono: "", mensaje: "" })
    } catch (error) {
      toast.error("Error al enviar el mensaje. Por favor, intenta nuevamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: MapPin,
      content: "Av Niños Héroes 1023, Moderna, Guadalajara, Jal.",
      link: "https://www.google.com/maps/place/N%C3%BAmeros+Residenciales+Deco+N%C3%BAmeros/@20.6748367,-103.3656705,15z/data=!4m10!1m2!2m1!1sN%C3%BAmeros+Residenciales+Deco+N%C3%BAmeros!3m6!1s0x8428b3b33d0ca671:0xff1d4048618bd050!8m2!3d20.6644319!4d-103.3517207!15sCiROw7ptZXJvcyBSZXNpZGVuY2lhbGVzIERlY28gTsO6bWVyb3NaJiIkbsO6bWVyb3MgcmVzaWRlbmNpYWxlcyBkZWNvIG7Dum1lcm9zkgEQaG9tZV9nb29kc19zdG9yZeABAA!16s%2Fg%2F11g199qbmr?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D",
      external: true,
    },
    {
      icon: Phone,
      content: "(33) 3130-48318",
      link: "tel:+523313048318",
    },
    {
      icon: Mail,
      content: "contacto@ejemplo.com",
      link: "mailto:contacto@ejemplo.com",
    },
    {
      icon: Clock,
      content: "Lunes a Viernes: 9:00 AM - 6:00 PM",
    },
  ]

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/deconumeros/?locale=es_LA", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/deconumeros/", label: "Instagram" },
    { icon: WhatsApp, href: "https://wa.me/523313048318", label: "WhatsApp" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-400 mb-4">Contáctanos</h1>
          <p className="text-xl text-gray-300">Estamos aquí para ayudarte</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Información de Contacto y Mapa */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="p-3 bg-amber-500/10 rounded-lg">
                    <info.icon className="w-5 h-5 text-amber-500" />
                  </div>
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.external ? "_blank" : undefined}
                      rel={info.external ? "noopener noreferrer" : undefined}
                      className="text-gray-300 hover:text-amber-400 transition-colors flex items-center gap-2"
                    >
                      {info.content}
                      {info.external && <ExternalLink className="w-4 h-4" />}
                    </a>
                  ) : (
                    <span className="text-gray-300">{info.content}</span>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Redes Sociales */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50"
            > */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-white">Síguenos en redes sociales</h3>
              <div className="flex gap-5">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-700/50 hover:bg-amber-500/20 rounded-full transition-all hover:scale-110"
                    whileHover={{ y: -2 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-amber-500" />
                  </motion.a>
                ))}
              </div>
            </div>
            {/* </motion.div> */}

            {/* Mapa */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-xl overflow-hidden shadow-lg border border-gray-700/50"
            >
              <div className="relative h-[300px]">
                <div ref={mapContainer} className="absolute inset-0" />
                <div className="absolute inset-0 pointer-events-none border-[8px] border-gray-900/50 rounded-xl" />
              </div>
            </motion.div>
          </div>

          {/* Formulario de Contacto */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-800/50 mt-8 lg:w-2/2 lg:mx-6 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-700/50"
          >
            <h2 className="text-2xl font-bold text-amber-400 mb-6">Envíanos un mensaje</h2>
            <form onSubmit={enviarMensaje} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Nombre completo</label>
                <input
                  type="text"
                  name="nombre"
                  value={formulario.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-900/50 text-white border border-gray-700 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all hover:border-amber-500/50"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Correo electrónico</label>
                <input
                  type="email"
                  name="email"
                  value={formulario.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-900/50 text-white border border-gray-700 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all hover:border-amber-500/50"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Teléfono (opcional)</label>
                <input
                  type="tel"
                  name="telefono"
                  value={formulario.telefono}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-900/50 text-white border border-gray-700 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all hover:border-amber-500/50"
                  placeholder="(33) 1234 5678"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Mensaje</label>
                <textarea
                  name="mensaje"
                  value={formulario.mensaje}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-900/50 text-white border border-gray-700 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all hover:border-amber-500/50 resize-none"
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`
                  w-full py-3 px-6 rounded-lg text-gray-900 font-medium
                  flex items-center justify-center gap-2
                  ${isSubmitting
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 transition-all"
                  }
                `}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar Mensaje
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage

