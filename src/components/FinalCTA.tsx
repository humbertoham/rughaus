"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export default function FinalCTA() {
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
            Diseña tu tapete ideal
          </h2>

          {/* TEXTO */}

          <p className="mx-auto mt-6 max-w-xl text-rug-dark/70">
            Cada espacio es único. Trabajemos juntos para crear una alfombra
            diseñada especialmente para tu proyecto.
          </p>

          {/* BOTÓN */}

          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="mt-10 flex justify-center"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-rug-red px-7 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Cotizar tapete
              <FiArrowRight className="transition group-hover:translate-x-1" />
            </Link>
          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}