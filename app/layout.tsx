import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ADS ROVA Digital Marketing",
  description:
    "Modern digital marketing agency based in Nuwara Eliya, Sri Lanka.",

  icons: {
    icon: [
      { url: "/fevicon/favicon.ico" },
      { url: "/fevicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/fevicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/fevicon/apple-touch-icon.png",
  },

  manifest: "/fevicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}