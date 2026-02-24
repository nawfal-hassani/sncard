"use client";

import AnimatedSection from "@/components/shared/AnimatedSection";
import { benefitsData } from "@/data/benefits";
import {
  Star,
  TrendingUp,
  Users,
  Zap,
  Smartphone,
  CheckCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Star,
  TrendingUp,
  Users,
  Zap,
  Smartphone,
  CheckCircle,
};

const gradients = [
  "from-blue-500 to-cyan-400",
  "from-purple-500 to-pink-400",
  "from-green-500 to-emerald-400",
  "from-amber-500 to-orange-400",
  "from-rose-500 to-red-400",
  "from-indigo-500 to-violet-400",
];

export default function Benefits() {
  return (
    <section id="avantages" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-950/30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16 lg:mb-20">
          <span className="text-sm font-semibold text-purple-400 uppercase tracking-wider">
            Avantages
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mt-4 tracking-tight text-white">
            Pourquoi choisir SNCard ?
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-lg">
            La solution la plus simple pour collecter des avis clients et
            booster votre reputation en ligne.
          </p>
        </AnimatedSection>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {benefitsData.map((benefit, i) => {
            const Icon = iconMap[benefit.icon] || Star;
            const isLarge = benefit.size === "large";
            return (
              <AnimatedSection
                key={benefit.title}
                delay={i * 0.1}
                className={cn(
                  isLarge && "md:col-span-2",
                  "group"
                )}
              >
                <div
                  className={cn(
                    "h-full p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm",
                    "hover:bg-white/10 hover:border-white/20 transition-all duration-300",
                    "flex flex-col gap-4",
                    isLarge && "bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-blue-500/20 hover:border-blue-400/30 lg:flex-row lg:items-center lg:gap-8"
                  )}
                >
                  <div
                    className={cn(
                      "w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-gradient-to-br shadow-lg",
                      gradients[i % gradients.length],
                      isLarge && "lg:w-16 lg:h-16"
                    )}
                  >
                    <Icon
                      className={cn(
                        "h-6 w-6 text-white",
                        isLarge && "lg:h-7 lg:w-7"
                      )}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-semibold text-white">
                      {benefit.title}
                    </h3>
                    <p className="leading-relaxed text-slate-400">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
