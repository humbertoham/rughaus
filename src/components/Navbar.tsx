"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiMessageCircle,
  FiArrowUpRight,
} from "react-icons/fi";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Galería", href: "/gallery" },
  { name: "Inventario", href: "/inventory" },
  { name: "Personalizados", href: "/custom" },
  { name: "Nosotros", href: "/about" },
];

const menuContainer: Variants = {
  hidden: {
    opacity: 0,
    y: -16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.32,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.06,
      delayChildren: 0.04,
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: {
      duration: 0.22,
      ease: [0.4, 0, 1, 1],
    },
  },
};

const menuItem: Variants = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.28,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/80 backdrop-blur-xl">
        <div className="container-rughaus">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="group relative inline-flex items-center"
              aria-label="Ir al inicio de RUGHAUS"
            >
              <div className="flex flex-col leading-none">
                <span className="text-[1.45rem] font-semibold tracking-[-0.08em] text-rug-red transition-transform duration-300 group-hover:translate-x-[2px]">
                  RUGHAUS
                </span>
                <span className="mt-1 text-[0.62rem] uppercase tracking-[0.28em] text-rug-dark/55">
                  rughaus.co
                </span>
              </div>
            </Link>

            {/* Desktop */}
            <nav className="hidden items-center gap-8 md:flex">
              <nav className="hidden items-center gap-8 md:flex">
  {navLinks.map((link) => (
   <Link
  href={link.href}
  className="
    inline-block
    bg-[linear-gradient(currentColor,currentColor)]
    bg-[length:0%_1.5px]
    bg-[position:0_100%]
    bg-no-repeat
    pb-1
    text-[0.95rem]
    font-medium
    text-rug-dark
    transition-[color,background-size]
    duration-300
    ease-out
    hover:bg-[length:100%_1.5px]
    hover:text-rug-red
  "
>
  {link.name}
</Link>
  ))}
</nav>

              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-rug-red px-5 py-3 text-sm font-medium text-white shadow-[0_10px_30px_rgba(186,18,0,0.16)] transition-all duration-300 hover:shadow-[0_14px_40px_rgba(186,18,0,0.24)]"
                >
                  <FiMessageCircle className="text-base transition-transform duration-300 group-hover:scale-110" />
                  <span>Cotizar</span>
                  <FiArrowUpRight className="text-base transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </motion.div>
            </nav>

            {/* Botón mobile */}
            <button
              type="button"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              onClick={() => setOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-rug-red transition-all duration-300 hover:border-rug-red/30 hover:bg-rug-light/40 md:hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={open ? "close" : "menu"}
                  initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center"
                >
                  {open ? <FiX size={22} /> : <FiMenu size={22} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.aside
              className="fixed inset-x-0 top-20 z-50 mx-4 overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_24px_80px_rgba(7,2,13,0.16)] md:hidden"
              variants={menuContainer}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(232,233,243,0.38)_0%,rgba(255,255,255,1)_28%)]" />

                <div className="relative px-6 pb-6 pt-6">
                  <motion.div
                    variants={menuItem}
                    className="mb-6 border-b border-black/5 pb-5"
                  >
                    <p className="text-xs uppercase tracking-[0.28em] text-rug-dark/45">
                      RUGHAUS
                    </p>
                    <p className="mt-3 max-w-[22rem] text-sm leading-6 text-rug-dark/72">
                      Tapetes únicos para espacios únicos. Explora piezas
                      disponibles o cotiza una alfombra personalizada por
                      mensaje directo.
                    </p>
                  </motion.div>

                  <motion.nav
                    variants={menuContainer}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col"
                  >
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.name}
                        variants={menuItem}
                        className="border-b border-black/5 last:border-b-0"
                      >
                        <Link
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className="group flex items-center justify-between py-4 text-[1.05rem] font-medium text-rug-dark transition-colors duration-300 hover:text-rug-red"
                        >
                          <span className="transition-transform duration-300 group-hover:translate-x-1">
                            {link.name}
                          </span>
                          <span className="text-xs text-rug-dark/35 transition-all duration-300 group-hover:text-rug-red group-hover:translate-x-1">
                            0{index + 1}
                          </span>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.nav>

                  <motion.div
                    variants={menuItem}
                    className="mt-6 grid gap-3"
                  >
                    <Link
                      href="/contact"
                      onClick={() => setOpen(false)}
                      className="group inline-flex items-center justify-center gap-2 rounded-full bg-rug-red px-5 py-4 text-sm font-medium text-white shadow-[0_12px_35px_rgba(186,18,0,0.18)] transition-all duration-300 hover:translate-y-[-1px]"
                    >
                      <FiMessageCircle className="text-base transition-transform duration-300 group-hover:scale-110" />
                      <span>Solicitar cotización</span>
                      <FiArrowUpRight className="text-base transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>

                    <div className="rounded-2xl border border-black/6 bg-rug-light/35 p-4">
                      <p className="text-xs uppercase tracking-[0.24em] text-rug-dark/45">
                        Atención
                      </p>
                      <p className="mt-2 text-sm leading-6 text-rug-dark/70">
                        Ventas y cotizaciones por DM, WhatsApp o formulario de
                        contacto.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}