import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import BrandHeader from "@/components/BrandHeader";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Nutritionist Marketplace CRM",
  description: "Client storefront + lightweight CRM for a nutritionist",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900">
        <BrandHeader />
        <Nav />
        <main className="mx-auto max-w-6xl p-4">{children}</main>
      </body>
    </html>
  );
}
