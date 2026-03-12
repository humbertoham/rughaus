"use client";

import RugCard from "./RugCard";
import Link from "next/link";
import { motion } from "framer-motion";

const rugs = [
  {
    name: "Noir Flow",
    size: "200 × 300 cm",
    image: "/images/rug1.jpg",
    href: "/inventory/noir-flow",
  },
  {
    name: "Stone Balance",
    size: "180 × 280 cm",
    image: "/images/rug2.jpg",
    href: "/inventory/stone-balance",
  },
  {
    name: "Organic Lines",
    size: "220 × 320 cm",
    image: "/images/rug3.jpg",
    href: "/inventory/organic-lines",
  },
];

export default function FeaturedRugs() {
  return (
    <section className="py-28">

      <div className="container-rughaus">

        {/* Header */}

        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-rug-dark/40 mb-4">
              Colección
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-rug-red md:text-4xl">
              Tapetes destacados
            </h2>

            <p className="mt-4 text-rug-dark/70">
              Una selección de alfombras que definen el estilo de RUGHAUS.
              Diseños contemporáneos que transforman cualquier espacio.
            </p>
          </motion.div>

          <Link
            href="/gallery"
            className="text-sm font-medium text-rug-dark transition hover:text-rug-red"
          >
            Ver todos →
          </Link>

        </div>

        {/* Grid */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {rugs.map((rug) => (
            <RugCard key={rug.name} {...rug} />
          ))}

        </div>

      </div>

    </section>
  );
}