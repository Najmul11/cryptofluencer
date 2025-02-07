/* eslint-disable @next/next/no-img-element */
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import Link from "next/link";

type TProps = {
  label: string;
  image: string;
  affiliateLink: string;
  index: number;
};

const FloatingIcon = ({ label, image, affiliateLink, index }: TProps) => {
  return (
    <motion.div
      whileHover={{ x: 10 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn("absolute", {
        "top-3/4 left-32": index === 2,
        "top-24 right-32": index === 1,
        "top-56 left-32": index === 0,
        "bottom-56 right-32": index === 3,
      })}
    >
      <div className="flex  items-center gap-1 group">
        <Link
          target="_blank"
          href={affiliateLink}
          className="p-1.5 border  rounded-full border-brand/20 border-dotted rotate-12  blur-[5px] hover:blur-none duration-200    hover:scale-100 hover:rotate-0  "
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

        {/* motion here */}
        <motion.p className="text-sm opacity-0 font-poppins font-medium text-neutral-600 group-hover:translate-x-1 group-hover:opacity-100 duration-300">
          {label}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default FloatingIcon;
