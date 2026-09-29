"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { navigation } from "@/data/navigation";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-[#E2E8F0]">
      <div className="container-xl">
        <nav className="flex items-center justify-between h-16 md:h-18" aria-label="Main navigation">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-display font-bold text-xl text-[#0F172A] shrink-0"
            aria-label="Cling Info Tech home"
          >
            <span className="text-[#4F46E5]">Cling</span> Info Tech
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.main.map((item) =>
              item.dropdown ? (
                <div key={item.label} className="relative">
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    onBlur={() => setTimeout(() => setOpenDropdown(null), 150)}
                    className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-[#475569] rounded-lg hover:bg-[#F8FAFC] hover:text-[#0F172A] transition-colors"
                    aria-expanded={openDropdown === item.label}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-1 w-64 rounded-xl bg-white border border-[#E2E8F0] shadow-xl py-1.5 z-50">
                      <Link
                        href={item.href}
                        className="block px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#4F46E5] hover:bg-indigo-50/50 border-b border-[#E2E8F0] mb-1"
                        onClick={() => setOpenDropdown(null)}
                      >
                        All Services Overview &rarr;
                      </Link>
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block px-4 py-2 text-sm text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0F172A] transition-colors"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors
                    ${
                      pathname === item.href
                        ? "text-[#4F46E5] bg-indigo-50"
                        : "text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0F172A]"
                    }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button href={navigation.cta.href} variant="primary" size="sm">
              {navigation.cta.label}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-[#475569] hover:bg-[#F8FAFC] transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden border-t border-[#E2E8F0] bg-white"
        >
          <div className="container-xl py-4 flex flex-col gap-1">
            {navigation.main.map((item) =>
              item.dropdown ? (
                <div key={item.label}>
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-[#475569] rounded-lg hover:bg-[#F8FAFC]"
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openDropdown === item.label && (
                    <div className="ml-4 mt-1 flex flex-col gap-1 border-l-2 border-[#E2E8F0] pl-2">
                      <Link
                        href={item.href}
                        className="block px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#4F46E5] rounded-lg hover:bg-indigo-50"
                        onClick={() => { setIsOpen(false); setOpenDropdown(null); }}
                      >
                        All Services Overview &rarr;
                      </Link>
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block px-4 py-2.5 text-sm text-[#475569] rounded-lg hover:bg-[#F8FAFC] hover:text-[#0F172A]"
                          onClick={() => { setIsOpen(false); setOpenDropdown(null); }}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-sm font-medium text-[#475569] rounded-lg hover:bg-[#F8FAFC] hover:text-[#0F172A]"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="pt-3 mt-2 border-t border-[#E2E8F0]">
              <Button
                href={navigation.cta.href}
                variant="primary"
                size="md"
                className="w-full justify-center"
                onClick={() => setIsOpen(false)}
              >
                {navigation.cta.label}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
