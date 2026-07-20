import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, MessageCircle } from "lucide-react";

const links = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Portafolio", href: "/portafolio" },
  { label: "Precios", href: "/precios" },
  { label: "FAQ", href: "/#faq" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-1 text-xl font-bold tracking-tight select-none">
            <span className="text-white">TodoVending</span>
            <span className="text-blue-400"> Digital</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-slate-300 hover:text-white text-sm font-medium transition-colors duration-200 relative group"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-blue-400 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="https://wa.me/584120836206"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 shadow-lg shadow-green-900/40 hover:shadow-green-500/30 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              Cotizar por WhatsApp
            </a>
          </div>

          <button
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-slate-900/98 backdrop-blur-md border-t border-slate-800 px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-slate-300 hover:text-white text-sm font-medium py-1"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://wa.me/584120836206"
            className="inline-flex items-center justify-center gap-2 bg-green-500 text-white text-sm font-semibold px-5 py-2.5 rounded-lg"
          >
            <MessageCircle className="w-4 h-4" />
            Cotizar por WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}
