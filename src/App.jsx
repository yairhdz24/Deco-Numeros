import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import HomePage from './screens/HomePage';
import ProductCatalog from './screens/ProductCatalog';
import ProductDetail from './screens/ProductDetail';
import CustomSignPage from './screens/CustomSignPage';
import CartPage from './screens/CartPage';
import ContactPage from './screens/ContactPage';
import Footer from './components/Footer';
// import CotizadorPlaca from './screens/CustomSignPage';
import NumberQuoter from './screens/CustomSignPage';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="flex flex-col min-h-screen ">
          <Navbar />
          <Toaster position="top-right" />
          <main className="flex-grow mt-14">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/catalogo" element={<ProductCatalog />} />
              <Route path="/producto/:id" element={<ProductDetail />} />
              <Route path="/personalizar" element={<CustomSignPage />} />
              <Route path="/carrito" element={<CartPage />} />
              <Route path="/contacto" element={<ContactPage />} />
              <Route path="/cotizar" element={<NumberQuoter />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;