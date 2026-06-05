import { useState, useEffect, useRef } from "react";
import {
  Code2,
  Settings2,
  Brain,
  MessageCircle,
  ChevronRight,
  Check,
  Star,
  Menu,
  X,
  Globe,
  Search,
  MapPin,
  Zap,
  Shield,
  TrendingUp,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";

function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Inicio", "Servicios", "Planes", "Suscripción"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-1 text-xl font-bold tracking-tight select-none">
            <span className="text-white">TodoVending</span>
            <span className="text-blue-400"> Digital</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-slate-300 hover:text-white text-sm font-medium transition-colors duration-200 relative group"
              >
                {l}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-blue-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="https://wa.me/584120830206"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 shadow-lg shadow-green-900/40 hover:shadow-green-500/30 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              Cotizar por WhatsApp
            </a>
          </div>

          <button
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-slate-900/98 backdrop-blur-md border-t border-slate-800 px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-slate-300 hover:text-white text-sm font-medium py-1"
              onClick={() => setOpen(false)}
            >
              {l}
            </a>
          ))}
          <a
            href="https://wa.me/584120830206"
            className="inline-flex items-center justify-center gap-2 bg-green-500 text-white text-sm font-semibold px-5 py-2.5 rounded-lg"
          >
            <MessageCircle className="w-4 h-4" />
            Cotizar por WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(to right, rgba(59,130,246,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
          <Zap className="w-3.5 h-3.5" />
          Agencia de Desarrollo Web
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
          Lleva tu negocio al{" "}
          <span className="relative">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              siguiente nivel
            </span>
          </span>{" "}
          digital.
        </h1>

        <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          En TodoVending Digital construimos tu sucursal más rentable: tu página web.
          Diseños rápidos, modernos y optimizados para vender.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#planes"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-blue-900/50 hover:shadow-blue-500/40 hover:-translate-y-0.5 group"
          >
            Ver Planes
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="https://wa.me/584120830206"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4 text-green-400" />
            Contáctanos
          </a>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-slate-500 text-sm">
          {["100% Responsivo", "Entrega Rápida", "Sin Comisiones"].map((t) => (
            <span key={t} className="flex items-center gap-2">
              <Check className="w-4 h-4 text-blue-400" />
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600 animate-bounce">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-slate-600" />
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: Code2,
      title: "Desarrollo Estratégico",
      desc: "Webs adaptadas a tu marca (clínicas, tiendas de ropa, empresas). Cada línea de código pensada para convertir visitantes en clientes.",
      color: "from-blue-500 to-blue-600",
      glow: "group-hover:shadow-blue-500/20",
    },
    {
      icon: Settings2,
      title: "Automatización",
      desc: "Conectamos tu web con tus procesos diarios. Desde formularios inteligentes hasta integraciones con tus herramientas de gestión.",
      color: "from-violet-500 to-violet-600",
      glow: "group-hover:shadow-violet-500/20",
    },
    {
      icon: Brain,
      title: "IAO — Inteligencia Artificial Optimizada",
      desc: "Mejoramos la carga y experiencia del usuario con tecnología de vanguardia. Tu web más rápida e inteligente que nunca.",
      color: "from-cyan-500 to-cyan-600",
      glow: "group-hover:shadow-cyan-500/20",
    },
    {
      icon: MessageCircle,
      title: "Ventas Directas",
      desc: "Carritos de compra conectados a tu WhatsApp para gestionar transferencias, Pago Móvil o Zelle, sin comisiones de pasarelas externas.",
      color: "from-green-500 to-green-600",
      glow: "group-hover:shadow-green-500/20",
    },
  ];

  return (
    <section id="servicios" className="py-24 bg-slate-900 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/20 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">
            Lo que hacemos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            ¿Qué Hacemos?
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Soluciones digitales completas para hacer crecer tu negocio en el mundo online.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc, color, glow }, i) => (
            <AnimatedSection key={title} delay={i * 100}>
              <div
                className={`group relative bg-slate-800/60 border border-slate-700/50 hover:border-slate-600 rounded-2xl p-6 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${glow}`}
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${color} mb-5 shadow-lg`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-bold text-base mb-2 leading-snug">
                  {title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      name: "Web Presencial",
      price: "$249",
      ideal: "Doctores y emprendedores",
      featured: false,
      features: [
        "Landing page profesional",
        "Diseño 100% responsivo",
        "Botón WhatsApp flotante",
        "Formulario inteligente",
      ],
    },
    {
      name: "Tienda Digital",
      price: "$449",
      ideal: "Tiendas de ropa y catálogos",
      featured: true,
      features: [
        "Todo el plan Presencial",
        "Catálogo dinámico de productos",
        "Carrito conectado a WhatsApp",
        "Panel de inventario",
      ],
    },
    {
      name: "E-commerce Pro",
      price: "$649",
      ideal: "Empresas consolidadas",
      featured: false,
      features: [
        "Todo el plan Tienda Digital",
        "Registro de usuarios",
        "Filtros avanzados",
        "Reseñas y estadísticas",
      ],
    },
  ];

  return (
    <section id="planes" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-6">
          <span className="inline-block text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">
            Inversión
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Nuestros Planes
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Elige el plan que mejor se adapte a tu negocio y comienza a crecer hoy.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100} className="mb-10">
          <div className="flex items-center justify-center gap-3 bg-blue-500/10 border border-blue-500/20 rounded-xl px-6 py-3 max-w-md mx-auto">
            <Shield className="w-4 h-4 text-blue-400 flex-shrink-0" />
            <p className="text-blue-300 text-sm text-center font-medium">
              Todos los proyectos inician con solo un{" "}
              <strong className="text-white">30% de anticipo</strong>.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map(({ name, price, ideal, featured, features }, i) => (
            <AnimatedSection key={name} delay={i * 120}>
              <div
                className={`relative rounded-2xl p-8 h-full transition-all duration-300 hover:-translate-y-1 ${
                  featured
                    ? "bg-gradient-to-b from-blue-600/20 to-slate-800/80 border-2 border-blue-500 shadow-xl shadow-blue-900/30"
                    : "bg-slate-800/60 border border-slate-700/50 hover:border-slate-600"
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

                <div className="mb-6">
                  <h3 className="text-white font-extrabold text-xl mb-1">{name}</h3>
                  <p className="text-slate-400 text-sm">Ideal para: {ideal}</p>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-white">{price}</span>
                </div>

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
                  href="https://wa.me/584120830206"
                  className={`w-full inline-flex items-center justify-center gap-2 font-semibold py-3 rounded-xl transition-all duration-200 text-sm ${
                    featured
                      ? "bg-blue-500 hover:bg-blue-400 text-white shadow-lg shadow-blue-900/50 hover:shadow-blue-500/40"
                      : "bg-slate-700 hover:bg-slate-600 border border-slate-600 hover:border-slate-500 text-white"
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  Solicitar Plan
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function Subscription() {
  const benefits = [
    { icon: Settings2, text: "Soporte y modificaciones mensuales" },
    { icon: Search, text: "SEO — Optimización de búsquedas" },
    { icon: MapPin, text: "GEO — Posicionamiento Local" },
    { icon: Brain, text: "IAO — Inteligencia Artificial Optimizada" },
  ];

  return (
    <section id="suscripción" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-cyan-900/10 pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(59,130,246,0.8) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-blue-500/20 rounded-3xl p-10 sm:p-14 text-center shadow-2xl shadow-blue-900/20">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <TrendingUp className="w-3.5 h-3.5" />
              Crecimiento Sostenido
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
              Plan de Evolución Continua
            </h2>
            <p className="text-2xl font-bold text-blue-400 mb-4">
              Desde $35 a $50 / mes
            </p>
            <p className="text-slate-400 text-base max-w-2xl mx-auto mb-10 leading-relaxed">
              Una web sin mantenimiento es un local cerrado. Garantizamos que tu sitio
              esté a la vanguardia con actualizaciones, soporte y estrategias de
              posicionamiento constante.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-10">
              {benefits.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-3 bg-slate-800/60 border border-slate-700/50 rounded-xl px-4 py-3 text-left"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/15 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="text-slate-300 text-sm font-medium">{text}</span>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/584120830206"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold px-10 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-blue-900/50 hover:shadow-blue-500/40 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              Suscribirme Ahora
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function Portfolio() {
  const projects = [
    {
      name: "Incalca",
      url: "https://www.incalca.com",
      domain: "www.incalca.com",
      image: "/__mockup/images/incalca.png",
      category: "Empresa Industrial",
      desc: "Sitio corporativo para una empresa especialista en intercambiadores de calor y calderas.",
    },
    {
      name: "TodoVending CA",
      url: "https://www.todovendingca.com",
      domain: "www.todovendingca.com",
      image: "/__mockup/images/todovendingca.png",
      category: "Soluciones Vending",
      desc: "Plataforma moderna para soluciones integrales en máquinas vending.",
    },
    {
      name: "Fotos Party",
      url: "https://www.fotosparty.com",
      domain: "www.fotosparty.com",
      image: "/__mockup/images/fotosparty.png",
      category: "Fotografía de Eventos",
      desc: "Web vibrante de fotografía profesional para fiestas y eventos.",
    },
  ];

  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  const current = active !== null ? projects[active] : null;

  return (
    <section id="trabajos" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">
            Portafolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Nuestros Trabajos
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Proyectos reales que ya están generando resultados. Haz clic en una imagen para verla más de cerca.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <AnimatedSection key={p.name} delay={i * 120}>
              <button
                onClick={() => setActive(i)}
                className="group relative w-full text-left bg-slate-800/60 border border-slate-700/50 hover:border-blue-500/50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <img
                    src={p.image}
                    alt={`Captura del sitio ${p.name}`}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/0 to-slate-950/0 opacity-60 group-hover:opacity-30 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-flex items-center gap-2 bg-blue-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-lg shadow-blue-900/50">
                      <ArrowUpRight className="w-4 h-4" />
                      Ver más de cerca
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <span className="inline-block text-blue-400 text-xs font-semibold uppercase tracking-wider mb-1.5">
                    {p.category}
                  </span>
                  <h3 className="text-white font-bold text-lg mb-1">{p.name}</h3>
                  <p className="text-slate-400 text-sm mb-3 leading-relaxed">{p.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-slate-500 text-xs font-medium">
                    <Globe className="w-3.5 h-3.5" />
                    {p.domain}
                  </span>
                </div>
              </button>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {current && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActive(null)}
        >
          <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]" />
          <div
            className="relative z-10 w-full max-w-5xl max-h-[90vh] bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden flex flex-col animate-[fadeIn_0.25s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 px-5 py-3.5 border-b border-slate-700 bg-slate-800/95 flex-shrink-0">
              <div className="flex items-center gap-3 min-w-0">
                <div className="flex gap-1.5 flex-shrink-0">
                  <span className="w-3 h-3 rounded-full bg-red-400/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <span className="w-3 h-3 rounded-full bg-green-400/80" />
                </div>
                <span className="flex items-center gap-2 text-slate-300 text-sm font-medium truncate">
                  <Globe className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  {current.domain}
                </span>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <a
                  href={current.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="hidden sm:inline">Visitar sitio</span>
                </a>
                <button
                  onClick={() => setActive(null)}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white transition-colors"
                  aria-label="Cerrar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="overflow-y-auto bg-slate-950">
              <img
                src={current.image}
                alt={`Vista ampliada del sitio ${current.name}`}
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function Footer() {
  const quickLinks = ["Inicio", "Servicios", "Planes", "Suscripción"];

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
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-200"
                  >
                    {l}
                  </a>
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
                <a href="https://wa.me/584120830206" className="hover:text-green-400 transition-colors">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-500 text-xs leading-relaxed">
            © 2026 TodoVending C.A. — División de Soluciones Digitales. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export function LandingPage() {
  return (
    <div className="bg-slate-900 min-h-screen font-sans antialiased">
      <Navbar />
      <Hero />
      <Features />
      <Subscription />
      <Pricing />
      <Portfolio />
      <Footer />
    </div>
  );
}
