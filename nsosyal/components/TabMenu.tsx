"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// href'i olmayan sekmeler henüz yapılmadı, sadece yer tutucu
const tabs = [
  { label: "Keşfet", href: "/" },
  { label: "Trendler" },
  { label: "Sana Özel" },
  { label: "Etiketler" },
  { label: "Haberler" },
  { label: "Kişi Önerileri" },
  { label: "NSCore", href: "/nscore" },
];

export default function TabMenu() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-1 overflow-x-auto border-b border-zinc-200 px-4 dark:border-zinc-800">
      {tabs.map(({ label, href }) =>
        href ? (
          <Link
            key={label}
            href={href}
            className={`whitespace-nowrap border-b-2 px-3 py-3 text-sm font-medium ${
              pathname === href
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            }`}
          >
            {label}
          </Link>
        ) : (
          <span
            key={label}
            title="Yakında"
            className="cursor-not-allowed whitespace-nowrap border-b-2 border-transparent px-3 py-3 text-sm text-zinc-400 dark:text-zinc-600"
          >
            {label}
          </span>
        ),
      )}
    </nav>
  );
}
