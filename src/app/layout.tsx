import type { Metadata } from "next";
import { Kanit, Open_Sans, Righteous, Jersey_10 } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const righteous = Righteous({
  variable: "--font-righteous",
  subsets: ["latin"],
  weight: "400",
});

const jersey10 = Jersey_10({
  variable: "--font-jersey-10",
  subsets: ["latin"],
  weight: "400",
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
        className={`${kanit.variable} ${openSans.variable} ${righteous.variable} ${jersey10.variable} antialiased selection:bg-primary selection:text-foreground overflow-x-hidden`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
