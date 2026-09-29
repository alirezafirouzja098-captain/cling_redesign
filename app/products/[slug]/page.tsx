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
      <nav className="border-b border-[#D8CBB9] bg-[#EFE4D2]" aria-label="Breadcrumb">
        <div className="container-xl py-3 flex items-center gap-2 text-xs md:text-sm text-[#665B57]">
          <Link href="/" className="hover:text-[#641C2D] transition-colors">Home</Link>
          <ChevronRight size={14} aria-hidden="true" />
          <Link href="/products" className="hover:text-[#641C2D] transition-colors">Products</Link>
          <ChevronRight size={14} aria-hidden="true" />
          <span className="text-[#171514] font-semibold">{product.name}</span>
        </div>
      </nav>

      <section className="bg-[#11100F] py-20 md:py-28 border-b border-[#262220]">
        <div className="container-xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#D8CBB9]">
              {product.category}
            </span>
            <h1 className="font-display mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-[#F4EBDD] tracking-tight leading-tight">
              {product.name}
            </h1>
            <p className="mt-4 text-lg md:text-xl text-[#F4EBDD] font-medium">
              {product.tagline}
            </p>
            <p className="mt-3 text-base text-[#A89C92] leading-relaxed">
              {product.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href={product.ctaHref} variant="primary" size="lg">
                {product.cta}
              </Button>
              {product.externalUrl && (
                <a
                  href={product.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-3 rounded-md border border-[#2D2724] text-[#F4EBDD] hover:bg-[#1A1817] text-sm font-semibold transition-colors"
                >
                  Visit Live Platform &nearr;
                </a>
              )}
            </div>
            {(product.status === "available" || product.status === "live") && (
              <div className="mt-6 text-xs font-medium text-[#D8CBB9] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8A263D]" /> Production Ready &bull; Available for Deployment
              </div>
            )}
          </div>
          <div className="relative h-[320px] sm:h-[400px] rounded-md overflow-hidden border border-[#2D2724] bg-[#1A1817]">
            <Image 
              src={product.image} 
              alt={`${product.name} screenshot`}
              fill
              className="object-contain p-4"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section-py bg-[#F4EBDD] border-b border-[#D8CBB9]">
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
              <div key={feature} className="p-6 rounded-md bg-[#FAF6EF] border border-[#D8CBB9]">
                <CheckCircle size={22} className="text-[#641C2D] mb-4" />
                <h3 className="font-display font-bold text-[#171514] text-base md:text-lg">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-[#641C2D] text-[#F4EBDD] text-center">
        <div className="container-xl max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
            See {product.name} in action
          </h2>
          <p className="mt-4 text-base text-[#EFE4D2]">
            Schedule a personalized demo to see how this platform can fit into your business workflow.
          </p>
          <Button
            href={product.ctaHref}
            variant="secondary"
            size="lg"
            className="mt-8 bg-[#F4EBDD] text-[#641C2D] border-[#F4EBDD] hover:bg-white hover:text-[#641C2D]"
          >
            Book a Demo
          </Button>
          <p className="mt-4 text-xs text-[#EFE4D2]/80">
            [CONTENT TO VERIFY — Specific product trial/demo terms]
          </p>
        </div>
      </section>
    </>
  );
}
