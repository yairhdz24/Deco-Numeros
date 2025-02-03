import { motion } from "framer-motion";
import { X, Clock, Check, AlertTriangle, Package } from "lucide-react";
import "../css/ColorModal.css";

const ColorModal = ({ isOpen, onClose, colors, selectedColor, onSelectColor }) => {
  if (!isOpen) return null;

  const ColorSection = ({ title, items, type }) => (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        {type === "stock" && <Package className="w-5 h-5 text-green-400" />}
        {type === "custom" && <Clock className="w-5 h-5 text-amber-400" />}
        {type === "mixed" && <AlertTriangle className="w-5 h-5 text-blue-400" />}
        <h4 className="text-lg font-semibold text-white">{title}</h4>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((color) => (
          <motion.div
            key={color.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`
              relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm
              ${!color.available && type === "stock" ? "opacity-50" : ""}
              ${selectedColor === color.id ? "ring-2 ring-amber-500" : ""}
              transition-all duration-300 hover:bg-gray-800/70
            `}
          >
            <button
              onClick={() => {
                if (color.available !== false) {
                  onSelectColor(color.id);
                  onClose();
                }
              }}
              disabled={color.available === false}
              className="w-full h-full p-4"
            >
              <div className="flex flex-col items-center justify-center py-6">
                <div
                  className="text-7xl font-bold number-preview"
                  style={{
                    backgroundImage: `url(${color.texture})`,
                    textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                  }}
                >
                  1234
                </div>
              </div>
              <div className="space-y-2 text-center">
                <h3 className="font-medium text-white truncate">{color.name}</h3>
                {type === "stock" && (
                  <div className="flex items-center justify-center gap-2">
                    {color.available ? (
                      <>
                        <Check className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-green-400">En Stock</span>
                      </>
                    ) : (
                      <>
                        <AlertTriangle className="w-4 h-4 text-red-400" />
                        <span className="text-sm text-red-400">Agotado</span>
                      </>
                    )}
                  </div>
                )}
                {(type === "custom" || type === "mixed") && (
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="w-4 h-4 text-amber-400" />
                    <span className="text-sm text-amber-400">Tiempo de entrega: {color.leadTime}</span>
                  </div>
                )}
              </div>
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 overflow-y-auto"
    >
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="relative w-full max-w-6xl bg-gray-900 rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="flex items-center justify-between p-6 border-b border-gray-800">
            <h2 className="text-2xl font-bold text-white">Selecciona el Color</h2>
            <button onClick={onClose} className="p-2 text-gray-400 hover:text-white transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="p-6 space-y-8 max-h-[70vh] overflow-y-auto custom-scrollbar">
            <ColorSection title="Colores en Stock" items={colors.stock} type="stock" />
            <ColorSection title="Colores Sobre Pedido" items={colors.custom} type="custom" />
            <ColorSection title="Acabados Mixtos" items={colors.mixed} type="mixed" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ColorModal;
