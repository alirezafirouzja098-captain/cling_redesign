import Link from "next/link";
import { navigation } from "@/data/navigation";
import { company } from "@/data/company";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#11100F] text-[#A89C92] border-t border-[#262220]">
      <div className="container-xl py-16 md:py-20">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            <Link href="/" className="font-display font-bold text-xl text-[#F4EBDD]" aria-label="Home">
              <span className="text-[#8A263D]">Cling</span> Info Tech
            </Link>
            <p className="text-sm leading-relaxed text-[#A89C92]">
              {company.description}
            </p>
            <div className="text-xs text-[#8F827B] space-y-1.5 pt-3 border-t border-[#262220]">
              <p className="font-semibold text-[#F4EBDD]">Noida &bull; Pune &bull; Moradabad</p>
              <p className="text-[11px] text-[#8F827B]">130-132, 2nd Fl, Wave Galleria, Wave City, Noida - 201015</p>
              <p className="pt-0.5">
                <a href="tel:+918264469132" className="text-[#D8CBB9] hover:text-white font-medium transition-colors">
                  +91 8264469132
                </a>
                {" "}&bull;{" "}
                <a href="mailto:info@clinginfotech.com" className="text-[#A89C92] hover:text-white transition-colors">
                  info@clinginfotech.com
                </a>
              </p>
            </div>
            <div className="flex items-center gap-4 pt-1">
              {company.socials.instagram && (
                <a
                  href={company.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8F827B] hover:text-[#F4EBDD] transition-colors"
                  aria-label="Instagram"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="3" ry="3"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
              )}
              {company.socials.linkedin && (
                <a
                  href={company.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8F827B] hover:text-[#F4EBDD] transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
              )}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold text-[#F4EBDD] uppercase tracking-widest mb-5">
              Services
            </h3>
            <ul className="flex flex-col gap-3">
              {navigation.footer.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#A89C92] hover:text-[#F4EBDD] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-bold text-[#F4EBDD] uppercase tracking-widest mb-5">
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              {navigation.footer.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#A89C92] hover:text-[#F4EBDD] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xs font-bold text-[#F4EBDD] uppercase tracking-widest mb-5">
              Resources
            </h3>
            <ul className="flex flex-col gap-3">
              {navigation.footer.resources.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#A89C92] hover:text-[#F4EBDD] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[#262220] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#8F827B]">
            &copy; {year} {company.legalName}. All rights reserved.
          </p>
          <p className="text-xs text-[#8F827B]">
            Built with care by the Cling team.
          </p>
        </div>
      </div>
    </footer>
  );
}
