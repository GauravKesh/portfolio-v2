import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./ThemeProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
const inter = Inter({ subsets: ["latin"] });
import RippleEffect from "@/components/sections/RippleEffect";

export const metadata: Metadata = {
  title: "Professional Portfolio | Developer & Designer",
  description:
    "A showcase of my projects, skills, and experience as a full-stack developer.",
  keywords: [
    "developer",
    "portfolio",
    "projects",
    "skills",
    "experience",
    "react",
    "next.js",
    "typescript",
  ],
  // openGraph: {
  //   type: "website",
  //   locale: "en_US",
  //   url: "https://gkrcoder.vercel.app",
  //   title: "Professional Portfolio | Developer & Designer",
  //   description:
  //     "A showcase of my projects, skills, and experience as a full-stack developer.",
  //   siteName: "Developer Portfolio",
  // },
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
