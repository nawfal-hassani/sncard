import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Mentions legales",
};

export default function MentionsLegales() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 min-h-screen">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mb-8">
            Mentions legales
          </h1>

          <div className="prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-3">Editeur du site</h2>
              <p className="text-gray-600 leading-relaxed">
                SNCard<br />
                [Forme juridique]<br />
                SIRET : [Numero SIRET]<br />
                Adresse : [Adresse complete]<br />
                Email : contact@sncard.fr<br />
                Directeur de la publication : [Nom du responsable]
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Hebergement</h2>
              <p className="text-gray-600 leading-relaxed">
                Ce site est heberge par Vercel Inc.<br />
                440 N Barranca Ave #4133, Covina, CA 91723, USA<br />
                Site web : vercel.com
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">
                Propriete intellectuelle
              </h2>
              <p className="text-gray-600 leading-relaxed">
                L&apos;ensemble du contenu de ce site (textes, images, logos,
                graphismes) est protege par le droit d&apos;auteur et la
                propriete intellectuelle. Toute reproduction, meme partielle,
                est interdite sans autorisation prealable.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">
                Responsabilite
              </h2>
              <p className="text-gray-600 leading-relaxed">
                SNCard s&apos;efforce de fournir des informations exactes et a
                jour. Toutefois, nous ne pouvons garantir l&apos;exactitude, la
                completude ou l&apos;actualite des informations diffusees sur ce
                site.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
