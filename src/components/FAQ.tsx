"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "¿Puedo solicitar un tapete personalizado?",
    answer:
      "Sí. Diseñamos alfombras personalizadas adaptadas a tu espacio, estilo y dimensiones. Solo envíanos un mensaje con la idea de tu proyecto.",
  },
  {
    question: "¿Cómo puedo comprar un tapete?",
    answer:
      "Explora nuestra galería o inventario y contáctanos para solicitar una cotización. Nuestro equipo te ayudará con medidas, materiales y precio.",
  },
  {
    question: "¿Cuánto tarda la fabricación de un tapete personalizado?",
    answer:
      "El tiempo depende del diseño y tamaño del tapete, pero generalmente el proceso tarda entre 4 y 8 semanas.",
  },
  {
    question: "¿Hacen envíos?",
    answer:
      "Sí. Realizamos envíos nacionales y también podemos coordinar envíos internacionales dependiendo del proyecto.",
  },
  {
    question: "¿Qué materiales utilizan?",
    answer:
      "Trabajamos con materiales de alta calidad como lana, algodón y fibras naturales, seleccionados para garantizar durabilidad y estética.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="py-32">
      <div className="container-rughaus max-w-3xl">

        {/* Header */}

        <div className="mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-rug-dark/40 mb-4">
            FAQ
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-rug-red md:text-4xl">
            Preguntas frecuentes
          </h2>

          <p className="mt-4 text-rug-dark/70">
            Resolvemos algunas dudas comunes sobre nuestros tapetes y el proceso de compra.
          </p>
        </div>

        {/* FAQ items */}

        <div className="space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-black/10 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-medium text-rug-dark">
                  {faq.question}
                </span>

                {active === index ? (
                  <FiMinus className="text-rug-red" />
                ) : (
                  <FiPlus className="text-rug-red" />
                )}
              </button>

              <AnimatePresence initial={false}>
                {active === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-rug-dark/70 text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}