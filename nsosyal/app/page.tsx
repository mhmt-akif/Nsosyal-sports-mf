import Feed from "@/components/post/Feed";
import type { Post } from "@/components/post/PostCard";

// Şimdilik sahte veri. Backend hazır olunca GET /api/posts'tan gelecek.
const posts: Post[] = [
  {
    id: 1,
    author: { name: "Deniz Yılmaz", username: "denizyilmaz", verified: true },
    timeAgo: "3g",
    text: "Bilim olimpiyatlarına katılımımız 1978'de başlamıştı.\n\nO yıl bir bronz madalya kazanmıştık.",
    stats: { comments: 4, reposts: 12, likes: 87, views: 1240 },
  },
  {
    id: 2,
    author: { name: "Ekonomi Gündemi", username: "ekonomigundemi", verified: true },
    timeAgo: "5s",
    text: "Enerji arzına ilişkin yeni açıklama: Talep her koşulda karşılanacak.",
    stats: { comments: 0, reposts: 1, likes: 13, views: 67 },
  },
  {
    id: 3,
    author: { name: "Ayşe Kaya", username: "aysekaya", verified: false },
    timeAgo: "1g",
    text: "Bugün ilk microfrontend projemi bitirdim. iframe yok, gerçek Module Federation! 🚀",
    stats: { comments: 8, reposts: 3, likes: 42, views: 512 },
  },
];

// Akış sayfası. Gönderi ekleme gibi etkileşimler Feed'in (client) içinde.
export default function Home() {
  return <Feed initialPosts={posts} />;
}
