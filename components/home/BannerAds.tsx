/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";
import { useRouter } from "next/navigation";
import Slider from "react-slick";
import { useRef, useState } from "react";

const BannerAds = () => {
  const router = useRouter();
  const [isSwiping, setIsSwiping] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const images = [
    "/banner/1.png",
    "/banner/2.jpg",
    "/banner/3.jpg",
    "/banner/4.jpg",
    "/banner/1.png",
    "/banner/2.jpg",
    "/banner/3.jpg",
    "/banner/4.jpg",
  ];

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
    <div className="px-2">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            className="block cursor-pointer pr-4"
            onClick={handleClick}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <img src={image} alt="banner" className="w-full aspect-[16/9] " />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerAds;
