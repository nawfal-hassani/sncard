"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import QuantitySelector from "@/components/order/QuantitySelector";
import OrderSummary from "@/components/order/OrderSummary";
import CheckoutButton from "@/components/order/CheckoutButton";
import Reassurance from "@/components/order/Reassurance";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { ToastProvider } from "@/components/shared/Toast";
import { PRICING_TIERS } from "@/data/pricing";
import { PricingTier } from "@/types";

function CommanderContent() {
  const searchParams = useSearchParams();
  const [selectedTier, setSelectedTier] = useState<PricingTier>(
    PRICING_TIERS[3]
  );

  useEffect(() => {
    const qty = searchParams.get("qty");
    if (qty) {
      const tier = PRICING_TIERS.find((t) => t.quantity === parseInt(qty));
      if (tier) setSelectedTier(tier);
    }
  }, [searchParams]);

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <AnimatedSection className="mb-12">
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight">
          Commander vos cartes SNCard
        </h1>
        <p className="text-gray-500 mt-2 text-lg">
          Selectionnez la quantite qui vous convient et finalisez votre commande.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        <div className="lg:col-span-2 space-y-8">
          <AnimatedSection delay={0.1}>
            <h2 className="text-xl font-semibold mb-4">
              Choisir la quantite
            </h2>
            <QuantitySelector
              selected={selectedTier}
              onSelect={setSelectedTier}
            />
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <Reassurance />
          </AnimatedSection>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-28 space-y-6">
            <AnimatedSection delay={0.15}>
              <OrderSummary tier={selectedTier} />
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <CheckoutButton tier={selectedTier} />
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CommanderPage() {
  return (
    <ToastProvider>
      <Navbar />
      <main className="pt-24 pb-16 min-h-screen">
        <Suspense>
          <CommanderContent />
        </Suspense>
      </main>
      <Footer />
    </ToastProvider>
  );
}
