import BannerAds from "@/components/home/BannerAds";
import HotDrops from "@/components/home/HotDrops";
import JoinUs from "@/components/home/JoinUs";

import CardSection from "@/components/home/cardSection";

const page = () => {
  return (
    <div className="wrapper  pt-3">
      <BannerAds />
      <HotDrops />
      <CardSection></CardSection>
      <JoinUs />
    </div>
  );
};

export default page;
