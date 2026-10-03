"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-primary-50/70 via-white to-accent-50/50 overflow-hidden py-12 md:py-20">
      {/* Decorative shapes */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-accent-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Text — 5/12 */}
          <motion.div
            className="lg:col-span-6 xl:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-primary-900 shadow-xs border border-primary-200/70 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-600 animate-pulse shrink-0" />
              <Image
                src="/Logo.png"
                alt="Trường Đại học Mở TP.HCM"
                width={120}
                height={22}
                className="h-5 sm:h-5.5 w-auto object-contain"
                priority
              />
              <span className="w-px h-3.5 bg-neutral-200" />
              <span className="font-heading font-bold text-xs sm:text-sm text-primary-900 tracking-tight">
                Đại học Mở TP.HCM
              </span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-900 leading-[1.15] mb-6 tracking-tight">
              {t.hero.title}
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 mb-8 leading-relaxed max-w-xl">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/programs" size="lg">
                {t.hero.cta1}
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                {t.hero.cta2}
              </Button>
            </div>
          </motion.div>

          {/* Image composition — 7/12 */}
          <motion.div
            className="lg:col-span-6 xl:col-span-7"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 shadow-2xl p-8 flex flex-col justify-between text-white overflow-hidden relative border border-primary-400/20">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

                <div className="relative z-10 flex justify-between items-start">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold uppercase tracking-wider">
                    HCMCOU Cultural Center
                  </span>
                  <div className="flex gap-2 text-2xl">
                    <span>🇻🇳</span>
                    <span>🇰🇷</span>
                  </div>
                </div>

                <div className="relative z-10 my-auto text-center py-6">
                  <p className="text-4xl sm:text-5xl font-heading font-extrabold tracking-tight text-white mb-2">
                    VIỆT • HÀN
                  </p>
                  <p className="text-primary-200 text-sm sm:text-base font-medium">
                    Giao lưu văn hóa & Hợp tác giáo dục quốc tế
                  </p>
                </div>

                <div className="relative z-10 grid grid-cols-3 gap-2 pt-4 border-t border-white/10 text-center">
                  <div>
                    <p className="text-xs text-primary-200">Đào tạo</p>
                    <p className="text-sm font-bold">Chất lượng cao</p>
                  </div>
                  <div>
                    <p className="text-xs text-primary-200">Môi trường</p>
                    <p className="text-sm font-bold">Quốc tế</p>
                  </div>
                  <div>
                    <p className="text-xs text-primary-200">Cơ hội</p>
                    <p className="text-sm font-bold">Học bổng 100%</p>
                  </div>
                </div>
              </div>

              {/* Floating stats badge */}
              <motion.div
                className="absolute -bottom-5 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-4 border border-neutral-100 flex items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center text-accent-700 font-bold text-xl">
                  ★
                </div>
                <div>
                  <p className="text-xl font-bold text-neutral-900 leading-none">
                    500+
                  </p>
                  <p className="text-xs text-neutral-500 mt-1">
                    Học viên mỗi năm
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
