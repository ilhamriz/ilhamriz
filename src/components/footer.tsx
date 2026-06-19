// import { ArrowUpRight } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <span className="text-sm text-muted">Muhammad Ilham Rizky</span>
        <span className="order-last text-xs text-muted sm:order-none">
          © 2025 · Built with Next.js
        </span>
        <a
          href="https://www.linkedin.com/in/muhammad-ilham-rizky"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-text"
        >
          LinkedIn
          {/* <ArrowUpRight className="h-3.5 w-3.5" /> */}
        </a>
      </div>
    </footer>
  );
}
