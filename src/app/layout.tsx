import type { Metadata } from "next";
import localFont from "next/font/local";
import MotionProvider from "@/components/MotionProvider";
import "./globals.css";

// Self-hosted (Google Fonts downloads fail on this machine's network)
const syne = localFont({
  src: "../fonts/syne-latin-wght-normal.woff2",
  variable: "--font-syne",
  weight: "400 800",
  display: "swap",
});

const monaSans = localFont({
  src: "../fonts/mona-sans-latin-wght-normal.woff2",
  variable: "--font-mona-sans",
  weight: "200 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jide-Akinwale Akinbolaji | Frontend Engineer",
  description:
    "Portfolio of Jide-Akinwale Akinbolaji, a freelance frontend engineer building fast, high-converting websites and web apps. Open to work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${monaSans.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
