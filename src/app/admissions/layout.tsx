import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tuyển sinh",
  description:
    "Thông tin tuyển sinh và đăng ký nhập học tại Trung Tâm Việt - Hàn - Trường Đại học Mở TP.HCM",
};

export default function AdmissionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
