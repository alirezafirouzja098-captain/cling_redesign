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
      <section className="bg-[#0B1120] py-20 md:py-28" aria-label="Contact hero">
        <div className="container-xl">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#06B6D4]">
              Contact Us
            </span>
            <h1 className="font-display mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
              Let's build something great.
            </h1>
            <p className="mt-6 text-lg text-[#94A3B8] leading-relaxed">
              Fill out the form below and we'll get back to you within one business day to set up a free discovery call.
            </p>
          </div>
        </div>
      </section>

      <section className="section-py bg-[#F8FAFC]">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left column: Info */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div>
                <h2 className="font-display text-2xl font-bold text-[#0F172A] mb-2">Get in touch</h2>
                <p className="text-[#475569]">Have a question or want to work together? We'd love to hear from you.</p>
              </div>

              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-[#94A3B8] mb-1">Direct Call</h3>
                  <a href={`tel:${company.contact.phone}`} className="text-lg font-medium text-[#4F46E5] hover:underline">
                    {company.contact.phone}
                  </a>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-[#94A3B8] mb-1">Email</h3>
                  <a href={`mailto:${company.contact.email}`} className="text-lg font-medium text-[#4F46E5] hover:underline">
                    {company.contact.email}
                  </a>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-[#94A3B8] mb-2">Offices</h3>
                  <div className="space-y-3 text-sm text-[#475569]">
                    {company.contact.offices.map((off) => (
                      <div key={off.city} className="border-l-2 border-indigo-200 pl-3">
                        <p className="font-semibold text-[#0F172A]">{off.city}</p>
                        <p className="text-xs text-[#64748B] mt-0.5">{off.address}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                   <h3 className="text-xs font-semibold uppercase tracking-widest text-[#94A3B8] mb-2">Connect</h3>
                   <div className="flex gap-4">
                     {company.socials.linkedin && (
                       <a href={company.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#475569] hover:text-[#4F46E5] transition-colors font-medium">LinkedIn</a>
                     )}
                     {company.socials.instagram && (
                       <a href={company.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-[#475569] hover:text-[#4F46E5] transition-colors font-medium">Instagram</a>
                     )}
                   </div>
                </div>

                <div className="p-6 mt-4 rounded-xl bg-indigo-50 border border-indigo-100">
                  <h3 className="font-display font-semibold text-indigo-900 mb-2">What happens next?</h3>
                  <ul className="text-sm text-indigo-800 space-y-2">
                    <li>1. We review your requirements.</li>
                    <li>2. We schedule a free discovery call.</li>
                    <li>3. We provide a tailored proposal.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right column: Form */}
            <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-2xl border border-[#E2E8F0] shadow-sm">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
