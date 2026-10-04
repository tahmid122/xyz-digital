import Link from "next/link";
import { type NavItem } from "@/config/navigation";

interface FooterColumnProps {
  title: string;
  items: NavItem[];
}

export function FooterColumn({ title, items }: FooterColumnProps) {
  return (
    <div className="flex flex-col space-y-4">
      <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.title}>
            <Link
              href={item.href}
              className="text-sm text-slate-300 hover:text-white transition-colors duration-200 inline-block"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
