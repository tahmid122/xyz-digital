import { NavbarLogo } from "./NavbarLogo";
import { NavbarDesktopLinks } from "./NavbarDesktopLinks";
import { NavbarMobileMenu } from "./NavbarMobileMenu";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur-md shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-14 sm:h-16 flex items-center justify-between md:justify-center">
        {/* Mobile View: Logo on left, Hamburger on right */}
        <NavbarLogo />
        <NavbarMobileMenu />

        {/* Desktop View: Horizontal navigation links (no dropdowns, no arrows) */}
        <NavbarDesktopLinks />
      </div>
    </nav>
  );
}
