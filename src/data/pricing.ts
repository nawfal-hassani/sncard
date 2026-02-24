import { PricingTier } from "@/types";

export const PRICING_TIERS: PricingTier[] = [
  {
    quantity: 1,
    pricePerCard: 2990,
    totalPrice: 2990,
    discount: 0,
    stripePriceId: "price_sncard_1",
  },
  {
    quantity: 5,
    pricePerCard: 2490,
    totalPrice: 12450,
    discount: 17,
    stripePriceId: "price_sncard_5",
  },
  {
    quantity: 10,
    pricePerCard: 2190,
    totalPrice: 21900,
    discount: 27,
    stripePriceId: "price_sncard_10",
  },
  {
    quantity: 25,
    pricePerCard: 1890,
    totalPrice: 47250,
    discount: 37,
    stripePriceId: "price_sncard_25",
    badge: "Meilleur choix",
    popular: true,
  },
  {
    quantity: 50,
    pricePerCard: 1590,
    totalPrice: 79500,
    discount: 47,
    stripePriceId: "price_sncard_50",
  },
  {
    quantity: 100,
    pricePerCard: 1290,
    totalPrice: 129000,
    discount: 57,
    stripePriceId: "price_sncard_100",
  },
];
