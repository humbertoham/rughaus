import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://rughaus.co"),

  title: {
    default: "RUGHAUS",
    template: "%s | RUGHAUS",
  },

  description:
    "Tapetes únicos. Espacios únicos. En RUGHAUS diseñamos y seleccionamos alfombras que transforman espacios. Cotiza tapetes personalizados o explora nuestro inventario.",

  keywords: [
    "alfombras",
    "tapetes",
    "tapetes personalizados",
    "alfombras modernas",
    "rug design",
    "custom rugs",
    "rughaus",
    "interior design rugs",
    "alfombras México",
  ],

  authors: [{ name: "RUGHAUS" }],
  creator: "RUGHAUS",
  publisher: "RUGHAUS",

  openGraph: {
    title: "RUGHAUS — Tapetes únicos. Espacios únicos.",
    description:
      "Descubre alfombras únicas o diseña la tuya. RUGHAUS transforma espacios con tapetes personalizados y de colección.",
    url: "https://rughaus.co",
    siteName: "RUGHAUS",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RUGHAUS Rugs",
      },
    ],
    locale: "es_MX",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "RUGHAUS — Tapetes únicos. Espacios únicos.",
    description:
      "Alfombras que transforman espacios. Diseños únicos y tapetes personalizados.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },

  category: "interior design",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
       <link id="favicon" rel="icon" href="/favicon.ico" />
    <link id="apple-touch-icon" rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link id="favicon-32x32" rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link id="favicon-16x16" rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link id="android-192x192" rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
    <link id="android-512x512" rel="icon" type="image/png" sizes="512x512.png" href="/android-chrome-512x512.png"  />
    <link id="webmanifest" rel="manifest" href="/site.webmanifest" />
      <body className="antialiased bg-white text-rug-red">
        <Navbar/>
        {children}
        <Footer/>
        <FloatingWhatsApp phone="5218992798635" />
      </body>
    </html>
  );
}