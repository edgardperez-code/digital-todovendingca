import { MessageCircle, Check, ExternalLink } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { usePageMeta } from "@/hooks/use-page-meta";

export function TiendaOnlineWhatsapp() {
  usePageMeta(
    "Tienda Online Conectada a WhatsApp en Venezuela | TodoVending Digital",
    "Tiendas online con catálogo dinámico y carrito conectado a WhatsApp. Pagos por Pago Móvil, Zelle y transferencia, sin comisiones. Desde $549.",
  );

  return (
    <div className="bg-slate-900">
      <Breadcrumbs current="Tienda Online con WhatsApp" />

      <section className="pb-16 pt-6">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
            Tienda Online Conectada a WhatsApp en Venezuela
          </h1>

          <div className="prose prose-invert prose-slate max-w-none text-slate-300 leading-relaxed space-y-5">
            <p>
              Vender por Instagram o por WhatsApp a mano tiene un límite: pedidos que se pierden en
              el chat, catálogos desactualizados y clientes que no saben qué hay disponible. Una
              tienda online conectada a WhatsApp resuelve eso: tus clientes ven el catálogo
              completo, arman su carrito y el pedido te llega organizado, listo para coordinar el
              pago.
            </p>

            <h2 className="text-xl font-bold text-white pt-2">¿Cómo funciona el flujo de pedido?</h2>
            <p>
              El cliente entra a tu tienda, navega el catálogo dinámico de productos y agrega lo
              que quiere comprar a su carrito. Al finalizar, la web arma automáticamente un
              mensaje de WhatsApp con el detalle completo del pedido (productos, cantidades y
              total) y lo envía directo a tu número. Desde ahí, tú coordinas la entrega y verificas
              el pago manualmente por el método que el cliente prefiera.
            </p>

            <h2 className="text-xl font-bold text-white pt-2">Pagos sin comisiones</h2>
            <p>
              A diferencia de las pasarelas de pago internacionales, no cobramos comisión por
              transacción. Tus clientes pagan por{" "}
              <strong className="text-white">transferencia bancaria, Pago Móvil o Zelle</strong>, y
              tú verificas el pago directamente antes de despachar el pedido. Todo el dinero de tus
              ventas es tuyo, sin intermediarios.
            </p>

            <h2 className="text-xl font-bold text-white pt-2">¿Qué incluye el plan Tienda Digital?</h2>
            <ul className="space-y-2 not-prose">
              {[
                "Catálogo dinámico de productos con fotos, precios y variantes",
                "Carrito de compras conectado directo a tu WhatsApp",
                "Panel de inventario para actualizar productos sin depender de un programador",
                "Diseño 100% responsivo, pensado para compras desde el celular",
                "Todo lo incluido en el plan Web Presencial",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <div className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center bg-blue-500/20">
                    <Check className="w-2.5 h-2.5 text-blue-400" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="text-xl font-bold text-white pt-2">Caso real: Cocoroma</h2>
            <p>
              Desarrollamos la tienda online de{" "}
              <a
                href="https://www.cocoroma.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
              >
                Cocoroma <ExternalLink className="w-3.5 h-3.5" />
              </a>
              , una boutique de moda femenina en Lechería. Su catálogo de colecciones y carrito de
              compras conectado a WhatsApp les permite recibir pedidos organizados y coordinar
              pagos por Pago Móvil, Zelle y transferencia, sin depender de mensajes sueltos por
              Instagram.
            </p>

            <h2 className="text-xl font-bold text-white pt-2">Precio y tiempo de entrega</h2>
            <p>
              El plan Tienda Digital tiene un precio de <strong className="text-white">$549</strong>,
              con 50% de anticipo para iniciar, y se entrega en{" "}
              <strong className="text-white">6 a 7 días hábiles</strong>.
            </p>
          </div>

          <div className="mt-10">
            <a
              href="https://wa.me/584120836206?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20la%20Tienda%20Digital"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-green-900/40 hover:shadow-green-500/30 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              Cotizar mi tienda online
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
