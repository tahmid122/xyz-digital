import { HeroHeading } from "./HeroHeading";
import { HeroSearch } from "./HeroSearch";
import { HeroTags } from "./HeroTags";
import { HeroIllustration } from "./HeroIllustration";

export function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
      {/* Decorative ambient background accents */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 size-[500px] rounded-full border border-dashed border-slate-200/80 -z-10 pointer-events-none hidden lg:block" />
      <div className="absolute top-12 left-6 size-48 rounded-full bg-slate-100/50 blur-2xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 size-64 rounded-full bg-slate-100/60 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Heading, Search & Tags */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8 z-10">
            <HeroHeading />
            <HeroSearch />
            <HeroTags />
          </div>

          {/* Right Column: Illustration */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
