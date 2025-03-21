import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "PWR - Break Free from Porn Addiction",
  description: "Join 250,000+ men on a mission to quit porn forever and move on with their lives. PWR provides tools, community, and support for your recovery journey.",
  keywords: ["porn addiction", "recovery", "addiction app", "quit porn", "brain rewiring", "streak tracker"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
