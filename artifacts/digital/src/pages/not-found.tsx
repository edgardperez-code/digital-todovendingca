import { Link } from "wouter";
import { AlertCircle, MessageCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] w-full flex items-center justify-center bg-slate-900 pt-16 px-4">
      <div className="max-w-md text-center">
        <div className="flex justify-center mb-4">
          <AlertCircle className="h-10 w-10 text-blue-400" />
        </div>
        <h1 className="text-2xl font-bold text-white mb-3">Página no encontrada</h1>
        <p className="text-slate-400 text-sm mb-8">
          La página que buscas no existe o fue movida. Vuelve al inicio o escríbenos por WhatsApp.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200"
          >
            Volver al inicio
          </Link>
          <a
            href="https://wa.me/584120836206"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200"
          >
            <MessageCircle className="w-4 h-4" />
            Escribir por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
