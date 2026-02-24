"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/shared/Button";
import TextReveal from "@/components/shared/TextReveal";
import Badge from "@/components/shared/Badge";
import dynamic from "next/dynamic";

const CardScene = dynamic(
  () => import("@/components/card3d/CardScene"),
  { ssr: false }
);

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Overlay subtil pour lisibilite texte */}
      <div className="absolute inset-0 bg-slate-950/30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-32">
          {/* Texte */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Badge variant="highlight">NFC Technology</Badge>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-white">
              <TextReveal text="Boostez vos avis Google" delay={0.3} />
              <br />
              <span className="text-gradient-brand">
                <TextReveal text="en un geste" delay={0.6} />
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg lg:text-xl text-slate-400 max-w-lg leading-relaxed"
            >
              La carte NFC qui transforme chaque client satisfait en un avis
              5 etoiles. Approchez, notifiez, collectez.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 mt-2"
            >
              <Link href="/commander">
                <Button variant="primary" size="lg">
                  Commander maintenant
                </Button>
              </Link>
              <a href="#comment-ca-marche">
                <Button variant="secondary" size="lg">
                  Voir comment ca marche
                </Button>
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex items-center gap-4 mt-4"
            >
              <div className="flex -space-x-2">
                {["#3B82F6", "#8B5CF6", "#EC4899", "#10B981"].map((color, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-slate-900 flex items-center justify-center text-white text-xs font-bold"
                    style={{ backgroundColor: color }}
                  >
                    {["A", "M", "P", "S"][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-slate-400">
                  <span className="font-semibold text-white">+500</span>{" "}
                  commercants satisfaits
                </p>
              </div>
            </motion.div>
          </div>

          {/* Carte 3D */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative w-full h-[400px] lg:h-[600px]"
          >
            <CardScene />
          </motion.div>
        </div>
      </div>

      {/* Indicateur scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-slate-600 flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-slate-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
