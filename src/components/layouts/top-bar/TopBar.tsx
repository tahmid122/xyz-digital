import { TopBarLogo } from "./TopBarLogo";
import { TopBarPhone } from "./TopBarPhone";
import { TopBarSocials } from "./TopBarSocials";

export function TopBar() {
  return (
    <header className="w-full border-b border-border/40 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-2 sm:py-2.5 flex items-center justify-between">
        {/* Logo - hidden on mobile devices (< 768px) */}
        <TopBarLogo />

        {/* Contact Phone & Social Links - always visible */}
        <div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-4 sm:gap-6">
          <TopBarPhone />
          <div className="h-6 w-px bg-border/60 hidden sm:block" />
          <TopBarSocials />
        </div>
      </div>
    </header>
  );
}
