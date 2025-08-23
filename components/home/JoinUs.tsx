/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";
import {
  IconAffiliate,
  IconBrandTelegram,
  IconBrandWhatsapp,
  IconBrandX,
  IconBrandYoutube,
  IconHeartHandshake,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

import Link from "next/link";
import JoinusSkeleton from "../skeleton/JoinusSkeleton";
import { useGetAllAffiliatesQuery } from "@/redux/api/affiliate";
import {
  useGetAllBusinessQuery,
  useGetMoreBusinessQuery,
} from "@/redux/api/business";
import { ReactNode } from "react";
import Skeleton from "react-loading-skeleton";
import JoinUsModal from "./JoinUsModal";
import { cn } from "@/utils/cn";
import { baseUrl } from "@/utils/constant";
const JoinUs = () => {
  const { data, isLoading } = useGetAllAffiliatesQuery("");
  const { data: communities } = useGetMoreBusinessQuery("");

  const animationVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={animationVariants}
      >
        <h2 className="text-3xl lg:text-4xl  xl:text-5xl font-semibold flex items-center gap-5">
          Join Us <IconHeartHandshake size={80} className="text-brand" />
        </h2>

        <div className="mt-10">
          <PrimaryPlatforms />

          <div className="grid grid-cols-2  smOne:grid-cols-3 md:grid-cols-4 lg xlOne:grid-cols-6 gap-5 mt-8">
            {communities?.data.length > 0 &&
              communities?.data.slice(0, 18).map((community: any) => (
                <Link
                  key={community?.id}
                  href={community?.link}
                  target="_blank"
                  className="md:flex justify-center items-center gap-2 group h-[42px] text-sm px-4 rounded-md relative overflow-hidden font-medium hover:text-white duration-200 border border-brand hidden "
                >
                  {community.logoURL && (
                    <img
                      src={baseUrl + community.logoURL}
                      className="size-6 rounded"
                      alt=""
                    />
                  )}

                  {community?.orgName.slice(0, 10)}
                  <span className="absolute h-[300px] -translate-x-2 group-hover:translate-x-0 w-full bg-brand scale-x-[20%] rotate-6 group-hover:rotate-0 group-hover:scale-x-100 transition-transform duration-300 origin-left -z-10 block"></span>
                </Link>
              ))}
          </div>

          {/* links and affiliates */}

          {isLoading ? (
            <JoinusSkeleton />
          ) : (
            <>
              <h2 className="text-3xl lg:text-4xl  xl:text-5xl font-semibold flex items-center gap-5 pt-20">
                Affiliates
                <IconAffiliate size={80} className="text-brand" />
              </h2>
              {data?.data.length > 0 && (
                <div className="grid grid-cols-2  smOne:grid-cols-3 md:grid-cols-4 lg xlOne:grid-cols-6 gap-5 mt-8">
                  {data?.data?.slice(0, 12).map((affiliate: any) => (
                    <Link
                      key={affiliate?.id}
                      href={affiliate?.link}
                      target="_blank"
                      className="flex-center gap-2 group duration-200  hover:text-brand  px-6  py-2 bg-brand/20  text-sm font-medium rounded select-none"
                    >
                      <img
                        src={affiliate?.logoURL}
                        alt=""
                        className="w-6 rounded"
                      />
                      {affiliate?.label}
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}

          {data?.data.length > 12 && <JoinUsModal data={data?.data} />}
        </div>
      </motion.div>
    </div>
  );
};

export default JoinUs;

const PrimaryPlatforms = () => {
  const { data: businessData, isLoading: businessDataLoading } =
    useGetAllBusinessQuery("");
  const { twitter, youtube, telegram, whatsappChannel } =
    businessData?.data || {};
  return (
    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {businessDataLoading ? (
        <>
          <Skeleton className="h-[70px]" />
          <Skeleton className="h-[70px]" />
          <Skeleton className="h-[70px]" />
          <Skeleton className="h-[70px]" />
        </>
      ) : (
        <>
          {youtube && (
            <PrimaryPlatform
              color="#ef4444"
              href={youtube}
              icon={
                <IconBrandYoutube
                  size={30}
                  className="fill-red-500 text-white"
                />
              }
              label="Youtube"
            />
          )}
          {twitter && (
            <PrimaryPlatform
              color="#fff"
              href={twitter}
              icon={<IconBrandX size={30} className="" />}
              label="Twitter"
              className="hover:text-black"
            />
          )}
          {telegram && (
            <PrimaryPlatform
              color="#39AFD9"
              href={telegram}
              icon={
                <IconBrandTelegram
                  size={30}
                  className="fill-[#39AFD9] text-white"
                />
              }
              label="Telegram"
            />
          )}
          {whatsappChannel && (
            <PrimaryPlatform
              color="#16a34a"
              href={whatsappChannel}
              icon={<IconBrandWhatsapp size={30} className="fill-green-600" />}
              label="Whatsapp"
            />
          )}
        </>
      )}
    </div>
  );
};

type TPlatform = {
  icon: ReactNode;
  label: string;
  href: string;
  color: string;
  className?: string;
};

const PrimaryPlatform = ({
  color,
  href,
  icon,
  label,
  className,
}: TPlatform) => {
  return (
    <Link
      target="_blank"
      href={href}
      style={{ borderColor: color }}
      className={cn(
        "py-2 md:py-3  border-2   hover:text-white group duration-200 rounded-lg flex-center gap-2 text-xl font-semibold relative overflow-hidden",
        className
      )}
    >
      {icon}
      {label}

      {/* Background transition effect */}
      <span
        style={{ background: color }}
        className="absolute h-[300px] -translate-x-2 group-hover:translate-x-0 w-full scale-x-[20%] rotate-6 group-hover:rotate-0 group-hover:scale-x-100 transition-transform duration-300 origin-left -z-10 block"
      ></span>
    </Link>
  );
};
