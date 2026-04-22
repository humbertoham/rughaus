"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/images/rugs/4.jpeg",
  "/images/rugs/5.jpeg",
  "/images/rugs/6.jpeg",
  "/images/rugs/7.jpeg",
];

export default function Inspiration() {
  return (
    <section className="py-32">

      <div className="container-rughaus">

        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-2xl"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-rug-dark/40 mb-4">
            Inspiration
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-rug-red md:text-4xl">
            Espacios RUGHAUS
          </h2>

          <p className="mt-4 text-rug-dark/70">
            Descubre cómo nuestras alfombras transforman espacios
            contemporáneos. Cada pieza está diseñada para integrarse
            con la arquitectura y el interiorismo del lugar.
          </p>
        </motion.div>

        {/* GRID */}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {/* Imagen grande */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-[420px] overflow-hidden rounded-xl md:col-span-2"
          >
            <Image
              src={images[0]}
              alt="Espacio con tapete RUGHAUS"
              fill
              sizes="(min-width: 1024px) 66vw, (min-width: 768px) 100vw, 100vw"
              className="object-cover transition duration-700 hover:scale-105"
            />
          </motion.div>

          {/* Imagen vertical */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[420px] overflow-hidden rounded-xl"
          >
            <Image
              src={images[1]}
              alt="Interior con alfombra moderna"
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition duration-700 hover:scale-105"
            />
          </motion.div>

          {/* Imagen pequeña */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative h-[280px] overflow-hidden rounded-xl"
          >
            <Image
              src={images[2]}
              alt="Tapete contemporáneo"
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition duration-700 hover:scale-105"
            />
          </motion.div>

          {/* Imagen pequeña */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[280px] overflow-hidden rounded-xl md:col-span-2"
          >
            <Image
              src={images[3]}
              alt="Espacio moderno con alfombra"
              fill
              sizes="(min-width: 1024px) 66vw, (min-width: 768px) 100vw, 100vw"
              className="object-cover transition duration-700 hover:scale-105"
            />
          </motion.div>

        </div>

      </div>

    </section>
  );
}
