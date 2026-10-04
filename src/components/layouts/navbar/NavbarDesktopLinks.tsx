"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNavItems } from "@/config/navigation";
import { cn } from "@/lib/utils";

export function NavbarDesktopLinks() {
  const pathname = usePathname();

  return (
    <nav
      className="hidden md:flex items-center justify-center gap-5 lg:gap-8"
      aria-label="Main Navigation"
    >
      {mainNavItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.title}
            href={item.href}
            className={cn(
              "text-sm font-medium transition-colors py-1 whitespace-nowrap",
              isActive
                ? "text-primary font-semibold border-b-2 border-primary -mb-[2px]"
                : "text-foreground/80 hover:text-primary"
            )}
          >
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
}
