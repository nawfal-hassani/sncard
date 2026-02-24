"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { faqData } from "@/data/faq";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-950/30 pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-semibold text-amber-400 uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mt-4 tracking-tight text-white">
            Questions frequentes
          </h2>
        </AnimatedSection>

        <div className="space-y-3">
          {faqData.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div className="rounded-2xl border border-white/10 overflow-hidden bg-white/5 backdrop-blur-sm hover:bg-white/8 transition-colors duration-200">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === i ? null : i)
                  }
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <span className="font-medium text-white pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-slate-500 shrink-0 transition-transform duration-200",
                      openIndex === i && "rotate-180 text-blue-400"
                    )}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-slate-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
