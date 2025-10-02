import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import BrandHeader from "@/components/BrandHeader";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { brand } from "@/lib/brand";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${brand.name} | Marketplace CRM`,
  description: "Client storefront + lightweight CRM for a nutritionist",
  icons: { icon: "/favicon.svg" }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-white text-slate-900`}>
        <div className="relative">
          <div className="absolute inset-0 -z-10 opacity-5 bg-[radial-gradient(600px_circle_at_0_0,theme(colors.brand.DEFAULT),transparent_60%)]" />
          <BrandHeader />
          <Nav />
          <main className="mx-auto max-w-6xl p-4">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
