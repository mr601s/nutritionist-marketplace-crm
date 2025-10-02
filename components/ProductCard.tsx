"use client";
import Link from "next/link";

export default function ProductCard({ item }: { item: { id:string; name:string; price:number; description:string; href:string }}) {
  return (
    <div className="border rounded-lg p-4">
      <h3 className="font-medium">{item.name}</h3>
      <p className="text-slate-600 text-sm mb-2">{item.description}</p>
      <div className="flex items-center justify-between">
        <span className="font-semibold">${item.price}</span>
        <Link href={item.href} className="rounded bg-black text-white px-3 py-1 text-sm">Select</Link>
      </div>
    </div>
  );
}
