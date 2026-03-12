"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiMessageCircle } from "react-icons/fi";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const phoneNumber = "5218992798635"; // <-- cambia por tu número

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `
Hola, soy ${name}

Email: ${email}

Mensaje:
${message}
    `;

    const encodedText = encodeURIComponent(text);

    const url = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    window.open(url, "_blank");
  };

  return (
    <main className="py-32">

      <div className="container-rughaus ">

        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >

          <p className="text-xs uppercase tracking-[0.35em] text-rug-dark/40 mb-4">
            Contacto
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold text-rug-red">
            Hablemos de tu proyecto
          </h1>

          <p className="mt-6 text-rug-dark/70 max-w-xl mx-auto">
            Si tienes una idea para una alfombra personalizada o deseas
            información sobre nuestras piezas, envíanos un mensaje y
            te responderemos lo antes posible.
          </p>

        </motion.div>

        {/* FORM */}

        <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
  className="mx-auto max-w-xl bg-white border border-neutral-200 rounded-2xl p-8 md:p-10"
>

  <form onSubmit={handleSubmit} className="space-y-6">

    {/* NAME */}

    <div className="flex flex-col gap-2">
      <label className="text-sm text-rug-dark/70">
        Nombre
      </label>

      <input
        required
        type="text"
        placeholder="Tu nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-neutral-300 rounded-lg px-4 py-3 outline-none focus:border-rug-red"
      />
    </div>

    {/* EMAIL */}

    <div className="flex flex-col gap-2">
      <label className="text-sm text-rug-dark/70">
        Email
      </label>

      <input
        required
        type="email"
        placeholder="tu@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-neutral-300 rounded-lg px-4 py-3 outline-none focus:border-rug-red"
      />
    </div>

    {/* MESSAGE */}

    <div className="flex flex-col gap-2">
      <label className="text-sm text-rug-dark/70">
        Mensaje
      </label>

      <textarea
        required
        rows={5}
        placeholder="Cuéntanos sobre tu proyecto..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border border-neutral-300 rounded-lg px-4 py-3 outline-none focus:border-rug-red resize-none"
      />
    </div>

    {/* BUTTON */}

<motion.button
  whileHover={{ y: -2 }}
  whileTap={{ scale: 0.97 }}
  type="submit"
  className="relative z-10 mt-4 w-full flex items-center justify-center gap-3 rounded-full border border-rug-red px-6 py-3 text-sm font-light text-rug-red transition hover:bg-rug-light"
>
  <FiMessageCircle size={18} />
  Enviar mensaje por WhatsApp
</motion.button>

  </form>

</motion.div>

          {/* BUTTON */}




      </div>

    </main>
  );
}