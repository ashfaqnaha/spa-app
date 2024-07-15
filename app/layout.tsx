import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BackgroundShuffler from "./_components/backgroundShuffler";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "greendot",
  description: "Beauty Parlour",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preload background images */}
        <link rel="preload" href="/web1.webp" as="image" />
        <link rel="preload" href="/web7.webp" as="image" />
        <link rel="preload" href="/web6.webp" as="image" />
        <link rel="preload" href="/web8.webp" as="image" />
      </head>
      <body className="bg-white">
        <div className="relative h-screen w-screen">
          <BackgroundShuffler />
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
