"use client";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="border-b bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-2 flex gap-4">
        <Link href="/">Services</Link>
        <Link href="/vendors">Vendors</Link>
        <Link href="/intake">New Client</Link>
        <Link href="/cart">Cart</Link>
        <Link href="/login" className="ml-auto">Login</Link>
      </div>
    </nav>
  );
}
