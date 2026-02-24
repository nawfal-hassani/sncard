import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { PRICING_TIERS } from "@/data/pricing";

export async function POST(req: NextRequest) {
  try {
    const { quantity } = await req.json();

    const tier = PRICING_TIERS.find((t) => t.quantity === quantity);
    if (!tier) {
      return NextResponse.json(
        { error: "Quantite invalide" },
        { status: 400 }
      );
    }

    const session = await getStripe().checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: `SNCard - ${tier.quantity} carte${tier.quantity > 1 ? "s" : ""} NFC`,
              description: `Pack de ${tier.quantity} carte${tier.quantity > 1 ? "s" : ""} NFC SNCard pour collecter des avis Google`,
            },
            unit_amount: tier.totalPrice,
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/confirmation?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/commander`,
      metadata: {
        quantity: tier.quantity.toString(),
        pricePerCard: tier.pricePerCard.toString(),
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: "Erreur lors de la creation de la session de paiement" },
      { status: 500 }
    );
  }
}
