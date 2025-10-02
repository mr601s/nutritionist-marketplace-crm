"use client";
import Link from "next/link";
import Image from "next/image";
import { brand } from "@/lib/brand";

export default function BrandHeader() {
  return (
    <header className="border-b">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-3">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt={brand.name} width={28} height={28} priority />
          <span className="font-semibold">{brand.name}</span>
        </Link>
        <span className="ml-auto text-sm text-slate-600">{brand.tagline}</span>
      </div>
    </header>
  );
}
