import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import TopNav from "@/components/layout/TopNav";
import AntdProvider from "@/components/providers/AntdProvider";
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
          <body className={` antialiased  custom-scroll`}>
            <TopNav />

            {children}
          </body>

          <Footer />
        </AntdProvider>
      </ReduxProvider>
    </html>
  );
}
