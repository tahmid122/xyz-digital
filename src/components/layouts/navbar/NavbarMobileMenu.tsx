"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { mainNavItems, topBarConfig } from "@/config/navigation";
import { cn } from "@/lib/utils";

export function NavbarMobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden flex items-center">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          render={
            <Button
              variant="ghost"
              size="icon"
              aria-label="Open mobile menu"
              className="size-9 rounded-lg hover:bg-muted text-foreground"
            />
          }
        >
          <Menu className="size-5" />
        </SheetTrigger>

        <SheetContent
          side="bottom"
          className="rounded-t-2xl max-h-[80vh] overflow-y-auto p-0 border-t border-border/40 bg-background"
        >
          {/* Sheet Header */}
          <SheetHeader className="px-6 pt-5 pb-3 border-b border-border/40">
            <SheetTitle className="text-base font-semibold text-foreground text-left">
              Menu & Services
            </SheetTitle>
          </SheetHeader>

          {/* Nav Items List */}
          <nav className="flex flex-col py-2 px-4" aria-label="Mobile Navigation">
            {mainNavItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center justify-between py-3 px-3 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-foreground/80 hover:bg-muted hover:text-foreground"
                  )}
                >
                  <span>{item.title}</span>
                  <ChevronRight className="size-4 text-muted-foreground/60" />
                </Link>
              );
            })}
          </nav>

          {/* Quick Contact Info */}
          <div className="mt-2 p-4 mx-4 mb-5 rounded-xl bg-muted/50 border border-border/40 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[11px] text-muted-foreground">
                Need immediate help?
              </span>
              <a
                href={`tel:${topBarConfig.contact.phone}`}
                className="text-sm font-semibold text-primary"
              >
                {topBarConfig.contact.phone}
              </a>
            </div>
            <Button
              size="sm"
              nativeButton={false}
              render={<a href={`tel:${topBarConfig.contact.phone}`} />}
              className="rounded-lg"
            >
              Call Now
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
