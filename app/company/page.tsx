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
      <section className="bg-[#0B1120] py-20 md:py-28 relative overflow-hidden" aria-label="Company hero">
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #4F46E5, transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="container-xl relative z-10 max-w-4xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#06B6D4]">
            Who We Are
          </span>
          <h1 className="font-display mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Building the technology that powers enterprise growth.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[#94A3B8] leading-relaxed max-w-2xl mx-auto">
            From our headquarters in Noida to branch offices in Pune and Moradabad, we partner with businesses worldwide to engineer custom digital platforms.
          </p>
        </div>
      </section>

      {/* ─── OUR STORY & STATS ────────────────────────────────────────────── */}
      <section className="section-py border-b border-[#E2E8F0]">
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
                  <CheckCircle size={20} className="text-[#4F46E5] shrink-0 mt-1" />
                  <p className="text-sm text-[#475569]">
                    <strong>Client-Centric Philosophy:</strong> We build tailored architectures without relying on pre-packaged templates.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-[#4F46E5] shrink-0 mt-1" />
                  <p className="text-sm text-[#475569]">
                    <strong>Cross-Functional Excellence:</strong> Integrated team covering full-stack engineering, mobile, AI vision, and enterprise ERP.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-[#E2E8F0]">
                <div className="text-3xl font-display font-bold text-[#4F46E5]">{company.stats[0].value}</div>
                <div className="mt-1 text-sm font-medium text-[#475569]">{company.stats[0].label}</div>
              </div>
              <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-[#E2E8F0]">
                <div className="text-3xl font-display font-bold text-[#4F46E5]">{company.stats[1].value}</div>
                <div className="mt-1 text-sm font-medium text-[#475569]">{company.stats[1].label}</div>
              </div>
              <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-[#E2E8F0]">
                <div className="text-3xl font-display font-bold text-[#4F46E5]">{company.stats[2].value}</div>
                <div className="mt-1 text-sm font-medium text-[#475569]">{company.stats[2].label}</div>
              </div>
              <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-[#E2E8F0]">
                <div className="text-3xl font-display font-bold text-[#4F46E5]">{company.stats[3].value}</div>
                <div className="mt-1 text-sm font-medium text-[#475569]">{company.stats[3].label}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VISION & MISSION ─────────────────────────────────────────────── */}
      <section className="section-py bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-[#E2E8F0] shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#4F46E5]">Guiding Star</span>
              <h2 className="font-display text-2xl font-bold text-[#0F172A] mt-2">Our Vision</h2>
              <p className="mt-4 text-[#475569] leading-relaxed">{company.vision}</p>
            </div>
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-[#E2E8F0] shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#06B6D4]">Commitment</span>
              <h2 className="font-display text-2xl font-bold text-[#0F172A] mt-2">Our Mission</h2>
              <p className="mt-4 text-[#475569] leading-relaxed">{company.mission}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TIMELINE / MILESTONES ───────────────────────────────────────── */}
      <section className="section-py border-b border-[#E2E8F0]" aria-labelledby="milestones-heading">
        <div className="container-xl max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Milestones"
            heading="A journey of continuous innovation."
            align="center"
            id="milestones-heading"
            className="mb-14"
          />
          <div className="space-y-6">
            {company.milestones.map((m) => (
              <div key={m.year} className="flex items-start gap-6 p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <div className="text-xl font-bold font-display text-[#4F46E5] shrink-0 w-24">{m.year}</div>
                <p className="text-[#475569] leading-relaxed text-sm md:text-base">{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LEADERSHIP TEAM ──────────────────────────────────────────────── */}
      <section id="team" className="section-py scroll-mt-20 border-b border-[#E2E8F0]">
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
          <div className="mt-16 pt-12 border-t border-[#E2E8F0]">
            <h3 className="font-display text-xl font-bold text-center text-[#0F172A] mb-8">
              Technical & Operational Leads
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {company.keyTeam.map((member) => (
                <div key={member.name} className="flex flex-col items-center text-center p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden mb-3 border-2 border-indigo-100 shadow-sm">
                    <Image src={member.image} alt={member.name} fill className="object-cover" sizes="96px" />
                  </div>
                  <h4 className="font-bold text-[#0F172A] text-sm font-display">{member.name}</h4>
                  <p className="text-xs text-[#4F46E5] font-medium mt-0.5">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── OFFICE LOCATIONS ─────────────────────────────────────────────── */}
      <section className="section-py bg-[#F8FAFC] border-b border-[#E2E8F0]" aria-labelledby="offices-heading">
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
              <div key={office.city} className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-[#4F46E5] flex items-center justify-center mb-4">
                    <Building2 size={20} />
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#0F172A]">{office.city}</h3>
                  <p className="text-xs text-[#64748B] mt-2 leading-relaxed">{office.address}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#F1F5F9] flex items-center gap-2 text-xs text-[#4F46E5] font-medium">
                  <MapPin size={14} /> Active Office
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIES WE SERVE ─────────────────────────────────────────── */}
      <section className="section-py border-b border-[#E2E8F0]">
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
                className="px-5 py-2.5 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] font-medium text-sm shadow-sm"
              >
                {domain}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="section-py bg-[#4F46E5]">
        <div className="container-xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
            Let's build your next digital platform together.
          </h2>
          <p className="mt-4 text-indigo-100 max-w-lg mx-auto">
            Speak directly with our engineering team to explore timelines and architectures.
          </p>
          <Button href="/contact" variant="secondary" size="lg" className="mt-8 bg-white text-[#4F46E5] border-white hover:bg-indigo-50">
            Start a Conversation <ArrowRight size={18} />
          </Button>
        </div>
      </section>
    </>
  );
}
