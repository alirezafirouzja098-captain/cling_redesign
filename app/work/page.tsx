import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { WorkFilter } from "@/components/sections/WorkFilter";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Our Work — Portfolio",
  description:
    "Browse Cling Info Tech's portfolio of delivered projects across web, mobile, AI/ML, ERP, and 3D animation. Real solutions, measurable results.",
};

export default function WorkPage() {
  return (
    <>
      {/* Dark Hero */}
      <section
        className="bg-[#11100F] py-20 md:py-28 border-b border-[#262220]"
        aria-label="Work portfolio hero"
      >
        <div className="container-xl">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D8CBB9]">
              Portfolio of Delivered Work
            </span>
            <h1 className="font-display mt-4 text-4xl md:text-6xl font-bold text-[#F4EBDD] tracking-tight leading-[1.1]">
              Projects that speak for themselves.
            </h1>
            <p className="mt-6 text-base md:text-lg text-[#A89C92] leading-relaxed max-w-2xl">
              From enterprise healthcare platforms to real-time AI computer vision models — every project here started with an operational challenge and shipped as a high-performance system.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="bg-[#EFE4D2] border-b border-[#D8CBB9]"
      >
        <div className="container-xl py-3">
          <ol className="flex items-center gap-2 text-xs md:text-sm text-[#665B57]">
            <li>
              <Link href="/" className="hover:text-[#641C2D] transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true"><ChevronRight size={14} /></li>
            <li className="text-[#171514] font-semibold" aria-current="page">
              Work
            </li>
          </ol>
        </div>
      </nav>

      {/* Filter + Grid (Client Component) */}
      <WorkFilter />

      {/* Bottom CTA */}
      <section className="section-py bg-[#641C2D] text-[#F4EBDD]">
        <div className="container-xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
            Ready to be our next case study?
          </h2>
          <p className="mt-4 text-base text-[#EFE4D2] max-w-lg mx-auto leading-relaxed">
            Share your operational challenge with us and we&apos;ll put together a tailored architecture proposal.
          </p>
          <Button
            href="/contact"
            variant="secondary"
            size="lg"
            className="mt-8 bg-[#F4EBDD] text-[#641C2D] border-[#F4EBDD] hover:bg-white hover:text-[#641C2D]"
          >
            Start a Project
          </Button>
        </div>
      </section>
    </>
  );
}
