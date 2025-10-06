"use client";
import Link from "next/link";

interface ProductCardProps {
  item: {
    id: string;
    name: string;
    price: number;
    description: string;
    href: string;
  };
}

export default function ProductCard({ item }: ProductCardProps) {
  return (
    <div className="card group">
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-semibold text-lg" style={{ color: "var(--brand-ink)" }}>
          {item.name}
        </h3>
        <span
          className="text-xs uppercase tracking-wide font-medium px-2 py-1 rounded-full"
          style={{ backgroundColor: "var(--brand-cream)", color: "var(--brand)" }}
        >
          Featured
        </span>
      </div>
      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
        {item.description}
      </p>
      <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
        <div>
          <span className="text-2xl font-bold" style={{ color: "var(--brand)" }}>
            ${item.price}
          </span>
          <span className="text-gray-500 text-sm ml-1">/session</span>
        </div>
        <Link href={item.href} className="btn-brand">
          Select
        </Link>
      </div>
    </div>
  );
}
