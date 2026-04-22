"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiInstagram,
  FiMail,
  FiMessageCircle,
  FiArrowUpRight,
  FiFacebook,
} from "react-icons/fi";

const links = [
  { name: "Inicio", href: "/" },
  { name: "Galería", href: "/gallery" },
  { name: "Inventario", href: "/inventory" },
  { name: "Tapetes Personalizados", href: "/custom" },
  { name: "Nosotros", href: "/about" },
];

const legal = [
  { name: "Privacidad", href: "/privacy" },
  { name: "Términos", href: "/terms" },
];

const WHATSAPP_NUMBER = "5218992798635";
const INSTAGRAM_URL = "https://www.instagram.com/rughausco";
const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hola, quiero cotizar esta alfombra: tapete RUGHAUS"
)}`;

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-black/5 bg-white">
      <div className="container-rughaus py-16">

        {/* GRID PRINCIPAL */}

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* LOGO + DESCRIPCIÓN */}

          <div className="space-y-5">

            <div className="flex flex-col">
              <span className="text-[1.4rem] font-semibold tracking-[-0.08em] text-rug-red">
                RUGHAUS
              </span>

              <span className="text-[0.65rem] uppercase tracking-[0.28em] text-rug-dark/50">
                rughaus.co
              </span>
            </div>

            <p className="text-sm leading-relaxed text-rug-dark/70 max-w-xs">
              Tapetes únicos para espacios únicos.  
              Diseñamos y seleccionamos alfombras que transforman interiores.
            </p>

            {/* CTA */}

            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-rug-red px-5 py-3 text-sm font-medium text-white shadow-md transition hover:opacity-90"
              >
                <FiMessageCircle />
                Cotizar tapete
                <FiArrowUpRight />
              </Link>
            </motion.div>

          </div>

          {/* NAVEGACIÓN */}

          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-rug-dark/60">
              Navegación
            </h4>

            <ul className="space-y-3 text-sm">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
  href={link.href}
  className="
    inline-block
    bg-[linear-gradient(currentColor,currentColor)]
    bg-[length:0%_1.5px]
    bg-[position:0_100%]
    bg-no-repeat
    pb-1
    text-[0.95rem]
    font-medium
    text-rug-dark
    transition-[color,background-size]
    duration-300
    ease-out
    hover:bg-[length:100%_1.5px]
    hover:text-rug-red
  "
>
  {link.name}
</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACTO */}

          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-rug-dark/60">
              Contacto
            </h4>

            <ul className="space-y-4 text-sm">

              <li>
                <a
                  href="mailto:hello@rughaus.co"
                  className="flex items-center gap-2 text-rug-dark transition hover:text-rug-red"
                >
                    
                  <FiMail />
                  contacto@rughaus.co
                </a>
              </li>

              <li>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-rug-dark transition hover:text-rug-red"
                >
                  <FiMessageCircle />
                  WhatsApp
                </a>
              </li>

              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-rug-dark transition hover:text-rug-red"
                >
                  <FiInstagram />
                  Instagram
                </a>
              </li>
               <li>
                <a
                  href="https://facebook.com/rughaus.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-rug-dark transition hover:text-rug-red"
                >
                  <FiFacebook/>
                  Facebook
                </a>
              </li>

            </ul>
          </div>

          {/* SOBRE LA MARCA */}

          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-rug-dark/60">
              RUGHAUS
            </h4>

            <p className="text-sm leading-relaxed text-rug-dark/70">
              Estudio especializado en alfombras modernas y tapetes
              personalizados para espacios residenciales y comerciales.
            </p>
          </div>

        </div>

        {/* LINEA DIVISORIA */}

        <div className="my-12 h-px w-full bg-black/5" />

        {/* BOTTOM */}

        <div className="flex flex-col items-start justify-between gap-4 text-sm text-rug-dark/60 md:flex-row">

          <p>
            © {new Date().getFullYear()} RUGHAUS. Todos los derechos reservados.
          </p>

          <div className="flex gap-6">
            {legal.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="transition hover:text-rug-red"
              >
                {item.name}
              </Link>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
}
