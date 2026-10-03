"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function CTABanner() {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-gradient-to-r from-primary-600 via-primary-700 to-primary-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            {t.sections.cta}
          </h2>
          <p className="text-primary-100 text-base sm:text-lg mb-8 leading-relaxed">
            {t.sections.ctaSub}
          </p>
          <Button href="/admissions" variant="secondary" size="lg">
            {t.sections.ctaButton}
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
