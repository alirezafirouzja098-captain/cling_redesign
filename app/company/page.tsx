import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, MapPin, CheckCircle, Building2 } from "lucide-react";
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
      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#11100F] py-20 md:py-28 border-b border-[#262220]" aria-label="Company hero">
        <div className="container-xl max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D8CBB9]">
            Who We Are
          </span>
          <h1 className="font-display mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-[#F4EBDD] tracking-tight leading-tight">
            Building the technology that powers enterprise growth.
          </h1>
          <p className="mt-6 text-base md:text-lg text-[#A89C92] leading-relaxed max-w-2xl mx-auto">
            From our headquarters in Noida to branch offices in Pune and Moradabad, we partner with businesses worldwide to engineer custom digital platforms.
          </p>
        </div>
      </section>

      {/* ─── OUR STORY & STATS ────────────────────────────────────────────── */}
      <section className="section-py bg-[#F4EBDD] border-b border-[#D8CBB9]">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Our Journey"
                heading="From ambitious startup to 390+ delivered solutions."
                description={company.story}
              />
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-[#641C2D] shrink-0 mt-0.5" />
                  <p className="text-sm text-[#665B57]">
                    <strong className="text-[#171514]">Client-Centric Philosophy:</strong> We build tailored architectures without relying on pre-packaged templates.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-[#641C2D] shrink-0 mt-0.5" />
                  <p className="text-sm text-[#665B57]">
                    <strong className="text-[#171514]">Cross-Functional Excellence:</strong> Integrated team covering full-stack engineering, mobile, AI vision, and enterprise ERP.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {company.stats.map((stat) => (
                <div key={stat.label} className="bg-[#FAF6EF] p-6 rounded-md border border-[#D8CBB9]">
                  <div className="text-3xl font-display font-bold text-[#171514]">{stat.value}</div>
                  <div className="mt-1 text-xs font-semibold text-[#665B57] uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── VISION & MISSION ─────────────────────────────────────────────── */}
      <section className="section-py bg-[#EFE4D2] border-b border-[#D8CBB9]">
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#FAF6EF] p-8 md:p-10 rounded-md border border-[#D8CBB9]">
              <span className="text-xs font-bold uppercase tracking-widest text-[#641C2D]">Guiding Star</span>
              <h2 className="font-display text-2xl font-bold text-[#171514] mt-2">Our Vision</h2>
              <p className="mt-4 text-[#665B57] leading-relaxed text-sm md:text-base">{company.vision}</p>
            </div>
            <div className="bg-[#FAF6EF] p-8 md:p-10 rounded-md border border-[#D8CBB9]">
              <span className="text-xs font-bold uppercase tracking-widest text-[#641C2D]">Commitment</span>
              <h2 className="font-display text-2xl font-bold text-[#171514] mt-2">Our Mission</h2>
              <p className="mt-4 text-[#665B57] leading-relaxed text-sm md:text-base">{company.mission}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TIMELINE / MILESTONES ───────────────────────────────────────── */}
      <section className="section-py bg-[#F4EBDD] border-b border-[#D8CBB9]" aria-labelledby="milestones-heading">
        <div className="container-xl max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Milestones"
            heading="A journey of continuous innovation."
            align="center"
            id="milestones-heading"
            className="mb-14"
          />
          <div className="space-y-4">
            {company.milestones.map((m) => (
              <div key={m.year} className="flex items-start gap-6 p-6 rounded-md bg-[#FAF6EF] border border-[#D8CBB9]">
                <div className="text-xl font-bold font-display text-[#641C2D] shrink-0 w-24">{m.year}</div>
                <p className="text-[#665B57] leading-relaxed text-sm md:text-base">{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LEADERSHIP TEAM ──────────────────────────────────────────────── */}
      <section id="team" className="section-py scroll-mt-20 border-b border-[#D8CBB9] bg-[#EFE4D2]">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Leadership"
            heading="Meet our leadership."
            description="The directors and strategists steering our technology roadmap and partnerships."
            align="center"
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {company.leadership.map((leader) => (
              <TeamCard
                key={leader.name}
                name={leader.name}
                role={leader.role}
                image={leader.image}
                bio={leader.bio}
                linkedin={leader.linkedin}
              />
            ))}
          </div>

          {/* Key Department Leads */}
          <div className="mt-16 pt-12 border-t border-[#D8CBB9]">
            <h3 className="font-display text-xl font-bold text-center text-[#171514] mb-8">
              Technical &amp; Operational Leads
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto">
              {company.keyTeam.map((member) => (
                <div key={member.name} className="flex flex-col items-center text-center p-5 rounded-md bg-[#FAF6EF] border border-[#D8CBB9]">
                  <div className="relative w-24 h-24 rounded-md overflow-hidden mb-3 border border-[#D8CBB9]">
                    <Image src={member.image} alt={member.name} fill className="object-cover" sizes="96px" />
                  </div>
                  <h4 className="font-bold text-[#171514] text-sm font-display">{member.name}</h4>
                  <p className="text-xs font-semibold text-[#641C2D] mt-1">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── OFFICE LOCATIONS ─────────────────────────────────────────────── */}
      <section className="section-py bg-[#F4EBDD] border-b border-[#D8CBB9]" aria-labelledby="offices-heading">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Presence"
            heading="Our office locations."
            description="Headquartered in Uttar Pradesh with regional offices supporting clients across India and internationally."
            align="center"
            id="offices-heading"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {company.contact.offices.map((office) => (
              <div key={office.city} className="bg-[#FAF6EF] p-6 rounded-md border border-[#D8CBB9] flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-md bg-[#EFE4D2] text-[#641C2D] flex items-center justify-center mb-4 border border-[#D8CBB9]">
                    <Building2 size={20} />
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#171514]">{office.city}</h3>
                  <p className="text-xs text-[#665B57] mt-2 leading-relaxed">{office.address}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#D8CBB9]/60 flex items-center gap-2 text-xs text-[#641C2D] font-semibold">
                  <MapPin size={14} /> Active Office
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIES WE SERVE ─────────────────────────────────────────── */}
      <section className="section-py bg-[#EFE4D2] border-b border-[#D8CBB9]">
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
                className="px-4 py-2 rounded-md bg-[#FAF6EF] border border-[#D8CBB9] text-[#171514] font-semibold text-xs uppercase tracking-wider"
              >
                {domain}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="section-py bg-[#641C2D] text-[#F4EBDD]">
        <div className="container-xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
            Let's build your next digital platform together.
          </h2>
          <p className="mt-4 text-base md:text-lg text-[#EFE4D2] max-w-lg mx-auto">
            Speak directly with our engineering team to explore timelines and architectures.
          </p>
          <Button
            href="/contact"
            variant="secondary"
            size="lg"
            className="mt-8 bg-[#F4EBDD] text-[#641C2D] border-[#F4EBDD] hover:bg-white hover:text-[#641C2D]"
          >
            Start a Conversation <ArrowRight size={18} />
          </Button>
        </div>
      </section>
    </>
  );
}
