"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export default function CustomPage() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [size, setSize] = useState("");
  const [message, setMessage] = useState("");

  const phoneNumber = "5218992798635"; // cambia por tu número

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `
Hola, quiero diseñar un tapete personalizado.

Nombre: ${name}
Email: ${email}
Tamaño aproximado: ${size}

Proyecto:
${message}
    `;

    const encodedText = encodeURIComponent(text);

    const url = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    window.open(url, "_blank");
  };

  return (
    <main>

      {/* HERO */}

      <section className="py-24">
        <div className="container-rughaus">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >

            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-rug-dark/40">
              Custom Rugs
            </p>

            <h1 className="text-4xl font-semibold tracking-tight text-rug-red md:text-5xl">
              Diseña tu tapete personalizado
            </h1>

            <p className="mt-6 text-rug-dark/70">
              Creamos alfombras diseñadas específicamente para cada espacio.
              Podemos adaptar tamaño, materiales, textura y composición para
              desarrollar una pieza única para tu proyecto.
            </p>

          </motion.div>

        </div>
      </section>

      {/* PROCESO */}

      <section className="pb-24">
        <div className="container-rughaus">

          <div className="grid gap-10 md:grid-cols-3">

            {[
              {
                title: "1. Comparte tu idea",
                text: "Cuéntanos sobre tu espacio, dimensiones aproximadas y el estilo que buscas."
              },
              {
                title: "2. Desarrollo del diseño",
                text: "Exploramos composiciones, materiales y colores para desarrollar una propuesta."
              },
              {
                title: "3. Producción",
                text: "Una vez aprobado el diseño, iniciamos la producción de tu alfombra."
              }
            ].map((step, i) => (

              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-3"
              >

                <h3 className="text-lg font-medium text-rug-red">
                  {step.title}
                </h3>

                <p className="text-rug-dark/70">
                  {step.text}
                </p>

              </motion.div>

            ))}

          </div>

        </div>
      </section>

      {/* FORM */}

      <section className="pb-32">
        <div className="container-rughaus">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-xl space-y-8"
          >

            <h2 className="text-2xl font-semibold text-rug-red">
              Inicia tu proyecto
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="flex flex-col gap-2">
                <label className="text-sm text-rug-dark/70">
                  Nombre
                </label>

                <input
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border border-neutral-300 rounded-lg px-4 py-3 outline-none focus:border-rug-red"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-rug-dark/70">
                  Email
                </label>

                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-neutral-300 rounded-lg px-4 py-3 outline-none focus:border-rug-red"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-rug-dark/70">
                  Tamaño aproximado
                </label>

                <input
                  type="text"
                  placeholder="Ej. 200 × 300 cm"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  className="border border-neutral-300 rounded-lg px-4 py-3 outline-none focus:border-rug-red"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-rug-dark/70">
                  Cuéntanos sobre tu proyecto
                </label>

                <textarea
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="border border-neutral-300 rounded-lg px-4 py-3 outline-none resize-none focus:border-rug-red"
                />
              </div>

              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="mt-4 flex items-center gap-2 border border-rug-red px-6 py-3 rounded-full text-rug-red text-sm font-light hover:bg-rug-light transition"
              >
                Enviar solicitud
                <FiArrowRight />
              </motion.button>

            </form>

          </motion.div>

        </div>
      </section>

    </main>
  );
}