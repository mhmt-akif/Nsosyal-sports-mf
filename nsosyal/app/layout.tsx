import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import RightSidebar from "@/components/layout/RightSidebar";
import SideBar from "@/components/layout/Sidebar";
import TabMenu from "@/components/layout/TabMenu";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NSosyal",
  description: "NSosyal sosyal ağ uygulaması",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Sayfa en fazla 1420px genişliğinde ve ekranın ortasında (mx-auto).
            Sütunlar: sol sidebar | orta içerik (geri kalan, ~764px) | sağ kenar. Dar ekranda sağ kenar gizli. */}
        <div className="mx-auto grid w-full max-w-355 flex-1 grid-cols-[96px_minmax(0,1fr)] lg:grid-cols-[340px_minmax(0,1fr)_316px]">
          <SideBar />
          <div className="min-w-0">
            <TabMenu />
            <main>{children}</main>
          </div>
          <RightSidebar />
        </div>
      </body>
    </html>
  );
}
