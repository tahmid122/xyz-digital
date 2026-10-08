import Link from "next/link";
import { Button } from "@/components/ui/button";
import { itSolutionsData } from "./it-solutions.data";

export function ItSolutionsContent() {
  const { title, description, ctaText, ctaHref } = itSolutionsData;

  return (
    <div className="flex flex-col justify-center space-y-5 sm:space-y-6 z-10 py-8 lg:py-16">
      {/* Main Heading */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white tracking-tight leading-[1.2]">
        {title}
      </h2>

      {/* Description Paragraph */}
      <p className="text-xs sm:text-sm lg:text-base text-slate-300/90 leading-relaxed max-w-xl font-normal">
        {description}
      </p>

      {/* CTA Button */}
      <div className="pt-2">
        <Button
          nativeButton={false}
          render={<Link href={ctaHref} />}
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 sm:px-7 py-2.5 h-11 text-sm rounded-md shadow-sm transition-colors cursor-pointer"
        >
          {ctaText}
        </Button>
      </div>
    </div>
  );
}
