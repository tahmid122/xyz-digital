import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ServicePackageCard } from "./ServicePackageCard";
import { type ServiceCategorySectionData } from "./types";

interface ServiceCategorySectionProps {
  data: ServiceCategorySectionData;
  viewAllHref?: string;
  className?: string;
}

export function ServiceCategorySection({
  data,
  viewAllHref,
  className = "",
}: ServiceCategorySectionProps) {
  const { title, services } = data;

  return (
    <section className={`w-full py-12 sm:py-16 bg-white border-t border-slate-100 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 sm:mb-12 gap-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 text-center sm:text-left">
            {title}
          </h2>

          {viewAllHref && (
            <Link
              href={viewAllHref}
              className="text-xs sm:text-sm font-semibold text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1 group transition-colors"
            >
              <span>View All</span>
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>

        {/* Responsive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-7">
          {services.map((service) => (
            <ServicePackageCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
