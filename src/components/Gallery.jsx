"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

const images = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  src: `/images/gallery_${i + 1}.jpg`,
  alt: `Trabajo ${i + 1}`,
  title: `Proyecto ${i + 1}`,
  description: `Descripción del proyecto ${i + 1}. Este es un ejemplo de trabajo realizado por nuestra empresa.`,
}))

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Nuestros Trabajos</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <motion.div
            key={image.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer overflow-hidden rounded-lg shadow-lg"
            onClick={() => setSelectedImage(image)}
          >
            <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-48 object-cover" />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-lg p-4 max-w-3xl w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </button>
              <img
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                className="w-full h-64 md:h-96 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-600">{selectedImage.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Gallery

