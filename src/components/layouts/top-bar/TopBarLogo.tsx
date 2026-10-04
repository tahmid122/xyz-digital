import Image from "next/image";
import Link from "next/link";
import { topBarConfig } from "@/config/navigation";

export function TopBarLogo() {
  const { logo } = topBarConfig;

  return (
    <Link
      href={logo.href}
      className="hidden md:flex items-center transition-opacity hover:opacity-90"
      aria-label={`${logo.alt} Home`}
    >
      <Image
        src={logo.src}
        alt={logo.alt}
        width={180}
        height={60}
        priority
        className="h-9 md:h-10 w-auto object-contain"
      />
    </Link>
  );
}
