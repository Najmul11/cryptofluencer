import Airdrops from "@/components/airdrops/Airdops";
import { Metadata } from "next";
import { Suspense } from "react";

type PageProps = {
  searchParams: Promise<{
    search?: string;
    category?: string;
  }>;
};

export default function Page() {
  return (
    <Suspense>
      <Airdrops />
    </Suspense>
  );
}

export async function generateMetadata({
  searchParams,
}: PageProps): Promise<Metadata> {
  const { search, category } = await searchParams;

  const titleBase = category ? `Crypto Airdrops - ${category}` : "All Airdrops";

  const title = search ? `Search results for "${search}" airdrops` : titleBase;

  return {
    title,
    description: `Explore airdrops${
      category ? ` in ${category} category` : ""
    }${search ? ` matching "${search}"` : ""}.`,
  };
}
