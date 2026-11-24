import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { WhatsappIconExpandable } from "@/components/WhatsappExpandable";
import Footer from "@/Landing/Components/Personal/Footer";
import Nav from "@/Landing/Components/Personal/Nav";
import { site } from "@/data/site";
import { pageMetadata } from "@/data/metadata";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  ...pageMetadata("/", null),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NG">
      <body>
        <Nav />
        {children}
        <Footer />
        <WhatsappIconExpandable />
      </body>
    </html>
  );
}
