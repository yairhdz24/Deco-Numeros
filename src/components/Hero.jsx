import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 text-center py-20 text-white relative">
      <motion.h1
        className="text-6xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Letreros Personalizados
      </motion.h1>
      <motion.p
        className="text-xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Diseños únicos para transformar tus espacios
      </motion.p>
      <motion.button
        className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Explorar Productos
      </motion.button>
    </div>
  );
};