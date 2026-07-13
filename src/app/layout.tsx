import type { Metadata } from "next";
import { Kanit, Open_Sans, Jersey_10 } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

// Kanit: solo los pesos que realmente se usan (400/500/600/700/900).
// Es la tipografía principal (títulos above-the-fold) → se precarga.
const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
});

// Texto de cuerpo, también visible above-the-fold → se precarga.
const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});

// Solo se usa en un título de la sección Services (below-the-fold):
// no se precarga para no competir con el render inicial.
const jersey10 = Jersey_10({
  variable: "--font-jersey-10",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Deviathan | Software Company",
  description: "Deviathan offers premium software development, UI/UX design, cybersecurity, AI, and IT infrastructure services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth overflow-x-hidden" suppressHydrationWarning>
      <body
        className={`${kanit.variable} ${openSans.variable} ${jersey10.variable} antialiased selection:bg-primary selection:text-foreground overflow-x-hidden`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
