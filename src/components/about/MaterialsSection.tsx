"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  Droplets,
  Layers,
  Sparkles,
} from "lucide-react";

const materials = [
  {
    title: "Lana natural",
    description:
      "Seleccionamos lana de alta calidad por su suavidad, resistencia y capacidad para conservar textura y color con el paso del tiempo.",
    icon: Leaf,
  },
  {
    title: "Algodón",
    description:
      "El algodón aporta flexibilidad estructural y una base sólida para el tejido, permitiendo composiciones duraderas y equilibradas.",
    icon: Layers,
  },
  {
    title: "Tintes duraderos",
    description:
      "Utilizamos procesos de teñido que garantizan profundidad cromática y estabilidad visual a lo largo de los años.",
    icon: Droplets,
  },
  {
    title: "Texturas artesanales",
    description:
      "Cada alfombra incorpora variaciones de relieve y densidad que aportan riqueza visual y una experiencia táctil única.",
    icon: Sparkles,
  },
];

export default function MaterialsSection() {
  return (
    <section className="py-32">

      <div className="container-rughaus">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-20"
        >
          <p className="uppercase text-sm tracking-[0.3em] opacity-60 mb-3">
            Materiales
          </p>

          <h2 className="text-3xl md:text-4xl mb-4 text-balance">
            Materiales seleccionados para crear piezas duraderas y expresivas
          </h2>

          <p>
            En RUGHAUS prestamos especial atención a los materiales que
            componen cada alfombra. La selección adecuada garantiza
            equilibrio entre estética, textura y durabilidad.
          </p>
        </motion.div>

        {/* Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {materials.map((material, index) => {
            const Icon = material.icon;

            return (
              <motion.div
                key={material.title}
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
                  {material.title}
                </h3>

                <p>
                  {material.description}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}