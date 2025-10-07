import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import BrandHeader from "@/components/BrandHeader";
import Footer from "@/components/Footer";
import { brand } from "@/lib/brand";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${brand.name} | Marketplace CRM`,
  description: "Client storefront + lightweight CRM for a nutritionist",
  icons: { icon: "/favicon.jpg" }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen`}>
        <BrandHeader />
        <main className="mx-auto max-w-6xl p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
