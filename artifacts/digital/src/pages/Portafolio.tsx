import { Globe, ExternalLink, MessageCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { usePageMeta } from "@/hooks/use-page-meta";

const projects = [
  {
    name: "Incalca",
    url: "https://www.incalca.com",
    domain: "www.incalca.com",
    image: `${import.meta.env.BASE_URL}images/incalca.webp`,
    category: "Empresa Industrial",
    desc: "Sitio corporativo para Incalca, empresa especialista en intercambiadores de calor y calderas. El sitio presenta su catálogo de equipos industriales, certificaciones y datos de contacto comercial, con una estructura pensada para clientes técnicos e industriales que buscan proveedores confiables en Venezuela.",
  },
  {
    name: "TodoVending CA",
    url: "https://www.todovendingca.com",
    domain: "www.todovendingca.com",
    image: `${import.meta.env.BASE_URL}images/todovendingca.webp`,
    category: "Soluciones Vending",
    desc: "Plataforma moderna para TodoVending C.A., empresa matriz especializada en soluciones integrales de máquinas vending para oficinas, empresas y espacios comerciales en Venezuela.",
  },
  {
    name: "Fotos Party",
    url: "https://www.fotosparty.com",
    domain: "www.fotosparty.com",
    image: `${import.meta.env.BASE_URL}images/fotosparty.webp`,
    category: "Fotografía de Eventos",
    desc: "Web vibrante y visual para un estudio de fotografía profesional especializado en fiestas y eventos, con galería de trabajos y formulario de contacto para reservar sesiones.",
  },
  {
    name: "Cocoroma",
    url: "https://www.cocoroma.com",
    domain: "www.cocoroma.com",
    image: `${import.meta.env.BASE_URL}images/cocoroma.webp`,
    category: "Moda Femenina",
    desc: "Tienda online de moda femenina en Lechería con catálogo de colecciones y carrito de compras conectado a WhatsApp. Los pedidos llegan organizados y los pagos se coordinan por Pago Móvil, Zelle y transferencia, sin comisiones de pasarelas externas.",
  },
  {
    name: "Psico Infantil VE",
    url: "https://www.psicoinfantilve.com",
    domain: "www.psicoinfantilve.com",
    image: `${import.meta.env.BASE_URL}images/psicoinfantilve.webp`,
    category: "Psicología Infantil",
    desc: "Plataforma de psicología clínica infanto-juvenil con cursos, ebooks y consultas 100% online, diseñada para transmitir confianza a padres que buscan apoyo profesional para sus hijos.",
  },
];

export function Portafolio() {
  usePageMeta(
    "Portafolio de Proyectos Web | TodoVending Digital",
    "Conoce los sitios web y tiendas online que desarrollamos para negocios reales en Venezuela: Cocoroma, Incalca, Fotos Party y más.",
  );

  return (
    <div className="bg-slate-900">
      <Breadcrumbs current="Portafolio" />

      <section className="pb-24 pt-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
            Nuestro Portafolio de Proyectos
          </h1>
          <p className="text-slate-400 max-w-2xl mb-12 leading-relaxed">
            Estos son proyectos reales que desarrollamos para negocios en Venezuela: desde webs
            corporativas para empresas industriales hasta tiendas online conectadas a WhatsApp.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((p) => (
              <article
                key={p.name}
                className="bg-slate-800/60 border border-slate-700/50 rounded-2xl overflow-hidden"
              >
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="block relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <img
                    src={p.image}
                    alt={`Captura del sitio web ${p.name} (${p.category}) desarrollado por TodoVending Digital`}
                    loading="lazy"
                    width={1280}
                    height={800}
                    className="w-full h-full object-cover object-top"
                  />
                </a>
                <div className="p-6">
                  <span className="inline-block text-blue-400 text-xs font-semibold uppercase tracking-wider mb-1.5">
                    {p.category}
                  </span>
                  <h2 className="text-white font-bold text-xl mb-2">{p.name}</h2>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">{p.desc}</p>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 text-sm font-semibold"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    {p.domain}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 text-center">
            <a
              href="https://wa.me/584120836206?text=Hola%2C%20me%20gust%C3%B3%20su%20portafolio%20y%20quiero%20informaci%C3%B3n"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-green-900/40 hover:shadow-green-500/30 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              Quiero un proyecto así
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
