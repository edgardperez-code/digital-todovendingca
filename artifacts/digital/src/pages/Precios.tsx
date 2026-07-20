import { MessageCircle, Check, Star, Shield, Clock } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { usePageMeta } from "@/hooks/use-page-meta";

const plans = [
  {
    name: "Web Presencial",
    price: "$349",
    ideal: "Doctores y emprendedores",
    delivery: "2 a 4 días hábiles",
    featured: false,
    features: [
      "Landing page profesional",
      "Diseño 100% responsivo",
      "Botón WhatsApp flotante",
      "Formulario inteligente",
      "Dominio y hosting el primer año",
      "Optimización SEO básica",
    ],
  },
  {
    name: "Tienda Digital",
    price: "$549",
    ideal: "Tiendas de ropa y catálogos",
    delivery: "6 a 7 días hábiles",
    featured: true,
    features: [
      "Todo el plan Presencial",
      "Catálogo dinámico de productos",
      "Carrito conectado a WhatsApp",
      "Panel de inventario",
      "Pagos por Pago Móvil, Zelle y transferencia",
    ],
  },
  {
    name: "E-commerce Pro",
    price: "$749",
    ideal: "Empresas consolidadas",
    delivery: "8 a 10 días hábiles",
    featured: false,
    features: [
      "Todo el plan Tienda Digital",
      "Registro de usuarios",
      "Filtros avanzados",
      "Reseñas y estadísticas",
      "Panel de estadísticas de ventas",
    ],
  },
];

export function Precios() {
  usePageMeta(
    "Precios de Desarrollo Web en Venezuela | TodoVending Digital",
    "Planes de desarrollo web desde $349: Web Presencial, Tienda Digital y E-commerce Pro. Solo 50% de anticipo, pagos venezolanos aceptados.",
  );

  return (
    <div className="bg-slate-900">
      <Breadcrumbs current="Precios" />

      <section className="pb-16 pt-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 text-center">
            Precios de Desarrollo Web en Venezuela
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto mb-4 text-center leading-relaxed">
            Planes claros, sin letra pequeña. Todos incluyen diseño 100% responsivo y botón de
            WhatsApp. El proyecto inicia con solo un 50% de anticipo y el resto se paga contra
            entrega.
          </p>

          <div className="flex items-center justify-center gap-3 bg-blue-500/10 border border-blue-500/20 rounded-xl px-6 py-3 max-w-md mx-auto mb-12">
            <Shield className="w-4 h-4 text-blue-400 flex-shrink-0" />
            <p className="text-blue-300 text-sm text-center font-medium">
              50% de anticipo para iniciar, 50% restante contra entrega.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {plans.map(({ name, price, ideal, delivery, featured, features }) => (
              <div
                key={name}
                className={`relative rounded-2xl p-8 h-full ${
                  featured
                    ? "bg-gradient-to-b from-blue-600/20 to-slate-800/80 border-2 border-blue-500 shadow-xl shadow-blue-900/30"
                    : "bg-slate-800/60 border border-slate-700/50"
                }`}
              >
                {featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 bg-blue-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                      <Star className="w-3 h-3 fill-current" />
                      Más Popular
                    </span>
                  </div>
                )}

                <h2 className="text-white font-extrabold text-xl mb-1">{name}</h2>
                <p className="text-slate-400 text-sm mb-6">Ideal para: {ideal}</p>

                <div className="mb-2">
                  <span className="text-4xl font-extrabold text-white">{price}</span>
                </div>
                <p className="flex items-center gap-1.5 text-slate-500 text-xs mb-6">
                  <Clock className="w-3.5 h-3.5" />
                  Entrega en {delivery}
                </p>

                <ul className="space-y-3 mb-8">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <div className={`mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${featured ? "bg-blue-500" : "bg-slate-700"}`}>
                        <Check className="w-2.5 h-2.5 text-white" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/584120836206?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20plan%20${encodeURIComponent(name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 font-semibold py-3 rounded-xl transition-all duration-200 text-sm ${
                    featured
                      ? "bg-blue-500 hover:bg-blue-400 text-white shadow-lg shadow-blue-900/50 hover:shadow-blue-500/40"
                      : "bg-slate-700 hover:bg-slate-600 border border-slate-600 hover:border-slate-500 text-white"
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  Solicitar {name}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-3xl mx-auto bg-slate-800/60 border border-slate-700/50 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-white mb-2">Plan de Evolución Continua</h2>
            <p className="text-2xl font-bold text-blue-400 mb-3">Desde $35 a $50 / mes</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Soporte, modificaciones mensuales, SEO, posicionamiento local (GEO) e inteligencia
              artificial optimizada (IAO) para que tu web siga a la vanguardia después de la
              entrega.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
