import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prathmesh | Portfolio",
  description:
    "2nd Year CS Engineering Student — Generative AI, Agentic AI & Full-Stack Development enthusiast. Explore my skills, interests, and more.",
  keywords: [
    "Prathmesh",
    "portfolio",
    "CS engineering",
    "Generative AI",
    "Agentic AI",
    "Full-Stack",
    "VIT Bhopal",
  ],
  authors: [{ name: "Prathmesh" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
