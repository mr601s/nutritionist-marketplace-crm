"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function CustomerNav() {
  const pathname = usePathname();
  const [progressText, setProgressText] = useState("");

  const navItems = [
    { href: "/customer", label: "Customer Portal", icon: "🏠" },
    { href: "/customer/my-courses", label: "My Courses", icon: "📚" },
    { href: "/customer/progress", label: "Progress Tracker", icon: "📊" },
    { href: "/customer/appointments", label: "Upcoming Appointments", icon: "📅" },
  ];

  return (
    <nav className="nav-container sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 sm:gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === item.href 
                    ? "bg-brand-600 text-white" 
                    : "text-gray-700 hover:bg-brand-100 hover:text-brand-600"
                }`}
              >
                <span aria-hidden="true" className="mr-2">{item.icon}</span>
                <span className="hidden sm:inline">{item.label}</span>
              </Link>
            ))}
          </div>
          <Link className="btn-brand" href="/login">
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
}
