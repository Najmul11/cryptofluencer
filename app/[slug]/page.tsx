import DetailsPage from "@/components/details/DetailsPage";
import { Metadata } from "next";

const page = () => {
  return <DetailsPage />;
};

export default page;

export async function generateMetadata(
  props: Promise<{ params: { slug: string } }>
): Promise<Metadata> {
  const { params } = await props;

  const title = `Potential ${params.slug} Airdrop`;
  const description = `How to be eligible for ${params.slug} airdrop?`;

  return {
    title,
    description,
  };
}
