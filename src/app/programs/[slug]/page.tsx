import { notFound } from "next/navigation";
import { programs, getProgramBySlug } from "@/data/programs";
import ProgramDetailClient from "./ProgramDetailClient";

export function generateStaticParams() {
  return programs.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) return { title: "Chương trình không tồn tại" };
  return {
    title: program.title,
    description: program.description,
  };
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);

  if (!program) {
    notFound();
  }

  return <ProgramDetailClient program={program} />;
}
