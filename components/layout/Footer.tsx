import Link from "next/link";
import { navigation } from "@/data/navigation";
import { company } from "@/data/company";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1120] text-[#94A3B8]">
      <div className="container-xl py-16 md:py-20">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <Link href="/" className="font-display font-bold text-xl text-white" aria-label="Home">
              <span className="text-[#4F46E5]">Cling</span> Info Tech
            </Link>
            <p className="text-sm leading-relaxed">
              {company.description}
            </p>
            <div className="text-xs text-[#94A3B8] space-y-1.5 pt-1 border-t border-[#1E293B]">
              <p className="font-semibold text-white">Noida &bull; Pune &bull; Moradabad</p>
              <p className="text-[11px] text-[#64748B]">130-132, 2nd Fl, Wave Galleria, Wave City, Noida - 201015</p>
              <p className="pt-0.5">
                <a href="tel:+918264469132" className="text-[#06B6D4] hover:underline font-medium">
                  +91 8264469132
                </a>
                {" "}&bull;{" "}
                <a href="mailto:info@clinginfotech.com" className="text-[#94A3B8] hover:text-white transition-colors">
                  info@clinginfotech.com
                </a>
              </p>
            </div>
            <div className="flex items-center gap-4">
              {company.socials.instagram && (
                <a
                  href={company.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#94A3B8] hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  {/* Instagram SVG */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
              )}
              {company.socials.linkedin && (
                <a
                  href={company.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#94A3B8] hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  {/* LinkedIn SVG */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
              )}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">
              Services
            </h3>
            <ul className="flex flex-col gap-3">
              {navigation.footer.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              {navigation.footer.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">
              Resources
            </h3>
            <ul className="flex flex-col gap-3">
              {navigation.footer.resources.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[#1E293B] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs">
            &copy; {year} {company.legalName}. All rights reserved.
          </p>
          <p className="text-xs">
            Built with care by the Cling team.
          </p>
        </div>
      </div>
    </footer>
  );
}
