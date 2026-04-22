"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RugCard from "@/components/RugCard";
import rugs from "@/data/rugs";

const filters = ["all", ...Array.from(new Set(rugs.map((rug) => rug.category)))];

export default function GalleryPage() {
  const [filter, setFilter] = useState("all");

  const filteredRugs =
    filter === "all"
      ? rugs
      : rugs.filter((rug) => rug.category === filter);

  return (
    <main>

      {/* HEADER */}

      <section className="py-24">
        <div className="container-rughaus">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-rug-dark/40">
              Gallery
            </p>

            <h1 className="text-4xl font-semibold tracking-tight text-rug-red md:text-5xl">
              Colección de tapetes
            </h1>

            <p className="mt-6 text-rug-dark/70">
              Explora nuestra colección de alfombras contemporáneas
              diseñadas para transformar espacios con textura,
              equilibrio y carácter.
            </p>
          </motion.div>

        </div>
      </section>

      {/* FILTROS */}

      <section className="pb-10">
        <div className="container-rughaus">

          <div className="flex flex-wrap gap-3">

            {filters.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                whileTap={{ scale: 0.95 }}
                className={`rounded-full px-5 py-2 text-sm transition
                ${
                  filter === category
                    ? "bg-rug-red text-white"
                    : "bg-black/5 text-rug-dark hover:bg-rug-light"
                }`}
              >
                {category === "all"
                  ? "Todos"
                  : category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}

          </div>

        </div>
      </section>

      {/* GRID */}

      <section className="pb-32">
        <div className="container-rughaus">

          <motion.div
            layout
            className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
          >

            <AnimatePresence mode="popLayout">

              {filteredRugs.map((rug) => (
                <motion.div
                  key={rug.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <RugCard {...rug} />
                </motion.div>
              ))}

            </AnimatePresence>

          </motion.div>

        </div>
      </section>

    </main>
  );
}
