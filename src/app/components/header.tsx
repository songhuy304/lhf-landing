"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("Root");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/45 backdrop-blur-xl shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="relative">
            <Link
              href="/"
              className="text-3xl font-bold font-serif relative group"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-500 transition-all duration-300 group-hover:from-blue-500 group-hover:to-green-600">
                Fermy
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          <nav
            className={`
            fixed md:relative top-0 right-0 h-screen md:h-auto w-full md:w-auto
            bg-white md:bg-transparent transform transition-transform duration-300 ease-in-out
            ${
              isMenuOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
            }
            md:flex md:items-center md:space-x-8
          `}
          >
            <button
              className="md:hidden absolute top-6 right-6 text-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
            <div className="flex flex-col md:flex-row items-center justify-center h-full md:h-auto space-y-8 md:space-y-0 md:space-x-8">
              <Link
                href="/"
                className="text-gray-800 hover:text-primary transition-colors duration-300 font-serif"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("home")}
              </Link>
              <Link
                href="/recruitment"
                className="text-gray-800 hover:text-primary transition-colors duration-300 font-serif"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("recruitment")}
              </Link>
              <Link
                href="/retail"
                className="text-gray-800 hover:text-primary transition-colors duration-300 font-serif"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("retail")}
              </Link>
              <Link
                href="/nail"
                className="text-gray-800 hover:text-primary transition-colors duration-300 font-serif"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nail")}
              </Link>
              <Link
                href="/about"
                className="text-gray-800 hover:text-primary transition-colors duration-300 font-serif"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("about")}
              </Link>

              <LanguageSwitcher />
            </div>
          </nav>

          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
