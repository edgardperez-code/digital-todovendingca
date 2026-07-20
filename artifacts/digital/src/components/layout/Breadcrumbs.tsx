import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs({ current }: { current: string }) {
  return (
    <nav aria-label="Breadcrumb" className="pt-28 pb-2 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <ol className="flex items-center gap-2 text-sm text-slate-500">
        <li>
          <Link href="/" className="hover:text-blue-400 transition-colors">
            Inicio
          </Link>
        </li>
        <li className="flex items-center gap-2">
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-300">{current}</span>
        </li>
      </ol>
    </nav>
  );
}
