import {
  Shield,
  Cpu,
  TrendingUp,
  MapPin,
  Clock,
  BarChart3,
} from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Shield,
      title: "Seguridad Avanzada",
      description:
        "Protección end-to-end de tus envíos con encriptación de datos, rastreo en tiempo real y sistema de verificación de identidad para garantizar la integridad de cada entrega.",
    },
    {
      icon: Cpu,
      title: "Automatización Inteligente",
      description:
        "Algoritmos de optimización de rutas, asignación automática de mensajeros y gestión predictiva de flotas para reducir costos operativos hasta un 40%.",
    },
    {
      icon: TrendingUp,
      title: "Aumento de Productividad",
      description:
        "Panel de control centralizado, reportes automáticos y analytics en tiempo real que permiten tomar decisiones informadas y mejorar la eficiencia operativa.",
    },
    {
      icon: MapPin,
      title: "Rastreo en Tiempo Real",
      description:
        "Geolocalización precisa de cada envío, notificaciones automáticas a clientes y sistema de alertas para cualquier desvío o incidencia en la ruta.",
    },
    {
      icon: Clock,
      title: "Gestión de Tiempos",
      description:
        "Optimización de horarios de entrega, predicción de tiempos de llegada y sistema de programación inteligente que maximiza las entregas por jornada.",
    },
    {
      icon: BarChart3,
      title: "Análisis y Reportes",
      description:
        "Dashboards personalizados, métricas de rendimiento KPI, análisis de tendencias y reportes exportables para una gestión basada en datos.",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-linear-to-br from-[#F7FAFC] to-white dark:from-gray-950 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-[#1A202C] dark:text-white font-bold">
            Nuestros <span className="text-[#38BDF8]">Servicios</span>
          </h2>
          <div className="w-24 h-1 bg-[#38BDF8] mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Soluciones completas para modernizar y optimizar tu operación
            logística
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-t-4 border-[#38BDF8]"
            >
              <div className="bg-linear-to-br from-[#38BDF8] to-[#0EA5E9] w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl mb-4 text-[#1A202C] dark:text-white">{service.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
