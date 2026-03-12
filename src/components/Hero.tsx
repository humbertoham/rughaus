"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { FiArrowRight, FiMessageCircle } from "react-icons/fi";
import Image from "next/image";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
          {/* IMAGEN DE FONDO */}


      {/* CONTENEDOR */}

      <div className="container-rughaus flex min-h-[85vh] flex-col justify-center py-24">

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >

          {/* TAG */}

          <motion.p
            variants={item}
            className="mb-6 text-xs uppercase tracking-[0.35em] text-rug-dark/50"
          >
            RUGHAUS
          </motion.p>

          {/* HEADLINE */}

          <motion.h1
            variants={item}
            className="text-4xl font-semibold leading-[1.1] tracking-tight text-rug-red md:text-6xl lg:text-7xl"
          >
            Tapetes únicos.
            <br />
            Espacios únicos.
          </motion.h1>

          {/* DESCRIPCIÓN */}

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-rug-dark/70"
          >
            Diseñamos y seleccionamos alfombras que transforman espacios.
            Explora nuestra colección o cotiza un tapete personalizado
            para tu proyecto.
          </motion.p>

          {/* BOTONES */}

          <motion.div
            variants={item}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="/gallery"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-rug-red px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Explorar tapetes
              <FiArrowRight className="transition group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-rug-dark transition hover:border-rug-red hover:text-rug-red"
            >
              <FiMessageCircle />
              Cotizar tapete
            </Link>
          </motion.div>

        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          delay: 1.2,
          duration: 1.6,
          repeat: Infinity,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs tracking-widest text-rug-dark/40"
      >
        SCROLL
      </motion.div>

    </section>
  );
}