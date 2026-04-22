"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Rug {
  name: string;
  slug: string;
  size: string;
  category: string;
  image: string;
  description: string;
}

const WHATSAPP_NUMBER = "5218992798635";
const INSTAGRAM_URL = "https://www.instagram.com/rughausco";

export default function RugPageClient({ rug }: { rug: Rug }) {
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hola, quiero cotizar esta alfombra: ${rug.name}`
  )}`;

  return (
    <main className="min-h-screen py-24">

      <div className="container-rughaus">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* IMAGEN */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-[4/5] rounded-xl overflow-hidden"
          >
            <Image
              src={rug.image}
              alt={rug.name}
              fill
              priority
              className="object-cover"
            />
          </motion.div>

          {/* INFO */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-6"
          >

            <div className="space-y-2">

              <p className="uppercase text-sm tracking-[0.25em] text-rug-dark opacity-60">
                Colección RUGHAUS
              </p>

              <h1 className="text-4xl md:text-5xl font-semibold">
                {rug.name}
              </h1>

              <p className="max-w-xl text-lg text-rug-dark/70">
                {rug.description}
              </p>

              <p className="text-lg text-rug-dark">
                Tamaño: {rug.size}
              </p>

              <p className="uppercase text-sm tracking-[0.2em] text-rug-dark opacity-60">
                Categoría: {rug.category}
              </p>

            </div>

            <div className="w-full h-px bg-neutral-200" />

            <p className="max-w-xl">
              Cada alfombra RUGHAUS está diseñada como una pieza de arte
              funcional. A través de texturas, composición y materiales
              cuidadosamente seleccionados, buscamos crear objetos que
              transformen espacios contemporáneos en experiencias visuales.
            </p>

            <div className="pt-6 flex flex-wrap gap-4">

              <motion.a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Solicitar versión personalizada
              </motion.a>

              <motion.a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-neutral-300 rounded-lg"
              >
                Contactar al estudio
              </motion.a>

            </div>

          </motion.div>

        </div>

      </div>

    </main>
  );
}
