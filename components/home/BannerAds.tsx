/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";
import { useRouter } from "next/navigation";
import { useGetAllBannersQuery } from "@/redux/api/banner";
import BannerSkeleton from "../skeleton/BannerSkeleton";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Link from "next/link";
import { baseUrl } from "@/utils/constant";

const BannerAds = () => {
  const router = useRouter();
  const { data, isLoading } = useGetAllBannersQuery("");

  return (
    <div className="w-full">
      {isLoading ? (
        <BannerSkeleton />
      ) : (
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          autoplay={{ delay: 4000 }}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            540: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {data?.data?.map((banner: any) => (
            <SwiperSlide key={banner.id}>
              <Link href={banner?.project?.slug} className="">
                <img
                  src={new URL(banner.imageUrl, baseUrl).toString()}
                  alt={banner.title || "Banner Ad"}
                  className="w-full h-auto object-cover rounded-md cursor-pointer aspect-[16/9]"
                  onClick={() => router.push(banner.redirectUrl)}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default BannerAds;
