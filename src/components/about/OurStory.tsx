"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Compass } from "lucide-react";

export default function OurStory() {
  return (
    <section className="py-32">

      <div className="container-rughaus grid lg:grid-cols-2 gap-20 items-center">

        {/* TEXTO */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >

          <div className="flex items-center gap-3">

            <p className="uppercase text-sm tracking-[0.3em] opacity-60">
              Nuestra historia
            </p>

          </div>

          <h2 className="text-3xl md:text-4xl max-w-xl text-balance">
            RUGHAUS nace de la búsqueda por reinterpretar
            la alfombra contemporánea como una pieza de diseño.
          </h2>

          <p className="max-w-xl">
            El proyecto surge a partir de la exploración entre
            geometría, textura y materialidad. Nos interesa
            entender la alfombra no solo como un elemento
            decorativo, sino como una pieza capaz de definir
            la atmósfera de un espacio.
          </p>

          <p className="max-w-xl">
            Cada diseño parte de un proceso de investigación
            visual donde se analizan composiciones, ritmos y
            contrastes. A partir de estas exploraciones se
            desarrollan piezas que dialogan con la arquitectura
            contemporánea y los interiores actuales.
          </p>

          <p className="max-w-xl">
            Nuestro objetivo es crear alfombras que mantengan
            un equilibrio entre estética, durabilidad y
            artesanía, permitiendo que cada pieza se convierta
            en un elemento central dentro del espacio.
          </p>

        </motion.div>

        {/* IMAGEN */}

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