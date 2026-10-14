"use client";

import {
  Bell,
  Bookmark,
  Feather,
  Heart,
  House,
  MessagesCircle,
  Moon,
  Play,
  Search,
  Settings2,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import NavItem from "./NavItem";
import Toggle from "./Toggle";

const menuItems = [
  { label: "Ana Sayfa", href: "/", icon: House },
  { label: "Bildirimler", href: "/notifications", icon: Bell },
  { label: "Mesajlar", href: "/messages", icon: MessagesCircle },
  { label: "Keşfet", href: "/explore", icon: Search },
  { label: "Topluluklar", href: "/community", icon: Users },
  { label: "Kaydedilenler", href: "/saved", icon: Bookmark },
  { label: "Beğeniler", href: "/likes", icon: Heart },
];

export default function SideBar() {
  // Dar ekranda (< 1024px) sadece ikonlar görünür; lg: ile başlayan sınıflar geniş ekran içindir.
  // <aside> sütunun tamamını kaplar. İçindeki kutu (lg:w-56) geniş ekranda sütunun sağına,
  // yani orta içeriğe yakın durur.
  return (
    <aside className="sticky top-4 flex h-screen flex-col items-center p-4 lg:items-end lg:pr-25">
      <div className="flex flex-col items-center lg:w-56 lg:items-start">
        {/* logo: public/logo.svg */}
        <Link href="/" className="mb-6 lg:px-1">
          <Image src="/logo.svg" alt="NSosyal" width={48} height={58} priority />
        </Link>

        {/* linklerin dizilişi */}
        <nav className="flex flex-col gap-2 rounded-full bg-surface p-2 lg:w-56 lg:rounded-none lg:bg-transparent lg:p-0">
          {menuItems.map((item) => (
            <NavItem key={item.href} href={item.href} label={item.label} icon={item.icon} />
          ))}
        </nav>

        <button
          type="button"
          className="mt-6 flex h-11 w-11 items-center justify-center gap-2 rounded-full bg-linear-to-r from-cyan-400 to-blue-600 text-sm font-medium text-white lg:h-auto lg:w-56 lg:px-4 lg:py-2"
        >
          <Feather size={18} strokeWidth={1.75} />
          <span className="hidden lg:inline">Yeni Gönderi</span>
        </button>

        {/* ayırıcı çizgi */}
        <hr className="my-6 w-12 border-[#2d3240] lg:w-56" />

        <Toggle label="Medya" icon={Play} />

        <hr className="my-6 w-12 border-[#2d3240] lg:w-56" />

        <Toggle label="Karanlık Mod" icon={Moon} />

        {/* ayarlar: menüdeki linklerle aynı bileşen */}
        <div className="mt-6 lg:w-56">
          <NavItem href="/settings" label="Ayarlar" icon={Settings2} />
        </div>
      </div>
    </aside>
  );
}
