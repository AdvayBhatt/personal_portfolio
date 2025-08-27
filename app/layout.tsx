import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

// Load Google fonts and create CSS variables for usage
const GeistSans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const GeistMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Advay Bhattacharya - Data Science Portfolio",
  description:
    "Portfolio of Advay Bhattacharya, Statistics major at Texas A&M University specializing in Data Science and Machine Learning",
  generator: "v0.app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
