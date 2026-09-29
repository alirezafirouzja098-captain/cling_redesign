import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact Us — Start a Project",
  description: "Get in touch with Cling Info Tech to discuss your next web, mobile, AI, or ERP project.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#11100F] py-20 md:py-28 border-b border-[#262220]" aria-label="Contact hero">
        <div className="container-xl">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D8CBB9]">
              Start a Conversation
            </span>
            <h1 className="font-display mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-[#F4EBDD] tracking-tight leading-tight">
              Let's build something enduring.
            </h1>
            <p className="mt-6 text-base md:text-lg text-[#A89C92] leading-relaxed">
              Submit your project details below and a senior engineering partner will contact you within one business day to discuss requirements and architectures.
            </p>
          </div>
        </div>
      </section>

      <section className="section-py bg-[#F4EBDD]">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left column: Info */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div>
                <h2 className="font-display text-2xl font-bold text-[#171514] mb-2">Get in touch</h2>
                <p className="text-[#665B57] text-sm md:text-base leading-relaxed">
                  Have an operational challenge, a product roadmap, or a custom system to build? Speak directly with our team.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#8F827B] mb-1">Direct Telephone</h3>
                  <a href={`tel:${company.contact.phone}`} className="text-lg font-bold text-[#641C2D] hover:underline">
                    {company.contact.phone}
                  </a>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#8F827B] mb-1">Inquiries &amp; RFPs</h3>
                  <a href={`mailto:${company.contact.email}`} className="text-lg font-bold text-[#641C2D] hover:underline">
                    {company.contact.email}
                  </a>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#8F827B] mb-2">Operating Offices</h3>
                  <div className="space-y-3.5 text-sm text-[#665B57]">
                    {company.contact.offices.map((off) => (
                      <div key={off.city} className="border-l-2 border-[#641C2D] pl-3.5">
                        <p className="font-bold text-[#171514]">{off.city}</p>
                        <p className="text-xs text-[#665B57] mt-0.5 leading-relaxed">{off.address}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#8F827B] mb-2">Verified Channels</h3>
                  <div className="flex gap-4">
                    {company.socials.linkedin && (
                      <a href={company.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#171514] hover:text-[#641C2D] transition-colors">LinkedIn &rarr;</a>
                    )}
                    {company.socials.instagram && (
                      <a href={company.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#171514] hover:text-[#641C2D] transition-colors">Instagram &rarr;</a>
                    )}
                  </div>
                </div>

                <div className="p-6 mt-2 rounded-md bg-[#FAF6EF] border border-[#D8CBB9]">
                  <h3 className="font-display font-bold text-sm text-[#171514] uppercase tracking-wider mb-2">What Happens Next?</h3>
                  <ul className="text-xs md:text-sm text-[#665B57] space-y-2">
                    <li>&bull; Confidential review under mutual NDA.</li>
                    <li>&bull; Architecture discovery session with technical leads.</li>
                    <li>&bull; Comprehensive scope, deliverables, and timeline proposal.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right column: Form */}
            <div className="lg:col-span-7 bg-[#FAF6EF] p-8 md:p-12 rounded-md border border-[#D8CBB9]">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
