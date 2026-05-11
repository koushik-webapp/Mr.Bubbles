import type { Metadata } from "next";
import { Bangers, Inter } from "next/font/google";
import "./globals.css";

const bangers = Bangers({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MR. BUBBLES — Premium Cleaning Solutions",
  description:
    "Premium quality detergents & cleaning essentials delivered to your doorstep. Powerful clean made simple.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bangers.variable} ${inter.variable}`}>
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
