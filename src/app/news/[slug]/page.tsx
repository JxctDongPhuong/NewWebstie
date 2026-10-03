import { notFound } from "next/navigation";
import { newsArticles, getNewsArticleBySlug } from "@/data/news";
import NewsDetailClient from "./NewsDetailClient";

export function generateStaticParams() {
  return newsArticles.map((a) => ({
    slug: a.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getNewsArticleBySlug(slug);
  if (!article) return { title: "Bài viết không tồn tại" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getNewsArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return <NewsDetailClient article={article} />;
}
