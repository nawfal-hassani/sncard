import { FAQ } from "@/types";

export const faqData: FAQ[] = [
  {
    question: "Comment fonctionne la carte SNCard ?",
    answer:
      "Il suffit d'approcher la carte SNCard du telephone de votre client apres un achat. Le client recoit une notification qui le redirige directement vers votre page d'avis Google. En quelques secondes, il peut laisser un avis.",
  },
  {
    question: "Est-ce compatible avec tous les telephones ?",
    answer:
      "Oui, la carte SNCard est compatible avec tous les smartphones recents equipes de la technologie NFC (iPhone XS et plus recent, la quasi-totalite des smartphones Android).",
  },
  {
    question: "Faut-il installer une application ?",
    answer:
      "Non, aucune application n'est necessaire, ni pour le commercant, ni pour le client. La carte utilise la technologie NFC native du telephone.",
  },
  {
    question: "Combien de temps dure la carte ?",
    answer:
      "La carte SNCard est concue pour durer des annees. Elle est resistante a l'eau, aux chocs et ne necessite aucune batterie ni recharge.",
  },
  {
    question: "Puis-je personnaliser ma carte ?",
    answer:
      "Pour le moment, les cartes sont livrees avec le design standard SNCard. La personnalisation avec votre logo sera disponible en V2.",
  },
  {
    question: "Quels sont les delais de livraison ?",
    answer:
      "Les cartes sont expediees sous 48h ouvrees. La livraison est effectuee par Colissimo et prend generalement 2 a 4 jours ouvres.",
  },
  {
    question: "Comment configurer ma carte pour mon etablissement ?",
    answer:
      "Apres reception, vous recevrez un email avec un lien pour configurer votre carte en 2 minutes. Vous n'aurez qu'a renseigner l'URL de votre page Google Business.",
  },
  {
    question: "Quels moyens de paiement acceptez-vous ?",
    answer:
      "Nous acceptons les cartes bancaires (Visa, Mastercard, American Express) via notre plateforme de paiement securisee Stripe.",
  },
];
