"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminNav() {
  const pathname = usePathname();
  
  const navItems = [
    { href: "/admin/services", label: "Services", icon: "🛠️" },
    { href: "/admin/courses", label: "Courses", icon: "📚" },
    { href: "/admin/logs", label: "Client Logs", icon: "📋" },
    { href: "/admin/newclient", label: "New Client", icon: "➕" },
    { href: "/admin/notes", label: "Notes", icon: "📝" },
  ];

  return (
    <nav className="fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-slate-800 to-slate-900 text-white shadow-2xl z-50">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-6 border-b border-slate-700">
          <h2 className="text-xl font-bold text-amber-400">Admin Panel</h2>
          <p className="text-xs text-slate-400 mt-1">Nutritionist CRM</p>
        </div>
        {/* Navigation Items */}
        <div className="flex-1 py-6 px-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                pathname === item.href
                  ? "bg-amber-500 text-slate-900 font-semibold shadow-lg"
                  : "text-slate-300 hover:bg-slate-700 hover:text-white"
              }`}
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-sm">{item.label}</span>
            </Link>
          ))}
        </div>
        {/* Footer */}
        <div className="p-4 border-t border-slate-700">
          <Link
              href="/login"
            className="flex items-center justify-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
          >
            <span>🚪</span>
            <span className="text-sm font-medium">Logout</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
