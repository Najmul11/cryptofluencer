/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/utils/cn";
import { IconSearch } from "@tabler/icons-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

type TProps = {
  mobileMenu?: boolean;
};

const Search = ({ mobileMenu = false }: TProps) => {
  const searchParams = useSearchParams();

  const search = searchParams.get("search") || "";

  const [input, setInput] = useState(search || "");

  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim()) {
      router.push(`/airdrops/all?search=${encodeURIComponent(input.trim())}`);
    } else router.push(`/airdrops/all`);
  };
  return (
    <form
      onSubmit={handleSearch}
      className={cn("w-full flex", { " justify-end": !mobileMenu })}
    >
      <div
        className={cn("relative   w-full", {
          "w-full": mobileMenu,
        })}
      >
        <input
          type="text"
          placeholder="Search projects"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={cn(
            "py-2 text-sm  px-2 w-full rounded focus:border-transparent focus:outline-none  focus:ring-2 focus:!ring-brand bg-brand/20",
            { "w-full": mobileMenu }
          )}
        />
        <button type="submit">
          <IconSearch
            size={17}
            className="text-brand/50 absolute top-1/2 right-2 -translate-y-1/2"
          />
        </button>
      </div>
    </form>
  );
};

export default Search;
