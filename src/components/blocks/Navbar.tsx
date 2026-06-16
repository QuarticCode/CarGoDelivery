"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import ThemeSelector from "../theme/theme-selector";

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
    <nav className="fixed top-0 left-0 right-0 bg-transparent backdrop-blur-2xl shadow-lg z-50 dark:text-gray-200 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <Image src={"/logo.png"} alt="CarGo Logo" width={200} height={30} />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-[#38BDF8] dark:hover:text-[#1381b0] transition-colors"
            >
              Quiénes Somos
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="hover:text-[#38BDF8] dark:hover:text-[#1381b0] transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("plans")}
              className="hover:text-[#38BDF8] dark:hover:text-[#1381b0] transition-colors"
            >
              Planes
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-[#38BDF8] dark:hover:text-[#1381b0] transition-colors"
            >
              Contáctenos
            </button>

            <ThemeSelector />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hover:text-[#38BDF8] transition-colors"
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
                className="hover:text-[#38BDF8] dark:hover:text-[#1381b0] transition-colors text-left"
              >
                Quiénes Somos
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className=" hover:text-[#38BDF8] dark:hover:text-[#1381b0] transition-colors text-left"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("plans")}
                className="hover:text-[#38BDF8] dark:hover:text-[#1381b0] transition-colors text-left"
              >
                Planes
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-[#38BDF8] dark:hover:text-[#1381b0] transition-colors text-left"
              >
                Contáctenos
              </button>
              <ThemeSelector />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
