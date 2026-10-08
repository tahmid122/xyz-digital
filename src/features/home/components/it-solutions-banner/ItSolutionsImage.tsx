import Image from "next/image";
import { itSolutionsData } from "./it-solutions.data";

export function ItSolutionsImage() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
      {/* Background team & office scene with smiling professional */}
      <Image
        src={itSolutionsData.image}
        alt="Xyz Digital IT Solutions Team"
        fill
        priority
        className="object-cover object-[75%_center] md:object-[68%_center] lg:object-center brightness-[0.9] lg:brightness-100"
        sizes="100vw"
      />

      {/* Dark gradient fade from left to right:
          Solid dark on the left for pristine text readability,
          feathering out to transparent on the right to showcase the professional */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#040812] via-[#040812]/95 md:via-[#040812]/85 lg:via-[#040812]/75 to-transparent md:w-[65%] lg:w-[60%]" />

      {/* Mobile tint overlay to guarantee maximum legibility */}
      <div className="absolute inset-0 bg-[#040812]/65 md:hidden" />

      {/* Smooth top and bottom edge blends */}
      <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#040812] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#040812] to-transparent" />
    </div>
  );
}
