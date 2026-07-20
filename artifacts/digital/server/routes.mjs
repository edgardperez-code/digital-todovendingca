export const siteUrl = "https://digital.todovendingca.com";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${siteUrl}/#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto cuesta una página web profesional con TodoVending Digital?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TodoVending Digital ofrece tres planes: Web Presencial desde $349, Tienda Digital desde $549 y E-commerce Pro desde $749. Todos los proyectos inician con solo un 50% de anticipo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué incluye una tienda online conectada a WhatsApp?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Incluye un catálogo dinámico de productos y un carrito de compras conectado directamente a tu WhatsApp. Tus clientes arman el pedido en la web y tú coordinas el pago por transferencia, Pago Móvil o Zelle, sin comisiones de pasarelas externas.",
      },
    },
    {
      "@type": "Question",
      name: "¿TodoVending Digital cobra comisiones por cada venta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Las ventas se gestionan directamente por WhatsApp, así que no pagas comisiones de pasarelas de pago externas por ninguna transacción.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tarda el desarrollo de una página web?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El plan Web Presencial se entrega en 2 a 4 días hábiles, la Tienda Digital en 6 a 7 días hábiles y el E-commerce Pro en 8 a 10 días hábiles, según los módulos que necesite tu negocio.",
      },
    },
    {
      "@type": "Question",
      name: "¿Ofrecen mantenimiento y actualizaciones de la página web?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. El Plan de Evolución Continua, desde $35 a $50 al mes, incluye soporte, modificaciones mensuales, SEO, posicionamiento local (GEO) e inteligencia artificial optimizada (IAO).",
      },
    },
    {
      "@type": "Question",
      name: "¿Atienden solo en Lechería o en toda Venezuela?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Estamos ubicados en Lechería, Anzoátegui, y atendemos presencialmente Lechería, Barcelona y Puerto La Cruz. Trabajamos de forma remota con clientes de toda Venezuela y del exterior.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo solicito una cotización?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Puedes solicitar una cotización gratuita por WhatsApp al +58 412-0836206. Respondemos con una propuesta adaptada a tu negocio y a tu presupuesto.",
      },
    },
  ],
};

function breadcrumb(name, path) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name, item: `${siteUrl}${path}` },
    ],
  };
}

// Lista compartida por prerender.mjs (qué HTML/metadata generar) y serve.mjs (sitemap.xml).
export const routes = [
  {
    path: "/",
    changefreq: "weekly",
    priority: "1.0",
    title: "Desarrollo de Páginas Web en Venezuela desde $349 | TodoVending Digital",
    description:
      "Agencia de desarrollo web en Venezuela, con base en Lechería, Anzoátegui. Creamos páginas web, tiendas online conectadas a WhatsApp y e-commerce a la medida desde $349.",
    jsonLd: [faqJsonLd],
  },
  {
    path: "/desarrollo-web-lecheria",
    changefreq: "monthly",
    priority: "0.8",
    title: "Desarrollo de Páginas Web en Lechería, Anzoátegui | TodoVending Digital",
    description:
      "Páginas web profesionales para negocios de Lechería, Barcelona y Puerto La Cruz desde $349. Diseño responsivo, WhatsApp y SEO local incluidos.",
    jsonLd: [breadcrumb("Desarrollo Web en Lechería", "/desarrollo-web-lecheria")],
  },
  {
    path: "/tienda-online-whatsapp",
    changefreq: "monthly",
    priority: "0.8",
    title: "Tienda Online Conectada a WhatsApp en Venezuela | TodoVending Digital",
    description:
      "Tiendas online con catálogo dinámico y carrito conectado a WhatsApp. Pagos por Pago Móvil, Zelle y transferencia, sin comisiones. Desde $549.",
    jsonLd: [breadcrumb("Tienda Online con WhatsApp", "/tienda-online-whatsapp")],
  },
  {
    path: "/ecommerce-venezuela",
    changefreq: "monthly",
    priority: "0.8",
    title: "Desarrollo de E-commerce en Venezuela con Pago Móvil y Zelle | TodoVending Digital",
    description:
      "E-commerce a la medida con registro de usuarios, filtros avanzados y pagos por Pago Móvil, Zelle y Binance. Plan E-commerce Pro desde $749.",
    jsonLd: [breadcrumb("E-commerce en Venezuela", "/ecommerce-venezuela")],
  },
  {
    path: "/portafolio",
    changefreq: "monthly",
    priority: "0.7",
    title: "Portafolio de Proyectos Web | TodoVending Digital",
    description:
      "Conoce los sitios web y tiendas online que desarrollamos para negocios reales en Venezuela: Cocoroma, Incalca, Fotos Party y más.",
    jsonLd: [breadcrumb("Portafolio", "/portafolio")],
  },
  {
    path: "/precios",
    changefreq: "monthly",
    priority: "0.8",
    title: "Precios de Desarrollo Web en Venezuela | TodoVending Digital",
    description:
      "Planes de desarrollo web desde $349: Web Presencial, Tienda Digital y E-commerce Pro. Solo 50% de anticipo, pagos venezolanos aceptados.",
    jsonLd: [breadcrumb("Precios", "/precios")],
  },
];
