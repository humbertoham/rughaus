"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

export default function StudioSection() {
  return (
    <section className="py-32">

      <div className="container-rughaus">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] rounded-xl overflow-hidden"
          >

            <Image
              src="/images/studio-space.jpg"
              alt="Estudio RUGHAUS"
              fill
              className="object-cover"
            />

          </motion.div>

          {/* TEXT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >

            <div className="flex items-center gap-3">

              <Building2
                size={18}
                className="text-rug-red"
                strokeWidth={1.5}
              />

              <p className="uppercase text-sm tracking-[0.3em] opacity-60">
                El estudio
              </p>

            </div>

            <h2 className="text-3xl md:text-4xl max-w-xl text-balance">
              Un espacio dedicado a la exploración del diseño textil contemporáneo
            </h2>

            <p className="max-w-xl">
              Nuestro estudio funciona como un laboratorio creativo donde
              exploramos nuevas composiciones, texturas y relaciones entre
              material y espacio. Cada colección surge de un proceso de
              experimentación visual y técnica.
            </p>

            <p className="max-w-xl">
              Aquí desarrollamos prototipos, analizamos combinaciones de
              color y estudiamos la interacción de las alfombras con la
              arquitectura contemporánea.
            </p>

            <p className="max-w-xl">
              El objetivo es crear piezas que no solo complementen un
              interior, sino que aporten identidad, equilibrio y
              profundidad al espacio.
            </p>

          </motion.div>

        </div>

      </div>

    </section>
  );
}