import Airdrops from "@/components/airdrops/Airdrops";
import Categories from "@/components/airdrops/Categories";

const page = () => {
  return (
    <div className="wrapper  pt-3">
      <Categories />
      <Airdrops />
    </div>
  );
};

export default page;
