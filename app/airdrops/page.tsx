/* eslint-disable @typescript-eslint/no-explicit-any */
import Airdrops from "@/components/airdrops/Airdops";
import { Metadata } from "next";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense>
      <Airdrops />
    </Suspense>
  );
}

export async function generateMetadata(props: any): Promise<Metadata> {
  const { search, category } = props.searchParams;

  const titleBase = !category
    ? "All Airdrops"
    : `Crypto Airdrops - ${category}`;

  const title = search ? `Search results for "${search}" airdrops` : titleBase;

  return {
    title,
    description: `Explore airdrops in ${category} category${
      search ? ` matching "${search}"` : ""
    }.`,
  };
}
