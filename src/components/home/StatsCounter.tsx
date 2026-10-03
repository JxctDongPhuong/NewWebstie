"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import { useLanguage } from "@/components/providers/LanguageProvider";

const stats = [
  { value: 500, suffix: "+", labelKey: "students" as const },
  { value: 20, suffix: "+", labelKey: "programs" as const },
  { value: 10, suffix: "+", labelKey: "partners" as const },
  { value: 15, suffix: "", labelKey: "years" as const },
];

function useCountUp(target: number, duration = 1800) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const increment = Math.max(1, Math.floor(target / (duration / 20)));
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 20);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return { count, ref };
}

function StatItem({
  stat,
  index,
}: {
  stat: (typeof stats)[number];
  index: number;
}) {
  const { count, ref } = useCountUp(stat.value);
  const { t } = useLanguage();

  return (
    <motion.div
      ref={ref}
      className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <p className="text-4xl sm:text-5xl font-heading font-extrabold mb-2 text-accent-400">
        {count}
        {stat.suffix}
      </p>
      <p className="text-primary-100 text-sm font-semibold uppercase tracking-wider">
        {t.stats[stat.labelKey]}
      </p>
    </motion.div>
  );
}

export default function StatsCounter() {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-gradient-to-r from-primary-600 via-primary-700 to-primary-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <Container className="relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-3 text-white">
            {t.sections.stats}
          </h2>
          <div className="w-16 h-1 bg-accent-400 rounded-full mx-auto" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <StatItem key={i} stat={stat} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
