"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const steps = [
  {
    number: "01",
    title: "Explora",
    text: "Descubre nuestra colección de tapetes o inspírate con nuestros espacios.",
  },
  {
    number: "02",
    title: "Selecciona",
    text: "Elige un diseño disponible o cuéntanos la idea para tu tapete personalizado.",
  },
  {
    number: "03",
    title: "Cotiza",
    text: "Envíanos un mensaje y te ayudaremos con medidas, materiales y precio.",
  },
  {
    number: "04",
    title: "Recibe",
    text: "Fabricamos tu alfombra y la entregamos lista para transformar tu espacio.",
  },
];

export default function Process() {
  return (
    <section className="py-32 bg-rug-light/40">

      <div className="container-rughaus">

        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 max-w-2xl"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-rug-dark/40 mb-4">
            Proceso
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-rug-red md:text-4xl">
            Cómo funciona
          </h2>

          <p className="mt-4 text-rug-dark/70">
            Comprar un tapete RUGHAUS es un proceso simple y personalizado.
            Te acompañamos desde la selección hasta la entrega final.
          </p>
        </motion.div>

        {/* GRID */}

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group"
            >
              <div className="mb-6 text-3xl font-semibold text-rug-red">
                {step.number}
              </div>

              <h3 className="mb-3 text-lg font-semibold text-rug-dark">
                {step.title}
              </h3>

              <p className="text-sm leading-relaxed text-rug-dark/70">
                {step.text}
              </p>
            </motion.div>
          ))}

        </div>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 flex justify-center"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-rug-red px-7 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Cotizar tapete
            <FiArrowRight className="transition group-hover:translate-x-1" />
          </Link>
        </motion.div>

      </div>

    </section>
  );
}