"use client";
// import Categories from "@/components/airdrops/Categories";
import CategoryMenu from "@/components/airdrops/CategoryMenu";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import { useGetAllProjectsQuery } from "@/redux/api/project";

const Page = () => {
  const { data, isLoading } = useGetAllProjectsQuery("");

  return (
    <div className="wrapper  pt-3 min-h-[calc(100vh-250px)]">
      {/* <Categories /> */}
      <CategoryMenu />
      {/* <Airdrops /> */}
      <HoverEffect items={data?.data} />
    </div>
  );
};

export default Page;
