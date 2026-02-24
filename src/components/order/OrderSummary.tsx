"use client";

import { PricingTier } from "@/types";
import { formatPrice } from "@/lib/utils";

interface OrderSummaryProps {
  tier: PricingTier;
}

export default function OrderSummary({ tier }: OrderSummaryProps) {
  const originalTotal = PRICING_TIERS_FIRST_PRICE * tier.quantity;
  const savings = originalTotal - tier.totalPrice;

  return (
    <div className="rounded-3xl border border-gray-100 bg-white shadow-sm p-6 lg:p-8">
      <h3 className="text-lg font-semibold mb-6">Resume de commande</h3>

      <div className="space-y-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Produit</span>
          <span className="font-medium">Carte SNCard NFC</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Quantite</span>
          <span className="font-medium">
            {tier.quantity} carte{tier.quantity > 1 ? "s" : ""}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Prix unitaire</span>
          <span className="font-medium">{formatPrice(tier.pricePerCard)}</span>
        </div>

        {savings > 0 && (
          <div className="flex justify-between text-sm text-success">
            <span>Economie</span>
            <span className="font-medium">-{formatPrice(savings)}</span>
          </div>
        )}

        <div className="border-t border-border pt-4">
          <div className="flex justify-between">
            <span className="font-semibold text-lg">Total</span>
            <span className="font-bold text-2xl">
              {formatPrice(tier.totalPrice)}
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-1">TVA incluse</p>
        </div>
      </div>
    </div>
  );
}

// Prix de la premiere carte (sans remise) pour calculer les economies
const PRICING_TIERS_FIRST_PRICE = 2990;
