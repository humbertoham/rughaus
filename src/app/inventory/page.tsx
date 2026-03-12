"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RugCard from "@/components/RugCard";

const rugs = [
  {
    name: "Noir Flow",
    slug: "noir-flow",
    size: "200 × 300 cm",
    category: "modern",
    image: "/images/rug1.jpg",
    href: "/rugs/noir-flow",
    status: "Disponible",
  },
  {
    name: "Stone Balance",
    slug: "stone-balance",
    size: "180 × 280 cm",
    category: "minimal",
    image: "/images/rug2.jpg",
    href: "/rugs/stone-balance",
    status: "Disponible",
  },
  {
    name: "Organic Lines",
    slug: "organic-lines",
    size: "220 × 320 cm",
    category: "organic",
    image: "/images/rug3.jpg",
    href: "/rugs/organic-lines",
    status: "Disponible",
  },
  {
    name: "Soft Geometry",
    slug: "soft-geometry",
    size: "200 × 300 cm",
    category: "modern",
    image: "/images/rug4.jpg",
    href: "/rugs/soft-geometry",
    status: "Disponible",
  },
  {
    name: "Natural Flow",
    slug: "natural-flow",
    size: "180 × 260 cm",
    category: "organic",
    image: "/images/rug5.jpg",
    href: "/rugs/natural-flow",
    status: "Disponible",
  },
  {
    name: "Urban Texture",
    slug: "urban-texture",
    size: "220 × 320 cm",
    category: "minimal",
    image: "/images/rug6.jpg",
    href: "/rugs/urban-texture",
    status: "Disponible",
  },
];

const filters = ["all", "modern", "minimal", "organic"];

export default function InventoryPage() {
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
              Inventory
            </p>

            <h1 className="text-4xl font-semibold tracking-tight text-rug-red md:text-5xl">
              Tapetes disponibles
            </h1>

            <p className="mt-6 text-rug-dark/70">
              Estas piezas se encuentran actualmente disponibles
              para entrega inmediata. Cada alfombra es única
              y forma parte de nuestro inventario activo.
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

                  {/* STATUS */}

                  <p className="mt-2 text-xs uppercase tracking-wide text-rug-dark/40">
                    {rug.status}
                  </p>

                </motion.div>
              ))}

            </AnimatePresence>

          </motion.div>

        </div>
      </section>

    </main>
  );
}