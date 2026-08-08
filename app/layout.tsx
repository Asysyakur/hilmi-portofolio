import "./globals.css";
import { Bebas_Neue, Barlow_Condensed } from "next/font/google";
import type { Metadata } from "next";

import Cursor from "./components/Cursor";
import { Analytics } from "@vercel/analytics/next";

const bebas = Bebas_Neue({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const barlow = Barlow_Condensed({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Hilmi Asysyakur Islam | Frontend Developer",
    template: "%s | Hilmi Asysyakur Islam",
  },
  description:
    "Frontend Developer specializing in React.js, Next.js, and Laravel. Building responsive web applications and AI-integrated platforms.",
  keywords: [
    "Hilmi Asysyakur Islam",
    "Frontend Developer",
    "Fullstack Developer",
    "React.js",
    "Next.js",
    "Laravel",
    "Bandung",
  ],
  authors: [{ name: "Hilmi Asysyakur Islam" }],
  openGraph: {
    title: "Hilmi Asysyakur Islam | Frontend Developer",
    description:
      "Frontend Developer specializing in React.js, Next.js, and Laravel. Building responsive web applications and AI-integrated platforms.",
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "/PasFoto.jpg",
        width: 800,
        height: 600,
        alt: "Hilmi Asysyakur Islam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hilmi Asysyakur Islam | Frontend Developer",
    description:
      "Frontend Developer specializing in React.js, Next.js, and Laravel. Building responsive web applications and AI-integrated platforms.",
    images: ["/PasFoto.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/PasFoto.jpg" as="image" type="image/jpeg" />
      </head>
      <body className={`${bebas.variable} ${barlow.variable}`}>
        <Cursor />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
