"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Tab {
  label: string;
  href: string;
}

interface TabMenuProps {
  tabs: Tab[];
}

// Sekmeler satırı eşit paylaşır (flex-1); aktif sekmenin altında kalın mavi çizgi.
export default function TabMenu({ tabs }: TabMenuProps) {
  const pathname = usePathname();

  return (
    <nav className="flex px-6 pt-10">
      {tabs.map(({ label, href }) => (
        <Link
          key={label}
          href={href}
          className={`flex-1 whitespace-nowrap border-b-[3px] py-3 text-center text-sm font-medium transition-colors ${
            pathname === href
              ? "border-blue-500 text-blue-400"
              : "border-transparent text-zinc-400 hover:text-zinc-100"
          }`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
