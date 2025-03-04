import React from "react";

const CardGrids = () => {
  return (
    <div className="pointer-events-none opacity-">
      <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
        <svg
          aria-hidden="true"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-brand/[0.04] stroke-black/5"
        >
          <defs>
            <pattern
              id="pattern1"
              width="72"
              height="56"
              patternUnits="userSpaceOnUse"
              x="50%"
              y="16"
            >
              <path d="M.5 56V.5H72" fill="none"></path>
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            strokeWidth="0"
            fill="url(#pattern1)"
          ></rect>
          <svg x="50%" y="16" className="overflow-visible">
            <rect strokeWidth="0" width="73" height="57" x="0" y="56"></rect>
            <rect strokeWidth="0" width="73" height="57" x="72" y="168"></rect>
          </svg>
        </svg>
      </div>
      <div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D7EDEA] to-brand/30 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          maskImage:
            "radial-gradient(300px at 409.5px 128px, white, transparent)",
        }}
      ></div>
      <div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
        style={{
          maskImage:
            "radial-gradient(300px at 409.5px 128px, white, transparent)",
        }}
      >
        <svg
          aria-hidden="true"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70"
        >
          <defs>
            <pattern
              id="pattern2"
              width="72"
              height="56"
              patternUnits="userSpaceOnUse"
              x="50%"
              y="16"
            >
              <path d="M.5 56V.5H72" fill="none"></path>
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            strokeWidth="0"
            fill="url(#pattern2)"
          ></rect>
          <svg x="50%" y="16" className="overflow-visible">
            <rect strokeWidth="0" width="73" height="57" x="0" y="56"></rect>
            <rect strokeWidth="0" width="73" height="57" x="72" y="168"></rect>
          </svg>
        </svg>
      </div>
    </div>
  );
};

export default CardGrids;
