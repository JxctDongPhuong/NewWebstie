import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tin tức & Sự kiện",
  description:
    "Tin tức, sự kiện và thông báo mới nhất từ Trung Tâm Việt - Hàn - Trường Đại học Mở TP.HCM",
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
