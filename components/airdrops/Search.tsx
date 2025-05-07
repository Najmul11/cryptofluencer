/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/utils/cn";
import { IconSearch } from "@tabler/icons-react";
import React from "react";

type TProps = {
  handleSearch: any;
  input: string;
  setInput: (e: any) => void;
  mobileMenu?: boolean;
};

const Search = ({
  handleSearch,
  input,
  setInput,
  mobileMenu = false,
}: TProps) => {
  return (
    <form
      onSubmit={handleSearch}
      className={cn("w-full flex", { " justify-end": !mobileMenu })}
    >
      <div
        className={cn("relative   ", {
          "w-full": mobileMenu,
        })}
      >
        <input
          type="text"
          placeholder="Search projects"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={cn(
            "py-2 text-sm bg-transparent px-2  rounded border focus:border-transparent focus:outline-none border-brand border-dashed focus:ring-2 focus:!ring-brand",
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
