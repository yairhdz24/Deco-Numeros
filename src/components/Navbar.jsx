"use client"

import React, { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Home, ShoppingBag, ShoppingCart, Menu, X, Mail, PenTool, ChevronRight } from "lucide-react"

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  //const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const menuItems = [
    { icon: Home, label: "Inicio", path: "/" },
    { icon: ShoppingBag, label: "Catálogo", path: "/catalogo" },
    { icon: PenTool, label: "Personalizar", path: "/personalizar" },
    { icon: Mail, label: "Contacto", path: "/contacto" },
    { icon: ShoppingCart, label: "Carrito", path: "/carrito" },
  ]

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrolled(window.scrollY > 20)
  //   }

  //   window.addEventListener("scroll", handleScroll)
  //   return () => window.removeEventListener("scroll", handleScroll)
  // }, [])

  useEffect(() => {
    setIsDrawerOpen(false)
  }, [location])

  const navbarClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black`

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="relative group">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Deco%20(1)-6YpDDYVoYnIdmXF2hQpQStoZFigWTi.png"
            alt="Deco Números"
            className="h-16 w-auto filter invert brightness-0"
          />
          <motion.div
            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"
            whileHover={{ width: "100%" }}
          />
        </Link>

        {/* Mobile Menu Toggle */}
        <motion.button
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          {isDrawerOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative group">
              <Link
                to={item.path}
                className={`flex items-center space-x-2 text-white/90 hover:text-white transition-colors duration-300 ${
                  location.pathname === item.path ? "text-amber-400" : ""
                }`}
              >
                <item.icon size={20} className="group-hover:text-amber-400 transition-colors duration-300" />
                <span className="font-medium">{item.label}</span>
              </Link>
              <motion.div
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300"
                whileHover={{ width: "100%" }}
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {isDrawerOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
                onClick={() => setIsDrawerOpen(false)}
              />

              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="fixed top-0 left-0 bottom-0 w-50 bg-black shadow-xl md:hidden z-50 overflow-y-auto"
              >
                <div className="flex flex-col h-full">
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-8">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Deco%20(1)-6YpDDYVoYnIdmXF2hQpQStoZFigWTi.png"
                        alt="Deco Números"
                        className="h-16 w-auto max-w-xs filter invert brightness-0"
                      />
                      <motion.button
                        onClick={() => setIsDrawerOpen(false)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-white/80 hover:text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                      >
                        <X size={24} />
                      </motion.button>
                    </div>

                    <div className="space-y-4">
                      {menuItems.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Link
                            to={item.path}
                            className={`group p-4 flex items-center justify-between rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 ${
                              location.pathname === item.path ? "bg-white/10 text-amber-400" : ""
                            }`}
                            onClick={() => setIsDrawerOpen(false)}
                          >
                            <div className="flex items-center space-x-4">
                              <item.icon
                                size={24}
                                className="group-hover:text-amber-400 transition-colors duration-300"
                              />
                              <span className="text-xl font-medium">{item.label}</span>
                            </div>
                            <ChevronRight
                              size={20}
                              className="text-white/40 group-hover:text-amber-400 group-hover:translate-x-1 transition-all duration-300"
                            />
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-auto p-6 border-t border-white/10">
                    <p className="text-white/60 text-sm text-center">© 2024 Deco Números</p>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar

