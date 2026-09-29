import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);
  if (!service) return {};
  return {
    title: `${service.title} Services`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);
  if (!service) notFound();

  const relatedServices = services.filter((s) => s.id !== slug && s.category === service.category).slice(0, 2);

  return (
    <>
      {/* Breadcrumb */}
      <nav className="border-b border-[#D8CBB9] bg-[#EFE4D2]" aria-label="Breadcrumb">
        <div className="container-xl py-3 flex items-center gap-2 text-xs md:text-sm text-[#665B57]">
          <Link href="/" className="hover:text-[#641C2D] transition-colors">Home</Link>
          <ChevronRight size={14} aria-hidden="true" />
          <Link href="/services" className="hover:text-[#641C2D] transition-colors">Services</Link>
          <ChevronRight size={14} aria-hidden="true" />
          <span className="text-[#171514] font-semibold">{service.title}</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-[#11100F] py-20 md:py-28 border-b border-[#262220]">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D8CBB9]">
                {service.category}
              </span>
              <h1 className="font-display mt-4 text-4xl md:text-5xl font-bold text-[#F4EBDD] tracking-tight leading-tight">
                {service.title}
              </h1>
              <p className="mt-5 text-base md:text-lg text-[#A89C92] leading-relaxed">{service.description}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/contact" variant="primary" size="lg">Start a Project</Button>
                <Button
                  href="/work"
                  variant="secondary"
                  size="lg"
                  className="border-[#D8CBB9] text-[#F4EBDD] hover:bg-[#F4EBDD] hover:text-[#11100F]"
                >
                  View Our Work <ArrowRight size={16} />
                </Button>
              </div>
            </div>
            {service.image && (
              <div className="lg:col-span-5 relative h-64 sm:h-80 rounded-md overflow-hidden border border-[#2D2724] bg-[#1A1817] p-4 flex items-center justify-center">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-contain p-6"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-py bg-[#F4EBDD] border-b border-[#D8CBB9]">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <SectionHeading
              eyebrow="Capabilities"
              heading="What we deliver."
              description={`Our ${service.title} practice covers the full spectrum of what you need to ship with confidence.`}
            />
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.capabilities.map((cap) => (
                <li key={cap} className="flex items-center gap-3 text-sm md:text-base text-[#171514]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#641C2D] flex-shrink-0" aria-hidden="true" />
                  {cap}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-py bg-[#EFE4D2] border-b border-[#D8CBB9]">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Our Process"
            heading="How we work."
            description="A clear, iterative process that keeps you informed and in control at every step."
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {service.process.map((step) => (
              <div key={step.step} className="flex flex-col gap-3 p-5 rounded-md bg-[#FAF6EF] border border-[#D8CBB9]">
                <div className="w-8 h-8 rounded-sm bg-[#641C2D] flex items-center justify-center text-[#F4EBDD] font-display font-bold text-xs">
                  {step.step}
                </div>
                <h3 className="font-display font-bold text-[#171514] text-base">{step.title}</h3>
                <p className="text-xs md:text-sm text-[#665B57] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section-py bg-[#F4EBDD] border-b border-[#D8CBB9]">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Technology"
            heading="What we use."
            className="mb-10"
          />
          <div className="flex flex-wrap gap-2.5">
            {service.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-sm text-xs font-semibold uppercase tracking-wider bg-[#FAF6EF] border border-[#D8CBB9] text-[#171514]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="section-py bg-[#EFE4D2]">
          <div className="container-xl">
            <SectionHeading eyebrow="Related" heading="Other services you might need." className="mb-10" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {relatedServices.map((svc) => (
                <Link
                  key={svc.id}
                  href={`/services/${svc.id}`}
                  className="group block rounded-md border border-[#D8CBB9] bg-[#FAF6EF] p-8 hover:border-[#641C2D] transition-colors"
                >
                  <span className="text-xs font-bold uppercase tracking-widest text-[#641C2D]">{svc.category}</span>
                  <h3 className="mt-2 font-display text-xl font-bold text-[#171514]">{svc.title}</h3>
                  <p className="mt-1 text-[#665B57] text-sm leading-relaxed">{svc.tagline}</p>
                  <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-[#641C2D] group-hover:text-[#8A263D] transition-colors">
                    Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-py bg-[#641C2D] text-[#F4EBDD]">
        <div className="container-xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
            Ready to start your {service.shortTitle} project?
          </h2>
          <p className="mt-3 text-base text-[#EFE4D2] max-w-lg mx-auto">
            Let's talk about your requirements and put together the right architectural team for you.
          </p>
          <Button
            href="/contact"
            variant="secondary"
            size="lg"
            className="mt-8 bg-[#F4EBDD] text-[#641C2D] border-[#F4EBDD] hover:bg-white hover:text-[#641C2D]"
          >
            Get in Touch
          </Button>
        </div>
      </section>
    </>
  );
}
