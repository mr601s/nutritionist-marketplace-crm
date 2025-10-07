"use client";
import SidebarNav from './SidebarNav';

export default function CustomerNav() {
  const navItems = [
    { href: "/customer/services", label: "Services", icon: "🛠️" },
    { href: "/customer/courses", label: "Courses", icon: "📚" },
    { href: "/customer/progress", label: "Progress Tracking", icon: "📊" },
    { href: "/customer/notes", label: "Notes", icon: "📝" },
  ];

  return (
    <SidebarNav
      title="Customer Portal"
      navItems={navItems}
      logoutHref="/login"
    />
  );
}
