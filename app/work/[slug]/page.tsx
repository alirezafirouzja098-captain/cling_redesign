import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronRight } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/Cards";
import { Button } from "@/components/ui/Button";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — Case Study`,
    description: project.shortDescription,
  };
}

export default async function WorkCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const related = projects.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="bg-[#EFE4D2] border-b border-[#D8CBB9]"
      >
        <div className="container-xl py-3">
          <ol className="flex items-center gap-2 text-xs md:text-sm text-[#665B57]">
            <li>
              <Link href="/" className="hover:text-[#641C2D] transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true"><ChevronRight size={14} /></li>
            <li>
              <Link
                href="/work"
                className="hover:text-[#641C2D] transition-colors"
              >
                Work
              </Link>
            </li>
            <li aria-hidden="true"><ChevronRight size={14} /></li>
            <li
              className="text-[#171514] font-semibold truncate max-w-[240px]"
              aria-current="page"
            >
              {project.title}
            </li>
          </ol>
        </div>
      </nav>

      {/* Project Hero */}
      <section
        className="bg-[#11100F] py-20 md:py-28 border-b border-[#262220]"
        aria-label="Project hero"
      >
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-bold uppercase tracking-wider text-[#D8CBB9] bg-[#1A1817] border border-[#2D2724] px-3 py-1 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-[#F4EBDD] leading-tight tracking-tight">
                {project.title}
              </h1>
              <p className="mt-4 text-base md:text-lg text-[#A89C92] leading-relaxed">
                {project.shortDescription}
              </p>
              <div className="mt-8 flex flex-wrap gap-8 text-sm pt-6 border-t border-[#262220]">
                <div>
                  <span className="block text-[#8F827B] text-[11px] font-bold uppercase tracking-wider mb-1">
                    Industry Sector
                  </span>
                  <span className="text-[#F4EBDD] font-semibold">
                    {project.industry}
                  </span>
                </div>
                <div>
                  <span className="block text-[#8F827B] text-[11px] font-bold uppercase tracking-wider mb-1">
                    Delivery Year
                  </span>
                  <span className="text-[#F4EBDD] font-semibold">{project.year}</span>
                </div>
              </div>
            </div>
            {/* Hero image */}
            <div className="relative h-64 md:h-80 rounded-md overflow-hidden bg-[#1A1817] border border-[#2D2724]">
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Body */}
      <article className="section-py bg-[#F4EBDD]">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto space-y-16">
            {/* Challenge */}
            <section aria-labelledby="challenge-heading">
              <span className="text-xs font-bold uppercase tracking-widest text-[#641C2D]">
                The Challenge
              </span>
              <h2
                id="challenge-heading"
                className="font-display mt-2 text-2xl md:text-3xl font-bold text-[#171514]"
              >
                What the client faced
              </h2>
              <p className="mt-4 text-base md:text-lg text-[#665B57] leading-relaxed">
                {project.challenge}
              </p>
            </section>

            {/* Solution */}
            <section aria-labelledby="solution-heading">
              <span className="text-xs font-bold uppercase tracking-widest text-[#641C2D]">
                Our Solution
              </span>
              <h2
                id="solution-heading"
                className="font-display mt-2 text-2xl md:text-3xl font-bold text-[#171514]"
              >
                How we solved it
              </h2>
              <p className="mt-4 text-base md:text-lg text-[#665B57] leading-relaxed">
                {project.solution}
              </p>
            </section>

            {/* Technologies */}
            <section aria-labelledby="tech-heading">
              <span className="text-xs font-bold uppercase tracking-widest text-[#641C2D]">
                Technologies Used
              </span>
              <h2
                id="tech-heading"
                className="font-display mt-2 text-2xl md:text-3xl font-bold text-[#171514]"
              >
                Stack &amp; Tools
              </h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 rounded-sm text-xs font-semibold uppercase tracking-wider bg-[#FAF6EF] text-[#171514] border border-[#D8CBB9]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Results */}
            <section
              aria-labelledby="results-heading"
              className="rounded-md bg-[#FAF6EF] border border-[#D8CBB9] p-8"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-[#641C2D]">
                Results
              </span>
              <h2
                id="results-heading"
                className="font-display mt-2 text-2xl font-bold text-[#171514]"
              >
                Outcomes &amp; Impact
              </h2>
              {project.results === "[CONTENT TO VERIFY]" ? (
                <div
                  className="mt-4 flex items-start gap-3 rounded-md bg-[#EFE4D2] border border-[#D8CBB9] p-4"
                  role="note"
                >
                  <p className="text-xs md:text-sm text-[#665B57] leading-relaxed">
                    <strong className="text-[#171514]">[ CONTENT TO VERIFY ]</strong> — Quantitative
                    results (e.g. uplift in throughput, reduction in processing time)
                    are pending confirmation from the client.
                  </p>
                </div>
              ) : (
                <p className="mt-4 text-[#665B57] leading-relaxed">
                  {project.results}
                </p>
              )}
            </section>
          </div>
        </div>
      </article>

      {/* Related Projects */}
      {related.length > 0 && (
        <section className="section-py bg-[#EFE4D2] border-t border-[#D8CBB9]" aria-labelledby="related-heading">
          <div className="container-xl">
            <h2
              id="related-heading"
              className="font-display text-2xl md:text-3xl font-bold text-[#171514] mb-8"
            >
              More Case Studies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((rel) => (
                <ProjectCard
                  key={rel.id}
                  title={rel.title}
                  shortDescription={rel.shortDescription}
                  industry={rel.industry}
                  tags={rel.tags}
                  image={rel.image}
                  href={`/work/${rel.slug}`}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="section-py bg-[#641C2D] text-[#F4EBDD]" aria-label="Project CTA">
        <div className="container-xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
            Have a similar challenge?
          </h2>
          <p className="mt-4 text-base text-[#EFE4D2] max-w-lg mx-auto leading-relaxed">
            Let&apos;s talk about your project and determine the fastest path from architecture to shipped software.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="bg-[#F4EBDD] text-[#641C2D] border-[#F4EBDD] hover:bg-white hover:text-[#641C2D]"
            >
              Start a Conversation
              <ArrowRight size={18} />
            </Button>
            <Button
              href="/work"
              variant="ghost"
              size="lg"
              className="text-[#F4EBDD] hover:text-white underline underline-offset-4"
            >
              Back to All Work
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
