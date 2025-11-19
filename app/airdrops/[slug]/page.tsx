/* eslint-disable @typescript-eslint/no-explicit-any */
import Airdrops from "@/components/airdrops/Airdrops";
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
  const { slug } = (await props).params;
  const search = props.searchParams?.search;

  const titleBase =
    slug === "all" ? "All Airdrops" : `Crypto Airdrops - ${slug}`;

  const title = search ? `Search results for "${search}" airdrops` : titleBase;

  return {
    title,
    description: `Explore airdrops in ${slug} category${
      search ? ` matching "${search}"` : ""
    }.`,
  };
}
