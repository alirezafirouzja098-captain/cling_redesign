import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TeamCard } from "@/components/ui/Cards";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Company — About Us & Our Team",
  description:
    "Learn about Cling Info Tech's story, mission, and the leadership team driving our end-to-end IT solutions.",
};

export default function CompanyPage() {
  return (
    <>
      <section className="bg-[#0B1120] py-20 md:py-28 text-center" aria-label="Company hero">
        <div className="container-xl max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#06B6D4]">
            Who We Are
          </span>
          <h1 className="font-display mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Building the technology that builds your business.
          </h1>
          <p className="mt-6 text-lg text-[#94A3B8] leading-relaxed">
            We are more than developers. We are product partners invested in your long-term success.
          </p>
        </div>
      </section>

      <section className="section-py border-b border-[#E2E8F0]">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeading
                heading="Our Story"
                description={company.story}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-[#E2E8F0]">
                <div className="text-3xl font-display font-bold text-[#4F46E5]">{company.stats[0].value}</div>
                <div className="mt-1 text-sm font-medium text-[#475569]">{company.stats[0].label}</div>
              </div>
              <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-[#E2E8F0]">
                <div className="text-3xl font-display font-bold text-[#4F46E5]">{company.stats[1].value}</div>
                <div className="mt-1 text-sm font-medium text-[#475569]">{company.stats[1].label}</div>
              </div>
              <div className="col-span-2 bg-[#F8FAFC] p-6 rounded-2xl border border-[#E2E8F0]">
                <div className="text-3xl font-display font-bold text-[#4F46E5]">{company.stats[2].value}</div>
                <div className="mt-1 text-sm font-medium text-[#475569]">{company.stats[2].label}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-py bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-[#E2E8F0] shadow-sm">
              <h2 className="font-display text-2xl font-bold text-[#0F172A]">Our Vision</h2>
              <p className="mt-4 text-[#475569] leading-relaxed">{company.vision}</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-[#E2E8F0] shadow-sm">
              <h2 className="font-display text-2xl font-bold text-[#0F172A]">Our Mission</h2>
              <p className="mt-4 text-[#475569] leading-relaxed">{company.mission}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="section-py scroll-mt-20 border-b border-[#E2E8F0]">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Leadership"
            heading="Meet the team."
            description="The people guiding our vision and driving your projects to success."
            align="center"
            className="mb-16"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {company.leadership.map((leader) => (
              <TeamCard
                key={leader.name}
                name={leader.name}
                role={leader.role}
                image={leader.image}
                linkedin={leader.linkedin}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="container-xl text-center">
          <SectionHeading
            heading="Industries we serve"
            align="center"
            className="mb-10"
          />
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {company.domains.map((domain) => (
              <span
                key={domain}
                className="px-5 py-2.5 rounded-full bg-white border border-[#E2E8F0] text-[#0F172A] font-medium shadow-sm"
              >
                {domain}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-[#4F46E5]">
        <div className="container-xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
            Ready to grow your business?
          </h2>
          <Button href="/contact" variant="secondary" size="lg" className="mt-8 bg-white text-[#4F46E5] border-white hover:bg-indigo-50">
            Start a Project
          </Button>
        </div>
      </section>
    </>
  );
}
