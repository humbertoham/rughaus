"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutStory() {
  return (
    <section>

      <div className="container-rughaus grid lg:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >

          <h2 className="text-3xl md:text-4xl">
            Nuestra filosofía
          </h2>

          <p>
            En RUGHAUS creemos que una alfombra no es solo un objeto
            decorativo, sino una pieza que define el ritmo visual de un
            espacio.
          </p>

          <p>
            Cada diseño surge de una exploración entre equilibrio,
            materialidad y composición. Buscamos crear piezas que
            dialoguen con la arquitectura y aporten profundidad
            a los interiores contemporáneos.
          </p>

          <p>
            Trabajamos con procesos artesanales y materiales de alta
            calidad para garantizar piezas duraderas y únicas.
          </p>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[4/5] rounded-xl overflow-hidden"
        >

          <Image
            src="/images/studio.jpg"
            alt="Estudio RUGHAUS"
            fill
            className="object-cover"
          />

        </motion.div>

      </div>

    </section>
  );
}