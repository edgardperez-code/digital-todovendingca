import { Link } from "wouter";
import { Globe, MessageCircle, MapPin, ExternalLink, Instagram } from "lucide-react";

const quickLinks = [
  { label: "Inicio", href: "/" },
  { label: "Desarrollo web en Lechería", href: "/desarrollo-web-lecheria" },
  { label: "Tienda online con WhatsApp", href: "/tienda-online-whatsapp" },
  { label: "E-commerce en Venezuela", href: "/ecommerce-venezuela" },
  { label: "Portafolio", href: "/portafolio" },
  { label: "Precios", href: "/precios" },
];

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="text-xl font-bold mb-3">
              <span className="text-white">TodoVending</span>
              <span className="text-blue-400"> Digital</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Tu aliado estratégico en el mundo digital. Construimos presencias web que generan resultados reales.
            </p>
            <a
              href="https://instagram.com/todovendingca"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-slate-400 hover:text-blue-400 text-sm transition-colors"
            >
              <Instagram className="w-4 h-4" />
              @todovendingca
            </a>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Páginas
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Globe className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="mailto:admin@todovendingca.com" className="hover:text-blue-400 transition-colors">
                  admin@todovendingca.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <MessageCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                <a href="https://wa.me/584120836206" className="hover:text-green-400 transition-colors">
                  +58 412-0836206
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <a
                  href="https://maps.app.goo.gl/JuHxKWCBBZS8tYwS9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  Centro Comercial Venezuela, Local 11, calle Nueva Esparta, Lechería, Anzoátegui, Venezuela
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col items-center gap-4 text-center">
          <p className="text-slate-500 text-xs leading-relaxed">
            © 2026 TodoVending C.A. — División de Soluciones Digitales. Todos los derechos reservados.
          </p>
          <a
            href="https://digital.todovendingca.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/60 px-4 py-2 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50 hover:bg-slate-800 hover:shadow-lg hover:shadow-blue-900/20"
          >
            <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 shadow-sm">
              <Globe className="h-3 w-3 text-white" />
            </span>
            <span className="text-xs text-slate-400 transition-colors group-hover:text-slate-300">
              Página web creada por{" "}
              <span className="font-semibold text-blue-400 group-hover:text-blue-300">
                Digital.TodoVendingca.com
              </span>
            </span>
            <ExternalLink className="h-3 w-3 flex-shrink-0 text-slate-600 transition-colors group-hover:text-blue-400" />
          </a>
        </div>
      </div>
    </footer>
  );
}
