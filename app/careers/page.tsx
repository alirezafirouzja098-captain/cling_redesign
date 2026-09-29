import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";
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
      <section className="bg-[#11100F] py-20 md:py-28 text-center border-b border-[#262220]" aria-label="Careers hero">
        <div className="container-xl max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D8CBB9]">
            Careers at Cling
          </span>
          <h1 className="font-display mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-[#F4EBDD] tracking-tight leading-tight">
            Do the best work of your career.
          </h1>
          <p className="mt-6 text-base md:text-lg text-[#A89C92] leading-relaxed">
            We are always looking for talented engineers, designers, and systems architects to join our growing team.
          </p>
        </div>
      </section>

      <section className="section-py bg-[#F4EBDD] border-b border-[#D8CBB9]">
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
              <div key={r.title} className="p-6 rounded-md bg-[#FAF6EF] border border-[#D8CBB9]">
                <CheckCircle size={22} className="text-[#641C2D] mb-4" />
                <h3 className="font-display font-bold text-base text-[#171514] mb-2">{r.title}</h3>
                <p className="text-xs md:text-sm text-[#665B57] leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-[#EFE4D2]">
        <div className="container-xl max-w-3xl mx-auto text-center">
          <SectionHeading
            heading="Open Positions"
            align="center"
            className="mb-8"
          />
          <div className="bg-[#FAF6EF] p-10 md:p-14 rounded-md border border-[#D8CBB9]">
            <h3 className="text-xl font-bold text-[#171514] mb-3 font-display">
              No open positions listed at this time.
            </h3>
            <p className="text-sm text-[#665B57] mb-8 leading-relaxed">
              We&apos;re not actively recruiting right now, but we always welcome conversations with exceptional talent. Check back soon or send your credentials proactively.
            </p>
            <p className="text-[11px] text-[#8F827B] uppercase tracking-widest mb-5 font-bold">
              [CONTENT TO VERIFY]
            </p>
            <Button href="mailto:info@clinginfotech.com" variant="primary">
              Email Your Resume
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
