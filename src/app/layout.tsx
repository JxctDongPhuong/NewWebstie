import type { Metadata } from "next";
import { Inter, Be_Vietnam_Pro } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-be-vietnam-pro",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Trung Tâm Việt - Hàn - Trường Đại học Mở TP.HCM",
    template: "%s | Trung Tâm Việt - Hàn",
  },
  description:
    "Trung tâm giao lưu văn hóa và hợp tác giáo dục Việt Nam - Hàn Quốc, trực thuộc Trường Đại học Mở TP.HCM",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="vi"
      className={`${inter.variable} ${beVietnamPro.variable}`}
      suppressHydrationWarning
    >
      <body className="font-body min-h-screen flex flex-col bg-white text-neutral-900 antialiased">
        <LanguageProvider>
          <Header />
          <main className="flex-1 pt-16 md:pt-20">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
