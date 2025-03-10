import BannerAds from "@/components/home/BannerAds";
import HotDrops from "@/components/home/HotDrops";
import JoinUs from "@/components/home/JoinUs";
import { RecentDrops } from "@/components/home/RecentDrops";

const page = () => {
  return (
    <div className="wrapper  pt-3">
      <BannerAds />
      <HotDrops />
      <RecentDrops />
      <JoinUs />
    </div>
  );
};

export default page;
