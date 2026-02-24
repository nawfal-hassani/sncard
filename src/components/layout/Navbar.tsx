"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { mainNavItems } from "@/data/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/shared/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-slate-900/80 backdrop-blur-xl border-b border-white/10 shadow-lg"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/logo-white.png" alt="SNCard" width={36} height={36} />
              <span className="text-xl font-bold tracking-tight text-white">
                SN<span className="text-blue-400">Card</span>
              </span>
            </Link>

            {/* Nav desktop */}
            <div className="hidden lg:flex items-center gap-8">
              {mainNavItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* CTA desktop */}
            <div className="hidden lg:flex items-center gap-3">
              <Link href="/commander">
                <Button variant="primary" size="sm">
                  Commander
                </Button>
              </Link>
            </div>

            {/* Burger mobile */}
            <button
              className="lg:hidden p-2 rounded-xl hover:bg-white/10 transition-colors text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-slate-900 flex flex-col items-center justify-center gap-8"
          >
            {mainNavItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="text-2xl font-medium text-white"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </motion.a>
            ))}
            <Link href="/commander" onClick={() => setMobileOpen(false)}>
              <Button variant="primary" size="lg">
                Commander
              </Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
