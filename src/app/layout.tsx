import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MOBAD – Warsaw Visitor Info",
  description: "Visitor information for MOBAD at CIC Warsaw",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
