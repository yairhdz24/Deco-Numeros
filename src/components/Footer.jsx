// import React from 'react';
// import logo from '../assets/images/logo_sin_fondo.png';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { ExternalLink, Home, Building, Sparkles, MoveDiagonal, Mail, Phone } from 'lucide-react';

// export const Footer = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Función para manejar el desplazamiento
//   const scrollToSection = (id) => {
//     if (location.pathname === '/gallery') {
//       // Si estás en la página "Gallery", redirige al home y luego realiza el scroll
//       navigate('/');
//       setTimeout(() => {
//         const section = document.getElementById(id);
//         if (section) {
//           section.scrollIntoView({ behavior: 'smooth', block: 'start' });
//         }
//       }, 300); // Tiempo para permitir la navegación antes del scroll
//     } else {
//       // Si ya estás en home, simplemente realiza el scroll
//       const section = document.getElementById(id);
//       if (section) {
//         section.scrollIntoView({ behavior: 'smooth', block: 'start' });
//       }
//     }
//   };

//   // Manejar clic en "Gallery" para redirigir y desplazarse al inicio
//   const handleGalleryClick = () => {
//     if (location.pathname !== '/gallery') {
//       navigate('/gallery');
//     } else {
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     }
//   };

//   return (
//     <footer className="bg-gradient-to-b from-gray-950 to-gray-800 text-gray-300">
//       <div className="container mx-auto px-4 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
//           <div className="space-y-6">
//             <img src={logo} alt="logo de la empresa" className="h-10 w-40 drop-shadow-[0_2px_2px_rgba(255,255,255,0.1)]" />
//             <p className="text-gray-400 leading-relaxed">
//               Professional cleaning services for homes and businesses. Quality and reliability you can trust.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div className="space-y-4">
//             <h4 className="text-lg font-semibold text-white">Quick Links</h4>
//             <ul className="space-y-2">
//               <li>
//                 <button
//                   onClick={() => scrollToSection('about')}
//                   className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
//                 >
//                   <ExternalLink size={16} />
//                   <span>About</span>
//                 </button>
//               </li>
//               <li>
//                 <button
//                   onClick={() => scrollToSection('services')}
//                   className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
//                 >
//                   <ExternalLink size={16} />
//                   <span>Services</span>
//                 </button>
//               </li>
//               <li>
//                 <button
//                   onClick={handleGalleryClick}
//                   className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
//                 >
//                   <ExternalLink size={16} />
//                   <span>Gallery</span>
//                 </button>
//               </li>
//               <li>
//                 <button
//                   onClick={() => scrollToSection('testimonials')}
//                   className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
//                 >
//                   <ExternalLink size={16} />
//                   <span>Testimonials</span>
//                 </button>
//               </li>
//             </ul>
//           </div>

//           {/* Our Services */}
//           <div className="space-y-4">
//             <h4 className="text-lg font-semibold text-white">Our Services</h4>
//             <ul className="space-y-2">
//               {[{ name: 'Residential Cleaning', id: 'services', icon: Home },
//               { name: 'Commercial Cleaning', id: 'services', icon: Building },
//               { name: 'Deep Cleaning', id: 'services', icon: Sparkles },
//               { name: 'Move In/Out Cleaning', id: 'services', icon: MoveDiagonal },
//               ].map(({ name, id, icon: Icon }) => (
//                 <li key={name}>
//                   <button
//                     onClick={() => scrollToSection(id)}
//                     className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
//                   >
//                     <Icon size={16} />
//                     <span>{name}</span>
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Us */}
//           <div className="space-y-4">
//             <h4 className="text-lg font-semibold text-white">Contact Us</h4>
//             <ul className="space-y-2">
//               <div className="space-y-4">
//                 <ul className="space-y-2">
//                   <li>
//                     <a
//                       href="mailto:nuviascleaningservices@yahoo.com"
//                       className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
//                     >
//                       <Mail className="w-6 h-6" /> {/* Icono de correo */}
//                       <span>nuviascleaningservices@yahoo.com</span>
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="tel:818-270-6614"
//                       className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
//                     >
//                       <Phone className="w-6 h-6" /> {/* Icono de teléfono */}
//                       <span>+818-270-6614</span>
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="tel:818-747-7280"
//                       className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
//                     >
//                       <Phone className="w-6 h-6" /> {/* Icono de teléfono */}
//                       <span>+818-747-7280</span>
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </ul>
//           </div>
//         </div>

//         {/* Footer bottom */}
//         <div className="mt-8 pt-8 border-t -mb-6 border-gray-700">
//           <div className="flex flex-col md:flex-row justify-center items-center mb-2">
//             <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Nuvias Clean. All rights reserved.</p>
//           </div>
//           <div className="flex flex-col md:flex-row justify-center items-center">
//             <p className="text-gray-400 text-sm">
//               Created by <a className="text-blue-400" href="https://github.com/yairhdz24">Yair Hernandez</a>
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">Deco Numeros (logo)</h3>
          <p>Letreros personalizados para tu hogar y negocio</p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Navegación</h4>
          <ul className="space-y-2">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/catalogo">Catálogo</Link></li>
            <li><Link to="/personalizar">Personalizar</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contacto</h4>
          <p>Email: decoo@numeros.com</p>
          <p>Teléfono: +52 (33) 3333 3333</p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Síguenos</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500"><Instagram /></a>
            <a href="#" className="hover:text-blue-500"><Facebook /></a>
            {/* <a href="#" className="hover:text-blue-500"><Twitter /></a> */}
          </div>
        </div>
      </div>

      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        © 2024 Deco Numeros. Todos los derechos reservados.
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <p className="text-gray-400 text-sm">
          Created by <a className="text-blue-400" href="https://github.com/yairhdz24">Yair Hernandez</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;