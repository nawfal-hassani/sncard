"use client";

import { useState } from "react";
import Button from "@/components/shared/Button";
import { useToast } from "@/components/shared/Toast";
import { Lock } from "lucide-react";
import { PricingTier } from "@/types";

interface CheckoutButtonProps {
  tier: PricingTier;
}

export default function CheckoutButton({ tier }: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity: tier.quantity }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Erreur lors de la creation du paiement");
      }

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      toast(
        error instanceof Error
          ? error.message
          : "Une erreur est survenue. Veuillez reessayer.",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-3">
      <Button
        variant="primary"
        size="lg"
        className="w-full"
        onClick={handleCheckout}
        loading={loading}
        icon={<Lock className="h-4 w-4" />}
      >
        Payer {loading ? "" : "maintenant"}
      </Button>
      <p className="text-xs text-gray-400 text-center flex items-center justify-center gap-1">
        <Lock className="h-3 w-3" />
        Paiement securise par Stripe
      </p>
    </div>
  );
}
