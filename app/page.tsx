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
        className="relative bg-[#11100F] border-b border-[#262220]"
        aria-label="Hero section"
      >
        <div className="container-xl py-20 md:py-28 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#D8CBB9] mb-4">
                Enterprise IT Architecture &amp; Engineering
              </span>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#F4EBDD] leading-[1.08] tracking-tight">
                Making Your Ideas Happen.
              </h1>
              <p className="mt-6 text-base md:text-lg text-[#A89C92] leading-relaxed max-w-xl">
                We engineer scalable web platforms, high-performance mobile apps, enterprise ERP architectures, and custom AI vision systems that turn operational friction into competitive dominance.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button href="/contact" variant="primary" size="lg">
                  Start a Project
                </Button>
                <Button
                  href="/work"
                  variant="secondary"
                  size="lg"
                  className="border-[#D8CBB9] text-[#F4EBDD] hover:bg-[#F4EBDD] hover:text-[#11100F]"
                >
                  Explore Portfolio <ArrowRight size={18} />
                </Button>
              </div>
              <div className="mt-10 pt-8 border-t border-[#262220] flex flex-wrap items-center gap-6 text-xs text-[#A89C92]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8A263D]" />
                  <span>390+ Projects Delivered</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8A263D]" />
                  <span>350+ Satisfied Clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8A263D]" />
                  <span>Bespoke Architectures</span>
                </div>
              </div>
            </div>

            {/* Engineering Standards & Capabilities Overview */}
            <div className="lg:col-span-5">
              <div className="rounded-md border border-[#2D2724] bg-[#1A1817] p-6 md:p-8">
                <div className="flex items-center justify-between pb-4 border-b border-[#2D2724]">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#D8CBB9]">Cling Core Framework</span>
                    <h3 className="font-display text-base font-bold text-[#F4EBDD]">Engineering Standards</h3>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#F4EBDD] bg-[#292220] px-2.5 py-1 rounded-sm border border-[#3A302D]">
                    Production Ready
                  </span>
                </div>

                <div className="mt-5 space-y-4 text-xs">
                  <div className="flex items-start justify-between pb-3 border-b border-[#26201E]">
                    <div>
                      <h4 className="font-semibold text-[#F4EBDD]">Custom Web Architecture</h4>
                      <p className="text-[#8F827B] mt-0.5">High-concurrency React &amp; Next.js platforms</p>
                    </div>
                    <span className="text-[10px] font-mono text-[#D8CBB9]">Web Dev</span>
                  </div>

                  <div className="flex items-start justify-between pb-3 border-b border-[#26201E]">
                    <div>
                      <h4 className="font-semibold text-[#F4EBDD]">Mobile Product Ecosystems</h4>
                      <p className="text-[#8F827B] mt-0.5">Native iOS, Android &amp; Flutter engineering</p>
                    </div>
                    <span className="text-[10px] font-mono text-[#D8CBB9]">Mobile</span>
                  </div>

                  <div className="flex items-start justify-between pb-3 border-b border-[#26201E]">
                    <div>
                      <h4 className="font-semibold text-[#F4EBDD]">Enterprise ERP Systems</h4>
                      <p className="text-[#8F827B] mt-0.5">Operations, inventory &amp; billing automation</p>
                    </div>
                    <span className="text-[10px] font-mono text-[#D8CBB9]">ERP</span>
                  </div>

                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-[#F4EBDD]">Applied AI &amp; Vision Systems</h4>
                      <p className="text-[#8F827B] mt-0.5">Automated video surveillance &amp; ML pipelines</p>
                    </div>
                    <span className="text-[10px] font-mono text-[#D8CBB9]">AI/ML</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#2D2724] grid grid-cols-2 gap-3 text-center">
                  <div className="bg-[#11100F] p-3 rounded-sm border border-[#26201E]">
                    <div className="text-xl font-bold font-display text-[#F4EBDD]">390+</div>
                    <div className="text-[10px] text-[#8F827B] uppercase tracking-wider mt-0.5">Completed Systems</div>
                  </div>
                  <div className="bg-[#11100F] p-3 rounded-sm border border-[#26201E]">
                    <div className="text-xl font-bold font-display text-[#F4EBDD]">100%</div>
                    <div className="text-[10px] text-[#8F827B] uppercase tracking-wider mt-0.5">Bespoke Codebases</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS STRIP ─────────────────────────────────────────────────── */}
      <section className="bg-[#EFE4D2] border-b border-[#D8CBB9]" aria-label="Company statistics">
        <div className="container-xl py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {company.stats.map((stat) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ────────────────────────────────────────────────────── */}
      <section className="section-py bg-[#F4EBDD]" aria-labelledby="services-heading">
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
      <section className="section-py bg-[#EFE4D2] border-y border-[#D8CBB9]" aria-labelledby="work-heading">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      <section className="section-py bg-[#F4EBDD]" aria-labelledby="why-heading">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionHeading
              eyebrow="Why Cling"
              heading="We don't just build software. We build advantage."
              description="Since 2019, we've grown from an ambitious core team to a trusted technology partner across India and globally."
              id="why-heading"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyUs.map((item) => (
                <div key={item.title} className="flex flex-col gap-2.5 p-6 rounded-md bg-[#FAF6EF] border border-[#D8CBB9]">
                  <CheckCircle size={20} className="text-[#641C2D]" aria-hidden="true" />
                  <h3 className="font-display font-bold text-base text-[#171514]">{item.title}</h3>
                  <p className="text-sm text-[#665B57] leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRODUCTS ────────────────────────────────────────────────────── */}
      <section className="section-py bg-[#11100F] border-b border-[#262220]" aria-labelledby="products-heading">
        <div className="container-xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="flex flex-col gap-2.5 text-left items-start">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D8CBB9]">
                Proprietary Platforms
              </span>
              <h2 id="products-heading" className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#F4EBDD] leading-tight tracking-tight">
                Software built by us. Ready for you.
              </h2>
              <p className="text-base md:text-lg text-[#A89C92] max-w-2xl leading-relaxed mt-1">
                Beyond client services, we build our own software platforms — pre-engineered with proven foundations and ready to deploy.
              </p>
            </div>
            <Button
              href="/products"
              variant="secondary"
              size="sm"
              className="border-[#2D2724] text-[#F4EBDD] hover:bg-[#F4EBDD] hover:text-[#11100F] shrink-0"
            >
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
                ctaHref={`/products/${product.slug}`}
                externalUrl={product.externalUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ────────────────────────────────────────────────── */}
      <section className="section-py bg-[#F4EBDD]" aria-labelledby="testimonials-heading">
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
          <p className="mt-8 text-xs text-center text-[#8F827B]">
            * Testimonials subject to final verification.
          </p>
        </div>
      </section>

      {/* ─── FINAL CTA ───────────────────────────────────────────────────── */}
      <section className="section-py bg-[#641C2D] text-[#F4EBDD]" aria-label="Call to action">
        <div className="container-xl text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
            Ready to build something great?
          </h2>
          <p className="mt-4 text-base md:text-lg text-[#EFE4D2] max-w-xl mx-auto">
            Tell us about your project and we'll set up a free discovery call.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="bg-[#F4EBDD] text-[#641C2D] border-[#F4EBDD] hover:bg-white hover:text-[#641C2D]"
            >
              Start a Project
            </Button>
            <Button
              href="/work"
              variant="ghost"
              size="lg"
              className="text-[#F4EBDD] hover:text-white underline underline-offset-4"
            >
              Explore Our Work <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
