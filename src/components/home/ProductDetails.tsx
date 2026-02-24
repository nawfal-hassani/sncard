"use client";

import Image from "next/image";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Badge from "@/components/shared/Badge";
import { Nfc, Shield, Droplets, Battery, CreditCard, Wifi } from "lucide-react";

const specs = [
  { icon: Nfc, label: "Technologie NFC", detail: "Compatible iPhone & Android", gradient: "from-blue-500 to-cyan-400" },
  { icon: CreditCard, label: "Format carte bancaire", detail: "Se glisse partout", gradient: "from-purple-500 to-pink-400" },
  { icon: Shield, label: "Ultra resistant", detail: "PVC haute qualite", gradient: "from-green-500 to-emerald-400" },
  { icon: Droplets, label: "Etanche", detail: "Resistant a l'eau", gradient: "from-cyan-500 to-blue-400" },
  { icon: Battery, label: "Sans batterie", detail: "Aucune recharge necessaire", gradient: "from-amber-500 to-orange-400" },
  { icon: Wifi, label: "Sans contact", detail: "Lecture instantanee", gradient: "from-rose-500 to-red-400" },
];

export default function ProductDetails() {
  return (
    <section id="produit" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-950/30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visuel carte */}
          <AnimatedSection direction="left">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
              <div className="absolute w-60 h-60 bg-purple-500/10 rounded-full blur-3xl translate-x-20 translate-y-10" />
              <div className="relative w-64 lg:w-72 transform rotate-2 hover:rotate-0 transition-transform duration-700">
                <Image
                  src="/images/card/front.png"
                  alt="Carte SNCard NFC - Face avant"
                  width={1024}
                  height={1536}
                  className="rounded-2xl shadow-2xl shadow-blue-500/10"
                  priority={false}
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Specs */}
          <div>
            <AnimatedSection>
              <Badge variant="highlight">Produit</Badge>
              <h2 className="text-3xl lg:text-5xl font-bold mt-4 tracking-tight text-white">
                Concue pour durer
              </h2>
              <p className="text-slate-400 mt-4 text-lg leading-relaxed">
                La carte SNCard est fabriquee en PVC haute qualite avec une puce
                NFC integree. Pas de batterie, pas d&apos;application, pas de
                configuration complexe.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-2 gap-4 mt-10">
              {specs.map((spec, i) => {
                const Icon = spec.icon;
                return (
                  <AnimatedSection key={spec.label} delay={i * 0.08}>
                    <div className="flex items-start gap-3 p-4 rounded-2xl hover:bg-white/5 transition-colors duration-200">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${spec.gradient} flex items-center justify-center shrink-0 shadow-lg`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-sm text-white">{spec.label}</p>
                        <p className="text-xs text-slate-500 mt-0.5">
                          {spec.detail}
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
