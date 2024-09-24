import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
const inter = Inter({ subsets: ["latin"] });
import toast, { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title:
    "Shiksha Kumbh 2024 | National Conference on Role of Academic driven Startups in Economy",
  description: "National Conference",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <div>
        <meta http-equiv="refresh" content="1000" />
        <meta charSet="utf-8" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>
          Welcome to RASE | National Conference on Role of Academic driven
          Startups in Economy
        </title>
        <meta
          name="keywords"
          content="RASE2024, RASE 2024, National Conference on Role of Academic driven Startups in Economy"
        />
        <meta name="description" content="Joint Conference" />
        <meta httpEquiv="cache-control" content="no-cache" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="-1" />
        <NextTopLoader
          color="#6096B4"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={false}
          showSpinner={false}
          shadow="0 0 10px #6096B4,0 0 5px #6096B4"
        />
      </div>
      <Toaster />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
