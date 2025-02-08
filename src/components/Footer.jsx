import { Link } from "react-router-dom"
import { Instagram, Facebook, Mail, MessageCircle, Phone, MapPin, ArrowRight } from "lucide-react"
import logo from "../assets/images/Deco_Numeros.png"

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8">
      {/* Separator */}
      <div className="container mx-auto px-4">
        <div className="h-1.5 w-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-full mb-8"></div>
      </div>

      <div className="container mx-auto px-4">
        {/* Main Grid */}
        <div className="grid md:grid-cols-4 gap-6">
          {/* Brand Section */}
          <div>
            <div className="mb-4">
              <img src={logo} alt="Deco Números Logo" className="h-32 w-38" />
            </div>
            {/* <p className="text-gray-300 text-base">
              Transformamos espacios con letreros personalizados para tu hogar y negocio.
            </p> */}
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Navegación</h4>
            <ul className="space-y-2">
              {[
                { label: "Inicio", path: "/" },
                { label: "Catálogo", path: "/catalogo" },
                { label: "Personalizar", path: "/personalizar" },
                { label: "Contacto", path: "/contacto" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-base text-gray-300 hover:text-amber-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Contacto</h4>
            <div className="space-y-3 text-base">
              <a
                href="mailto:deconumerosresidencial@gmail.com"
                className="flex items-center text-gray-300 hover:text-amber-400 transition-colors"
              >
                <Mail className="h-5 w-5 mr-2 text-amber-500" />
                deconumerosresidencial@gmail.com
              </a>
              <a
                href="tel:+523333333333"
                className="flex items-center text-gray-300 hover:text-amber-400 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2 text-amber-500" />
                +52 (33) 3333 3333
              </a>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 mr-2 text-amber-500" />
                Av Niños Héroes 1023, Guadalajara, Jal.
              </div>
            </div>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Conéctate con nosotros</h4>
            <div className="flex space-x-3 mb-4">
              {[
                { icon: Facebook, link: "https://www.facebook.com/deconumeros/?locale=es_LA" },
                { icon: Instagram, link: "https://www.instagram.com/deconumeros/" },
                { icon: Mail, link: "mailto:deconumerosresidencial@gmail.com" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-amber-500 hover:bg-amber-500 hover:text-white transition-all"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>

            {/* Contact Question Box */}
            <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
              <h5 className="text-white text-sm font-medium mb-3">¿Tienes alguna duda?</h5>
              <a
                href="mailto:deconumerosresidencial@gmail.com"
                className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-amber-500 rounded-full hover:bg-amber-600 transition-colors"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Contáctanos
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-4 border-t border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2">
            <p className="text-sm text-gray-400">© 2025 Deco Números. Todos los derechos reservados.</p>
            <p className="text-sm text-gray-400">
              Creado por{" "}
              <a
                href="https://github.com/yairhdz24"
                className="text-amber-400 hover:text-amber-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Yair Hernandez
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

