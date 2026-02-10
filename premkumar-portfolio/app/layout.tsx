import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://premkumar.pro'),
  title: "Prem Kumar | Portfolio",
  description: "Portfolio of Prem Kumar V - AI/ML Student and Full-Stack Developer specializing in React, Node.js, Python, TensorFlow, and PyTorch.",
  keywords: ["Prem Kumar", "Portfolio", "AI/ML", "Full Stack Developer", "Web Development"],
  authors: [{ name: "Prem Kumar V" }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
  },
  openGraph: {
    type: "website",
    url: "https://premkumar.pro",
    title: "Prem Kumar | Portfolio",
    description: "Showcasing projects in AI/ML and Full Stack Development.",
    images: [
      {
        url: "/images/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Prem Kumar V"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Prem Kumar | Portfolio",
    description: "Showcasing projects in AI/ML and Full Stack Development.",
    images: ["/images/profile.jpg"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-white dark:bg-black text-black dark:text-white transition-colors duration-500 ease-in-out`}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
