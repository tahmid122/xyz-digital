import { topBarConfig } from "@/config/navigation";

export function TopBarPhone() {
  const { contact } = topBarConfig;

  return (
    <div className="flex flex-col items-start sm:items-end justify-center">
      <span className="text-[11px] font-normal text-muted-foreground leading-tight">
        {contact.label}
      </span>
      <a
        href={`tel:${contact.phone}`}
        className="text-sm font-semibold tracking-tight text-foreground hover:text-primary transition-colors leading-snug"
      >
        {contact.phone}
      </a>
    </div>
  );
}
