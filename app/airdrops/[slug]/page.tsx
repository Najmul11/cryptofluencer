
import Categories from "@/components/airdrops/Categories";
import CardSection from "@/components/ui/cardSection";

const page = () => {
  return (
    <div className="wrapper  pt-3">
      <Categories />
      {/* <Airdrops /> */}
      <CardSection></CardSection>
    </div>
  );
};

export default page;
