"use client";
import Link from "next/link";
import Image from "next/image";
import { brand } from "@/lib/brand";

export default function BrandHeader() {
  return (
    <header className="border-b bg-gradient-to-r from-white to-[var(--brand-cream)] backdrop-blur-sm shadow-sm transition-all duration-300">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group transition-transform duration-200 hover:scale-[1.02]">
            <div className="relative">
              <Image
                src="/logo.jpg"
                alt={brand.name}
                width={48}
                height={48}
                className="rounded-full shadow-md ring-2 ring-white transition-all duration-200 group-hover:ring-[var(--brand-sage)]"
                priority
              />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
            </div>
            <div className="leading-tight">
              <div
                className="font-bold text-xl tracking-tight transition-colors duration-200"
                style={{ color: brand.colors.primary }}
              >
                {brand.name}
              </div>
              <div className="text-sm font-medium" style={{ color: "var(--brand-sage)" }}>
                {brand.tagline}
              </div>
            </div>
          </Link>
          <div className="hidden sm:flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm font-medium" style={{ color: "var(--brand-sage)" }}>
              <span className="inline-flex items-center gap-1">
                <span className="text-base">🥗</span>
                Nutrition
              </span>
              <span className="text-gray-300">•</span>
              <span className="inline-flex items-center gap-1">
                <span className="text-base">💪</span>
                Coaching
              </span>
              <span className="text-gray-300">•</span>
              <span className="inline-flex items-center gap-1">
                <span className="text-base">📋</span>
                Plans
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
