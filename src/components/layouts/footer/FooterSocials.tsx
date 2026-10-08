import { Button } from "@/components/ui/button";
import { type SocialLink } from "@/config/navigation";

interface FooterSocialsProps {
  socials: SocialLink[];
}

export function FooterSocials({ socials }: FooterSocialsProps) {
  return (
    <div className="flex items-center justify-center gap-3">
      {socials.map((social) => {
        const isExternal = social.href.startsWith("http");

        if (social.icon === "facebook") {
          return (
            <Button
              key={social.name}
              nativeButton={false}
              render={
                <a
                  href={social.href}
                  {...(isExternal
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  aria-label="Visit Facebook"
                />
              }
              size="icon"
              variant="ghost"
              className="size-8 rounded-full bg-[#1877F2] text-white hover:bg-[#1877F2]/90 hover:text-white transition-transform hover:scale-110 shadow-sm p-0 cursor-pointer"
            >
              <svg
                className="size-4 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </Button>
          );
        }

        if (social.icon === "youtube") {
          return (
            <Button
              key={social.name}
              nativeButton={false}
              render={
                <a
                  href={social.href}
                  {...(isExternal
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  aria-label="Visit YouTube"
                />
              }
              size="icon"
              variant="ghost"
              className="size-8 rounded-full bg-[#FF0000] text-white hover:bg-[#FF0000]/90 hover:text-white transition-transform hover:scale-110 shadow-sm p-0 cursor-pointer"
            >
              <svg
                className="size-4 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </Button>
          );
        }

        return null;
      })}
    </div>
  );
}
