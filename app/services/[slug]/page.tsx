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
      <nav className="border-b border-[#E2E8F0] bg-[#F8FAFC]" aria-label="Breadcrumb">
        <div className="container-xl py-3 flex items-center gap-2 text-sm text-[#94A3B8]">
          <Link href="/" className="hover:text-[#4F46E5]">Home</Link>
          <ChevronRight size={14} aria-hidden="true" />
          <Link href="/services" className="hover:text-[#4F46E5]">Services</Link>
          <ChevronRight size={14} aria-hidden="true" />
          <span className="text-[#0F172A]">{service.title}</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-[#0B1120] py-20 md:py-28">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#06B6D4]">
                {service.category}
              </span>
              <h1 className="font-display mt-4 text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                {service.title}
              </h1>
              <p className="mt-5 text-lg text-[#94A3B8] leading-relaxed">{service.description}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/contact" variant="primary" size="lg">Start a Project</Button>
                <Button href="/work" variant="secondary" size="lg" className="border-[#334155] text-white hover:bg-[#1E293B]">
                  View Our Work <ArrowRight size={16} />
                </Button>
              </div>
            </div>
            {service.image && (
              <div className="lg:col-span-5 relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-[#334155]/60 bg-[#1E293B]/40 p-4 backdrop-blur-sm shadow-2xl flex items-center justify-center">
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
      <section className="section-py border-b border-[#E2E8F0]">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <SectionHeading
              eyebrow="Capabilities"
              heading="What we deliver."
              description={`Our ${service.title} practice covers the full spectrum of what you need to ship with confidence.`}
            />
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.capabilities.map((cap) => (
                <li key={cap} className="flex items-center gap-3 text-[#475569]">
                  <span className="w-2 h-2 rounded-full bg-[#4F46E5] flex-shrink-0" aria-hidden="true" />
                  {cap}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-py bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Our Process"
            heading="How we work."
            description="A clear, iterative process that keeps you informed and in control at every step."
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {service.process.map((step) => (
              <div key={step.step} className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#4F46E5] flex items-center justify-center text-white font-display font-bold text-sm">
                  {step.step}
                </div>
                <h3 className="font-display font-semibold text-[#0F172A]">{step.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section-py border-b border-[#E2E8F0]">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Technology"
            heading="What we use."
            className="mb-10"
          />
          <div className="flex flex-wrap gap-3">
            {service.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-lg text-sm font-medium bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="section-py bg-[#F8FAFC]">
          <div className="container-xl">
            <SectionHeading eyebrow="Related" heading="Other services you might need." className="mb-10" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {relatedServices.map((svc) => (
                <Link
                  key={svc.id}
                  href={`/services/${svc.id}`}
                  className="group block rounded-2xl border border-[#E2E8F0] bg-white p-8 hover:border-[#4F46E5] hover:shadow-lg transition-all"
                >
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#4F46E5]">{svc.category}</span>
                  <h3 className="mt-2 font-display text-xl font-bold text-[#0F172A]">{svc.title}</h3>
                  <p className="mt-1 text-[#475569] text-sm">{svc.tagline}</p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-[#4F46E5]">
                    Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-py bg-[#4F46E5]">
        <div className="container-xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
            Ready to start your {service.shortTitle} project?
          </h2>
          <p className="mt-3 text-indigo-200 max-w-lg mx-auto">
            Let's talk about your requirements and put together the right team for you.
          </p>
          <Button href="/contact" variant="secondary" size="lg" className="mt-8 bg-white text-[#4F46E5] border-white hover:bg-indigo-50">
            Get in Touch
          </Button>
        </div>
      </section>
    </>
  );
}
