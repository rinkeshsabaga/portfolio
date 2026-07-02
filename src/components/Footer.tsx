import Link from "next/link";
import { ctaLink, navLinks, profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border/70">
      <div className="container-x flex flex-col items-center justify-between gap-6 py-10 sm:flex-row">
        <div className="text-center sm:text-left">
          <div className="text-sm font-medium text-fg">{profile.name}</div>
          <div className="text-xs text-faint">
            {profile.headline} · {profile.location}
          </div>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          {[...navLinks, ctaLink].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-xs text-muted transition-colors hover:text-fg"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted transition-colors hover:text-fg"
          >
            LinkedIn
          </a>
        </nav>
      </div>
      <div className="container-x pb-8 text-center text-xs text-faint sm:text-left">
        © {new Date().getFullYear()} {profile.name}. Built with Next.js &amp; Tailwind.
      </div>
    </footer>
  );
}
