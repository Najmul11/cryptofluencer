import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Compho airdrops",
  description: "Farming airdrops made easier",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-inter text-blackAccent ">
      <body className={` antialiased `}>
        {/* <TopNav /> */}

        {children}
      </body>

      <Footer />
    </html>
  );
}
