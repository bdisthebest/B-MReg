import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alexander & Isabella | Wedding",
  description: "Wedding celebration details and registry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
