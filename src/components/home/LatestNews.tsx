"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { newsArticles } from "@/data/news";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function LatestNews() {
  const { locale, t } = useLanguage();
  const latest = newsArticles.slice(0, 3);

  return (
    <section className="section-padding bg-neutral-50/60">
      <Container>
        <SectionHeading title={t.sections.latestNews} />
        <div className="grid md:grid-cols-3 gap-6">
          {latest.map((article, i) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full flex flex-col justify-between">
                <div>
                  <div className="aspect-[16/10] bg-gradient-to-br from-primary-100 to-accent-100/50 flex flex-col items-center justify-center p-4 text-center border-b border-neutral-100">
                    <span className="text-3xl mb-1">📰</span>
                    <span className="text-xs font-semibold text-primary-800 uppercase tracking-wider">
                      {article.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge>{article.category}</Badge>
                      <span className="text-xs text-neutral-400 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {article.date}
                      </span>
                    </div>
                    <h3 className="font-heading font-bold text-lg text-neutral-900 mb-2 line-clamp-2 leading-snug">
                      {locale === "vi" ? article.title : article.titleEn}
                    </h3>
                    <p className="text-neutral-600 text-sm line-clamp-2 leading-relaxed">
                      {locale === "vi" ? article.excerpt : article.excerptEn}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <Link
                    href={`/news/${article.slug}`}
                    className="text-primary-600 hover:text-primary-800 text-sm font-semibold inline-flex items-center gap-1.5 hover:gap-2.5 transition-all"
                  >
                    {t.news.readMore} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-primary-500 text-primary-600 hover:bg-primary-50 font-semibold text-sm transition-all"
          >
            {t.news.viewAll} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
