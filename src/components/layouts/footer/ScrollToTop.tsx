"use client";

import { CornerRightUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ScrollToTop() {
  const handleScrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleScrollToTop}
      aria-label="Scroll to top"
      className="size-9 rounded-sm border-2 border-red-500 bg-transparent text-white hover:bg-red-500/20 hover:border-red-400 hover:text-white transition-all shadow-sm"
    >
      <CornerRightUp className="size-4 text-white stroke-[2.5]" />
    </Button>
  );
}
