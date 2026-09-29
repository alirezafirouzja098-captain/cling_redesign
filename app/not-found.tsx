import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description: "The page you are looking for could not be found.",
};

export default function NotFound() {
  return (
    <section className="flex-grow flex items-center justify-center py-24 section-py">
      <div className="container-xl text-center max-w-xl mx-auto">
        <div className="text-8xl font-display font-bold text-gradient mb-6">404</div>
        <h1 className="text-3xl font-display font-bold text-[#0F172A] mb-4">Page not found</h1>
        <p className="text-[#475569] mb-10">
          We couldn't find the page you're looking for. It may have moved, or the link might be incorrect.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/" variant="primary" size="lg">
            <ArrowLeft size={18} /> Back to Home
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
