import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/584120836206?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20una%20p%C3%A1gina%20web%20para%20mi%20negocio"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp a TodoVending Digital"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-400 text-white shadow-lg shadow-green-900/50 hover:shadow-green-500/40 transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
