/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const HotDrops = () => {
  return (
    <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-2">
      {links.map((link, index) => (
        <Link
          key={link.label}
          href={link.path}
          className="py-4 border-2 border-brand hover:text-white group duration-200 rounded-lg flex justify-center items-center text-lg md:text-xl font-semibold relative overflow-hidden"
        >
          {index !== 3 && <span className="text-2xl">🔥</span>} {link.label}
          {/* Background transition effect */}
          <span className="absolute h-[300px] -translate-x-2 group-hover:translate-x-0 w-full bg-brand md:scale-x-[15%] scale-x-[30%] rotate-6 group-hover:rotate-0 group-hover:scale-x-100 transition-transform duration-300 origin-left -z-10 block"></span>
        </Link>
      ))}
    </div>
  );
};

export default HotDrops;

const links = [
  {
    label: "AI",
    path: "/airdrops/ai",
  },
  {
    label: "Depin",
    path: "/airdrops/depin",
  },
  {
    label: "Defi",
    path: "/airdrops/defi",
  },
  {
    label: "View All",
    path: "/airdrops/all",
  },
];
