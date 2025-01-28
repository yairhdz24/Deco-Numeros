import React from 'react';
import { motion } from 'framer-motion';
import { Trash2, Plus, Minus, ShoppingCart } from 'lucide-react';
import toast from 'react-hot-toast';

const CartPage = () => {
  const [carrito, setCarrito] = React.useState([
    {
      id: 1,
      nombre: 'Letrero Personalizado',
      precio: 89.99,
      cantidad: 1,
      imagen: 'https://via.placeholder.com/150'
    }
  ]);

  const calcularTotal = () => {
    return carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0).toFixed(2);
  };

  const actualizarCantidad = (id, nuevaCantidad) => {
    setCarrito(carrito.map(item => 
      item.id === id 
        ? { ...item, cantidad: Math.max(1, nuevaCantidad) }
        : item
    ));
  };

  const eliminarItem = (id) => {
    setCarrito(carrito.filter(item => item.id !== id));
    toast.success('Producto eliminado del carrito');
  };

  const finalizarCompra = () => {
    toast.success('Compra realizada con éxito');
    setCarrito([]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 flex items-center">
        <ShoppingCart className="mr-4 text-blue-600" />
        Tu Carrito
      </h1>

      {carrito.length === 0 ? (
        <div className="text-center py-16 text-gray-600">
          Tu carrito está vacío
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {/* Lista de Productos */}
          <div className="md:col-span-2 space-y-4">
            {carrito.map(item => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white border rounded-lg p-4 flex items-center justify-between"
              >
                <div className="flex items-center space-x-4">
                  <img 
                    src={item.imagen} 
                    alt={item.nombre} 
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h2 className="font-semibold">{item.nombre}</h2>
                    <p className="text-blue-600">${item.precio.toFixed(2)}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center border rounded">
                    <button 
                      onClick={() => actualizarCantidad(item.id, item.cantidad - 1)}
                      className="p-2"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="px-4">{item.cantidad}</span>
                    <button 
                      onClick={() => actualizarCantidad(item.id, item.cantidad + 1)}
                      className="p-2"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <button 
                    onClick={() => eliminarItem(item.id)}
                    className="text-red-500 hover:bg-red-50 p-2 rounded"
                  >
                    <Trash2 />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Resumen de Compra */}
          <div className="bg-gray-50 p-6 rounded-lg h-fit">
            <h2 className="text-xl font-semibold mb-4">Resumen del Pedido</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${calcularTotal()}</span>
              </div>
              <div className="flex justify-between">
                <span>Envío</span>
                <span>Gratis</span>
              </div>
            </div>
            <div className="border-t pt-4 flex justify-between font-bold">
              <span>Total</span>
              <span>${calcularTotal()}</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={finalizarCompra}
              className="w-full bg-blue-600 text-white py-3 rounded-lg mt-4"
            >
              Finalizar Compra
            </motion.button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;