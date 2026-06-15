import type { Metadata } from "next";
import { Kanit, Open_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
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
        className={`${kanit.variable} ${openSans.variable} antialiased selection:bg-primary selection:text-foreground overflow-x-hidden`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
