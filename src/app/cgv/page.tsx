import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Conditions Generales de Vente",
};

export default function CGV() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 min-h-screen">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mb-8">
            Conditions Generales de Vente
          </h1>

          <div className="prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-3">Objet</h2>
              <p className="text-gray-600 leading-relaxed">
                Les presentes Conditions Generales de Vente (CGV) regissent les
                ventes de cartes NFC SNCard effectuees sur le site sncard.fr.
                Toute commande implique l&apos;acceptation sans reserve des
                presentes CGV.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Produits</h2>
              <p className="text-gray-600 leading-relaxed">
                SNCard commercialise des cartes NFC permettant la collecte
                d&apos;avis clients. Les photographies et descriptions sont les
                plus fideles possible mais ne peuvent assurer une similitude
                parfaite.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Prix</h2>
              <p className="text-gray-600 leading-relaxed">
                Les prix sont indiques en euros TTC. SNCard se reserve le droit
                de modifier ses tarifs a tout moment. Les produits sont factures
                sur la base des tarifs en vigueur au moment de la validation de
                la commande.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Commande</h2>
              <p className="text-gray-600 leading-relaxed">
                La commande est validee apres confirmation du paiement. Un email
                de confirmation est envoye a l&apos;adresse fournie. SNCard se
                reserve le droit de refuser toute commande anormale ou de
                mauvaise foi.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Livraison</h2>
              <p className="text-gray-600 leading-relaxed">
                Les commandes sont expediees sous 48h ouvrees apres confirmation
                du paiement. La livraison est effectuee par Colissimo en France
                metropolitaine. Les delais indicatifs sont de 2 a 4 jours
                ouvres.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">
                Droit de retractation
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Conformement a l&apos;article L221-18 du Code de la consommation,
                vous disposez d&apos;un delai de 14 jours a compter de la
                reception pour exercer votre droit de retractation. Les produits
                doivent etre retournes dans leur etat d&apos;origine.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">
                Garantie
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Les cartes SNCard beneficient de la garantie legale de
                conformite (2 ans) et de la garantie des vices caches. En cas de
                defaut, contactez-nous a contact@sncard.fr.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">
                Litiges
              </h2>
              <p className="text-gray-600 leading-relaxed">
                En cas de litige, une solution amiable sera recherchee avant
                toute action judiciaire. Le droit francais est applicable. Le
                tribunal competent est celui du siege social de SNCard.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
