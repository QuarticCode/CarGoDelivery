import { Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="dark:bg-[#1A202C] bg-white text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <img src={"/logo.png"} alt="carGo Logo" className="h-16 w-auto mb-4" />
            <p className="dark:text-white text-gray-600 mb-4">
              Revolucionando la logística con tecnología, seguridad y
              automatización para negocios de todos los tamaños.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-[#2D3748] hover:bg-[#38BDF8] w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <Mail size={20} />
              </a>
              <a
                href="#"
                className="bg-[#2D3748] hover:bg-[#38BDF8] w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <Mail size={20} />
              </a>
              <a
                href="#"
                className="bg-[#2D3748] hover:bg-[#38BDF8] w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <Mail size={20} />
              </a>
              <a
                href="#"
                className="bg-[#2D3748] hover:bg-[#38BDF8] w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 dark:text-white mb-4 font-bold">Enlaces Rápidos</h4>
            <ul className="space-y-2 dark:text-white text-gray-700">
              <li>
                <a
                  href="#about"
                  className="hover:text-[#38BDF8] transition-colors"
                >
                  Quiénes Somos
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[#38BDF8] transition-colors"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#plans"
                  className="hover:text-[#38BDF8] transition-colors"
                >
                  Planes
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-[#38BDF8] transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="dark:text-white text-gray-900 font-bold mb-4">Legal</h4>
            <ul className="space-y-2 dark:text-white text-gray-700">
              <li>
                <a href="#" className="hover:text-[#38BDF8] transition-colors">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#38BDF8] transition-colors">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#38BDF8] transition-colors">
                  Cookies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#38BDF8] transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 mb-2">
            © {currentYear} carGo. Todos los derechos reservados.
          </p>
          <p className="text-sm text-gray-500">
            Created by <span className="text-[#38BDF8]">QuarticCode</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
