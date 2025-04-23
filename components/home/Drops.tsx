"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HoverEffect } from "../ui/card-hover-effect";
import SeeMore from "../ui/seeMore";
import { useGetAllProjectsQuery } from "@/redux/api/project";
import DropSkeleton from "../skeleton/DropSkeleton";

import droplogo from "../../public/assets/drop.png";
import droplog from "../../public/assets/drops-removebg-preview.png";

const Drops = () => {
  const { data, isLoading } = useGetAllProjectsQuery({ showOnHomepage: "YES" });

  return (
    <motion.div className="py-16 ">
      <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold px-8 xl:px-0 flex items-center gap-3">
        Recent Airdrops
        <Image
          src={droplog}
          alt="recent-airdrop-logo"
          width={64}
          height={64}
          className="w-16 -mt-5"
        />
      </h2>

      {/* drops */}

      {isLoading ? (
        <DropSkeleton />
      ) : (
        <HoverEffect items={data?.data.slice(0, 16)} />
      )}

      {/* View All Airdrops Button */}
      <div className="flex justify-end mt-3 px-8 xl:px-0">
        <SeeMore name={" View All AIrdrops "} link={"/airdrops/all"} />
      </div>
    </motion.div>
  );
};

export default Drops;
