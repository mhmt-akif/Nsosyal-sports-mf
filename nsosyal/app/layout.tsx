import type { Metadata } from "next";
import { Inter } from "next/font/google";
import RightSidebar from "@/components/layout/RightSidebar";
import SideBar from "@/components/layout/Sidebar";
import "./globals.css";

// NSosyal'ın yazı tipi. "latin-ext" Türkçe harfler (ş, ğ, ı, İ) için gerekli.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "NSosyal",
  description: "NSosyal sosyal ağ uygulaması",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Sayfa en fazla 1420px genişliğinde ve ekranın ortasında (mx-auto).
            Sütunlar: sol sidebar | orta içerik (geri kalan, ~764px) | sağ kenar. Dar ekranda sağ kenar gizli. */}
        <div className="mx-auto grid w-full max-w-355 flex-1 grid-cols-[96px_minmax(0,1fr)] lg:grid-cols-[340px_minmax(0,1fr)_316px]">
          <SideBar />
          <div className="min-w-0">
            <main>{children}</main>
          </div>
          <RightSidebar />
        </div>
      </body>
    </html>
  );
}
