"use client";

import AnimatedSection from "@/components/shared/AnimatedSection";
import { useCasesData } from "@/data/useCases";
import {
  UtensilsCrossed,
  Scissors,
  Sparkles,
  Wrench,
  ShoppingBag,
  Building2,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  UtensilsCrossed,
  Scissors,
  Sparkles,
  Wrench,
  ShoppingBag,
  Building2,
};

const gradients = [
  "from-orange-500 to-red-400",
  "from-blue-500 to-indigo-400",
  "from-pink-500 to-rose-400",
  "from-green-500 to-teal-400",
  "from-violet-500 to-purple-400",
  "from-cyan-500 to-blue-400",
];

export default function UseCases() {
  return (
    <section id="cas-usage" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-950/40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16 lg:mb-20">
          <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">
            Pour qui ?
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mt-4 tracking-tight text-white">
            Adapte a tous les commerces
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-lg">
            Quel que soit votre secteur, SNCard vous aide a collecter plus
            d&apos;avis clients.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {useCasesData.map((useCase, i) => {
            const Icon = iconMap[useCase.icon] || UtensilsCrossed;
            return (
              <AnimatedSection key={useCase.title} delay={i * 0.08}>
                <div className="group p-6 lg:p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${gradients[i % gradients.length]} flex items-center justify-center mb-4 shadow-lg`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    {useCase.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
