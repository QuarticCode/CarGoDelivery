import { Check, Star } from "lucide-react";

export function Plans() {
  const plans = [
    {
      name: "Básico",
      price: "$49",
      period: "/mes",
      description:
        "Ideal para pequeños negocios que inician en el mundo de la logística automatizada",
      features: [
        "Hasta 100 envíos mensuales",
        "Rastreo en tiempo real",
        "Panel de control básico",
        "Soporte por email",
        "Reportes mensuales",
        "App móvil básica",
      ],
      color: "from-gray-600 to-gray-700",
      popular: false,
    },
    {
      name: "Profesional",
      price: "$149",
      period: "/mes",
      description:
        "Perfecto para empresas en crecimiento con necesidades avanzadas",
      features: [
        "Hasta 500 envíos mensuales",
        "Rastreo en tiempo real",
        "Panel de control avanzado",
        "Soporte prioritario 24/7",
        "Reportes personalizados",
        "App móvil completa",
        "Optimización de rutas IA",
        "Análisis predictivo",
        "API completa",
      ],
      color: "from-[#38BDF8] to-[#0EA5E9]",
      popular: true,
    },
    {
      name: "Empresarial",
      price: "$499",
      period: "/mes",
      description: "Solución completa para grandes operaciones y corporaciones",
      features: [
        "Envíos ilimitados",
        "Rastreo en tiempo real",
        "Panel personalizado",
        "Gerente de cuenta dedicado",
        "Reportes en tiempo real",
        "Apps móviles white-label",
        "IA avanzada de optimización",
        "Machine Learning predictivo",
        "API y webhooks ilimitados",
        "Integración ERP/CRM",
        "SLA garantizado 99.9%",
        "Capacitación on-site",
      ],
      color: "from-amber-500 to-amber-600",
      popular: false,
    },
  ];

  return (
    <section id="plans" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-[#1A202C] dark:text-white">
            Planes y <span className="text-[#38BDF8]">Precios</span>
          </h2>
          <div className="w-24 h-1 bg-[#38BDF8] mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Elige el plan que mejor se adapte a las necesidades de tu negocio
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 ${
                plan.popular ? "border-[#38BDF8] scale-105" : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-linear-to-r from-[#38BDF8] to-[#0EA5E9] text-white px-6 py-2 rounded-full flex items-center gap-2 shadow-lg">
                    <Star size={16} fill="currentColor" />
                    <span>Más Popular</span>
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl mb-2 text-[#1A202C] dark:text-white">{plan.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-200 mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline">
                    <span className="text-5xl text-[#1A202C] dark:text-gray-200">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 dark:text-gray-200 ml-2">{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div
                        className={`bg-linear-to-r ${plan.color} w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5`}
                      >
                        <Check className="text-white" size={14} />
                      </div>
                      <span className="text-gray-700 dark:text-gray-200">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-6 rounded-lg text-white bg-linear-to-r ${plan.color} hover:opacity-90 transition-opacity shadow-lg`}
                >
                  Comenzar Ahora
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-200 mb-4">
            ¿Necesitas un plan personalizado? Contáctanos para una solución a
            medida
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-200">
            Todos los planes incluyen actualización gratuita y sin costos
            ocultos
          </p>
        </div>
      </div>
    </section>
  );
}
