import type { Metadata } from "next";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Careers — Join the Cling Team",
  description: "Join Cling Info Tech and help us build world-class digital products and IT solutions.",
};

export default function CareersPage() {
  const reasons = [
    { title: "Continuous Learning", desc: "We invest in your growth with dedicated learning time and training budgets." },
    { title: "Remote-friendly", desc: "Work from our office or from home — whatever helps you do your best work." },
    { title: "Modern Tech Stack", desc: "Work with React, Next.js, Python, and the latest in AI and cloud tech." },
    { title: "Health & Wellness", desc: "Comprehensive benefits to keep you and your family healthy." },
  ];

  return (
    <>
      <section className="bg-[#0B1120] py-20 md:py-28 text-center" aria-label="Careers hero">
        <div className="container-xl max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#06B6D4]">
            Careers
          </span>
          <h1 className="font-display mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Do the best work of your career.
          </h1>
          <p className="mt-6 text-lg text-[#94A3B8] leading-relaxed">
            We're always looking for talented engineers, designers, and thinkers to join our growing team.
          </p>
        </div>
      </section>

      <section className="section-py border-b border-[#E2E8F0]">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Why Cling"
            heading="Life at Cling."
            description="[CONTENT TO VERIFY — the following benefits are placeholders]"
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r) => (
              <div key={r.title} className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <CheckCircle size={24} className="text-[#4F46E5] mb-4" />
                <h3 className="font-display font-semibold text-[#0F172A] mb-2">{r.title}</h3>
                <p className="text-sm text-[#475569]">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-[#F8FAFC]">
        <div className="container-xl max-w-3xl mx-auto text-center">
          <SectionHeading
            heading="Open Positions"
            align="center"
            className="mb-8"
          />
          <div className="bg-white p-12 rounded-2xl border border-[#E2E8F0] shadow-sm">
            <h3 className="text-xl font-bold text-[#0F172A] mb-3">
              No open positions listed at this time.
            </h3>
            <p className="text-[#475569] mb-8">
              We're not actively hiring right now, but we're always happy to meet talented people. Check back soon or send your CV proactively.
            </p>
            <p className="text-xs text-[#94A3B8] uppercase tracking-widest mb-4 font-semibold">
              [CONTENT TO VERIFY]
            </p>
            <Button href="mailto:info@clinginfotech.com" variant="primary">
              Email your CV
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
