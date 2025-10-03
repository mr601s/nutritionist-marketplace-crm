"use client";
import Link from "next/link";

export default function BrandHeader() {
  return (
    <header className="border-b">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold">Planted In Nutrition</Link>
        <span className="text-sm text-slate-600">Marketplace CRM</span>
      </div>
    </header>
  );
}
