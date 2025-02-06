import AngledLines from "@/components/ui/AngledLines";
import { Drops } from "@/components/home/Drops";
import Hero from "@/components/home/Hero";

const page = () => {
  return (
    <div className="  max-w-screen-xl mx-auto">
      <div className="relative h-screen">
        <AngledLines />

        <Hero />
      </div>

      <Drops />
    </div>
  );
};

export default page;
