"use client";

import { Truck, Headphones, FileText, Shield } from "lucide-react";

const items = [
  {
    icon: Truck,
    label: "Livraison rapide",
    detail: "Expedition sous 48h",
  },
  {
    icon: Headphones,
    label: "Support reactif",
    detail: "Reponse sous 24h",
  },
  {
    icon: FileText,
    label: "Facture incluse",
    detail: "Facture PDF automatique",
  },
  {
    icon: Shield,
    label: "Paiement securise",
    detail: "Chiffrement SSL",
  },
];

export default function Reassurance() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.label}
            className="flex items-start gap-3 p-3 rounded-2xl bg-gray-50"
          >
            <div className="w-8 h-8 rounded-lg bg-accent-subtle flex items-center justify-center shrink-0">
              <Icon className="h-4 w-4 text-accent" />
            </div>
            <div>
              <p className="text-xs font-medium text-foreground">{item.label}</p>
              <p className="text-[10px] text-gray-400">{item.detail}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
