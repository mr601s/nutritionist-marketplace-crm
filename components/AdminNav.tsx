"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminNav() {
  const pathname = usePathname();
  const navItems = [
    { href: "/admin", label: "Dashboard", icon: "🏠" },
    { href: "/services", label: "Services", icon: "🏪" },
    { href: "/vendors", label: "Vendors", icon: "👥" },
    { href: "/courses", label: "Courses", icon: "📚" },
    { href: "/intake", label: "Client Intake", icon: "➕" },
  ];

  return (
    <nav className="nav-container sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${
                  pathname === item.href ? "active" : ""
                }`}
              >
                <span aria-hidden="true" className="text-lg">{item.icon}</span>
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
