"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const steps = [
  {
    title: "Consulta",
    text: "Cuéntanos sobre tu espacio, estilo y dimensiones ideales.",
  },
  {
    title: "Diseño",
    text: "Creamos propuestas visuales adaptadas a tu proyecto.",
  },
  {
    title: "Fabricación",
    text: "Tu alfombra se produce con materiales de alta calidad.",
  },
  {
    title: "Entrega",
    text: "Recibe un tapete único diseñado para tu espacio.",
  },
];

const WHATSAPP_NUMBER = "5218992798635";
const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hola, quiero cotizar esta alfombra: tapete personalizado"
)}`;

export default function CustomRugs() {
  return (
    <section className="py-32">

      <div className="container-rughaus">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* IMAGEN */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[420px] w-full overflow-hidden rounded-2xl lg:h-[520px]"
          >
            <Image
              src="/images/rugs/3.jpeg"
              alt="Tapete personalizado RUGHAUS"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </motion.div>

          {/* TEXTO */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <p className="text-xs uppercase tracking-[0.35em] text-rug-dark/40 mb-5">
              Custom Rugs
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-rug-red md:text-4xl">
              Diseña un tapete único
              para tu espacio
            </h2>

            <p className="mt-6 max-w-lg text-rug-dark/70">
              Creamos alfombras personalizadas adaptadas a la estética
              y dimensiones de tu proyecto. Cada pieza es diseñada
              cuidadosamente para transformar tu espacio.
            </p>

            {/* PASOS */}

            <div className="mt-10 grid gap-6 sm:grid-cols-2">

              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="flex gap-4"
                >

                  <span className="text-rug-red font-semibold text-lg">
                    0{index + 1}
                  </span>

                  <div>
                    <h3 className="font-semibold text-rug-dark">
                      {step.title}
                    </h3>

                    <p className="text-sm text-rug-dark/60">
                      {step.text}
                    </p>
                  </div>

                </motion.div>
              ))}

            </div>

            {/* CTA */}

            <Link
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-rug-red px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Cotizar tapete personalizado
              <FiArrowRight />
            </Link>

          </motion.div>

        </div>

      </div>

    </section>
  );
}
