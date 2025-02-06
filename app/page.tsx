import AngledLines from "@/components/ui/AngledLines";
import { Drops } from "@/components/home/Drops";

const page = () => {
  return (
    <div className=" min-h-screen max-w-screen-xl mx-auto">
      <div className="relative h-screen">
        <AngledLines />
      </div>

      <Drops />
    </div>
  );
};

export default page;
