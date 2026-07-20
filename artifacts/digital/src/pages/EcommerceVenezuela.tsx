import { MessageCircle, Check } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { usePageMeta } from "@/hooks/use-page-meta";

export function EcommerceVenezuela() {
  usePageMeta(
    "Desarrollo de E-commerce en Venezuela con Pago Móvil y Zelle | TodoVending Digital",
    "E-commerce a la medida con registro de usuarios, filtros avanzados y pagos por Pago Móvil, Zelle y Binance. Plan E-commerce Pro desde $749.",
  );

  return (
    <div className="bg-slate-900">
      <Breadcrumbs current="E-commerce en Venezuela" />

      <section className="pb-16 pt-6">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
            Desarrollo de E-commerce en Venezuela con Pago Móvil y Zelle
          </h1>

          <div className="prose prose-invert prose-slate max-w-none text-slate-300 leading-relaxed space-y-5">
            <p>
              Cuando un negocio crece más allá de un catálogo simple, necesita una plataforma de
              e-commerce completa: cuentas de usuario, filtros de búsqueda, reseñas de productos y
              estadísticas de ventas. En TodoVending Digital desarrollamos tiendas de e-commerce a
              la medida, adaptadas a los métodos de pago que realmente se usan en Venezuela.
            </p>

            <h2 className="text-xl font-bold text-white pt-2">Módulos del plan E-commerce Pro</h2>
            <ul className="space-y-2 not-prose">
              {[
                "Registro y cuentas de usuario para que tus clientes guarden su historial de compras",
                "Filtros avanzados de búsqueda por categoría, precio y disponibilidad",
                "Sistema de reseñas y calificaciones de productos",
                "Panel de estadísticas de ventas y productos más buscados",
                "Panel de inventario y catálogo dinámico",
                "Carrito conectado a WhatsApp con verificación manual de pagos",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <div className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center bg-blue-500/20">
                    <Check className="w-2.5 h-2.5 text-blue-400" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="text-xl font-bold text-white pt-2">Pagos adaptados a Venezuela</h2>
            <p>
              No usamos pasarelas de pago internacionales que cobran comisión y suelen fallar con
              tarjetas venezolanas. En su lugar, integramos un flujo de verificación manual de
              pagos por{" "}
              <strong className="text-white">Pago Móvil, Zelle, Binance (USDT) y transferencia
              bancaria</strong>
              . El cliente confirma su pago, tú lo verificas desde el panel y el pedido pasa a
              preparación. Así evitas fraudes y no pagas comisión por cada venta.
            </p>

            <h2 className="text-xl font-bold text-white pt-2">¿Para qué negocios es este plan?</h2>
            <p>
              El plan E-commerce Pro está pensado para empresas consolidadas que ya tienen un
              volumen de ventas importante y necesitan herramientas de gestión más completas que un
              simple catálogo: tiendas con cientos de productos, marcas con varias líneas o
              distribuidores que quieren digitalizar su proceso de ventas completo.
            </p>

            <h2 className="text-xl font-bold text-white pt-2">Precio y tiempo de entrega</h2>
            <p>
              El plan E-commerce Pro tiene un precio de{" "}
              <strong className="text-white">$749</strong>, con 50% de anticipo para iniciar, y se
              entrega en <strong className="text-white">8 a 10 días hábiles</strong> según los
              módulos que necesite tu negocio.
            </p>
          </div>

          <div className="mt-10">
            <a
              href="https://wa.me/584120836206?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20E-commerce%20Pro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-green-900/40 hover:shadow-green-500/30 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              Cotizar mi e-commerce
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
