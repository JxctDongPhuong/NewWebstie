import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liên hệ",
  description:
    "Liên hệ với Trung Tâm Việt - Hàn - Trường Đại học Mở TP.HCM",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
