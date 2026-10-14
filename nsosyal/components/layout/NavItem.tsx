"use client";

import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  href: string;
  label: string;
  icon: LucideIcon;
}

// Sidebar'daki tek bir menü linki. Menü listesi ve Ayarlar aynı görünsün diye tek yerde tanımlı.
export default function NavItem({ href, label, icon: Icon }: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center gap-3 rounded-full p-1 text-lg text-white transition-colors duration-300 hover:text-blue-400 lg:pr-4 ${
        isActive ? "lg:bg-surface" : ""
      }`}
    >
      {/* ikon dairesi: aktif sayfada mavi */}
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-full ${
          isActive ? "bg-blue-500" : ""
        }`}
      >
        <Icon size={22} strokeWidth={1.75} />
      </span>

      {/* yazı: dar ekranda gizli */}
      <span className="hidden whitespace-nowrap lg:inline">{label}</span>
    </Link>
  );
}
