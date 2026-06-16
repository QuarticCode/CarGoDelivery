"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí se manejaría el envío del formulario
    alert("¡Gracias por contactarnos! Te responderemos pronto.");
    setFormData({ name: "", email: "", company: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-linear-to-br dark:from-gray-950 dark:to-gray-900 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 dark:text-white text-gray-900">Contáctenos</h2>
          <div className="w-24 h-1 bg-[#38BDF8] mx-auto mb-6"></div>
          <p className="text-lg dark:text-gray-300 text-gray-800 max-w-3xl mx-auto">
            ¿Listo para transformar tu logística? Escríbenos y te responderemos
            en menos de 24 horas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl mb-6 dark:text-white text-gray-800">
                Información de Contacto
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#38BDF8] w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="dark:text-gray-400 text-gray-800 text-sm">Email</p>
                    <p className="dark:text-white text-gray-700">contacto@cargo-logistics.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#38BDF8] w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="dark:text-gray-400 text-gray-800 text-sm">Teléfono</p>
                    <p className="dark:text-white text-gray-700">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#38BDF8] w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="dark:text-gray-400 text-gray-800 text-sm">Ubicación</p>
                    <p className="dark:text-white text-gray-700">
                      Servicio disponible en todo el mundo
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dark:bg-[#2D3748] bg-gray-100 p-6 rounded-xl border border-[#38BDF8]/30">
              <h4 className="text-xl mb-4 dark:text-white text-gray-500">Horario de Atención</h4>
              <div className="space-y-2 dark:text-gray-300 text-gray-500">
                <p>Lunes - Viernes: 8:00 AM - 6:00 PM</p>
                <p>Sábados: 9:00 AM - 2:00 PM</p>
                <p>Domingos: Cerrado</p>
                <p className="text-[#38BDF8] mt-4">
                  Soporte 24/7 para planes Profesional y Empresarial
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl mb-6 text-[#1A202C] dark:text-white">
              Envíanos un Mensaje
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm mb-2 text-gray-700 dark:text-white"
                >
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent"
                  placeholder="Juan Pérez"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm mb-2 text-gray-700 dark:text-white"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent"
                  placeholder="juan@empresa.com"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm mb-2 text-gray-700 dark:text-white"
                >
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent"
                  placeholder="Mi Empresa S.A."
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm mb-2 text-gray-700 dark:text-white"
                >
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent"
                  placeholder="+1 555 123 4567"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm mb-2 text-gray-700 dark:text-white"
                >
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent resize-none"
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-linear-to-r from-[#38BDF8] to-[#0EA5E9] text-white py-4 px-6 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg"
              >
                Enviar Mensaje
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
