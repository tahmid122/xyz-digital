import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { type ServicePackageItem } from "./types";

interface ServicePackageCardProps {
  service: ServicePackageItem;
}

export function ServicePackageCard({ service }: ServicePackageCardProps) {
  const currency = service.currency ?? "Tk.";

  return (
    <Card className="h-full border border-slate-200/80 bg-white shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded-xl overflow-hidden p-3 sm:p-4 flex flex-col justify-between">
      {/* Top Image Preview */}
      <div className="relative w-full aspect-[16/10] overflow-hidden rounded-lg bg-slate-100 shrink-0">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Card Content & Details */}
      <CardContent className="p-0 pt-4 flex flex-col items-center justify-between text-center flex-1 gap-4">
        {/* Title */}
        <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug line-clamp-2 min-h-[2.5rem] sm:min-h-[2.75rem] flex items-center justify-center">
          {service.title}
        </h3>

        {/* Package Count & Starting Price */}
        <div className="text-xs sm:text-sm text-slate-500 space-y-0.5 leading-tight">
          <p className="font-normal">
            {service.packageCount}{" "}
            {service.packageCount > 1 ? "Packages" : "Package"}
          </p>
          <p className="font-normal text-slate-600">
            Starts From {currency}
            {service.startingPrice.toLocaleString()}
          </p>
        </div>

        {/* View Packages Button */}
        <div className="w-full flex justify-center pt-1">
          <Button
            nativeButton={false}
            render={<Link href={service.href} />}
            className="w-full max-w-[160px] sm:max-w-[170px] bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold rounded-md py-2 h-9 shadow-xs transition-colors cursor-pointer"
          >
            View Packages
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
