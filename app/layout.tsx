import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Banner from "@/components/layout/Banner"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: {
    default: "Caleb Luebbering",
    template: "%s | Caleb Luebbering",
  },
  description: "Developer, creative thinker, and lifelong learner. Explore career, passions, scrapbook, and more.",
  openGraph: {
    title: "Caleb Luebbering",
    description: "Developer and creative explorer.",
    url: "https://calebluebbering.com",
    siteName: "Caleb Luebbering",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Banner/>
        {children}
      </body>
    </html>
  );
}
