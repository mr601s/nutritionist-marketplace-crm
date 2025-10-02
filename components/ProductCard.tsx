"use client";
import Link from "next/link";

export default function ProductCard({ item }: { item: { id:string; name:string; price:number; description:string; href:string }}) {
  return (
    <div className="card">
      <h3 className="font-medium">{item.name}</h3>
      <p className="text-slate-600 text-sm mb-2">{item.description}</p>
      <div className="flex items-center justify-between">
        <span className="font-semibold" style={{color:"#2F6D5B"}}>${item.price}</span>
        <Link href={item.href} className="btn-brand">Select</Link>
      </div>
    </div>
  );
}
