import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import TopNav from "@/components/layout/TopNav";
import AntdProvider from "@/components/providers/AntdProvider";
import ReduxProvider from "@/components/providers/ReduxProvider";
import "react-loading-skeleton/dist/skeleton.css";
import AlertPopup from "@/components/layout/AlertPopup";

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
    <html lang="en" className="font-inter text-white    ">
      <ReduxProvider>
        <AntdProvider>
          <body className={` antialiased  custom-scroll min-h-screen`}>
            <TopNav />

            {children}
          </body>

          <AlertPopup />
          <Footer />
        </AntdProvider>
      </ReduxProvider>
    </html>
  );
}
