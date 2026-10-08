import { ItSolutionsContent } from "./ItSolutionsContent";
import { ItSolutionsImage } from "./ItSolutionsImage";

export function ItSolutionsBanner() {
  return (
    <section className="relative w-full bg-[#040812] overflow-hidden min-h-[440px] sm:min-h-[480px] lg:min-h-[520px] flex items-center">
      {/* Background Visual Layer */}
      <ItSolutionsImage />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 w-full">
        <div className="max-w-xl lg:max-w-2xl">
          <ItSolutionsContent />
        </div>
      </div>
    </section>
  );
}
