import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
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
    title: `${project.title} — Case Study | Cling Info Tech`,
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
        className="bg-[#F8FAFC] border-b border-[#E2E8F0]"
      >
        <div className="container-xl py-3">
          <ol className="flex items-center gap-2 text-sm text-[#94A3B8]">
            <li>
              <Link href="/" className="hover:text-[#4F46E5] transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href="/work"
                className="hover:text-[#4F46E5] transition-colors"
              >
                Work
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li
              className="text-[#0F172A] font-medium truncate max-w-[200px]"
              aria-current="page"
            >
              {project.title}
            </li>
          </ol>
        </div>
      </nav>

      {/* Project Hero */}
      <section
        className="bg-[#0B1120] py-20 md:py-28"
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
                    className="text-xs font-semibold uppercase tracking-widest text-[#06B6D4] border border-[#06B6D4]/30 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
                {project.title}
              </h1>
              <p className="mt-4 text-lg text-[#94A3B8] leading-relaxed">
                {project.shortDescription}
              </p>
              <div className="mt-6 flex flex-wrap gap-6 text-sm">
                <div>
                  <span className="block text-[#94A3B8] text-xs uppercase tracking-widest mb-1">
                    Industry
                  </span>
                  <span className="text-white font-medium">
                    {project.industry}
                  </span>
                </div>
                <div>
                  <span className="block text-[#94A3B8] text-xs uppercase tracking-widest mb-1">
                    Year
                  </span>
                  <span className="text-white font-medium">{project.year}</span>
                </div>
              </div>
            </div>
            {/* Hero image */}
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden bg-[#1E293B]">
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
      <article className="section-py">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto space-y-16">
            {/* Challenge */}
            <section aria-labelledby="challenge-heading">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#4F46E5]">
                The Challenge
              </span>
              <h2
                id="challenge-heading"
                className="font-display mt-3 text-2xl md:text-3xl font-bold text-[#0F172A]"
              >
                What the client faced
              </h2>
              <p className="mt-4 text-lg text-[#475569] leading-relaxed">
                {project.challenge}
              </p>
            </section>

            {/* Solution */}
            <section aria-labelledby="solution-heading">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#4F46E5]">
                Our Solution
              </span>
              <h2
                id="solution-heading"
                className="font-display mt-3 text-2xl md:text-3xl font-bold text-[#0F172A]"
              >
                How we solved it
              </h2>
              <p className="mt-4 text-lg text-[#475569] leading-relaxed">
                {project.solution}
              </p>
            </section>

            {/* Technologies */}
            <section aria-labelledby="tech-heading">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#4F46E5]">
                Technologies Used
              </span>
              <h2
                id="tech-heading"
                className="font-display mt-3 text-2xl font-bold text-[#0F172A]"
              >
                Stack &amp; Tools
              </h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-[#F8FAFC] text-[#475569] border border-[#E2E8F0]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Results */}
            <section
              aria-labelledby="results-heading"
              className="rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] p-8"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-[#4F46E5]">
                Results
              </span>
              <h2
                id="results-heading"
                className="font-display mt-3 text-2xl font-bold text-[#0F172A]"
              >
                Outcomes &amp; Impact
              </h2>
              {project.results === "[CONTENT TO VERIFY]" ? (
                <div
                  className="mt-4 flex items-start gap-3 rounded-lg bg-amber-50 border border-amber-200 p-4"
                  role="note"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="flex-shrink-0 mt-0.5 text-amber-500"
                    aria-hidden="true"
                  >
                    <path
                      d="M10 2L18 17H2L10 2z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 8v4M10 14.5v.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  <p className="text-sm text-amber-800">
                    <strong>[ CONTENT TO VERIFY ]</strong> — Quantitative
                    results (e.g. uplift in sales, reduction in processing time)
                    are pending confirmation from the client. This section will
                    be updated once metrics are approved.
                  </p>
                </div>
              ) : (
                <p className="mt-4 text-[#475569] leading-relaxed">
                  {project.results}
                </p>
              )}
            </section>
          </div>
        </div>
      </article>

      {/* Related Projects */}
      {related.length > 0 && (
        <section className="section-py bg-[#F8FAFC]" aria-labelledby="related-heading">
          <div className="container-xl">
            <h2
              id="related-heading"
              className="font-display text-2xl md:text-3xl font-bold text-[#0F172A] mb-8"
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
      <section className="section-py bg-[#0B1120]" aria-label="Project CTA">
        <div className="container-xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
            Have a similar challenge?
          </h2>
          <p className="mt-4 text-[#94A3B8] max-w-lg mx-auto leading-relaxed">
            Let&apos;s talk about your project. We&apos;ll figure out the
            fastest path from idea to launch.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Start a Conversation
              <ArrowRight size={18} />
            </Button>
            <Button
              href="/work"
              variant="secondary"
              size="lg"
              className="border-[#334155] text-white hover:bg-[#1E293B] hover:border-[#475569]"
            >
              Back to All Work
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
