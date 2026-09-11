import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

import Banner from "@/components/layout/Banner";
import Footer from "@/components/layout/Footer";
import SidePane from "@/components/layout/SidePane";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://calebluebbering.com"),

  title: {
    default: "Caleb Luebbering | Software Developer",
    template: "%s | Caleb Luebbering",
  },

  description:
    "Caleb Luebbering is a software developer building beautiful, useful software and exploring technology, music, and creative projects.",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Caleb Luebbering | Software Developer",
    description:
      "The personal website of Caleb Luebbering — software developer, creator, musician, and more.",
    url: "https://calebluebbering.com",
    siteName: "Caleb Luebbering",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Caleb Luebbering | Software Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Caleb Luebbering | Software Developer",
    description:
      "The personal website of Caleb Luebbering — software developer, creator, musician, and more.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html lang="en">
    <body
      className={`${plexSans.variable} ${plexMono.variable} antialiased`}
    >
      <SidePane/>

      <div className="md:ml-48">
        <div className="mx-auto max-w-5xl px-6 py-8 sm:px-16">
          <Banner />

          <main>{children}</main>

          <Footer />
        </div>
      </div>
    </body>
  </html>
);
}