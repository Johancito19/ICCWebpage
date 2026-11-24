import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "Portal ICC · UNICAH",
  description: "Facultad de Ingeniería en Ciencias de la Computación · UNICAH",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={raleway.variable}>
      <body>{children}</body>
    </html>
  );
}