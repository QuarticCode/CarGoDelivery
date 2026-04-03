import { Target, Globe, Zap } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-[#1A202C]">
            Quiénes <span className="text-[#38BDF8]">Somos</span>
          </h2>
          <div className="w-24 h-1 bg-[#38BDF8] mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-gray-700 text-center leading-relaxed mb-8">
            CarGo es una plataforma innovadora diseñada para transformar la
            industria de la mensajería y logística. Nos especializamos en
            ofrecer soluciones tecnológicas que automatizan procesos, mejoran la
            seguridad y aumentan la productividad de negocios de todos los
            tamaños.
          </p>
          <p className="text-lg text-gray-700 text-center leading-relaxed">
            Nuestra misión es democratizar el acceso a tecnología logística de
            primer nivel, permitiendo que tanto pequeñas empresas como grandes
            corporaciones optimicen sus operaciones de mensajería en cualquier
            país.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Misión */}
          <div className="bg-gradient-to-br from-[#F7FAFC] to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
            <div className="bg-[#38BDF8] w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Target className="text-white" size={32} />
            </div>
            <h3 className="text-2xl mb-4 text-[#1A202C]">Nuestra Misión</h3>
            <p className="text-gray-700">
              Proporcionar herramientas tecnológicas accesibles que transformen
              la forma en que las empresas gestionan sus servicios de mensajería
              y logística.
            </p>
          </div>

          {/* Alcance */}
          <div className="bg-gradient-to-br from-[#F7FAFC] to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
            <div className="bg-[#38BDF8] w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Globe className="text-white" size={32} />
            </div>
            <h3 className="text-2xl mb-4 text-[#1A202C]">Alcance Global</h3>
            <p className="text-gray-700">
              Diseñado para operar en cualquier país, adaptándonos a las
              necesidades específicas de cada mercado y regulación local.
            </p>
          </div>

          {/* Innovación */}
          <div className="bg-gradient-to-br from-[#F7FAFC] to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
            <div className="bg-[#38BDF8] w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Zap className="text-white" size={32} />
            </div>
            <h3 className="text-2xl mb-4 text-[#1A202C]">
              Innovación Continua
            </h3>
            <p className="text-gray-700">
              Implementamos las últimas tecnologías en automatización, seguridad
              y análisis de datos para mantener a nuestros clientes a la
              vanguardia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
