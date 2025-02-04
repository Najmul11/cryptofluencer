/* eslint-disable @next/next/no-img-element */
import AngledLines from "@/components/ui/AngledLines";

const page = () => {
  return (
    <div className=" flex min-h-screen gap-5 max-w-[2400px] mx-auto p-5">
      {/* ######  left  */}
      <div className=" w-3/4 rounded-xl  border  relative overflow-hidden flex-center border-neutral-200/80">
        <AngledLines />

        <div className="place-items-center z-10 pt-20">
          <h2 className="text-6xl text-center font-semibold">
            Compho Airdrops
          </h2>

          <div className="relative w-[50%]  aspect-[16/9] z-10  rounded-2xl bg-black/20 backdrop-blur-sm border border-white/10 p-2">
            {/* Image container */}
            <div className="relative rounded-xl overflow-hidden aspect-video">
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                alt="Placeholder"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* #### right column */}
      <div className="w-1/4 border rounded-xl  border-neutral-200/80"></div>
    </div>
  );
};

export default page;

//**
//  */
