import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FreeTools - 18+ Free Online Tools for Developers & Creators",
  description: "Access 18+ free online tools including text converters, password generators, QR code creators, currency converters, and more. Fast, secure, and user-friendly utilities for everyday tasks.",
  keywords: ["free tools", "online tools", "text converter", "password generator", "QR code generator", "word counter", "base64 encoder", "color picker", "image compressor", "lorem ipsum generator", "markdown converter", "unit converter", "currency converter", "calendar generator", "pdf merger", "image to base64", "markdown editor", "emoji picker", "password strength checker", "invoice generator"],
  authors: [{ name: "FreeTools Team" }],
  openGraph: {
    title: "FreeTools - 18+ Free Online Tools for Developers & Creators",
    description: "Access 18+ free online tools including text converters, password generators, QR code creators, currency converters, and more. Fast, secure, and user-friendly utilities.",
    url: "https://freetools.example.com",
    siteName: "FreeTools",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FreeTools - 18+ Free Online Tools",
    description: "Fast, secure, and user-friendly utilities for everyday tasks.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen flex flex-col custom-scrollbar`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
