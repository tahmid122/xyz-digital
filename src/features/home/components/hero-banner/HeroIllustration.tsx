import Image from "next/image";

export function HeroIllustration() {
  return (
    <div className="relative w-full flex items-center justify-center py-4">
      {/* Soft decorative background circles and glow */}
      <div className="absolute -top-10 -right-10 size-72 sm:size-96 rounded-full bg-cyan-100/40 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 size-72 sm:size-96 rounded-full bg-emerald-100/40 blur-3xl -z-10 pointer-events-none" />

      {/* Hero Illustration */}
      <div className="relative w-full max-w-md lg:max-w-xl aspect-square flex items-center justify-center">
        <Image
          src="/images/hero-banner.jpg"
          alt="IT Service Marketplace Illustration"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          className="object-contain select-none"
        />
      </div>
    </div>
  );
}
