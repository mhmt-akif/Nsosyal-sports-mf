"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// href'i olmayan sekmeler henüz yapılmadı, sadece yer tutucu
const tabs = [
  { label: "Akış", href: "/" },
  { label: "Medya" },
  // { label: "Sana Özel" },
  // { label: "Etiketler" },
  // { label: "Haberler" },
  // { label: "Kişi Önerileri" },
  // { label: "NScore", href: "/nscore" },
];

// Sekmeler satırı eşit paylaşır (flex-1); aktif sekmenin altında kalın mavi çizgi.
export default function TabMenu() {
  const pathname = usePathname();

  return (
    <nav className="flex px-6">
      {tabs.map(({ label, href }) =>
        href ? (
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
        ) : (
          <span
            key={label}
            title="Yakında"
            className="flex-1 cursor-not-allowed whitespace-nowrap border-b-[3px] border-transparent py-3 text-center text-sm text-zinc-400"
          >
            {label}
          </span>
        ),
      )}
    </nav>
  );
}
