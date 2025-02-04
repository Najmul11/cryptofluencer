import AngledLines from "@/components/ui/AngledLines";

const page = () => {
  return (
    <div className="p-5 flex min-h-screen gap-5 max-w-[2400px] mx-auto">
      <div className=" w-3/4 rounded-xl border border-neutral-200/80 p-5 relative overflow-hidden">
        <AngledLines />
        <img src="logo.jpg" alt="" className="rounded-full size-12" />
      </div>
      <div className="w-1/4 rounded-xl border border-neutral-200/80"></div>
    </div>
  );
};

export default page;

//**
//  */
