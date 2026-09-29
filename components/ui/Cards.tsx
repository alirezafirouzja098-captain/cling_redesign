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
      className={`group block rounded-2xl border border-[#E2E8F0] bg-white p-8 transition-all duration-300
        hover:border-[#4F46E5] hover:shadow-xl hover:-translate-y-1
        ${featured ? "lg:col-span-2" : ""}`}
    >
      <span className="text-xs font-semibold uppercase tracking-widest text-[#4F46E5]">
        {category}
      </span>
      <h3 className="mt-3 text-xl font-bold text-[#0F172A] font-display">{title}</h3>
      <p className="mt-2 text-[#475569] leading-relaxed">{tagline}</p>
      <div className="mt-6 flex items-center gap-2 text-sm font-medium text-[#4F46E5]">
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
      className={`group block rounded-2xl overflow-hidden bg-white border border-[#E2E8F0]
        transition-all duration-300 hover:shadow-xl hover:-translate-y-1
        ${featured ? "lg:col-span-2 lg:row-span-2" : ""}`}
    >
      <div className={`relative w-full overflow-hidden bg-[#F8FAFC] ${featured ? "h-64 lg:h-80" : "h-48"}`}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes={featured ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
        />
        {/* Placeholder gradient for missing images */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E293B] to-[#0B1120] opacity-0 group-hover:opacity-20 transition-opacity" />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#F8FAFC] text-[#475569] border border-[#E2E8F0]"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-lg font-bold text-[#0F172A] font-display">{title}</h3>
        <p className="mt-1 text-sm text-[#475569]">{shortDescription}</p>
        <div className="mt-4 flex items-center gap-2 text-sm font-medium text-[#4F46E5]">
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
    <div className="group rounded-2xl bg-[#1E293B] border border-[#334155] overflow-hidden transition-all duration-300 hover:border-[#06B6D4] hover:shadow-2xl hover:-translate-y-1 flex flex-col justify-between">
      <div>
        <div className="relative h-56 overflow-hidden bg-[#0B1120] border-b border-[#334155]">
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="p-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#06B6D4]">
            {category}
          </span>
          <h3 className="mt-3 text-2xl font-bold text-white font-display">{name}</h3>
          <p className="mt-2 text-[#94A3B8] leading-relaxed text-sm">{tagline}</p>
          <ul className="mt-5 space-y-2">
            {features.slice(0, 4).map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-[#94A3B8]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="px-8 pb-8 pt-2 flex flex-wrap items-center gap-4">
        <Link
          href={ctaHref}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#06B6D4] hover:text-white transition-colors"
        >
          {cta}
          <ArrowRight size={16} />
        </Link>
        {externalUrl && (
          <a
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#94A3B8] hover:text-white underline underline-offset-4 transition-colors"
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
    <div className="rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] p-8 flex flex-col gap-6">
      <blockquote className="text-[#0F172A] text-lg leading-relaxed">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-[#E2E8F0] flex-shrink-0">
          <Image src={avatar} alt={author} fill className="object-cover" sizes="48px" />
        </div>
        <div>
          <div className="font-semibold text-[#0F172A]">{author}</div>
          <div className="text-sm text-[#94A3B8]">
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
      <div className="text-4xl font-bold font-display text-gradient">{value}</div>
      <div className="mt-1 text-sm text-[#94A3B8] uppercase tracking-wide">{label}</div>
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
    <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-indigo-100 transition-all duration-300">
      <div className="relative w-36 h-36 rounded-2xl overflow-hidden bg-[#F1F5F9] mb-4 border-2 border-indigo-50 shadow-inner">
        <Image src={image} alt={name} fill className="object-cover" sizes="144px" />
      </div>
      <div>
        <h3 className="font-bold text-[#0F172A] text-lg font-display">{name}</h3>
        <p className="text-sm font-medium text-[#4F46E5] mt-0.5">{role}</p>
        {bio && <p className="mt-2 text-xs text-[#64748B] max-w-xs leading-relaxed">{bio}</p>}
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#4F46E5] hover:underline mt-2 inline-block font-medium"
            aria-label={`${name} on LinkedIn`}
          >
            LinkedIn &rarr;
          </a>
        )}
      </div>
    </div>
  );
}
