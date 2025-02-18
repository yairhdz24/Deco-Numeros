// src/App.js
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import HomePage from "./screens/HomePage";
import ProductCatalog from "./screens/ProductCatalog";
import ProductDetail from "./screens/ProductDetail";
import CartPage from "./screens/CartPage";
import ContactPage from "./screens/ContactPage";
import NumberQuoter from "./screens/NumberQuoter";
import LetreroPersonalizado from "./screens/LetreroLuz";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CarContext";

// Componente wrapper para NumberQuoter con marca
import { useParams } from "react-router-dom";
import NumberQuoterBrand from "./screens/NumberQuoter";

const brandLogos = {
  CLASICO:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chrome-mWL3naAbAIIEiB5KAulyedbhZGEiXu.png",
  HERA: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dise%C3%B1o%20sin%20t%C3%ADtulo-WAcTWNM4gWizEORc5Wq9dTEffiQHNy.png",
  BAOLI_V:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bhaus-vDDk6zgsjAddtfs4acm5e6ouxDQCHh.png",
  BAOLI:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/boskino-2CoPUf3i92In7CyFPaCXu8ghGLWGlH.png",
  CALIFORNIA:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/classic-soQ1MXBRb0tzIROrCWgcSmSzyVw0AI.png",
};

const NumberQuoterBrandWrapper = () => {
  const { brandName } = useParams();
  const brandKey = brandName?.toUpperCase();
  const logo = brandLogos[brandKey] || "";
  return <NumberQuoterBrand brandName={brandKey} brandLogo={logo} />;
};

// Componente interno que reinicia el scroll
const ScrollReset = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
};

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollReset />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <Toaster position="top-right" />
          <main className="flex-grow mt-14">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/catalogo" element={<ProductCatalog />} />
              <Route path="/customize/:brandName" element={<NumberQuoterBrandWrapper />} />
              <Route path="/producto/:id" element={<ProductDetail />} />
              <Route path="/personalizar" element={<NumberQuoter />} />
              <Route path="/carrito" element={<CartPage />} />
              <Route path="/contacto" element={<ContactPage />} />
              <Route path="/cotizar" element={<NumberQuoter />} />
              <Route path="/personalizar-letrero" element={<LetreroPersonalizado />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
