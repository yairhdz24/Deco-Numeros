// src/context/CartContext.js
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Agregar un item al carrito
  const addItem = (item) => {
    // Si el item ya existe, actualiza la cantidad; de lo contrario, agrega el item
    const exists = cartItems.find((i) => i.id === item.id);
    if (exists) {
      setCartItems(
        cartItems.map((i) =>
          i.id === item.id ? { ...i, cantidad: i.cantidad + item.cantidad } : i
        )
      );
    } else {
      setCartItems([...cartItems, item]);
    }
  };

  // Eliminar un item
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Actualizar cantidad
  const updateItemQuantity = (id, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, cantidad: Math.max(1, quantity) } : item
      )
    );
  };

  // Limpiar el carrito
  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{ cartItems, addItem, removeItem, updateItemQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
