"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";

const footerLinks = {
  produit: [
    { label: "Comment ca marche", href: "#comment-ca-marche" },
    { label: "Avantages", href: "#avantages" },
    { label: "Prix", href: "#prix" },
    { label: "FAQ", href: "#faq" },
  ],
  legal: [
    { label: "Mentions legales", href: "/mentions-legales" },
    { label: "Politique de confidentialite", href: "/politique-confidentialite" },
    { label: "CGV", href: "/cgv" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        {/* Grand texte decoratif */}
        <div className="mb-16">
          <span className="text-6xl lg:text-8xl font-bold tracking-tighter opacity-10">
            SNCard
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Marque */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/images/logo-white.png" alt="SNCard" width={32} height={32} />
              <h3 className="text-lg font-bold">
                SN<span className="text-slate-400">Card</span>
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              {siteConfig.description}
            </p>
            <p className="text-gray-500 text-sm mt-4">
              {siteConfig.contact.email}
            </p>
          </div>

          {/* Produit */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Produit
            </h4>
            <ul className="space-y-3">
              {footerLinks.produit.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Separator + Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {siteConfig.name}. Tous droits reserves.
          </p>
        </div>
      </div>
    </footer>
  );
}
