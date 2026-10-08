import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { mainNavItems } from "@/config/navigation";

export function HeroTags() {
  return (
    <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 max-w-xl">
      {mainNavItems.map((item) => (
        <Badge
          key={item.title}
          variant="secondary"
          render={<Link href={item.href} />}
          className="h-auto rounded-full py-1.5 px-3.5 sm:px-4 text-xs sm:text-sm font-medium bg-slate-100/90 text-slate-700 border border-slate-200/60 hover:bg-slate-200 hover:text-slate-900 transition-all cursor-pointer shadow-xs"
        >
          {item.title}
        </Badge>
      ))}
    </div>
  );
}
