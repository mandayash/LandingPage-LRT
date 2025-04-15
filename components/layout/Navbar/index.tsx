"use client";

import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    // Cek apakah kita berada di homepage
    const isHomePage = window.location.pathname === '/';
    
    if (isHomePage) {
      // Jika di homepage, scroll ke section
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false);
      }
    } else {
      // Jika bukan di homepage, gunakan router Next.js
      router.push(`/#${sectionId}`);
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { id: "hero", label: "Beranda" },
    { id: "faq", label: "Informasi" },
    { id: "footer", label: "Hubungi Kami" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-sm py-2" : "bg-black/80 py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="relative">
            <button
              onClick={() => scrollToSection("hero")}
              className="focus:outline-none"
            >
              <Image
                src="/images/logo-lrt.png"
                alt="LRT Sumsel"
                width={108}
                height={48}
                className="object-contain"
              />
            </button>
          </div>

          {/* Nav Menu for desktop */}
          <div className="hidden md:flex items-center gap-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                                    relative px-3 py-2
                                    text-white/90 hover:text-white
                                    transition-colors duration-200
                                    font-normal
                                    after:absolute after:bottom-0 after:left-0 
                                    after:h-0.5 after:w-full after:origin-center
                                    after:scale-x-0 after:bg-white after:transition-transform
                                    hover:after:scale-x-100
                                `}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Hamburger for mobile */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden relative z-50 text-white"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-black/90 pt-20 px-4 overflow-hidden z-40 text-white">
            <div className="flex flex-col items-center h-full">
              <div className="flex flex-col items-center space-y-6 w-full px-4">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-lg block py-3 text-center w-full rounded-md hover:bg-white/10 transition-colors text-white/90 hover:text-white"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
