"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { FacebookIcon, YoutubeIcon } from "@/components/ui/SocialIcons";

export default function ContactPage() {
  const { t } = useLanguage();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      alert("Tin nhắn của bạn đã được gửi thành công!");
      setSubmitted(false);
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 400);
  };

  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading
          title={t.contact.title}
          subtitle="Chúng tôi luôn sẵn sàng lắng nghe và giải đáp mọi câu hỏi của quý phụ huynh và học viên."
        />

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Form — 7 cols */}
          <div className="lg:col-span-7">
            <div className="bg-neutral-50/80 border border-neutral-100 rounded-3xl p-8 md:p-10 shadow-sm">
              <h3 className="font-heading text-2xl font-bold mb-6 text-neutral-900">
                {t.contact.formTitle}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    label={t.contact.name}
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Nguyễn Văn A"
                  />
                  <Input
                    label={t.contact.email}
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="name@example.com"
                  />
                </div>
                <Input
                  label={t.contact.subject}
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="Cần tư vấn khóa học tiếng Hàn..."
                />
                <Textarea
                  label={t.contact.message}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Nội dung chi tiết cần hỗ trợ..."
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full mt-2"
                  disabled={submitted}
                >
                  {submitted ? "Đang gửi..." : t.contact.send}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info & Map — 5 cols */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="bg-neutral-50/80 border border-neutral-100 rounded-3xl p-8 shadow-sm">
              <h3 className="font-heading text-xl font-bold mb-6 text-neutral-900">
                {t.contact.info}
              </h3>
              <div className="space-y-5 mb-8">
                {[
                  {
                    icon: MapPin,
                    label: t.contact.address,
                    value: siteConfig.address,
                  },
                  {
                    icon: Phone,
                    label: t.contact.phone,
                    value: siteConfig.phone,
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: siteConfig.email,
                  },
                  {
                    icon: Clock,
                    label: t.contact.officeHours,
                    value: t.contact.officeHoursValue,
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-primary-100/80 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-500 font-medium mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-sm font-semibold text-neutral-800 leading-snug">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-neutral-200/60 flex items-center gap-3">
                <span className="text-xs text-neutral-500 font-medium">
                  Kết nối với chúng tôi:
                </span>
                <div className="flex gap-2">
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600 hover:bg-primary-500 hover:text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <FacebookIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={siteConfig.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600 hover:bg-primary-500 hover:text-white transition-colors"
                    aria-label="YouTube"
                  >
                    <YoutubeIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-3xl overflow-hidden border border-neutral-200/80 aspect-[16/10] shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4241673892787!2d106.6896238!3d10.7787884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3069c9b5a7%3A0x6b4fb83a1523415!2zOTcgVsO1IFbEg24gVOG6p24sIFBoxrDhu51uZyA2LCBRdeG6rW4gMywgSOG7kyBDaMOtIE1pbmggNzAwMDA!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="HCMCOU Map"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
