"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export default function AboutCTA() {
  return (
    <section className="relative py-32">

      <div className="container-rughaus">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl bg-rug-light/60 px-10 py-20 text-center md:px-20"
        >

          {/* TAG */}

          <p className="text-xs uppercase tracking-[0.35em] text-rug-dark/40 mb-6">
            RUGHAUS
          </p>

          {/* TITULO */}

          <h2 className="text-3xl font-semibold tracking-tight text-rug-red md:text-4xl lg:text-5xl">
            Diseña una alfombra para tu espacio
          </h2>

          {/* TEXTO */}

          <p className="mx-auto mt-6 max-w-xl text-rug-dark/70">
            Cada proyecto tiene necesidades distintas. Podemos desarrollar
            una alfombra personalizada en tamaño, materiales y composición
            para adaptarse perfectamente a tu espacio.
          </p>

          {/* BOTONES */}

          <div className="mt-10 flex flex-wrap justify-center gap-6">

            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="/custom"
                className="group inline-flex items-center gap-2 rounded-full bg-rug-red px-7 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Crear diseño personalizado
                <FiArrowRight className="transition group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 rounded-full border border-rug-red px-7 py-3 text-sm font-medium text-rug-red transition hover:bg-rug-red hover:text-white"
              >
                Explorar colección
              </Link>
            </motion.div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}