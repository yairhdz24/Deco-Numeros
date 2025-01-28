import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send 
} from 'lucide-react';
import toast from 'react-hot-toast';

const ContactPage = () => {
  const [formulario, setFormulario] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const enviarMensaje = (e) => {
    e.preventDefault();
    // Lógica de envío de formulario
    toast.success('Mensaje enviado exitosamente');
    setFormulario({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Información de Contacto */}
        <div>
          <h1 className="text-4xl font-bold mb-8">Contáctanos</h1>
          
          <div className="space-y-6">
            <div className="flex items-center">
              <Mail className="mr-4 text-blue-600" size={32} />
              <div>
                <h3 className="font-semibold">Correo</h3>
                <p>contacto@letrerosprsonalizados.com</p>
              </div>
            </div>

            <div className="flex items-center">
              <Phone className="mr-4 text-blue-600" size={32} />
              <div>
                <h3 className="font-semibold">Teléfono</h3>
                <p>+52 (55) 1234 5678</p>
              </div>
            </div>

            <div className="flex items-center">
              <MapPin className="mr-4 text-blue-600" size={32} />
              <div>
                <h3 className="font-semibold">Dirección</h3>
                <p>Av. Siempre Viva 123, CDMX</p>
              </div>
            </div>
          </div>
        </div>

        {/* Formulario de Contacto */}
        <motion.form 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onSubmit={enviarMensaje}
          className="bg-white p-8 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label className="block mb-2">Nombre</label>
            <input
              type="text"
              name="nombre"
              value={formulario.nombre}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">Correo Electrónico</label>
            <input
              type="email"
              name="email"
              value={formulario.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">Mensaje</label>
            <textarea
              name="mensaje"
              value={formulario.mensaje}
              onChange={handleChange}
              required
              rows={4}
              className="w-full border rounded-lg px-4 py-2"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center"
          >
            <Send className="mr-2" /> Enviar Mensaje
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default ContactPage;