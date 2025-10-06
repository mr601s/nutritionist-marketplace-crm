import { brand } from "@/lib/brand";

export default function Footer() {
  return (
    <footer className="border-t mt-16 bg-gradient-to-b from-white to-[var(--brand-cream)] transition-all duration-300">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center sm:items-start gap-2">
            <span className="text-sm font-medium" style={{ color: "var(--brand-ink)" }}>
              © {new Date().getFullYear()} {brand.name}
            </span>
            <p className="text-xs text-center sm:text-left" style={{ color: "var(--brand-sage)" }}>
              Empowering your wellness journey
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="mailto:marcus@bullishmindsai.co.site"
              className="text-sm font-medium transition-all duration-200 hover:scale-105"
              style={{ color: "var(--brand-sage)" }}
            >
              ✉️ Contact
            </a>
            <a
              href="/privacy"
              className="text-sm font-medium transition-all duration-200 hover:scale-105"
              style={{ color: "var(--brand-sage)" }}
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="text-sm font-medium transition-all duration-200 hover:scale-105"
              style={{ color: "var(--brand-sage)" }}
            >
              Terms
            </a>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-gray-200 text-center">
          <p className="text-xs" style={{ color: "var(--brand-sage)" }}>
            Made with ❤️ by nutrition professionals
          </p>
        </div>
      </div>
    </footer>
  );
}
