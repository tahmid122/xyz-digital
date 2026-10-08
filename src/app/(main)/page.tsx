import { HeroBanner } from "@/features/home/components/hero-banner";
import { PopularServicesSection } from "@/features/home/components/popular-services";
import { VideoShowcaseSection } from "@/features/home/components/video-showcase";
import {
  ServiceCategorySection,
  graphicsServicesSectionData,
  webServicesSectionData,
  digitalMarketingServicesSectionData,
  videoPhotographyServicesSectionData,
  businessLegalServicesSectionData,
  virtualAssistantServicesSectionData,
} from "@/features/home/components/service-category-showcase";
import { ItSolutionsBanner } from "@/features/home/components/it-solutions-banner";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <PopularServicesSection />
      <VideoShowcaseSection />

      {/* 1. Graphics Services */}
      <ServiceCategorySection
        data={graphicsServicesSectionData}
        viewAllHref="/services/graphics"
      />

      {/* 2. Web & Software Services */}
      <ServiceCategorySection
        data={webServicesSectionData}
        viewAllHref="/services/web-software"
        className="bg-slate-50/50"
      />

      {/* 3. Digital Marketing Services */}
      <ServiceCategorySection
        data={digitalMarketingServicesSectionData}
        viewAllHref="/services/digital-marketing"
      />

      {/* 4. Video & Photography Services */}
      <ServiceCategorySection
        data={videoPhotographyServicesSectionData}
        viewAllHref="/services/video-photography"
        className="bg-slate-50/50"
      />

      {/* 5. Business & Legal Services */}
      <ServiceCategorySection
        data={businessLegalServicesSectionData}
        viewAllHref="/services/business-legal"
      />

      {/* 6. Virtual Assistant Services */}
      <ServiceCategorySection
        data={virtualAssistantServicesSectionData}
        viewAllHref="/services/virtual-assistant"
        className="bg-slate-50/50"
      />

      {/* 7. IT Solutions Banner */}
      <ItSolutionsBanner />
    </div>
  );
};

export default Home;
