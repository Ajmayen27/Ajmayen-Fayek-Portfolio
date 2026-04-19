import type { Metadata } from "next";
import { Syne, DM_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";
import Navigation from "@/components/Navigation";

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ajmayen Fayek — Software Engineer",
  description: "Software Engineer & Data Science Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmMono.variable} ${instrumentSerif.variable}`}>
      <body>
        <Cursor />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
