import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import TabMenu from "@/components/TabMenu";
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
        <header className="border-b border-zinc-200 px-4 py-3 dark:border-zinc-800">
          <span className="text-lg font-bold">NSosyal</span>
        </header>
        <TabMenu />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
