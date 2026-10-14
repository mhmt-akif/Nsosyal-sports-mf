import Link from "next/link";

// Var olmayan bir adrese gidilince gösterilir.
// Next.js'in hazır 404 sayfası kendi beyaz arka planını getirdiği için kendimizinkini yazıyoruz.
export default function NotFound() {
  return (
    <section className="p-6">
      <h1 className="text-xl font-semibold">Sayfa bulunamadı</h1>
      <p className="mt-2 text-zinc-400">
        Aradığın sayfa henüz yok ya da taşınmış olabilir.
      </p>
      <Link href="/" className="mt-4 inline-block text-blue-400 hover:underline">
        Ana sayfaya dön
      </Link>
    </section>
  );
}
