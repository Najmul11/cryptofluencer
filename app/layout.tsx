import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import TopNav from "@/components/layout/TopNav";
import AntdProvider from "@/components/providers/AntdProvider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReduxProvider from "@/components/providers/ReduxProvider";
import "react-loading-skeleton/dist/skeleton.css";

export const metadata: Metadata = {
  title: "Cypto Airdrops - DropsFi",
  description: "Farming airdrops made easier",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-inter text-blackAccent    ">
      <ReduxProvider>
        <AntdProvider>
          <body className={` antialiased `}>
            <TopNav />

            {children}
          </body>

          <Footer />
        </AntdProvider>
      </ReduxProvider>
    </html>
  );
}
