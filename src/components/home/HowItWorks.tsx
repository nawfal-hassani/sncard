"use client";

import AnimatedSection from "@/components/shared/AnimatedSection";
import { Nfc, Bell, Star } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Nfc,
    title: "Approchez la carte",
    description:
      "Apres l'achat, approchez simplement la carte SNCard du telephone de votre client. Un seul geste suffit.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    number: "02",
    icon: Bell,
    title: "Notification instantanee",
    description:
      "Le client recoit immediatement une notification sur son telephone qui l'invite a laisser un avis.",
    color: "from-purple-500 to-pink-400",
  },
  {
    number: "03",
    icon: Star,
    title: "Avis en 10 secondes",
    description:
      "Le client est redirige vers votre page Google Business et laisse son avis en quelques secondes.",
    color: "from-amber-500 to-orange-400",
  },
];

export default function HowItWorks() {
  return (
    <section id="comment-ca-marche" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-950/40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16 lg:mb-20">
          <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">
            Simple & efficace
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mt-4 tracking-tight text-white">
            Comment ca marche ?
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-lg">
            Trois etapes. Dix secondes. Un avis de plus.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <AnimatedSection
                key={step.number}
                delay={i * 0.15}
                className="relative"
              >
                <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                  {/* Numero */}
                  <span className="text-7xl font-bold text-white/5 absolute top-4 right-6 group-hover:text-white/10 transition-colors duration-300">
                    {step.number}
                  </span>

                  {/* Icone avec gradient */}
                  <div className={`relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
                  <p className="text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Ligne + fleche entre les etapes (desktop) */}
                {i < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-6 lg:-right-8 transform -translate-y-1/2 z-10 items-center">
                    <div className="w-8 lg:w-12 h-px bg-white/20" />
                    <div className="w-2 h-2 border-r-2 border-t-2 border-white/30 rotate-45 -ml-1" />
                  </div>
                )}
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
