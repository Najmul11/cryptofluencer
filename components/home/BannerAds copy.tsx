/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";
import { useRouter } from "next/navigation";
import Slider from "react-slick";
import { useRef, useState } from "react";
import { useGetAllBannersQuery } from "@/redux/api/banner";
import Link from "next/link";
import BannerSkeleton from "../skeleton/BannerSkeleton";

const BannerAds = () => {
  const router = useRouter();
  const [isSwiping, setIsSwiping] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const { data, isLoading } = useGetAllBannersQuery("");

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: () => setIsSwiping(true),
    afterChange: () => setTimeout(() => setIsSwiping(false), 100),
  };

  const handleTouchStart = (e: any) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: any) => {
    touchEndX.current = e.changedTouches[0].clientX;
    if (Math.abs(touchStartX.current - touchEndX.current) > 10) {
      setIsSwiping(true);
    }
    setTimeout(() => setIsSwiping(false), 300);
  };

  const handleClick = () => {
    if (!isSwiping) {
      router.push("/retro-bridge");
    }
  };

  return (
    <div className="">
      {isLoading ? (
        <BannerSkeleton />
      ) : (
        <>
          {" "}
          {data?.data?.length > 0 && (
            <Slider {...settings}>
              {data?.data.map((banner: any) => (
                <Link
                  href={banner?.project?.slug}
                  key={banner.id}
                  className="block cursor-pointer  px-2  "
                  onClick={handleClick}
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                >
                  <img
                    src={banner?.imageUrl}
                    alt="banner"
                    className="w-full aspect-[16/9] rounded-lg "
                  />
                </Link>
              ))}
            </Slider>
          )}
        </>
      )}
    </div>
  );
};

export default BannerAds;
