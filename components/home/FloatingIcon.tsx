/* eslint-disable @next/next/no-img-element */
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import Link from "next/link";

type TProps = {
  label: string;
  image: string;
  affiliateLink: string;
  index: number;
  mousePos: { x: number; y: number };
};

const FloatingIcon = ({
  label,
  image,
  affiliateLink,
  index,
  mousePos,
}: TProps) => {
  return (
    <motion.div
      animate={{
        x: mousePos.x, // Smoothly follow cursor
        y: mousePos.y,
      }}
      transition={{ type: "spring", stiffness: 80, damping: 50 }} // Smoother transition
      className={cn("absolute", {
        "top-3/4 left-32": index === 2,
        "top-24 right-32": index === 1,
        "top-56 left-32": index === 0,
        "bottom-56 right-32": index === 3,
      })}
    >
      <div className="flex items-center gap-1 group">
        <Link
          target="_blank"
          href={affiliateLink}
          className="p-1.5 border rounded-full border-brand/20 border-dotted rotate-12 blur-[5px] hover:blur-none duration-200 hover:scale-100 hover:rotate-0"
        >
          <div className="rounded-full p-1.5 border border-brand/25">
            <img
              src={image}
              alt=""
              className={cn("rounded-full", {
                "size-12": index === 0 || index === 3,
                "size-10": index === 1 || index === 2,
              })}
            />
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default FloatingIcon;
