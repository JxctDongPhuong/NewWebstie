"use client";

import { ArrowLeft, Calendar, Tag, Share2 } from "lucide-react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import type { NewsArticle } from "@/data/news";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function NewsDetailClient({ article }: { article: NewsArticle }) {
  const { locale, t } = useLanguage();

  return (
    <section className="section-padding bg-white">
      <Container className="max-w-4xl">
        <Button href="/news" variant="ghost" size="sm" className="mb-8">
          <ArrowLeft className="w-4 h-4" /> {t.nav.news}
        </Button>

        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <Badge>{article.category}</Badge>
            <span className="text-sm text-neutral-500 flex items-center gap-1.5 font-medium">
              <Calendar className="w-4 h-4 text-primary-500" />
              {article.date}
            </span>
          </div>

          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: article.title,
                  url: window.location.href,
                });
              } else {
                navigator.clipboard.writeText(window.location.href);
                alert("Đã sao chép liên kết vào bộ nhớ tạm!");
              }
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-neutral-600 bg-neutral-100 hover:bg-neutral-200 transition-colors cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5" /> Chia sẻ
          </button>
        </div>

        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 mb-8 leading-tight tracking-tight">
          {locale === "vi" ? article.title : article.titleEn}
        </h1>

        <div className="aspect-[2/1] rounded-3xl bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 shadow-xl flex flex-col items-center justify-center p-8 text-white mb-10 text-center border border-primary-400/20">
          <span className="text-5xl mb-3">📰</span>
          <p className="text-xl font-heading font-bold max-w-lg">
            {locale === "vi" ? article.title : article.titleEn}
          </p>
        </div>

        <div className="prose prose-neutral prose-lg max-w-none text-neutral-800 leading-relaxed space-y-6">
          <p className="text-xl font-medium text-neutral-700 leading-relaxed border-l-4 border-accent-400 pl-4 py-1 italic bg-neutral-50 rounded-r-xl">
            {locale === "vi" ? article.excerpt : article.excerptEn}
          </p>

          <p>
            {article.content}
          </p>

          <p>
            Nhằm mục tiêu tạo điều kiện tốt nhất cho học viên và các bạn sinh
            viên có nguyện vọng nghiên cứu ngôn ngữ, tham gia các kỳ thi chuẩn hóa
            quốc tế cũng như ứng tuyển các suất học bổng toàn phần, Trung Tâm
            Việt - Hàn thường xuyên tổ chức các buổi tư vấn chuyên sâu và hỗ
            trợ hoàn thiện hồ sơ đăng ký.
          </p>

          <h2 className="text-2xl font-bold font-heading text-neutral-900 mt-8 mb-4">
            Thông tin liên hệ & Hỗ trợ học viên
          </h2>
          <p>
            Mọi thắc mắc về chương trình đào tạo hoặc quy trình nộp hồ sơ, quý phụ
            huynh và học viên vui lòng liên hệ trực tiếp qua Văn phòng Trung tâm
            hoặc đường dây nóng để được giải đáp kịp thời.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-neutral-500">
            <Tag className="w-4 h-4 text-primary-500" />
            <span>Chủ đề: {article.category}</span>
          </div>
          <Button href="/admissions" size="md">
            Đăng ký tham gia ngay
          </Button>
        </div>
      </Container>
    </section>
  );
}
