"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 p-2.5 rounded-md bg-[#11100F] text-[#F4EBDD] border border-[#2D2724] transition-colors duration-150 hover:bg-[#641C2D] hover:border-[#641C2D] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#641C2D] cursor-pointer shadow-sm"
    >
      <ArrowUp size={18} className="stroke-[2.5]" />
      <span className="sr-only">Back to top</span>
    </button>
  );
}
