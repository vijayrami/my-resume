import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
  title: "Vijay Rami | Senior Magento & Adobe Commerce Developer",
  description: "Senior Technology Specialist specializing in Magento/Adobe Commerce development, architecture, and consulting.",
  keywords: ["Magento Developer", "Adobe Commerce", "PHP Developer", "Vijay Rami"],
  authors: [{ name: "Vijay Rami" }],
  openGraph: {
    title: "Vijay Rami | Adobe Certified Professional, Expert, Master - Adobe Commerce Architect",
    description: "Senior Magento/Adobe Commerce Developer | Solution Architecture | Technical Lead",
    url: "https://vijay-rami.vercel.app/",
    siteName: "Vijay Rami Portfolio",
    images: ["/preview.png"],
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
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
      <body className="min-h-full flex flex-col">
        {children}

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
