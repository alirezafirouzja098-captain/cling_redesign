import type { Metadata } from "next";
import Link from "next/link";
import { WorkFilter } from "@/components/sections/WorkFilter";

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
        className="bg-[#0B1120] py-20 md:py-28"
        aria-label="Work portfolio hero"
      >
        <div className="container-xl">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#06B6D4]">
              Our Work
            </span>
            <h1 className="font-display mt-4 text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1]">
              Projects that speak for themselves.
            </h1>
            <p className="mt-6 text-lg text-[#94A3B8] leading-relaxed max-w-2xl">
              From healthcare apps to AI surveillance systems — every project
              here started with a client problem and ended with a shipped
              solution.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="bg-[#F8FAFC] border-b border-[#E2E8F0]"
      >
        <div className="container-xl py-3">
          <ol className="flex items-center gap-2 text-sm text-[#94A3B8]">
            <li>
              <Link href="/" className="hover:text-[#4F46E5] transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-[#0F172A] font-medium" aria-current="page">
              Work
            </li>
          </ol>
        </div>
      </nav>

      {/* Filter + Grid (Client Component) */}
      <WorkFilter />

      {/* Bottom CTA */}
      <section className="section-py bg-[#0B1120]">
        <div className="container-xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
            Ready to be our next case study?
          </h2>
          <p className="mt-4 text-[#94A3B8] max-w-lg mx-auto leading-relaxed">
            Share your challenge with us and we&apos;ll put together a tailored
            plan.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-[#4F46E5] hover:bg-[#4338CA] text-white font-medium px-8 py-4 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </>
  );
}
