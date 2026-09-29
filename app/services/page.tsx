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
      <section className="bg-[#0B1120] py-20 md:py-28" aria-label="Services hero">
        <div className="container-xl">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#06B6D4]">
              What We Do
            </span>
            <h1 className="font-display mt-4 text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1]">
              Full-stack capabilities. Zero compromise.
            </h1>
            <p className="mt-6 text-lg text-[#94A3B8] leading-relaxed max-w-2xl">
              We cover the complete technology lifecycle — from strategy and design to engineering, deployment, and growth. One partner for everything you need.
            </p>
            <Button href="/contact" variant="primary" size="lg" className="mt-8">
              Start a Project
            </Button>
          </div>
        </div>
      </section>

      {/* Services by Category */}
      {serviceCategories.map((cat) => {
        const catServices = services.filter((s) => cat.services.includes(s.id));
        return (
          <section key={cat.name} className="section-py border-b border-[#E2E8F0] last:border-0">
            <div className="container-xl">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-10">
                <div className="max-w-xl">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#4F46E5]">
                    {cat.name}
                  </span>
                  <p className="mt-2 text-[#475569]">{cat.description}</p>
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
      <section className="section-py bg-[#F8FAFC]">
        <div className="container-xl text-center">
          <h2 className="font-display text-3xl font-bold text-[#0F172A]">
            Not sure which service you need?
          </h2>
          <p className="mt-3 text-[#475569] max-w-lg mx-auto">
            Tell us about your business challenge and we'll figure out the right approach together.
          </p>
          <Button href="/contact" variant="primary" size="lg" className="mt-8">
            Book a Free Discovery Call
          </Button>
        </div>
      </section>
    </>
  );
}
