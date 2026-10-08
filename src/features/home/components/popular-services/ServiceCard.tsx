import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { type PopularServiceItem } from "./services.data";

interface ServiceCardProps {
  service: PopularServiceItem;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link
      href={service.href}
      className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl"
    >
      <Card className="h-full border border-slate-100 bg-white shadow-xs hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 rounded-2xl overflow-hidden p-0 gap-0">
        {/* Card Image */}
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-100">
          <Image
            src={service.image}
            alt={service.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Card Content: Title & Action Link */}
        <CardContent className="flex flex-col items-center justify-center text-center p-5 space-y-1.5">
          <h3 className="text-base sm:text-lg font-bold text-slate-800 group-hover:text-primary transition-colors">
            {service.title}
          </h3>
          <span className="text-xs sm:text-sm font-semibold text-emerald-600 group-hover:text-emerald-700 transition-colors inline-flex items-center">
            Browse Packages&raquo;
          </span>
        </CardContent>
      </Card>
    </Link>
  );
}
