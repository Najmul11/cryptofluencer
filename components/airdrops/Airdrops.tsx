/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
/* eslint-disable @next/next/no-img-element */
import CardGrids from "../ui/CardGrids";
import Link from "next/link";
import { IconTrendingUp2 } from "@tabler/icons-react";
import ReactPaginate from "react-paginate";

const Airdrops = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-8 mt-10 ">
        {drops.map((drop) => (
          <Link
            href={{
              pathname: `/${drop.slug}`,
            }}
            key={drop.title}
            className="relative group border rounded-2xl border-neutral-200/60 p-6"
          >
            <CardGrids />

            <div className="flex flex-col gap-3 relative !z-[1000] ">
              <img src={drop.logo} alt="" className="size-12 rounded-xl" />

              <p className="font-semibold text-[16px]">{drop.title}</p>
              <p className="text-[15px] line-clamp-2">{drop.description}</p>
            </div>

            <div className="flex justify-end opacity-30 group-hover:opacity-100 group-hover:translate-x-1 duration-200">
              <IconTrendingUp2 />
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center my-16">
        <ReactPaginate
          previousLabel={"Prev"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={5}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={() => {}}
          containerClassName={"flex gap-2  p-2 rounded-md items-center gap-5"}
          activeClassName={"bg-brand px-2 rounded"}
          previousClassName={"px-2 py-1 border rounded-md "}
          nextClassName={"px-2 py-1 border rounded-md"}
          disabledClassName={"opacity-50"}
        />
      </div>
    </div>
  );
};

export default Airdrops;

export const drops = [
  {
    id: 1,
    title: "Phyt.fun ",
    description: "Participate in the testnet and claim your NFT",
    logo: "/assets/phyt.jpg",
    slug: "phyt.fun-",
    category: "NFT",
  },
  {
    id: 2,
    title: "Retro Bridge",
    description: "Join the testnet and receive a free NFT",
    logo: "/assets/retro.png",
    slug: "retro-bridge",
    category: "DeFi",
  },
  {
    id: 3,
    title: "Uplink",
    description: "Test the network and get your NFT",
    logo: "/assets/uplink.jpg",
    slug: "uplink",
    category: "Infrastructure",
  },
  {
    id: 4,
    title: "Phyt.fun ",
    description: "Participate in the testnet and claim your NFT",
    logo: "/assets/phyt.jpg",
    slug: "phyt.fun-",
    category: "Gaming",
  },
  {
    id: 5,
    title: "Retro Bridge",
    description: "Join the testnet and receive a free NFT",
    logo: "/assets/retro.png",
    slug: "retro-bridge",
    category: "Social",
  },
  {
    id: 6,
    title: "Uplink",
    description: "Test the network and get your NFT",
    logo: "/assets/uplink.jpg",
    slug: "uplink",
    category: "Identity",
  },
  {
    id: 7,
    title: "Retro Bridge",
    description: "Join the testnet and receive a free NFT",
    logo: "/assets/retro.png",
    slug: "retro-bridge",
    category: "Metaverse",
  },
  {
    id: 8,
    title: "Uplink",
    description: "Test the network and get your NFT",
    logo: "/assets/uplink.jpg",
    slug: "uplink",
    category: "Data",
  },
];
