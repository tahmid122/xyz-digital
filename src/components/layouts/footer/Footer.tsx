import { footerConfig } from "@/config/navigation";
import { FooterColumn } from "./FooterColumn";
import { FooterContact } from "./FooterContact";
import { FooterSocials } from "./FooterSocials";
import { FooterCopyright } from "./FooterCopyright";
import { ScrollToTop } from "./ScrollToTop";

export function Footer() {
  return (
    <footer className="w-full bg-[#031B33] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-10">
        {/* Top 4 Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-16">
          <FooterColumn
            title={footerConfig.services.title}
            items={footerConfig.services.items}
          />

          <FooterColumn
            title={footerConfig.company.title}
            items={footerConfig.company.items}
          />

          <FooterColumn
            title={footerConfig.support.title}
            items={footerConfig.support.items}
          />

          <FooterContact office={footerConfig.office} />
        </div>

        {/* Bottom Bar: Socials and Copyright */}
        <div className="pt-6 border-t border-white/5 flex flex-col items-center justify-center gap-4">
          <FooterSocials socials={footerConfig.socials} />

          <FooterCopyright
            year={footerConfig.copyright.year}
            developer={footerConfig.copyright.developer}
          />
        </div>
      </div>

      {/* Viewport-fixed Back to Top floating button */}
      <ScrollToTop />
    </footer>
  );
}
