import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0B1120",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://clinginfotech.com"),
  title: {
    template: "%s | Cling Info Tech",
    default: "IT Solutions & Web Development Services — Cling Info Tech",
  },
  description:
    "Leading IT solutions provider offering web development, mobile apps, AI/ML, ERP development & custom web portals. 350+ happy clients, 390+ projects completed.",
  keywords: [
    "IT solutions",
    "web development",
    "mobile app development",
    "AI ML",
    "ERP development",
    "digital marketing",
    "Cling Info Tech",
  ],
  authors: [{ name: "Cling Info Tech" }],
  creator: "Cling Info Tech",
  publisher: "Cling Multi Solutions Pvt Ltd",
  robots: { index: true, follow: true },
  openGraph: {
    title: "IT Solutions & Web Development Services — Cling Info Tech",
    description:
      "Leading IT solutions provider offering web development, mobile apps, AI/ML, ERP development & custom web portals.",
    url: "https://clinginfotech.com",
    siteName: "Cling Info Tech",
    images: [
      {
        url: "/images/branding/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cling Info Tech — Making Your Ideas Happen!",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Solutions & Web Development Services — Cling Info Tech",
    description:
      "Leading IT solutions provider offering web development, mobile apps, AI/ML, ERP development & custom web portals.",
    images: ["/images/branding/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakartaSans.variable}`}>
      <body className="bg-white text-[#475569] antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
