import type { Metadata } from "next";
import { Suspense } from "react";
import { Plus_Jakarta_Sans, Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { NavigationProgressBar } from "@/components/layout/navigation-progress-bar";
import { BackgroundWithLoader } from "@/components/BackgroundWithLoader";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nexiqo - Full Stack Development, AI Agents & SEO",
  description: "Full stack developers specializing in website creation, AI agent development, and SEO. We build custom websites, autonomous AI agents that plan and execute, and drive measurable growth.",
  keywords: ["full stack development", "website development", "AI agents", "AI agent development", "SEO services", "frontend development", "backend development", "custom websites"],
  openGraph: {
    title: "Nexiqo - Full Stack Development, AI Agents & SEO",
    description: "Full stack developers specializing in website creation, AI agent development, and SEO. We build custom websites, autonomous AI agents that plan and execute, and drive measurable growth.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexiqo - Full Stack Development, AI Agents & SEO",
    description: "Full stack developers specializing in website creation, AI agent development, and SEO. We build custom websites, autonomous AI agents that plan and execute, and drive measurable growth.",
  },
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/apple-touch-icon.png",
    other: [
      { rel: "icon", url: "/images/favicon.png", sizes: "32x32" },
      { rel: "icon", url: "/images/favicon-16x16.png", sizes: "16x16" }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${plusJakartaSans.variable} ${poppins.variable} font-sans min-h-screen bg-white text-foreground`} suppressHydrationWarning>
        <Providers>
          <BackgroundWithLoader>
            <Suspense fallback={null}>
              <NavigationProgressBar />
            </Suspense>
            <Navbar />
            {children}
            <Footer />
          </BackgroundWithLoader>
        </Providers>
      </body>
    </html>
  );
}

