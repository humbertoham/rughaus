"use client";

import { motion } from "framer-motion";
import {
  Shapes,
  Hammer,
  SlidersHorizontal,
  ShieldCheck,
} from "lucide-react";

const values = [
  {
    title: "Diseño contemporáneo",
    text: "Creamos piezas que combinan minimalismo, geometría y exploración visual.",
    icon: Shapes,
  },
  {
    title: "Artesanía",
    text: "Cada alfombra es producida con técnicas artesanales que respetan el material.",
    icon: Hammer,
  },
  {
    title: "Personalización",
    text: "Ofrecemos la posibilidad de adaptar tamaño, color y composición.",
    icon: SlidersHorizontal,
  },
  {
    title: "Durabilidad",
    text: "Seleccionamos materiales pensados para resistir el paso del tiempo.",
    icon: ShieldCheck,
  },
];

export default function AboutValues() {
  return (
    <section>
      <div className="container-rughaus">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-4">
            Lo que define nuestro trabajo
          </h2>

          <p>
            Nuestro enfoque combina diseño contemporáneo con producción
            artesanal para crear piezas únicas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="space-y-4"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-md bg-rug-light">

                  <Icon
                    size={22}
                    className="text-rug-red"
                    strokeWidth={1.5}
                  />

                </div>

                <h3 className="text-xl">
                  {value.title}
                </h3>

                <p>
                  {value.text}
                </p>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}