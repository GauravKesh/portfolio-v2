import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./ThemeProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
const inter = Inter({ subsets: ["latin"] });
import RippleEffect from "@/components/sections/RippleEffect";
import { GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from '@next/third-parties/google'

import Head from "next/head";
import LoadingWrapper from "@/components/common/LoadingWrapper";
import BackgroundUILayer from "@/components/ui/backgrounduilayer";

export const metadata: Metadata = {
  title: "Gaurav Kesh Roushan",
  description:
    "Portfolio of Gaurav Kesh Roushan – full-stack software developer skilled in React, Next.js, Django, Node.js, TypeScript. Explore projects, skills, experience, and tech blogs.",
  keywords: [
    "full-stack developer portfolio",
    "Gaurav Kesh Roushan",
    "React developer",
    "Next.js portfolio",
    "TypeScript developer",
    "Node.js developer",
    "Django developer",
    "Java developer",
    "MERN stack",
    "web developer in India",
    "Software developer in India",
    "software engineer portfolio",
    "developer personal website",
    "frontend backend engineer",
    "JavaScript engineer",
    "tech blog",
    "developer resume site",
    "engineer profile",
    "modern web development",
    "Gaurav portfolio",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gkrcoder.vercel.app",
    title: "Gaurav Kesh Roushan | Full-Stack Developer Portfolio",
    description:
      "Explore my full-stack developer profile, technical stack, project showcases, and career highlights.",
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
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Gaurav Kesh Roushan",
              url: "https://gkrcoder.me",
              jobTitle: "Full-Stack Developer",
              sameAs: [
                "https://github.com/gauravkesh",
                "https://www.linkedin.com/in/gkrcoder",
                "https://gkrcoder.me",
              ],
            }),
          }}
        />
      </Head>
      <GoogleTagManager gtmId="GTM-MKJKLDVR" />
      <GoogleAnalytics gaId="G-G7S9DFLMPY" />
      <body
        className={`${inter.className} min-h-screen bg-background text-foreground`}
      >
        <Analytics />
        <SpeedInsights />
        <ThemeProvider>
        <LoadingWrapper>
          <div className="flex min-h-screen flex-col">
            <Header />

            <main className="flex-1">
              <RippleEffect />
              
              {children}
            </main>

            <Footer />
          </div>
        </LoadingWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
