/* eslint-disable @typescript-eslint/no-explicit-any */
import DetailsPage from "@/components/details/DetailsPage";
import { Metadata } from "next";

const page = () => {
  return <DetailsPage />;
};

export default page;

export async function generateMetadata(props: any): Promise<Metadata> {
  const { slug } = (await props).params;

  const title = `Potential ${slug} Airdrop`;
  const description = `How to be eligible for ${slug} airdrop`;

  return {
    title,
    description,
  };
}
