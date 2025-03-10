import Categories from "@/components/airdrops/Categories";
import BannerAds from "@/components/home/BannerAds";
import { RecentDrops } from "@/components/home/RecentDrops";

const page = () => {
  return (
    <div className="wrapper  pt-3">
      <BannerAds />
      <Categories />
      <RecentDrops />
    </div>
  );
};

export default page;
