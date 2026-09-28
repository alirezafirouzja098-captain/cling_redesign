import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    template: "%s | Cling Info Tech",
    default: "IT Solutions & Web Development Services - Cling Info Tech",
  },
  description:
    "Leading IT solutions provider offering web development, mobile apps, digital marketing, ERP development & custom web portals.",
  openGraph: {
    title: "IT Solutions & Web Development Services - Cling Info Tech",
    description:
      "Leading IT solutions provider offering web development, mobile apps, digital marketing, ERP development & custom web portals.",
    url: "https://clinginfotech.com",
    siteName: "Cling Info Tech",
    images: [
      {
        url: "/images/branding/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cling Info Tech - Making Your Ideas Happen!",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/images/branding/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-white text-slate-900 min-h-screen flex flex-col`}>
        {/* Placeholder for Navbar */}
        <header className="border-b border-gray-200 bg-white sticky top-0 z-50 p-4">
          <div className="container mx-auto font-bold text-xl">Cling Info Tech</div>
        </header>
        
        {/* Main Content Area */}
        <main className="flex-grow container mx-auto p-4">
          {children}
        </main>

        {/* Placeholder for Footer */}
        <footer className="bg-slate-900 text-white p-8">
          <div className="container mx-auto text-sm text-center">
            &copy; {new Date().getFullYear()} Cling Multi Solutions Pvt Ltd. All Rights Reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
