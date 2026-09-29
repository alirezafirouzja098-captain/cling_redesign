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
    <div className={`flex flex-col gap-3 ${alignClass} ${className}`}>
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-widest text-[#4F46E5]">
          {eyebrow}
        </span>
      )}
      <h2 id={id} className="font-display text-3xl font-bold text-[#0F172A] md:text-4xl leading-tight tracking-tight">
        {heading}
      </h2>
      {description && (
        <p className="text-lg text-[#475569] max-w-2xl leading-relaxed mt-1">
          {description}
        </p>
      )}
    </div>
  );
}
