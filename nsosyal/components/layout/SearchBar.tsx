import { Search } from "lucide-react";

// Geçişli kenarlık: dış kutu geçişli renkte ve 1px iç boşluklu (p-px),
// input kendi koyu zeminiyle ortasını kapatıyor; kenarda 1px'lik şerit kalıyor.
export default function SearchBar() {
  return (
    <div className="relative rounded-full bg-linear-to-r from-cyan-400 to-blue-600 p-px">
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
      />
      <input
        type="text"
        placeholder="Arama yap"
        className="w-full rounded-full bg-background py-2.5 pr-4 pl-11 text-sm text-white outline-none placeholder:text-zinc-400"
      />
    </div>
  );
}
