/**
 * Badge "Creado por TodoVending Digital"
 *
 * USO EN PROYECTOS REACT + TAILWIND:
 * --------------------------------------------------
 * Copia el componente <MadeByBadgeDark /> o <MadeByBadgeLight />
 * y pégalo al final del <footer> de tu proyecto.
 *
 * Variante oscura → fondos oscuros/dark mode
 * Variante clara  → fondos blancos/claros
 *
 * Asegúrate de tener Tailwind CSS y Lucide React instalados.
 */

import { Globe, ExternalLink } from "lucide-react";

const AGENCY_URL = "https://digital.todovendingca.com";
const AGENCY_LABEL = "Digital.TodoVendingca.com";

export function MadeByBadgeDark() {
  return (
    <a
      href={AGENCY_URL}
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
          {AGENCY_LABEL}
        </span>
      </span>
      <ExternalLink className="h-3 w-3 flex-shrink-0 text-slate-600 transition-colors group-hover:text-blue-400" />
    </a>
  );
}

export function MadeByBadgeLight() {
  return (
    <a
      href={AGENCY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-md hover:shadow-blue-100"
    >
      <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 shadow-sm">
        <Globe className="h-3 w-3 text-white" />
      </span>
      <span className="text-xs text-slate-500 transition-colors group-hover:text-slate-600">
        Página web creada por{" "}
        <span className="font-semibold text-blue-600 group-hover:text-blue-500">
          {AGENCY_LABEL}
        </span>
      </span>
      <ExternalLink className="h-3 w-3 flex-shrink-0 text-slate-300 transition-colors group-hover:text-blue-400" />
    </a>
  );
}

export default function MadeByBadge() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-16 bg-slate-50 p-10">
      <div className="w-full max-w-3xl space-y-12">
        <div className="text-center">
          <h1 className="mb-2 text-2xl font-bold text-slate-800">
            Badge "Creado por TodoVending Digital"
          </h1>
          <p className="text-sm text-slate-500">
            Colócalo al final del footer de cada página web que construyas para tus clientes
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col items-center gap-4 rounded-2xl bg-slate-900 p-8 shadow-xl ring-1 ring-slate-800">
            <span className="mb-2 rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-400">
              Variante Oscura
            </span>
            <MadeByBadgeDark />
            <p className="mt-2 text-center text-xs text-slate-600">
              Para footers con fondo oscuro o dark mode
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 rounded-2xl bg-slate-100 p-8 shadow ring-1 ring-slate-200">
            <span className="mb-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-400 shadow-sm ring-1 ring-slate-200">
              Variante Clara
            </span>
            <MadeByBadgeLight />
            <p className="mt-2 text-center text-xs text-slate-500">
              Para footers con fondo blanco o claro
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-500">
            <span className="h-px flex-1 bg-slate-200" />
            Cómo integrarlo en React + Tailwind
            <span className="h-px flex-1 bg-slate-200" />
          </h2>
          <pre className="overflow-x-auto rounded-xl bg-slate-900 p-5 text-xs leading-relaxed text-green-400">
{`// 1. Copia el componente a tu proyecto
// 2. Importa y úsalo en el footer:

import { MadeByBadgeDark } from "./MadeByBadge";
// o
import { MadeByBadgeLight } from "./MadeByBadge";

// En tu footer:
<footer>
  {/* ...tu contenido... */}
  <div className="flex justify-center py-4">
    <MadeByBadgeDark />
  </div>
</footer>`}
          </pre>
        </div>
      </div>
    </div>
  );
}
