import BannerAds from "@/components/home/BannerAds";
import HotDrops from "@/components/home/HotDrops";
import { RecentDrops } from "@/components/home/RecentDrops";

const page = () => {
  return (
    <div className="wrapper  pt-3">
      <BannerAds />
      <HotDrops />
      <RecentDrops />
    </div>
  );
};

export default page;
