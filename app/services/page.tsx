import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/Cards";
import { services, serviceCategories } from "@/data/services";

export const metadata: Metadata = {
  title: "Our Services — IT Solutions",
  description:
    "Explore Cling Info Tech's full range of IT services including app development, web design, ERP solutions, AI/ML, 3D animation, and digital marketing.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#11100F] py-20 md:py-28 border-b border-[#262220]" aria-label="Services hero">
        <div className="container-xl">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D8CBB9]">
              Capabilities &amp; Practice Areas
            </span>
            <h1 className="font-display mt-4 text-4xl md:text-6xl font-bold text-[#F4EBDD] tracking-tight leading-[1.1]">
              Full-stack capabilities. Zero compromise.
            </h1>
            <p className="mt-6 text-base md:text-lg text-[#A89C92] leading-relaxed max-w-2xl">
              We cover the complete technology lifecycle — from strategy and architecture to engineering, deployment, and ongoing evolution. One dedicated partner for everything you need.
            </p>
            <Button href="/contact" variant="primary" size="lg" className="mt-8">
              Start a Project
            </Button>
          </div>
        </div>
      </section>

      {/* Services by Category */}
      {serviceCategories.map((cat, idx) => {
        const catServices = services.filter((s) => cat.services.includes(s.id));
        const bgClass = idx % 2 === 0 ? "bg-[#F4EBDD]" : "bg-[#EFE4D2]";
        return (
          <section key={cat.name} className={`section-py border-b border-[#D8CBB9] ${bgClass}`}>
            <div className="container-xl">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-10">
                <div className="max-w-xl">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#641C2D]">
                    {cat.name}
                  </span>
                  <p className="mt-2 text-[#665B57] text-sm md:text-base leading-relaxed">{cat.description}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {catServices.map((svc) => (
                  <ServiceCard
                    key={svc.id}
                    title={svc.title}
                    tagline={svc.tagline}
                    category={svc.category}
                    icon={svc.icon}
                    href={`/services/${svc.id}`}
                  />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Bottom CTA */}
      <section className="section-py bg-[#FAF6EF]">
        <div className="container-xl text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#171514]">
            Not sure which service fits your roadmap?
          </h2>
          <p className="mt-3 text-sm md:text-base text-[#665B57] max-w-lg mx-auto">
            Tell us about your business challenge and we'll evaluate the right architectural approach together.
          </p>
          <Button href="/contact" variant="primary" size="lg" className="mt-8">
            Schedule a Free Consultation
          </Button>
        </div>
      </section>
    </>
  );
}
