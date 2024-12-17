import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import { cn } from "@/components/libs/utils";
import Head from "@/components/Head";

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ameya Naik",
  description: "Personal website of Ameya Naik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={inter.variable}
      lang="en"
      style={{
        fontFamily:
          "-apple-system, BlinkMacSystemFont, ui-sans-serif, system-ui, var(--font-inter)",
      }}
      suppressHydrationWarning
    >
      <Head />
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "bg-white text-gray-700 subpixel-antialiased",
          "transition-colors duration-1000 dark:bg-slate-900 dark:text-slate-50"
        )}
      >
        <ThemeProvider>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
