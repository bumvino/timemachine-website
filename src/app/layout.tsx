import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Time Machine | Industrial Automation & Engineering",
  description:
    "Time Machine is an engineering company specializing in industrial manufacturing equipment, PLC programming, HMI development, system integration, web development, and graphic design.",
  keywords: [
    "PLC programming",
    "HMI development",
    "industrial automation",
    "manufacturing engineering",
    "system integration",
    "SCADA",
    "web development",
    "graphic design",
  ],
  openGraph: {
    title: "Time Machine | Industrial Automation & Engineering",
    description:
      "Engineering the future of manufacturing. PLC programming, HMI development, and complete system integration.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
