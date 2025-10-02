import { brand } from "@/lib/brand";
export default function Footer() {
  return (
    <footer className="border-t mt-10">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-brand.ink/80 flex items-center justify-between">
        <span>© {new Date().getFullYear()} {brand.name}</span>
        <a href="mailto:marcus@bullishmindsai.co.site" className="hover:text-brand">Contact</a>
      </div>
    </footer>
  );
}
