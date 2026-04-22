"use client";

import { motion } from "framer-motion";
import { FiMessageCircle } from "react-icons/fi";

interface FloatingWhatsAppProps {
phone: string;
message?: string;
}

export default function FloatingWhatsApp({
phone,
message = "Hola, quiero cotizar esta alfombra: tapete RUGHAUS",
}: FloatingWhatsAppProps) {

const encodedMessage = encodeURIComponent(message);
const url = `https://wa.me/${phone}?text=${encodedMessage}`;

return (
<motion.a
href={url}
target="_blank"
rel="noopener noreferrer"
initial={{ opacity: 0, scale: 0.9, y: 10 }}
animate={{ opacity: 1, scale: 1, y: 0 }}
whileHover={{ y: -3, scale: 1.05 }}
whileTap={{ scale: 0.95 }}
transition={{ duration: 0.3 }}
className="
fixed bottom-6 right-6 z-50
flex items-center justify-center
w-14 h-14
rounded-full
bg-white
border
border-[var(--rug-red)]
text-[var(--rug-red)]
shadow-[0_8px_25px_rgba(0,0,0,0.15)]
transition-all duration-300
hover:shadow-[0_10px_30px_rgba(0,0,0,0.22)]
"
> <FiMessageCircle className="text-xl" />
</motion.a>
);
}
