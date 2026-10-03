import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Đội ngũ giảng viên",
  description:
    "Đội ngũ giảng viên và chuyên gia tại Trung Tâm Việt - Hàn - Trường Đại học Mở TP.HCM",
};

export default function FacultyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
