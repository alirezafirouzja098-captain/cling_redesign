import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard, ProjectCard, ProductCard, TestimonialCard, StatCard } from "@/components/ui/Cards";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { products } from "@/data/products";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Making Your Ideas Happen — IT Solutions & Web Development",
  description:
    "Cling Info Tech is an end-to-end IT solutions provider delivering web development, mobile apps, AI/ML, and ERP solutions. 350+ happy clients. Start a project today.",
};

export default function HomePage() {
  const featuredServices = services.filter((s) => s.featured);
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
  const featuredProducts = products.filter((p) => p.featured);

  const whyUs = [
    { title: "No templates. Ever.", description: "Every solution is built from scratch to your exact requirements." },
    { title: "End-to-end delivery.", description: "From idea to launch — design, engineering, and support under one roof." },
    { title: "AI-forward thinking.", description: "We integrate emerging technologies to give you a competitive edge." },
    { title: "Long-term partnership.", description: "We care about your growth after launch, not just the delivery date." },
  ];

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="relative bg-[#0B1120] overflow-hidden"
        aria-label="Hero section"
      >
        {/* Background gradient accent */}
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #4F46E5, transparent 70%)" }}
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #06B6D4, transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="container-xl relative z-10 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#06B6D4] mb-6">
              End-to-end IT Solutions
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              Making Your{" "}
              <span className="text-gradient">Ideas Happen.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-[#94A3B8] leading-relaxed max-w-2xl">
              We build web platforms, mobile apps, ERP systems, and AI products that turn your vision into competitive advantage. Trusted by {company.stats[1].value} clients across the globe.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Start a Project
              </Button>
              <Button href="/work" variant="secondary" size="lg" className="border-[#334155] text-[#F8FAFC] hover:bg-[#1E293B] hover:border-[#475569]">
                See Our Work <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS STRIP ─────────────────────────────────────────────────── */}
      <section className="bg-[#F8FAFC] border-y border-[#E2E8F0]" aria-label="Company statistics">
        <div className="container-xl py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {company.stats.map((stat) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ────────────────────────────────────────────────────── */}
      <section className="section-py" aria-labelledby="services-heading">
        <div className="container-xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="What We Build"
              heading="End-to-end capabilities across every digital frontier."
              description="From mobile apps to enterprise ERP systems, we cover the full spectrum of modern technology development."
              id="services-heading"
            />
            <Button href="/services" variant="secondary" size="sm" className="shrink-0">
              All Services <ArrowRight size={16} />
            </Button>
          </div>

          {/* Bento-box style grid — featured services get more space */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredServices.map((svc, i) => (
              <div key={svc.id} className={i === 0 ? "lg:col-span-2" : ""}>
                <ServiceCard
                  title={svc.title}
                  tagline={svc.tagline}
                  category={svc.category}
                  icon={svc.icon}
                  href={`/services/${svc.id}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED WORK ───────────────────────────────────────────────── */}
      <section className="section-py bg-[#F8FAFC]" aria-labelledby="work-heading">
        <div className="container-xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="Selected Work"
              heading="390+ projects delivered. Here are a few we're proud of."
              id="work-heading"
            />
            <Button href="/work" variant="secondary" size="sm" className="shrink-0">
              View All Projects <ArrowRight size={16} />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredProjects.map((project, i) => (
              <div key={project.id} className={i === 0 ? "md:col-span-2 lg:col-span-1 lg:row-span-2" : ""}>
                <ProjectCard
                  title={project.title}
                  shortDescription={project.shortDescription}
                  industry={project.industry}
                  tags={project.tags}
                  image={project.image}
                  href={`/work/${project.slug}`}
                  featured={i === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CLING ───────────────────────────────────────────────────── */}
      <section className="section-py" aria-labelledby="why-heading">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionHeading
              eyebrow="Why Cling"
              heading="We don't just build software. We build advantage."
              description="Since 2019, we've grown from a small team to a full-service technology partner trusted across industries — because we treat every project like our own business."
              id="why-heading"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyUs.map((item) => (
                <div key={item.title} className="flex flex-col gap-3">
                  <CheckCircle size={20} className="text-[#4F46E5]" aria-hidden="true" />
                  <h3 className="font-display font-semibold text-[#0F172A]">{item.title}</h3>
                  <p className="text-sm text-[#475569] leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRODUCTS ────────────────────────────────────────────────────── */}
      <section className="section-py bg-[#0B1120]" aria-labelledby="products-heading">
        <div className="container-xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="Our Products"
              heading="Software built by us. Ready for you."
              description="Beyond client work, we build our own products — polished platforms ready to deploy in your business."
              id="products-heading"
              className="[&_h2]:text-white [&_p]:text-[#94A3B8] [&_span]:text-[#06B6D4]"
            />
            <Button href="/products" variant="secondary" size="sm" className="border-[#334155] text-[#F8FAFC] hover:bg-[#1E293B] shrink-0">
              All Products <ArrowRight size={16} />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                tagline={product.tagline}
                category={product.category}
                features={product.features}
                image={product.image}
                cta={product.cta}
                ctaHref={product.ctaHref}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ────────────────────────────────────────────────── */}
      <section className="section-py" aria-labelledby="testimonials-heading">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Client Stories"
            heading="What our clients say."
            description="Every project is a partnership. Here's how we've made a difference."
            align="center"
            className="mb-12"
            id="testimonials-heading"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard
                key={t.id}
                quote={t.quote}
                author={t.author}
                role={t.role}
                company={t.company}
                avatar={t.avatar}
              />
            ))}
          </div>
          <p className="mt-6 text-xs text-center text-[#94A3B8]">
            * Testimonials pending final client approval.
          </p>
        </div>
      </section>

      {/* ─── FINAL CTA ───────────────────────────────────────────────────── */}
      <section className="section-py bg-[#4F46E5]" aria-label="Call to action">
        <div className="container-xl text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white tracking-tight">
            Ready to build something great?
          </h2>
          <p className="mt-4 text-lg text-indigo-200 max-w-xl mx-auto">
            Tell us about your project and we'll set up a free discovery call.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="secondary" size="lg" className="bg-white text-[#4F46E5] border-white hover:bg-indigo-50">
              Start a Project
            </Button>
            <Button href="/work" variant="ghost" size="lg" className="text-white hover:text-indigo-200">
              Explore Our Work <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
