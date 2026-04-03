"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
// import logo from "figma:asset/5f6d2c6869077bee2772b05612cd8f6c3b584d0e.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#1A202C] shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <img src={"/logo.png"} alt="carGo Logo" className="h-14 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-300 hover:text-[#38BDF8] transition-colors"
            >
              Quiénes Somos
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-300 hover:text-[#38BDF8] transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("plans")}
              className="text-gray-300 hover:text-[#38BDF8] transition-colors"
            >
              Planes
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-300 hover:text-[#38BDF8] transition-colors"
            >
              Contáctenos
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-[#38BDF8] transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-300 hover:text-[#38BDF8] transition-colors text-left"
              >
                Quiénes Somos
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-300 hover:text-[#38BDF8] transition-colors text-left"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("plans")}
                className="text-gray-300 hover:text-[#38BDF8] transition-colors text-left"
              >
                Planes
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-300 hover:text-[#38BDF8] transition-colors text-left"
              >
                Contáctenos
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
