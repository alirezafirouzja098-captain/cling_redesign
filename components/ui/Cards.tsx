import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// ─── Service Card ────────────────────────────────────────────────────────────
interface ServiceCardProps {
  title: string;
  tagline: string;
  category: string;
  icon: string;
  href: string;
  featured?: boolean;
}

export function ServiceCard({ title, tagline, category, href, featured }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className={`group block rounded-md border border-[#D8CBB9] bg-[#FAF6EF] p-8 transition-colors duration-200
        hover:border-[#641C2D]
        ${featured ? "lg:col-span-2" : ""}`}
    >
      <span className="text-xs font-bold uppercase tracking-widest text-[#641C2D]">
        {category}
      </span>
      <h3 className="mt-3 text-xl font-bold text-[#171514] font-display">{title}</h3>
      <p className="mt-2 text-[#665B57] text-sm md:text-base leading-relaxed">{tagline}</p>
      <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#641C2D] group-hover:text-[#8A263D] transition-colors">
        Learn more
        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}

// ─── Project / Work Card ──────────────────────────────────────────────────────
interface ProjectCardProps {
  title: string;
  shortDescription: string;
  industry: string;
  tags: string[];
  image: string;
  href: string;
  featured?: boolean;
}

export function ProjectCard({
  title,
  shortDescription,
  industry,
  tags,
  image,
  href,
  featured,
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      className={`group block rounded-md overflow-hidden bg-[#FAF6EF] border border-[#D8CBB9]
        transition-colors duration-200 hover:border-[#171514]
        ${featured ? "lg:col-span-2 lg:row-span-2" : ""}`}
    >
      <div className={`relative w-full overflow-hidden bg-[#EFE4D2] border-b border-[#D8CBB9] ${featured ? "h-64 lg:h-80" : "h-52"}`}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-102"
          sizes={featured ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
        />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-semibold px-2 py-0.5 rounded-sm bg-[#EFE4D2] text-[#665B57] border border-[#D8CBB9]"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-lg font-bold text-[#171514] font-display">{title}</h3>
        <p className="mt-1 text-sm text-[#665B57] leading-relaxed">{shortDescription}</p>
        <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#641C2D] group-hover:text-[#8A263D] transition-colors">
          View case study
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}

// ─── Product Card ─────────────────────────────────────────────────────────────
interface ProductCardProps {
  name: string;
  tagline: string;
  category: string;
  features: string[];
  image: string;
  cta: string;
  ctaHref: string;
  externalUrl?: string;
}

export function ProductCard({
  name,
  tagline,
  category,
  features,
  image,
  cta,
  ctaHref,
  externalUrl,
}: ProductCardProps) {
  return (
    <div className="group rounded-md bg-[#1A1817] border border-[#2D2724] overflow-hidden transition-colors duration-200 hover:border-[#8A263D] flex flex-col justify-between">
      <div>
        <div className="relative h-56 overflow-hidden bg-[#11100F] border-b border-[#2D2724]">
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain p-4"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="p-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D8CBB9]">
            {category}
          </span>
          <h3 className="mt-3 text-2xl font-bold text-[#F4EBDD] font-display">{name}</h3>
          <p className="mt-2 text-[#A89C92] leading-relaxed text-sm">{tagline}</p>
          <ul className="mt-5 space-y-2.5">
            {features.slice(0, 4).map((f) => (
              <li key={f} className="flex items-center gap-2.5 text-sm text-[#A89C92]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8A263D] flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="px-8 pb-8 pt-2 flex flex-wrap items-center gap-5">
        <Link
          href={ctaHref}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#F4EBDD] hover:text-[#8A263D] transition-colors"
        >
          {cta}
          <ArrowRight size={16} />
        </Link>
        {externalUrl && (
          <a
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#8F827B] hover:text-[#F4EBDD] underline underline-offset-4 transition-colors font-medium"
          >
            Live Platform &nearr;
          </a>
        )}
      </div>
    </div>
  );
}

// ─── Testimonial Card ─────────────────────────────────────────────────────────
interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

export function TestimonialCard({ quote, author, role, company, avatar }: TestimonialCardProps) {
  return (
    <div className="rounded-md bg-[#FAF6EF] border border-[#D8CBB9] p-8 flex flex-col justify-between gap-6">
      <blockquote className="text-[#171514] text-base md:text-lg leading-relaxed italic">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="flex items-center gap-4 pt-4 border-t border-[#D8CBB9]/60">
        <div className="relative w-12 h-12 rounded-md overflow-hidden bg-[#EFE4D2] border border-[#D8CBB9] flex-shrink-0">
          <Image src={avatar} alt={author} fill className="object-cover" sizes="48px" />
        </div>
        <div>
          <div className="font-bold text-[#171514] text-sm md:text-base">{author}</div>
          <div className="text-xs text-[#665B57]">
            {role} · {company}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Stat Card ────────────────────────────────────────────────────────────────
interface StatCardProps {
  value: string;
  label: string;
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold font-display text-[#171514] tracking-tight">{value}</div>
      <div className="mt-1.5 text-xs font-semibold text-[#665B57] uppercase tracking-wider">{label}</div>
    </div>
  );
}

// ─── Team Card ────────────────────────────────────────────────────────────────
interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  bio?: string;
  linkedin?: string | null;
}

export function TeamCard({ name, role, image, bio, linkedin }: TeamCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-md bg-[#FAF6EF] border border-[#D8CBB9] hover:border-[#641C2D] transition-colors duration-200">
      <div className="relative w-36 h-36 rounded-md overflow-hidden bg-[#EFE4D2] mb-4 border border-[#D8CBB9]">
        <Image src={image} alt={name} fill className="object-cover" sizes="144px" />
      </div>
      <div>
        <h3 className="font-bold text-[#171514] text-lg font-display">{name}</h3>
        <p className="text-xs font-bold text-[#641C2D] uppercase tracking-wider mt-1">{role}</p>
        {bio && <p className="mt-2.5 text-xs text-[#665B57] max-w-xs leading-relaxed">{bio}</p>}
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#641C2D] hover:underline mt-3 inline-block font-semibold"
            aria-label={`${name} on LinkedIn`}
          >
            LinkedIn &rarr;
          </a>
        )}
      </div>
    </div>
  );
}
