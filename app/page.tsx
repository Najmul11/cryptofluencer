import Categories from "@/components/airdrops/Categories";
import { RecentDrops } from "@/components/home/RecentDrops";

const page = () => {
  return (
    <div className="wrapper  pt-3">
      <Categories />
      <RecentDrops />
    </div>
  );
};

export default page;
