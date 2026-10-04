interface FooterCopyrightProps {
  year: number;
  developer: string;
}

export function FooterCopyright({ year, developer }: FooterCopyrightProps) {
  return (
    <p className="text-center text-xs sm:text-sm text-slate-300 font-normal">
      &copy; {year} Developed by{" "}
      <span className="text-white font-medium hover:text-slate-100 transition-colors">
        {developer}
      </span>
    </p>
  );
}
