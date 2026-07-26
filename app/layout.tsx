import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vijay Rami | Magento & Adobe Commerce Developer",
  description: "Senior Technology Specialist specializing in Magento/Adobe Commerce development, architecture, and consulting.",
  keywords: ["Magento Developer", "Adobe Commerce", "PHP Developer", "Vijay Rami"],
  authors: [{ name: "Vijay Rami" }],
  openGraph: {
    title: "Vijay Rami | Portfolio",
    description: "Senior Magento/Adobe Commerce Developer",
    url: "https://vijay-rami.vercel.app/",
    siteName: "Vijay Rami Portfolio",
    images: ["/preview.png"],
    type: "website",
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
