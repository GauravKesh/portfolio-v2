import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./ThemeProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
const inter = Inter({ subsets: ["latin"] });
import RippleEffect from "@/components/sections/RippleEffect";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Gaurav Kesh Roushan | Full-Stack Developer",
  description:
    "Explore the portfolio of Gaurav Kesh Roushan – full-stack developer specializing in scalable web applications using React, Next.js, Node.js, and Django.",
  keywords: [
    "full-stack developer",
    "portfolio",
    "React.js",
    "Next.js",
    "Node.js",
    "Django",
    "TypeScript",
    "web development",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gkrcoder.vercel.app",
    title: "Gaurav Kesh Roushan | Full-Stack Developer",
    description:
      "Building performant, scalable, and modern web applications using React, Next.js, Django, and more.",
    siteName: "Gaurav Kesh Roushan",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-screen bg-background text-foreground`}
      >
        <Analytics />
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Header />

            <main className="flex-1">
              <RippleEffect />
              {children}
            </main>

            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
