/* eslint-disable @typescript-eslint/no-explicit-any */
import DetailsPage from "@/components/details/DetailsPage";
import { Metadata } from "next";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default function Page() {
  return <DetailsPage />;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const title = `Potential ${slug} Airdrop`;
  const description = `How to be eligible for ${slug} airdrop`;

  return {
    title,
    description,
  };
}
