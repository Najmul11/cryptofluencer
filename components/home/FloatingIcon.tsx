/* eslint-disable @next/next/no-img-element */
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import Link from "next/link";

type TProps = {
  label: string;
  position: string;
};

const FloatingIcon = ({ label, position }: TProps) => {
  return (
    <motion.div
      whileHover={{ x: 10 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn("absolute   ", position)}
    >
      <div className="flex  items-center gap-1 group">
        <Link
          href={"/"}
          className="p-1.5 border  rounded-full border-brand/20 border-dotted rotate-12  blur-[5px] hover:blur-none duration-200    hover:scale-100 hover:rotate-45  "
        >
          <div className="rounded-full p-1.5 border border-brand/25">
            <img src="/logo.png" alt="" className=" rounded-full size-14  " />
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
