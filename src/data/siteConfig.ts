import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "SNCard",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://sncard.fr",
  description:
    "La carte NFC qui booste vos avis Google. Approchez, notifiez, collectez.",
  contact: {
    email: "contact@sncard.fr",
  },
};
