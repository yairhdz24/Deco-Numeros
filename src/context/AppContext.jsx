import React, { createContext, useReducer, useContext } from 'react';

const initialState = {
  cart: [],
  customSign: {
    text: '',
    font: 'Inter',
    color: '#000000',
    material: 'wood',
    size: { width: 50, height: 20 }
  }
};

const AppReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { 
        ...state, 
        cart: [...state.cart, action.payload] 
      };
    case 'REMOVE_FROM_CART':
      return { 
        ...state, 
        cart: state.cart.filter(item => item.id !== action.payload) 
      };
    case 'UPDATE_CUSTOM_SIGN':
      return { 
        ...state, 
        customSign: { ...state.customSign, ...action.payload } 
      };
    default:
      return state;
  }
};

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);