"use client";

import AnimatedSection from "@/components/shared/AnimatedSection";
import Badge from "@/components/shared/Badge";
import Button from "@/components/shared/Button";
import { PRICING_TIERS } from "@/data/pricing";
import { formatPrice } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
  return (
    <section id="prix" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-950/40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16 lg:mb-20">
          <span className="text-sm font-semibold text-green-400 uppercase tracking-wider">
            Tarifs
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mt-4 tracking-tight text-white">
            Des prix degressifs
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-lg">
            Plus vous commandez, plus le prix par carte diminue.
            Investissez dans votre reputation.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRICING_TIERS.map((tier, i) => (
            <AnimatedSection key={tier.quantity} delay={i * 0.08}>
              <div
                className={cn(
                  "relative rounded-3xl p-8 flex flex-col border transition-all duration-300",
                  tier.popular
                    ? "bg-gradient-to-br from-blue-600 to-violet-600 text-white border-transparent shadow-2xl shadow-blue-500/25 scale-[1.03]"
                    : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 backdrop-blur-sm"
                )}
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge variant={tier.popular ? "premium" : "default"}>
                      {tier.badge}
                    </Badge>
                  </div>
                )}

                <div className="mb-6">
                  <h3
                    className={cn(
                      "text-lg font-semibold",
                      !tier.popular && "text-white"
                    )}
                  >
                    {tier.quantity} carte{tier.quantity > 1 ? "s" : ""}
                  </h3>
                  {tier.discount > 0 && (
                    <p
                      className={cn(
                        "text-sm mt-1",
                        tier.popular ? "text-white/70" : "text-slate-500"
                      )}
                    >
                      -{tier.discount}% de remise
                    </p>
                  )}
                </div>

                <div className="mb-6">
                  <span
                    className={cn(
                      "text-4xl font-bold",
                      !tier.popular && "text-white"
                    )}
                  >
                    {formatPrice(tier.pricePerCard)}
                  </span>
                  <span
                    className={cn(
                      "text-sm ml-1",
                      tier.popular ? "text-white/70" : "text-slate-500"
                    )}
                  >
                    / carte
                  </span>
                </div>

                <p
                  className={cn(
                    "text-sm mb-6",
                    tier.popular ? "text-white/80" : "text-slate-400"
                  )}
                >
                  Total :{" "}
                  <span className="font-semibold">
                    {formatPrice(tier.totalPrice)}
                  </span>
                </p>

                <ul className="space-y-3 mb-8 flex-1">
                  {[
                    "Technologie NFC integree",
                    "Configuration en 2 min",
                    "Livraison sous 48h",
                    "Support inclus",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check
                        className={cn(
                          "h-4 w-4 shrink-0",
                          tier.popular ? "text-white" : "text-green-400"
                        )}
                      />
                      <span
                        className={cn(
                          "text-sm",
                          tier.popular ? "text-white/90" : "text-slate-400"
                        )}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link href={`/commander?qty=${tier.quantity}`}>
                  <Button
                    variant={tier.popular ? "secondary" : "primary"}
                    size="md"
                    className="w-full"
                  >
                    Commander {tier.quantity} carte{tier.quantity > 1 ? "s" : ""}
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
