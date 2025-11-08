"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const ScrollToTop = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Scroll smoothly to top whenever route/path changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null; // no UI
};

export default ScrollToTop;
