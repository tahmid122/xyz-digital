import { HeroBanner } from "@/features/home/components/hero-banner";
import { PopularServicesSection } from "@/features/home/components/popular-services";
import { VideoShowcaseSection } from "@/features/home/components/video-showcase";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <PopularServicesSection />
      <VideoShowcaseSection />
    </div>
  );
};

export default Home;
