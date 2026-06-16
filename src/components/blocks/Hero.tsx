"use client";

import { ArrowRight } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-linear-to-br dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 from-gray-100 via-gray-200 to-gray-300 pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img src={"/logo.png"} alt="carGo Logo" className="h-48 w-auto" />
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 dark:text-white text-gray-500 font-bold">
            Revoluciona tu <span className="text-[#38BDF8]">Logística</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl dark:text-gray-300 text-gray-500 font-bold mb-8 max-w-3xl mx-auto">
            Automatiza tus procesos de mensajería con seguridad, productividad y
            tecnología de vanguardia
          </p>

          {/* Value Props */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 dark:text-gray-300 text-gray-500 font-bold">
              <div className="w-2 h-2 bg-[#38BDF8] rounded-full"></div>
              <span>Mayor Seguridad</span>
            </div>
            <div className="flex items-center gap-2 dark:text-gray-300 text-gray-500 font-bold">
              <div className="w-2 h-2 bg-[#38BDF8] rounded-full"></div>
              <span>Automatización Total</span>
            </div>
            <div className="flex items-center gap-2 dark:text-gray-300 text-gray-500 font-bold">
              <div className="w-2 h-2 bg-[#38BDF8] rounded-full"></div>
              <span>Productividad Máxima</span>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToContact}
            className="bg-[#38BDF8] hover:bg-[#0EA5E9] text-white px-8 py-4 rounded-lg text-lg inline-flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg"
          >
            Comienza Ahora
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
