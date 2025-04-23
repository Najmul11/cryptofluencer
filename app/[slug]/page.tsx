import DetailsPage from "@/components/details/DetailsPage";
import { Metadata } from "next";

const page = () => {
  return <DetailsPage />;
};

export default page;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const title = `Potential  ${params.slug}  Airdrop`;

  return {
    title,
    description: `How to be eligible for  ${params.slug} airdrop`,
  };
}
