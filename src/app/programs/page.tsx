"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/components/providers/LanguageProvider";

const filters = [
  { key: "all", labelKey: "all" as const },
  { key: "korean", labelKey: "korean" as const },
  { key: "topik", labelKey: "topik" as const },
  { key: "exchange", labelKey: "exchange" as const },
];

interface Program {
  slug: string;
  title: string;
  titleEn: string;
  category: string;
  description: string;
  descriptionEn: string;
  duration: string;
  features: string[];
}

export default function ProgramsPage() {
  const [active, setActive] = useState("all");
  const [programs, setPrograms] = useState<Program[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { locale, t } = useLanguage();

  useEffect(() => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL!;

    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setPrograms(data);
        setIsLoading(false); 
      })
      .catch(err => {
        console.error("Lỗi tải dữ liệu:", err);
        setIsLoading(false); 
      });
  }, []);

  const filtered =
    active === "all" ? programs : programs.filter((p) => p.category === active);

  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading
          title={t.programs.title}
          subtitle="Khám phá các khóa đào tạo tiếng Hàn chuẩn hóa, văn hóa K-Culture và chương trình trao đổi học thuật Việt - Hàn."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                active === f.key
                  ? "bg-primary-500 text-white shadow-md shadow-primary-500/30"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              {t.programs[f.labelKey]}
            </button>
          ))}
        </div>

        {/* Grid hoặc trạng thái Loading */}
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-10 h-10 border-4 border-primary-200 border-t-primary-500 rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((program) => (
                <motion.div
                  key={program.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full flex flex-col justify-between">
                    <div>
                      <div className="aspect-[16/10] bg-gradient-to-br from-primary-100 via-primary-50 to-accent-50 flex flex-col items-center justify-center p-6 text-center border-b border-neutral-100">
                        <span className="text-4xl mb-2">
                          {program.category === "korean"
                            ? "🇰🇷"
                            : program.category === "topik"
                            ? "🎯"
                            : "🔄"}
                        </span>
                        <span className="text-xs font-bold text-primary-800 uppercase tracking-wider">
                          {program.category === "korean"
                            ? "Tiếng Hàn"
                            : program.category === "topik"
                            ? "Luyện thi TOPIK"
                            : "Trao đổi quốc tế"}
                        </span>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <Badge
                            variant={
                              program.category === "korean"
                                ? "korean"
                                : program.category === "topik"
                                ? "topik"
                                : "exchange"
                            }
                          >
                            {t.programs[
                              program.category as keyof typeof t.programs
                            ] || program.category}
                          </Badge>
                          <span className="text-xs text-neutral-500 flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-primary-500" />
                            {program.duration}
                          </span>
                        </div>

                        <h3 className="font-heading font-bold text-xl text-neutral-900 mb-2 leading-snug">
                          {locale === "vi" ? program.title : program.titleEn}
                        </h3>

                        <p className="text-neutral-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                          {locale === "vi"
                            ? program.description
                            : program.descriptionEn}
                        </p>

                        <div className="space-y-1.5 pt-3 border-t border-neutral-100">
                          {program.features.slice(0, 3).map((f, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-2 text-xs text-neutral-600"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                              <span>{f}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="p-6 pt-0">
                      <Button
                        href={`/programs/${program.slug}`}
                        variant="outline"
                        size="sm"
                        className="w-full"
                      >
                        {t.programs.viewDetails} <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </Container>
    </section>
  );
}