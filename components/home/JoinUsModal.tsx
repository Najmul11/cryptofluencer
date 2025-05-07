/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { IconArrowRight, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { MouseEvent, useState } from "react";

const JoinUsModal = ({ data }: { data: any }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };
  return (
    <div className="mt-10">
      <div className="flex justify-end mt-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex-center gap-1 group duration-200  p-1 hover:text-brand hover:bg-brand/5 text-white bg-brand px-6  py-2 text-sm font-medium rounded-xl select-none"
        >
          See More
          <IconArrowRight
            stroke={2}
            size={17}
            className="group-hover:translate-x-1 duration-200 group-hover:text-brand"
          />
        </button>
      </div>

      {/* modal ============================ */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            onClick={handleOverlayClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="h-screen bg-gray-900/50 backdrop-blur-md fixed w-full inset-0 flex justify-center items-center z-[10000]"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="w-full max-w-screen-lg  p-6 rounded-xl shadow-sm bg-gradient-to-br from-midnightblue to-midnight relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <p className="font-medium text-xl">Join us </p>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-3  relative z-[100000]  py-1 rounded-md text-gray-400 hover:text-white  duration-300 !text-2xl  cursor-pointer"
                >
                  <IconX />
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6  gap-5 mt-8">
                {data?.map((affiliate: any) => (
                  <Link
                    target="_blank"
                    key={affiliate?.id}
                    href={affiliate?.link}
                    className="flex-center gap-2 group duration-200  hover:text-brand  px-6  py-2 bg-brand/5 border border-brand border-dashed text-sm font-medium rounded select-none"
                  >
                    <img
                      src={affiliate?.logoURL}
                      alt=""
                      className="w-6 rounded"
                    />
                    {affiliate?.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default JoinUsModal;
