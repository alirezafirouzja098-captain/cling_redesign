import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ui/Cards";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Our Products — Software Built by Cling",
  description:
    "Discover ClingERP, Rusho, ArvionPulse, Task Flow, Cling Sales, and ClingPortal — purpose-built platforms engineered by Cling Info Tech.",
};

export default function ProductsPage() {
  return (
    <>
      {/* Dark Hero */}
      <section
        className="bg-[#11100F] py-20 md:py-28 border-b border-[#262220]"
        aria-label="Products hero"
      >
        <div className="container-xl">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D8CBB9]">
              Proprietary Platforms
            </span>
            <h1 className="font-display mt-4 text-4xl md:text-6xl font-bold text-[#F4EBDD] tracking-tight leading-[1.1]">
              Software we built. Ready to deploy.
            </h1>
            <p className="mt-6 text-base md:text-lg text-[#A89C92] leading-relaxed max-w-2xl">
              Unlike our bespoke services — which are engineered entirely around your specifications — our products are pre-built platforms with proven production foundations. Configure and launch faster without sacrificing flexibility.
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
              <Link
                href="/"
                className="hover:text-[#641C2D] transition-colors"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true"><ChevronRight size={14} /></li>
            <li className="text-[#171514] font-semibold" aria-current="page">
              Products
            </li>
          </ol>
        </div>
      </nav>

      {/* Products Grid */}
      <section className="section-py bg-[#F4EBDD]" aria-label="Products list">
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                tagline={product.tagline}
                category={product.category}
                features={product.features}
                image={product.image}
                cta={product.cta}
                ctaHref={`/products/${product.slug}`}
                externalUrl={product.externalUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Differentiation Note */}
      <section className="section-py border-t border-[#D8CBB9] bg-[#EFE4D2]">
        <div className="container-xl">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#641C2D]">
              Products vs Services
            </span>
            <h2 className="font-display mt-4 text-2xl md:text-3xl font-bold text-[#171514]">
              Need something fully custom?
            </h2>
            <p className="mt-4 text-[#665B57] leading-relaxed text-sm md:text-base">
              Our products give you a production-ready starting point. If your requirements go beyond what a pre-built platform covers, our engineering team can build anything from scratch — tailored to your exact workflow.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Request a Demo
                <ArrowRight size={18} />
              </Button>
              <Button
                href="/services"
                variant="secondary"
                size="md"
              >
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
