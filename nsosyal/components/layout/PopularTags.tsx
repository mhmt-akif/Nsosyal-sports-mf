import { ChevronRight, Hash } from "lucide-react";
import Link from "next/link";

// Şimdilik sahte veri. 
const tags = [
  { id: 1, title: "Halktv", count: 392 },
  { id: 2, title: "Mustafa Arslan", count: 392 },
  { id: 3, title: "Cafer mahiroğlu", count: 392 },
  { id: 4, title: "Halktv", count: 2300 },
  { id: 5, title: "Türkiye", count: 2300 },
];

// 2300 → "2,3 B", 398 → "398"
const formatCount = (n: number) =>
  new Intl.NumberFormat("tr", { notation: "compact" }).format(n);

export default function PopularTags() {
  return (
    // Yükseklik yok: kart içeriği kadar büyür. Genişlik RightSidebar'dan (w-72) gelir.
    <section className="rounded-2xl border border-line p-5">
      {/* başlık satırı */}
      <div className="mb-2 flex items-center justify-between">
        <span className="text-lg font-semibold text-white">Popüler</span>
        <Link
          href="/tags"
          className="flex items-center gap-1 text-sm text-zinc-500 transition-colors hover:text-zinc-300"
        >
          Tümünü gör
          <ChevronRight size={16} />
        </Link>
      </div>

      {/* etiketler: en fazla 5 tane, aralarında çizgi */}
      <ul className="divide-y divide-line">
        {tags.slice(0, 5).map((tag) => (
          <li key={tag.id} className="flex items-center gap-3 py-3">
            <Hash size={26} strokeWidth={1.75} className="shrink-0 text-blue-500" />
            <div>
              <p className="font-semibold text-white">{tag.title}</p>
              <p className="text-sm text-zinc-500">{formatCount(tag.count)} gönderi</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
