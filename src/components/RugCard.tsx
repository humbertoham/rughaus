"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

type RugCardProps = {
  name: string;
  image: string;
  size: string;
  href: string;
  description?: string;
};

const WHATSAPP_NUMBER = "5218992798635";

export default function RugCard({ name, image, size, description }: RugCardProps) {
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hola, quiero cotizar esta alfombra: ${name}`
  )}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group"
    >
      <Link
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        aria-label={`Cotizar ${name} por WhatsApp`}
      >

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

        <div className="mt-4 flex items-start justify-between gap-4">

          <div className="min-w-0">
            <h3 className="text-sm font-semibold text-rug-dark group-hover:text-rug-red transition">
              {name}
            </h3>

            <p className="text-sm text-rug-dark/60">
              {size}
            </p>

            {description && (
              <p className="mt-2 line-clamp-2 text-sm text-rug-dark/50">
                {description}
              </p>
            )}
          </div>

          <span className="shrink-0 text-xs uppercase tracking-wider text-rug-dark/50 group-hover:text-rug-red transition">
            Cotizar
          </span>

        </div>

      </Link>
    </motion.div>
  );
}
