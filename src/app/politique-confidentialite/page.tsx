import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Politique de confidentialite",
};

export default function PolitiqueConfidentialite() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 min-h-screen">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mb-8">
            Politique de confidentialite
          </h1>

          <div className="prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-3">
                Collecte des donnees
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Lors de votre commande, nous collectons les informations
                suivantes : nom, prenom, adresse email, adresse de livraison et
                informations de paiement. Ces donnees sont necessaires au
                traitement de votre commande.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">
                Utilisation des donnees
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Vos donnees personnelles sont utilisees pour :<br />
                - Traiter et livrer vos commandes<br />
                - Vous contacter en cas de besoin concernant votre commande<br />
                - Ameliorer nos services<br />
                Nous ne vendons ni ne partageons vos donnees avec des tiers a
                des fins commerciales.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Paiement</h2>
              <p className="text-gray-600 leading-relaxed">
                Les paiements sont traites par Stripe, un prestataire de
                paiement certifie PCI DSS. Nous ne stockons aucune information
                bancaire sur nos serveurs.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Cookies</h2>
              <p className="text-gray-600 leading-relaxed">
                Ce site utilise des cookies strictement necessaires au
                fonctionnement du site. Aucun cookie publicitaire ou de suivi
                n&apos;est utilise.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Vos droits</h2>
              <p className="text-gray-600 leading-relaxed">
                Conformement au RGPD, vous disposez d&apos;un droit d&apos;acces,
                de rectification, de suppression et de portabilite de vos
                donnees. Pour exercer ces droits, contactez-nous a
                contact@sncard.fr.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">
                Duree de conservation
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Vos donnees sont conservees pendant la duree necessaire au
                traitement de votre commande et au respect de nos obligations
                legales (5 ans pour les donnees de facturation).
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
