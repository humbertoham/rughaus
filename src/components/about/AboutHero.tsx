"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function AboutHero() {
  return (
    <section>

      <div className="container-rughaus">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl space-y-6"
        >

          <p className="uppercase text-sm tracking-[0.3em] text-rug-dark opacity-60">
            Sobre RUGHAUS
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold text-balance">
            Alfombras contemporáneas diseñadas para espacios que buscan
            identidad, textura y carácter.
          </h1>

          <p className="text-lg max-w-xl">
            RUGHAUS es un estudio enfocado en el diseño de alfombras
            contemporáneas donde la geometría, la textura y el color
            se convierten en herramientas para transformar espacios.
          </p>

        </motion.div>

      </div>

    </section>
  );
}