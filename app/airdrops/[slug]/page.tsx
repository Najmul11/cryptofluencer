import Airdrops from "@/components/airdrops/Airdrops";
import Sider from "@/components/airdrops/Sider";

const page = () => {
  return (
    <div className="wrapper  pt-3">
      <Sider />
      <Airdrops />
    </div>
  );
};

export default page;
