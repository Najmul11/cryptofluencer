/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

import { IconMail, IconMenu2, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useGetAllCategoriesQuery } from "@/redux/api/category";
import { cn } from "@/utils/cn";
import Search from "../airdrops/Search";
import { useParams, useRouter } from "next/navigation";
import { useGetAllBusinessQuery } from "@/redux/api/business";

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { slug } = useParams();

  const { data: businessData } = useGetAllBusinessQuery("");
  const { email } = businessData?.data || {};

  const router = useRouter();

  const [input, setInput] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim()) {
      router.push(`/airdrops/all?search=${encodeURIComponent(input.trim())}`);
    } else router.push(`/airdrops/all`);
  };

  const { data } = useGetAllCategoriesQuery("");

  return (
    <div className="md:hidden text-white">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(true)}
        className="block md:hidden ml-auto p-2 rounded-md  !text-white !border-0"
      >
        <IconMenu2 size={24} />
      </button>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 w-full h-screen  bg-midnightblue shadow-lg z-[12000] flex flex-col p-4"
          >
            <div className="flex justify-between">
              <Link
                href={"/"}
                className="leading-3 font-semibold flex items-center gap-2 rounded-md  relative "
              >
                <p>
                  <span className=" text-xl"> Drops </span>
                  <span className="text-brand text-xl ">Fi</span>
                </p>
              </Link>
              <button onClick={() => setMenuOpen(false)}>
                <IconX size={22} />
              </button>
            </div>

            <div className="my-6">
              <Search
                handleSearch={handleSearch}
                input={input}
                setInput={setInput}
                mobileMenu={true}
              />
            </div>

            <div className="flex flex-col gap-4 !h-[calc(100vh-320px)]  overflow-y-auto ">
              <div className="flex flex-wrap gap-4 overflow-hidden ">
                {data?.data?.length > 0 &&
                  data?.data.map((category: any) => (
                    <Link
                      onClick={() => setMenuOpen(false)}
                      key={category.slug}
                      href={`/airdrops/${category.slug}`}
                      className={cn(
                        "flex-center gap-2 group duration-200 px-3 py-1 bg-brand/20   text-sm font-medium rounded select-none",
                        {
                          "!text-brand ": slug === category.slug,
                          "hover:text-brand": slug !== category.slug,
                        }
                      )}
                    >
                      {category.name}
                    </Link>
                  ))}
              </div>
            </div>

            {/* Contact Button */}
            {email && (
              <Link
                href={`mailto:${email}`}
                className="flex justify-center mt-10 items-center gap-2 group h-[40px] text-sm px-4 rounded-md relative overflow-hidden font-medium hover:text-white duration-200  border border-neutral-400/50"
              >
                <IconMail />
                Contact
                <span className="absolute h-[300px] -translate-x-2 group-hover:translate-x-0 w-full bg-brand scale-x-[45%] rotate-6 group-hover:rotate-0 group-hover:scale-x-100 transition-transform duration-300 origin-left -z-10 block"></span>
              </Link>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
