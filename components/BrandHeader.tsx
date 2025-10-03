"use client";
import Link from "next/link";
import Image from "next/image";
import { brand } from "@/lib/brand";

export default function BrandHeader() {
  return (
    <header className="border-b bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-3">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.jpg" alt={brand.name} width={36} height={36} className="rounded-full" priority />
          <div className="leading-tight">
            <div className="font-semibold text-[17px]" style={{color:brand.colors.primary}}>{brand.name}</div>
            <div className="text-xs text-brand.sage">{brand.tagline}</div>
          </div>
        </Link>
        <div className="ml-auto flex items-center gap-3 text-sm">
          <span className="hidden sm:inline text-brand.sage">Nutrition • Coaching • Plans</span>
        </div>
      </div>
    </header>
  );
}

{/* AUTO-ADDED */} <Link href="/courses" className="inline-flex items-center rounded-lg px-4 py-2 bg-emerald-700 text-white hover:bg-emerald-800">Courses</Link>