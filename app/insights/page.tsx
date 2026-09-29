import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & Blog",
  description: "Technology insights, industry news, and updates from the Cling Info Tech team.",
};

export default function InsightsPage() {
  return (
    <>
      <section className="bg-[#0B1120] py-20 md:py-28 text-center" aria-label="Insights hero">
        <div className="container-xl max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#06B6D4]">
            Insights
          </span>
          <h1 className="font-display mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Thoughts on technology & growth.
          </h1>
        </div>
      </section>

      <section className="section-py min-h-[40vh] flex flex-col items-center justify-center bg-[#F8FAFC]">
        <div className="container-xl text-center max-w-2xl mx-auto">
          <div className="bg-white p-12 rounded-2xl border border-[#E2E8F0] shadow-sm">
            <h2 className="text-2xl font-display font-bold text-[#0F172A] mb-3">
              Articles coming soon.
            </h2>
            <p className="text-[#475569]">
              We're currently writing new content. Check back soon for technology insights, case study deep-dives, and industry news from the Cling team.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
