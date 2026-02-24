"use client";

import { PRICING_TIERS } from "@/data/pricing";
import { formatPrice, cn } from "@/lib/utils";
import Badge from "@/components/shared/Badge";
import { PricingTier } from "@/types";

interface QuantitySelectorProps {
  selected: PricingTier;
  onSelect: (tier: PricingTier) => void;
}

export default function QuantitySelector({
  selected,
  onSelect,
}: QuantitySelectorProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {PRICING_TIERS.map((tier) => (
        <button
          key={tier.quantity}
          onClick={() => onSelect(tier)}
          className={cn(
            "relative p-4 rounded-2xl border-2 text-left transition-all duration-200 cursor-pointer",
            selected.quantity === tier.quantity
              ? "border-accent bg-accent-subtle shadow-md shadow-accent/10"
              : "border-gray-100 bg-white hover:border-gray-200 hover:shadow-sm"
          )}
        >
          {tier.badge && (
            <div className="absolute -top-2 right-2">
              <Badge variant="highlight" className="text-[10px]">
                {tier.badge}
              </Badge>
            </div>
          )}

          <span className="text-2xl font-bold text-foreground block">
            {tier.quantity}
          </span>
          <span className="text-xs text-gray-500 block mt-0.5">
            carte{tier.quantity > 1 ? "s" : ""}
          </span>
          <span className="text-sm font-semibold text-accent block mt-2">
            {formatPrice(tier.pricePerCard)}
            <span className="text-gray-400 font-normal"> /carte</span>
          </span>
          {tier.discount > 0 && (
            <span className="text-xs text-success font-medium mt-1 block">
              -{tier.discount}%
            </span>
          )}
        </button>
      ))}
    </div>
  );
}
