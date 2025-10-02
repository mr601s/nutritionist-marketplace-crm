import { brand } from "@/lib/brand";
export default function Footer() {
  return (
    <footer className="border-t mt-10">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-slate-600 flex items-center justify-between">
        <span>© {new Date().getFullYear()} {brand.name}</span>
        <a className="hover:text-brand" href="mailto:marcus@bullishmindsai.co.site">Contact</a>
      </div>
    </footer>
  );
}
