import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = [
  { text: "TodoVending", className: "text-white" },
  {
    text: "Digital",
    className:
      "bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent",
  },
];

export function Intro() {
  // Start visible so the overlay covers the page on the very first paint
  // (prevents a flash of the page before the intro mounts).
  const [show, setShow] = useState(true);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    setReduced(prefersReduced);

    // Lock scroll while the intro is on screen.
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    const duration = prefersReduced ? 1100 : 2300;
    const t = setTimeout(() => setShow(false), duration);
    return () => clearTimeout(t);
  }, []);

  const unlock = () => {
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  };

  return (
    <AnimatePresence onExitComplete={unlock}>
      {show && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden bg-slate-950"
          initial={{ opacity: 1 }}
          exit={reduced ? { opacity: 0 } : { y: "-100%" }}
          transition={{
            duration: reduced ? 0.4 : 0.9,
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          {/* Background: grid + glows */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(59,130,246,0.6) 1px, transparent 1px), linear-gradient(to right, rgba(59,130,246,0.6) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[420px] h-[420px] sm:w-[520px] sm:h-[520px] bg-blue-600/15 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "0.6s" }}
          />

          {/* Content */}
          <motion.div
            className="relative z-10 flex flex-col items-center px-6 text-center"
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.35, ease: "easeIn" }}
          >
            <motion.span
              className="inline-flex items-center gap-2 text-blue-400 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] mb-5 sm:mb-6"
              initial={{ opacity: 0, y: reduced ? 0 : 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Agencia de Desarrollo Web
            </motion.span>

            <h2 className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4 text-3xl sm:text-6xl font-extrabold tracking-tight">
              {words.map((w, i) => (
                <span key={w.text} className="overflow-hidden inline-flex pb-1">
                  <motion.span
                    className={w.className}
                    initial={reduced ? { opacity: 0 } : { y: "110%" }}
                    animate={reduced ? { opacity: 1 } : { y: "0%" }}
                    transition={{
                      delay: 0.25 + i * 0.12,
                      duration: reduced ? 0.4 : 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {w.text}
                  </motion.span>
                </span>
              ))}
            </h2>

            {/* Progress bar */}
            <div className="mt-9 sm:mt-10 w-44 sm:w-52 h-[3px] rounded-full bg-white/10 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  delay: 0.3,
                  duration: reduced ? 0.7 : 1.6,
                  ease: "easeInOut",
                }}
              />
            </div>

            <motion.span
              className="mt-5 text-slate-500 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.25em]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Construyendo tu presencia digital
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
