import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chương trình đào tạo",
  description:
    "Các chương trình đào tạo ngôn ngữ, văn hóa Hàn Quốc và trao đổi sinh viên quốc tế",
};

export default function ProgramsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
