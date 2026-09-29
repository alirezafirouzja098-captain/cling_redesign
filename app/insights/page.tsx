import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & Blog",
  description: "Technology insights, industry news, and updates from the Cling Info Tech team.",
};

export default function InsightsPage() {
  return (
    <>
      <section className="bg-[#11100F] py-20 md:py-28 text-center border-b border-[#262220]" aria-label="Insights hero">
        <div className="container-xl max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D8CBB9]">
            Insights &amp; Architecture
          </span>
          <h1 className="font-display mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-[#F4EBDD] tracking-tight leading-tight">
            Thoughts on technology &amp; scale.
          </h1>
        </div>
      </section>

      <section className="section-py min-h-[40vh] flex flex-col items-center justify-center bg-[#F4EBDD]">
        <div className="container-xl text-center max-w-2xl mx-auto">
          <div className="bg-[#FAF6EF] p-10 md:p-14 rounded-md border border-[#D8CBB9]">
            <h2 className="text-2xl font-display font-bold text-[#171514] mb-3">
              Technical writings coming soon.
            </h2>
            <p className="text-sm md:text-base text-[#665B57] leading-relaxed">
              Our engineering team is preparing deep dives on distributed architecture, computer vision models, and enterprise modernization. Check back soon.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
