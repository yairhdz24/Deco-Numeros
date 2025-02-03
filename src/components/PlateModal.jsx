import { motion } from "framer-motion"
import { X } from "lucide-react"

const PlateModal = ({ isOpen, onClose, plates, selectedPlate, onSelectPlate }) => {
  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.95 }}
        className="bg-gray-800 rounded-xl p-6 w-full max-w-lg"
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-white">Selecciona el Fondo de la Placa</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {plates.map((plate) => (
            <button
              key={plate.id}
              onClick={() => {
                onSelectPlate(plate.id)
                onClose()
              }}
              className={`
                relative p-4 rounded-lg transition-all hover:bg-gray-700
                ${selectedPlate === plate.id ? "bg-gray-700 ring-2 ring-amber-500" : ""}
              `}
            >
              <div className="space-y-2">
                {/* Muestra de la placa con número de ejemplo */}
                <div className="relative h-32 rounded-lg overflow-hidden">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url(${plate.texture})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold texto3D text-white">8950</span>
                  </div>
                </div>
                <div className="text-sm text-white">{plate.name}</div>
                <div className="text-xs text-amber-500 font-medium">${plate.price}</div>
              </div>
            </button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default PlateModal

