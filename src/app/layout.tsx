import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aryaveer.dev — Interactive Engineering Studio",
  description:
    "Engineering portfolio and interactive studio of Aryaveer Agarwal — Software engineering, backend systems, machine learning, and DSA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#0a0d14] text-[#e2e8f0] antialiased selection:bg-[#2563eb] selection:text-white">
        {children}
      </body>
    </html>
  );
}
