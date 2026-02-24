export interface PricingTier {
  quantity: number;
  pricePerCard: number;
  totalPrice: number;
  discount: number;
  stripePriceId: string;
  badge?: string;
  popular?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface UseCase {
  title: string;
  description: string;
  icon: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: string;
  size?: "small" | "large";
}

export interface SiteConfig {
  name: string;
  url: string;
  description: string;
  contact: {
    email: string;
    phone?: string;
  };
}
