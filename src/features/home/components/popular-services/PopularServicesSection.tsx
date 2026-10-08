import { PopularServicesHeading } from "./PopularServicesHeading";
import { PopularServicesGrid } from "./PopularServicesGrid";

export function PopularServicesSection() {
  return (
    <section className="w-full py-14 sm:py-20 bg-slate-50/40 border-t border-slate-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <PopularServicesHeading />
        <PopularServicesGrid />
      </div>
    </section>
  );
}
