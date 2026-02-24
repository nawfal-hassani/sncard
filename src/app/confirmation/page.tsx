"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Package, Mail } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/shared/Button";
import Link from "next/link";

function ConfirmationContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );

  useEffect(() => {
    if (sessionId) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  }, [sessionId]);

  return (
    <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
      {status === "loading" && (
        <div className="animate-pulse space-y-4">
          <div className="w-16 h-16 rounded-full bg-gray-200 mx-auto" />
          <div className="h-6 bg-gray-200 rounded-full w-64 mx-auto" />
        </div>
      )}

      {status === "success" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mx-auto"
          >
            <CheckCircle className="h-10 w-10 text-success" />
          </motion.div>

          <h1 className="text-3xl lg:text-4xl font-bold tracking-tight">
            Commande confirmee !
          </h1>
          <p className="text-gray-500 text-lg max-w-md mx-auto">
            Merci pour votre commande. Vos cartes SNCard seront expediees
            sous 48h ouvrees.
          </p>

          <div className="mt-10 space-y-4 text-left max-w-sm mx-auto">
            <h3 className="font-semibold text-center mb-6">
              Prochaines etapes
            </h3>
            {[
              { icon: Mail, text: "Vous recevrez un email de confirmation" },
              { icon: Package, text: "Expedition sous 48h ouvrees" },
              { icon: CheckCircle, text: "Configurez votre carte en 2 minutes" },
            ].map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent-subtle flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <p className="text-sm font-medium">{step.text}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-8">
            <Link href="/">
              <Button
                variant="primary"
                size="lg"
                icon={<ArrowRight className="h-5 w-5" />}
              >
                Retour a l&apos;accueil
              </Button>
            </Link>
          </div>
        </motion.div>
      )}

      {status === "error" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <h1 className="text-3xl font-bold">Oups !</h1>
          <p className="text-gray-500 text-lg">
            Nous n&apos;avons pas pu verifier votre paiement. Si le
            probleme persiste, contactez-nous.
          </p>
          <Link href="/commander">
            <Button variant="primary" size="lg">
              Reessayer
            </Button>
          </Link>
        </motion.div>
      )}
    </div>
  );
}

export default function ConfirmationPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 min-h-screen flex items-center">
        <Suspense>
          <ConfirmationContent />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
