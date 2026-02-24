"use client";

import AnimatedSection from "@/components/shared/AnimatedSection";
import Button from "@/components/shared/Button";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export default function CTASection() {
  return (
    <section id="cta" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-slate-950/40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="relative rounded-[2rem] overflow-hidden p-12 lg:p-20">
            {/* Gradient de fond multicolore */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-violet-600 to-purple-700" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-1 mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
                <span className="text-white/80 text-sm ml-2">4.9/5 de satisfaction</span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight">
                Pret a booster vos avis ?
              </h2>
              <p className="text-white/70 mt-4 text-lg">
                Rejoignez les commercants qui ont deja transforme leur reputation
                en ligne avec SNCard.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/commander">
                  <Button
                    variant="secondary"
                    size="lg"
                    icon={<ArrowRight className="h-5 w-5" />}
                  >
                    Commander maintenant
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
