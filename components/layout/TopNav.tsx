/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useGetAllBusinessQuery } from "@/redux/api/business";
import { cn } from "@/utils/cn";
import { IconMail } from "@tabler/icons-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import MobileMenu from "./MobileMenu";

const TopNav = () => {
  const { data: businessData } = useGetAllBusinessQuery("");
  const { email } = businessData?.data || {};

  const [prices, setPrices] = useState<any>({});

  const coinMapping: { [key: string]: string } = {
    bitcoin: "BTC",
    ethereum: "ETH",
    solana: "SOL",
    bittensor: "TAO",
    binancecoin: "BNB",
    optimism: "OP",
    dogecoin: "DOGE",
    "bitget-token": "BGB",
    aptos: "APT",
    sui: "SUI",
    tron: "TRX",
  };

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,bittensor,binancecoin,bitget-token,tron,dogecoin,sui,optimism&vs_currencies=usd&include_24hr_change=true"
        );
        const data = await res.json();
        setPrices(data);
      } catch (error) {
        console.error("Error fetching crypto prices", error);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className=" sticky top-0 !z-[11000] bg-[#0b0c10] shadow-sm">
      <div className=" flex gap-5  wrapper items-center  py-3">
        <Link
          href={"/"}
          className="leading-3 font-semibold flex items-center gap-2 rounded-md  relative "
        >
          <p>
            <span className=" text-xl"> Drops </span>
            <span className="text-brand text-xl ">Fi</span>
          </p>
        </Link>

        {/* #### price update marque #### */}

        <div className="flex-grow  text-center w-[calc(100%-308px)] ">
          <div className=" relative z-[100]">
            <Marquee className="overflow-y-hidden  py-2" speed={40}>
              {Object.entries(prices).map(
                ([coin, { usd, usd_24h_change }]: any) => (
                  <div
                    key={coin}
                    className="flex items-center gap-10 mx-4  text-[11px] text-black"
                  >
                    <p className="flex gap-2">
                      <span>{coinMapping[coin]} </span>
                      <span>
                        <span className="italic">$</span> {usd}
                      </span>

                      <span
                        className={cn(
                          {
                            "text-red-600 ": usd_24h_change < 0,
                            "text-green-600 ": usd_24h_change > 0,
                          },
                          "font-medium "
                        )}
                      >
                        {usd_24h_change.toFixed(2)}%
                      </span>
                    </p>
                  </div>
                )
              )}
              {Object.entries(prices).map(
                ([coin, { usd, usd_24h_change }]: any) => (
                  <div
                    key={coin}
                    className="flex items-center gap-10 mx-4  text-[11px] text-black"
                  >
                    <p className="flex gap-2">
                      <span>{coinMapping[coin]} </span>
                      <span>
                        <span className="italic">$</span> {usd}
                      </span>

                      <span
                        className={cn(
                          {
                            "text-red-600 ": usd_24h_change < 0,
                            "text-green-600 ": usd_24h_change > 0,
                          },
                          "font-medium "
                        )}
                      >
                        {usd_24h_change.toFixed(2)}%
                      </span>
                    </p>
                  </div>
                )
              )}
            </Marquee>

            <div className="h-full absolute w-24  bg-gradient-to-r from-neutral-100 to-transparent top-0 left-0  z-[100]"></div>
            <div className="h-full absolute w-24  bg-gradient-to-l from-neutral-100 to-transparent top-0 right-0  z-[100]"></div>
          </div>
        </div>

        {/* Contact Button */}
        {email && (
          <Link
            href={`mailto:${email}`}
            className="md:flex justify-center items-center gap-2 group h-[40px] text-sm px-4 rounded-md relative overflow-hidden font-medium hover:text-white duration-200 border hidden "
          >
            <IconMail />
            Contact
            <span className="absolute h-[300px] -translate-x-2 group-hover:translate-x-0 w-full bg-brand scale-x-[45%] rotate-6 group-hover:rotate-0 group-hover:scale-x-100 transition-transform duration-300 origin-left -z-10 block"></span>
          </Link>
        )}

        <MobileMenu />
      </div>
    </nav>
  );
};

export default TopNav;
