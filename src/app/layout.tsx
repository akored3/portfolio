import type { Metadata } from "next";
import localFont from "next/font/local";
import MotionProvider from "@/components/MotionProvider";
import { site } from "@/lib/site";
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
  // metadataBase is deliberately omitted: on Vercel this Next version falls
  // back to VERCEL_PROJECT_PRODUCTION_URL (see next/dist/lib/metadata/
  // resolvers/resolve-url.js), so OG URLs resolve without hardcoding a
  // domain. Set it explicitly here once a custom domain exists.
  title: site.meta.title,
  description: site.meta.description,
  openGraph: {
    title: site.meta.title,
    description: site.meta.description,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.meta.title,
    description: site.meta.description,
  },
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
