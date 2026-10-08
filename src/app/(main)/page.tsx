import { HeroBanner } from "@/features/home/components/hero-banner";
import { PopularServicesSection } from "@/features/home/components/popular-services";
import { VideoShowcaseSection } from "@/features/home/components/video-showcase";
import {
  ServiceCategorySection,
  graphicsServicesSectionData,
  webServicesSectionData,
} from "@/features/home/components/service-category-showcase";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <PopularServicesSection />
      <VideoShowcaseSection />

      {/* Dynamic Category Showcase Rendered with Dynamic Data */}
      <ServiceCategorySection
        data={graphicsServicesSectionData}
        viewAllHref="/services/graphics"
      />

      {/* Rendered a second time dynamically with Web & Software services data */}
      <ServiceCategorySection
        data={webServicesSectionData}
        viewAllHref="/services/web-software"
        className="bg-slate-50/50"
      />
    </div>
  );
};

export default Home;
