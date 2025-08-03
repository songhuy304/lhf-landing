"use client";

import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  Facebook,
  Globe,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Logo from "@/components/ui/logo";

export default function Footer() {
  const t = useTranslations("Root");
  const homeT = useTranslations("HomePage");

  const menuItems = [
    { href: "/", label: "home" },
    { href: "/recruitment", label: "recruitment" },
    { href: "/retail", label: "retail" },
    { href: "/nail", label: "nail" },
    { href: "/about", label: "about" },
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "https://facebook.com" },
    { icon: <Instagram className="h-5 w-5" />, href: "https://instagram.com" },
    { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com" },
  ];

  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo và thông tin công ty */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Logo />
            </Link>
            <p className="text-gray-600 mt-4 max-w-xs">
              {homeT("brandStoryDes")}
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="bg-primary/10 hover:bg-primary/20 p-2 rounded-full text-primary transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Menu liên kết */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t("companyInfo")}</h3>
            <ul className="space-y-3">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-primary transition-colors duration-300"
                  >
                    {t(item.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Thông tin liên hệ */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              {homeT("companyInfoTitle")}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-600">
                  {homeT("companyAddressValue")}
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-gray-600">
                  {homeT("companyHoursValue")}
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <a
                  href="mailto:info@lhf.co.jp"
                  className="text-gray-600 hover:text-primary transition-colors duration-300"
                >
                  info@lhf.co.jp
                </a>
              </li>

              <li className="flex items-center">
                <Globe className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <a
                  href="https://lhf.co.jp"
                  className="text-gray-600 hover:text-primary transition-colors duration-300"
                >
                  https://lhf.co.jp
                </a>
              </li>
            </ul>
          </div>

          {/* Giờ làm việc */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              {homeT("companyHours")}
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-600">
                <span className="font-medium">
                  {homeT("monday")} - {homeT("friday")}:
                </span>{" "}
                9:00 - 18:00
              </li>
              <li className="text-gray-600">
                <span className="font-medium">{homeT("saturday")}:</span> 9:00 -
                17:00
              </li>
              <li className="text-gray-600">
                <span className="font-medium">{homeT("sunday")}:</span>{" "}
                {homeT("closed")}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} LHF Co., Ltd.{" "}
              {homeT("allRightsReserved")}.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-primary text-sm"
                  >
                    {homeT("termsOfService")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-primary text-sm"
                  >
                    {homeT("privacyPolicy")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
