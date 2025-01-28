import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Home, ShoppingBag, ShoppingCart, Menu, X, Mail, PenTool } from "lucide-react"

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const location = useLocation()

  const menuItems = [
    { icon: Home, label: "Inicio", path: "/" },
    { icon: ShoppingBag, label: "Catálogo", path: "/catalogo" },
    { icon: PenTool, label: "Personalizar", path: "/personalizar" },
    { icon: Mail, label: "Contacto", path: "/contacto" },
    { icon: ShoppingCart, label: "Carrito", path: "/carrito" },
  ]

  const drawerVariants = {
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  }

  return (
    <nav className="bg-[#F5F5F0] shadow-md fixed top-0 left-0 right-0 z-50 ">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-[#4A4A4A]">
          Deco Numeros (logo)
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden ">
          <motion.button
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-[#8B7D6B]"
          >
            {isDrawerOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {menuItems.map((item, index) => (
            <motion.div key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                to={item.path}
                className={`flex items-center space-x-2 text-[#4A4A4A] hover:text-[#8B7D6B] transition-colors duration-300 ${location.pathname === item.path ? "text-[#8B7D6B] font-semibold" : ""}`}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {isDrawerOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={drawerVariants}
              className="fixed top-0 left-0 bottom-0 w-64 bg-[#F5F5F0] shadow-lg md:hidden z-50"
            >
              <div className="p-4 flex flex-col h-full">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-xl font-bold text-[#4A4A4A]">Menú</span>
                  <motion.button
                    onClick={() => setIsDrawerOpen(false)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-[#8B7D6B]"
                  >
                    <X size={24} />
                  </motion.button>
                </div>
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className={`py-3 flex items-center space-x-4 text-[#4A4A4A] hover:text-[#8B7D6B] transition-colors duration-300 ${location.pathname === item.path ? "text-[#8B7D6B] font-semibold" : ""}`}
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    <item.icon size={24} />
                    <span className="text-lg">{item.label}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Overlay for mobile drawer */}
        {isDrawerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsDrawerOpen(false)}
          />
        )}
      </div>
    </nav>
  )
}

export default Navbar

