
// import Categories from "@/components/airdrops/Categories";
import Airdrops from "@/components/airdrops/Airdrops";
import Categories from "@/components/airdrops/Categories";
import CategoryMenu from "@/components/airdrops/CategoryMenu";


import CardSection from "@/components/ui/cardSection";

const page = () => {
  return (
    <div className="wrapper  pt-3">
      {/* <Categories /> */}
     <CategoryMenu></CategoryMenu>
      {/* <Airdrops /> */}
      <CardSection></CardSection>
    </div>
  );
};

export default page;
