"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

type RugCardProps = {
  name: string;
  image: string;
  size: string;
  href: string;
};

export default function RugCard({ name, image, size, href }: RugCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group"
    >
      <Link href={href} className="block">

        {/* Imagen */}

        <div className="relative overflow-hidden rounded-xl">

          <Image
            src={image}
            alt={name}
            width={600}
            height={600}
            className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-105"
          />

        </div>

        {/* Info */}

        <div className="mt-4 flex items-center justify-between">

          <div>
            <h3 className="text-sm font-semibold text-rug-dark group-hover:text-rug-red transition">
              {name}
            </h3>

            <p className="text-sm text-rug-dark/60">
              {size}
            </p>
          </div>

          <span className="text-xs uppercase tracking-wider text-rug-dark/50 group-hover:text-rug-red transition">
            Ver
          </span>

        </div>

      </Link>
    </motion.div>
  );
}