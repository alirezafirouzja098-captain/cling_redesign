import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ui/Cards";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Our Products — Software Built by Cling | Cling Info Tech",
  description:
    "Discover ClingERP and ClingPortal — purpose-built software products from Cling Info Tech, designed to solve real business challenges for SMEs and organisations.",
};

export default function ProductsPage() {
  return (
    <>
      {/* Dark Hero */}
      <section
        className="bg-[#0B1120] py-20 md:py-28"
        aria-label="Products hero"
      >
        <div className="container-xl">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#06B6D4]">
              Products
            </span>
            <h1 className="font-display mt-4 text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1]">
              Software we built.{" "}
              <span className="text-gradient">Ready to deploy.</span>
            </h1>
            <p className="mt-6 text-lg text-[#94A3B8] leading-relaxed max-w-2xl">
              Unlike our services — which are built entirely around your
              specifications — our products are pre-engineered platforms with
              proven foundations. Configure and launch faster, without
              sacrificing flexibility.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="bg-[#0F172A] border-b border-[#1E293B]"
      >
        <div className="container-xl py-3">
          <ol className="flex items-center gap-2 text-sm text-[#94A3B8]">
            <li>
              <Link
                href="/"
                className="hover:text-[#06B6D4] transition-colors"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-white font-medium" aria-current="page">
              Products
            </li>
          </ol>
        </div>
      </nav>

      {/* Products Grid */}
      <section className="section-py bg-[#0F172A]" aria-label="Products list">
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
              />
            ))}
          </div>
        </div>
      </section>

      {/* Differentiation Note */}
      <section className="section-py border-t border-[#1E293B] bg-[#0F172A]">
        <div className="container-xl">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#4F46E5]">
              Products vs Services
            </span>
            <h2 className="font-display mt-4 text-2xl md:text-3xl font-bold text-white">
              Need something fully custom?
            </h2>
            <p className="mt-4 text-[#94A3B8] leading-relaxed">
              Our products give you a production-ready starting point. If your
              requirements go beyond what a product covers, our services team
              can build anything from scratch — tailored to your exact workflow.
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
                className="border-[#334155] text-[#94A3B8] hover:bg-[#1E293B] hover:border-[#475569] hover:text-white"
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
