"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { facultyMembers } from "@/data/faculty";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function FacultyPage() {
  const { locale, t } = useLanguage();

  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading
          title={t.faculty.title}
          subtitle="Đội ngũ phó giáo sư, tiến sĩ, thạc sĩ và chuyên gia ngôn ngữ bản ngữ giàu kinh nghiệm giảng dạy và nghiên cứu."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyMembers.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-neutral-50/70 border border-neutral-100 rounded-3xl p-8 text-center hover:shadow-xl hover:border-primary-100 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-primary-500 to-primary-800 flex items-center justify-center mb-6 shadow-lg shadow-primary-500/20 text-white font-heading font-extrabold text-3xl">
                  {member.name.charAt(0)}
                </div>

                <h3 className="font-heading font-bold text-xl text-neutral-900 mb-1">
                  {locale === "vi" ? member.name : member.nameEn}
                </h3>

                <p className="text-primary-600 text-sm font-semibold mb-4">
                  {locale === "vi" ? member.title : member.titleEn}
                </p>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-neutral-200 rounded-full text-xs text-neutral-700 font-medium mb-4">
                  <GraduationCap className="w-3.5 h-3.5 text-accent-500" />
                  <span>{member.specialization}</span>
                </div>

                <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                  {locale === "vi" ? member.bio : member.bioEn}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-200/60 flex items-center justify-center gap-2 text-xs text-neutral-500 font-medium">
                <Award className="w-4 h-4 text-primary-500" />
                <span>Giảng viên cơ hữu HCMCOU</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
