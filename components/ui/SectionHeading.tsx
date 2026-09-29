interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  id?: string;
}

export function SectionHeading({
  eyebrow,
  heading,
  description,
  align = "left",
  className = "",
  id,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-2.5 ${alignClass} ${className}`}>
      {eyebrow && (
        <span className="text-xs font-bold uppercase tracking-widest text-[#641C2D]">
          {eyebrow}
        </span>
      )}
      <h2 id={id} className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#171514] leading-tight tracking-tight">
        {heading}
      </h2>
      {description && (
        <p className="text-base md:text-lg text-[#665B57] max-w-2xl leading-relaxed mt-1">
          {description}
        </p>
      )}
    </div>
  );
}
