import { VideoShowcaseContent } from "./VideoShowcaseContent";
import { VideoShowcasePlayer } from "./VideoShowcasePlayer";

export function VideoShowcaseSection() {
  return (
    <section className="w-full py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading, description & bullets */}
          <VideoShowcaseContent />

          {/* Right Column: Video Player Card */}
          <VideoShowcasePlayer />
        </div>
      </div>
    </section>
  );
}
