import { notFound } from "next/navigation";
import rugs from "@/data/rugs";
import RugPageClient from "./RugPageClient";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return rugs.map((rug) => ({
    slug: rug.slug,
  }));
}

export default async function RugPage({ params }: PageProps) {

  const { slug } = await params;

  const rug = rugs.find((r) => r.slug === slug);

  if (!rug) return notFound();

  return <RugPageClient rug={rug} />;
}