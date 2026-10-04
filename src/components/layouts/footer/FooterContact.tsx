import { MapPin, Phone, Mail } from "lucide-react";
import { type OfficeContactInfo } from "@/config/navigation";

interface FooterContactProps {
  office: OfficeContactInfo;
}

export function FooterContact({ office }: FooterContactProps) {
  return (
    <div className="flex flex-col space-y-4">
      <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
        {office.title}
      </h3>

      <div className="space-y-3.5 text-sm text-slate-300">
        <div className="flex items-start gap-2.5">
          <MapPin className="size-4 text-white shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <span className="font-normal text-white">Head office: </span>
            {office.headOffice.replace(/^Head office:\s*/i, "")}
          </p>
        </div>

        <div className="pl-6.5">
          <p className="leading-relaxed">
            <span className="font-normal text-white">Sub Office: </span>
            {office.subOffice.replace(/^Sub Office:\s*/i, "")}
          </p>
        </div>

        <div className="flex items-center gap-2.5 pt-1">
          <Phone className="size-4 text-white shrink-0" />
          <a
            href={`tel:${office.phone}`}
            className="hover:text-white transition-colors duration-200"
          >
            {office.phone}
          </a>
        </div>

        <div className="flex items-center gap-2.5">
          <Mail className="size-4 text-white shrink-0" />
          <a
            href={`mailto:${office.email}`}
            className="hover:text-white transition-colors duration-200"
          >
            {office.email}
          </a>
        </div>
      </div>
    </div>
  );
}
