import { MessageCircle, Check, MapPin } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { usePageMeta } from "@/hooks/use-page-meta";

export function DesarrolloWebLecheria() {
  usePageMeta(
    "Desarrollo de Páginas Web en Lechería, Anzoátegui | TodoVending Digital",
    "Páginas web profesionales para negocios de Lechería, Barcelona y Puerto La Cruz desde $349. Diseño responsivo, WhatsApp y SEO local incluidos.",
  );

  return (
    <div className="bg-slate-900">
      <Breadcrumbs current="Desarrollo Web en Lechería" />

      <section className="pb-16 pt-6">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
            Desarrollo de Páginas Web en Lechería, Anzoátegui
          </h1>

          <div className="prose prose-invert prose-slate max-w-none text-slate-300 leading-relaxed space-y-5">
            <p>
              Si tienes un negocio en Lechería, Barcelona o Puerto La Cruz, tu página web es tu
              sucursal más rentable: está abierta 24 horas, no paga alquiler y le llega a más
              clientes que un local físico. En TodoVending Digital diseñamos y desarrollamos
              páginas web profesionales pensadas para el mercado de Anzoátegui, desde clínicas y
              consultorios hasta tiendas, restaurantes y empresas industriales.
            </p>
            <p>
              A diferencia de las plantillas genéricas, cada proyecto parte de un análisis de tu
              negocio, tu competencia local y tu cliente ideal. El resultado es un sitio 100%
              responsivo, rápido de cargar y con una estructura pensada para convertir visitas en
              clientes reales, ya sea que lleguen por Google, por Instagram o recomendados por
              otro cliente.
            </p>

            <h2 className="text-xl font-bold text-white pt-2">¿Qué incluye el plan Web Presencial?</h2>
            <ul className="space-y-2 not-prose">
              {[
                "Landing page profesional con diseño 100% responsivo",
                "Botón de WhatsApp flotante para recibir consultas al instante",
                "Formulario de contacto inteligente conectado a tu correo o WhatsApp",
                "Dominio y hosting incluidos el primer año",
                "Optimización SEO básica para aparecer en búsquedas locales",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <div className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center bg-blue-500/20">
                    <Check className="w-2.5 h-2.5 text-blue-400" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="text-xl font-bold text-white pt-2">Precio y tiempos de entrega</h2>
            <p>
              El plan Web Presencial tiene un precio de <strong className="text-white">$349</strong>,
              con solo un 50% de anticipo para iniciar el proyecto. La entrega se realiza en{" "}
              <strong className="text-white">2 a 4 días hábiles</strong> desde que confirmamos el
              contenido y diseño con tu negocio.
            </p>

            <h2 className="text-xl font-bold text-white pt-2">¿Por qué un negocio en Lechería necesita una página web?</h2>
            <p>
              La mayoría de tus clientes potenciales buscan en Google o en redes sociales antes de
              visitar un negocio en Lechería, Barcelona o Puerto La Cruz. Sin una página web
              propia, dependes solo de las redes sociales o del voz a voz. Una web profesional te
              da control total sobre tu imagen de marca, te permite aparecer en búsquedas locales
              como "desarrollo web Lechería" o "páginas web Anzoátegui", y le da a tu negocio la
              credibilidad que un perfil de Instagram por sí solo no puede dar.
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/584120836206?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20plan%20Web%20Presencial"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-green-900/40 hover:shadow-green-500/30 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              Cotizar mi página web
            </a>
            <a
              href="https://maps.app.goo.gl/JuHxKWCBBZS8tYwS9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200"
            >
              <MapPin className="w-4 h-4 text-blue-400" />
              Visítanos en Lechería
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
