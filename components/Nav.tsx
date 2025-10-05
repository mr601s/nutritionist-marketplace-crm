"use client";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto max-w-6xl px-4 py-2 flex gap-4">
        <Link href="/" className="hover:text-brand">Services</Link>
        <Link href="/vendors" className="hover:text-brand">Vendors</Link>
        <Link href="/intake" className="hover:text-brand">New Client</Link>
        <Link href="/cart" className="hover:text-brand">Cart</Link>
        <Link href="/login" className="ml-auto btn-brand">Login</Link>
      </div>
    </nav>
  );
}

{/* AUTO-ADDED */} <Link href="/courses" className="inline-flex items-center rounded-lg px-4 py-2 bg-emerald-700 text-white hover:bg-emerald-800">Courses</Link>