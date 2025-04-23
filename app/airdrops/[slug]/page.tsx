// app/airdrops/[slug]/page.tsx
import Airdrops from "@/components/airdrops/Airdrops";
import { Metadata } from "next";

export default function Page() {
  return <Airdrops />;
}

export async function generateMetadata(
  props: Promise<{
    params: { slug: string };
    searchParams: { search?: string };
  }>
): Promise<Metadata> {
  const { params, searchParams } = await props;

  const titleBase =
    params.slug === "all" ? "All Airdrops" : `Crypto Airdrops - ${params.slug}`;

  const title = searchParams?.search
    ? `Search results for "${searchParams.search}" airdrops`
    : titleBase;

  return {
    title,
    description: `Explore airdrops in ${params.slug} category${
      searchParams?.search ? ` matching "${searchParams.search}"` : ""
    }.`,
  };
}
