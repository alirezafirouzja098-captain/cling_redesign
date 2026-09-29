import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ChevronRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { products } from "@/data/products";
import Image from "next/image";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.id === slug);
  if (!product) return {};
  return {
    title: `${product.name} — Cling Products`,
    description: product.tagline,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.id === slug);
  if (!product) notFound();

  return (
    <>
      <nav className="border-b border-[#334155] bg-[#1E293B]" aria-label="Breadcrumb">
        <div className="container-xl py-3 flex items-center gap-2 text-sm text-[#94A3B8]">
          <Link href="/" className="hover:text-white">Home</Link>
          <ChevronRight size={14} aria-hidden="true" />
          <Link href="/products" className="hover:text-white">Products</Link>
          <ChevronRight size={14} aria-hidden="true" />
          <span className="text-white">{product.name}</span>
        </div>
      </nav>

      <section className="bg-[#0B1120] py-20 md:py-28 relative overflow-hidden">
        <div className="container-xl relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#06B6D4]">
              {product.category}
            </span>
            <h1 className="font-display mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
              {product.name}
            </h1>
            <p className="mt-5 text-xl text-white font-medium">
              {product.tagline}
            </p>
            <p className="mt-4 text-lg text-[#94A3B8] leading-relaxed">
              {product.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href={product.ctaHref} variant="primary" size="lg" className="bg-[#06B6D4] hover:bg-[#0891B2]">
                {product.cta}
              </Button>
              {product.externalUrl && (
                <a
                  href={product.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-6 py-3.5 rounded-lg border border-[#334155] text-white hover:bg-[#1E293B] text-sm font-semibold transition-colors"
                >
                  Visit Live Platform &nearr;
                </a>
              )}
            </div>
            {(product.status === "available" || product.status === "live") && (
               <div className="mt-5 text-xs font-medium text-emerald-400 flex items-center gap-2">
                 <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Production Ready &bull; Available Now
               </div>
            )}
          </div>
          <div className="relative h-[320px] sm:h-[420px] rounded-2xl overflow-hidden border border-[#334155] bg-[#0F172A] shadow-2xl">
             <Image 
               src={product.image} 
               alt={`${product.name} screenshot`}
               fill
               className="object-contain p-4 transition-transform duration-500 hover:scale-[1.02]"
               sizes="(max-width: 1024px) 100vw, 50vw"
               priority
             />
          </div>
        </div>
      </section>

      <section className="section-py border-b border-[#E2E8F0]">
        <div className="container-xl">
           <div className="max-w-3xl mb-12">
             <SectionHeading 
               eyebrow="Value Proposition"
               heading="Built for scale."
               description={`Designed specifically for ${product.targetUser}. We solve the problem of ${product.problemSolved.toLowerCase()}`}
             />
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.features.map((feature) => (
                <div key={feature} className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <CheckCircle size={24} className="text-[#06B6D4] mb-4" />
                  <h3 className="font-display font-semibold text-[#0F172A] text-lg">{feature}</h3>
                </div>
              ))}
           </div>
        </div>
      </section>

      <section className="section-py bg-[#1E293B] text-center">
        <div className="container-xl max-w-2xl">
          <h2 className="font-display text-3xl font-bold text-white">
            See {product.name} in action
          </h2>
          <p className="mt-4 text-[#94A3B8]">
            Schedule a personalized demo to see how this platform can fit into your workflow.
          </p>
          <Button href={product.ctaHref} variant="primary" size="lg" className="mt-8 bg-[#06B6D4] hover:bg-[#0891B2]">
            Book a Demo
          </Button>
          <p className="mt-4 text-xs text-[#94A3B8]">
            [CONTENT TO VERIFY — Specific product trial/demo terms]
          </p>
        </div>
      </section>
    </>
  );
}
