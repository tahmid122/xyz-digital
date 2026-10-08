import { videoShowcaseData } from "./video-showcase.data";

export function VideoShowcaseContent() {
  const { title, description, bullets } = videoShowcaseData;

  return (
    <div className="flex flex-col justify-center space-y-6">
      <div className="space-y-4">
        <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-bold text-slate-900 tracking-tight leading-[1.2]">
          {title}
        </h2>
        <p className="text-base sm:text-lg text-slate-500 font-normal leading-relaxed">
          {description}
        </p>
      </div>

      <ul className="space-y-3.5 pt-2">
        {bullets.map((bullet, index) => (
          <li
            key={index}
            className="flex items-start gap-3 text-sm sm:text-base text-slate-600 leading-relaxed"
          >
            <span className="size-1.5 sm:size-2 rounded-full bg-slate-400 mt-2 shrink-0" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
