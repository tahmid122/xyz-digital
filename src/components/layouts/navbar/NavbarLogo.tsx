import Image from "next/image";
import Link from "next/link";
import { topBarConfig } from "@/config/navigation";

export function NavbarLogo() {
  const { logo } = topBarConfig;

  return (
    <Link
      href={logo.href}
      className="md:hidden flex items-center transition-opacity hover:opacity-90"
      aria-label={`${logo.alt} Home`}
    >
      <Image
        src={logo.src}
        alt={logo.alt}
        width={150}
        height={50}
        priority
        className="h-8 w-auto object-contain"
      />
    </Link>
  );
}
