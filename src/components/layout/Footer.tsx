"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import Container from "./Container";
import { siteConfig, navItems } from "@/data/site";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { FacebookIcon, YoutubeIcon } from "@/components/ui/SocialIcons";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary-900 text-white mt-auto">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent-400 flex items-center justify-center text-primary-900 font-heading font-bold text-lg">
                VH
              </div>
              <div>
                <p className="font-heading font-bold text-sm">Trung Tâm</p>
                <p className="font-heading font-semibold text-xs text-primary-200">
                  Việt - Hàn
                </p>
              </div>
            </div>
            <p className="text-primary-200 text-sm leading-relaxed mb-4">
              {t.footer.description}
            </p>
            <div className="flex gap-3">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-primary-800 flex items-center justify-center hover:bg-primary-700 transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-primary-800 flex items-center justify-center hover:bg-primary-700 transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-accent-400">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2">
              {navItems.slice(1).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-primary-200 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Programs */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-accent-400">
              {t.footer.programs}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/programs"
                  className="text-primary-200 hover:text-white text-sm transition-colors"
                >
                  🇰🇷 Tiếng Hàn & Văn hóa
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-primary-200 hover:text-white text-sm transition-colors"
                >
                  🎯 Luyện thi TOPIK
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-primary-200 hover:text-white text-sm transition-colors"
                >
                  🔄 Trao đổi & Du học Hàn Quốc
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-accent-400">
              {t.footer.contactInfo}
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm text-primary-200">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex gap-3 text-sm text-primary-200">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                <span>{siteConfig.phone}</span>
              </li>
              <li className="flex gap-3 text-sm text-primary-200">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                <span>{siteConfig.email}</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-primary-800">
        <Container className="py-4">
          <p className="text-center text-primary-300 text-xs">
            {t.footer.copyright}
          </p>
        </Container>
      </div>
    </footer>
  );
}
