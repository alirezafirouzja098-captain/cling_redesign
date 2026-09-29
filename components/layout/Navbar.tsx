"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
    <header className="sticky top-0 z-50 w-full bg-[#11100F] border-b border-[#262220]">
      <div className="container-xl">
        <nav className="flex items-center justify-between h-16 md:h-20" aria-label="Main navigation">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 shrink-0 py-1"
            aria-label="Cling Info Tech home"
          >
            <Image
              src="/images/branding/logo.png"
              alt="Cling Info Tech Logo"
              width={140}
              height={44}
              className="h-8 md:h-9 w-auto object-contain brightness-105"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1.5">
            {navigation.main.map((item) =>
              item.dropdown ? (
                <div key={item.label} className="relative">
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    onBlur={() => setTimeout(() => setOpenDropdown(null), 150)}
                    className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium transition-colors rounded-sm
                      ${
                        pathname.startsWith(item.href)
                          ? "text-[#F4EBDD] font-semibold"
                          : "text-[#D8CBB9] hover:text-white"
                      }`}
                    aria-expanded={openDropdown === item.label}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        openDropdown === item.label ? "rotate-180 text-white" : "text-[#A89C92]"
                      }`}
                    />
                  </button>
                  {openDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-1.5 w-64 rounded-md bg-[#1A1817] border border-[#2D2724] shadow-lg py-2 z-50">
                      <Link
                        href={item.href}
                        className="block px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#D8CBB9] hover:text-white hover:bg-[#25211F] border-b border-[#2D2724] mb-1"
                        onClick={() => setOpenDropdown(null)}
                      >
                        All Services Overview &rarr;
                      </Link>
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block px-4 py-2 text-sm text-[#A89C92] hover:text-white hover:bg-[#25211F] transition-colors"
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
                  className={`px-3.5 py-2 text-sm font-medium transition-colors relative
                    ${
                      pathname === item.href
                        ? "text-white font-semibold after:absolute after:bottom-0 after:left-3.5 after:right-3.5 after:h-0.5 after:bg-[#641C2D]"
                        : "text-[#D8CBB9] hover:text-white"
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
            className="lg:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-sm text-[#D8CBB9] hover:text-white hover:bg-[#1A1817] transition-colors"
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
          className="lg:hidden border-t border-[#262220] bg-[#11100F]"
        >
          <div className="container-xl py-4 flex flex-col gap-1">
            {navigation.main.map((item) =>
              item.dropdown ? (
                <div key={item.label}>
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-[#D8CBB9] hover:text-white rounded-sm hover:bg-[#1A1817]"
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openDropdown === item.label && (
                    <div className="ml-4 mt-1 flex flex-col gap-1 border-l border-[#2D2724] pl-3">
                      <Link
                        href={item.href}
                        className="block px-3 py-2 text-xs font-bold uppercase tracking-wider text-[#D8CBB9] hover:text-white"
                        onClick={() => { setIsOpen(false); setOpenDropdown(null); }}
                      >
                        All Services Overview &rarr;
                      </Link>
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block px-3 py-2 text-sm text-[#A89C92] hover:text-white"
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
                  className={`block px-4 py-3 text-sm font-medium rounded-sm
                    ${pathname === item.href ? "text-white font-semibold bg-[#1A1817]" : "text-[#D8CBB9] hover:text-white"}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="pt-4 mt-2 border-t border-[#262220]">
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
