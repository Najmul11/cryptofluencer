/* eslint-disable @next/next/no-img-element */

import Details from "@/components/details/Details";
import HotDrops from "@/components/details/HotDrops";
import React from "react";

const Page = () => {
  return (
    <div className="wrapper  pt-16">
      <div className="min-h-screen grid grid-cols-3 gap-5">
        {/* --hot drops-- */}
        <HotDrops />
        {/* details */}
        <div className="col-span-2 border p-5 rounded-2xl">
          <Details />
        </div>
      </div>
    </div>
  );
};

export default Page;
