import {
  BadgeCheck,
  Bookmark,
  ChartNoAxesColumn,
  Ellipsis,
  MessageCircle,
  Repeat2,
  Rocket,
  Share2,
} from "lucide-react";

export interface Post {
  id: number;
  author: { name: string; username: string; verified: boolean };
  timeAgo: string;
  text: string;
  stats: { comments: number; reposts: number; likes: number; views: number };
}

// Tek bir gönderi kartı. Butonlar şimdilik sadece görünüş.
export default function PostCard({ post }: { post: Post }) {
  const { author, stats } = post;

  const actions = [
    { label: "Yorum", icon: MessageCircle, count: stats.comments },
    { label: "Paylaş", icon: Repeat2, count: stats.reposts },
    { label: "Beğen", icon: Rocket, count: stats.likes },
    { label: "Görüntülenme", icon: ChartNoAxesColumn, count: stats.views },
  ];

  return (
    <article className="flex gap-3 border-b border-line p-5">
      {/* avatar: baş harf */}
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-cyan-400 to-blue-600 font-semibold text-white">
        {author.name[0]}
      </span>

      <div className="min-w-0 flex-1">
        {/* üst satır: isim, onay rozeti, kullanıcı adı, zaman */}
        <div className="flex items-center gap-1.5 text-sm">
          <span className="font-semibold text-white">{author.name}</span>
          {author.verified && (
            <BadgeCheck size={16} className="fill-blue-500 text-panel" aria-label="Onaylı hesap" />
          )}
          <span className="truncate text-zinc-500">
            @{author.username} · {post.timeAgo}
          </span>
          <button type="button" aria-label="Diğer" className="ml-auto text-zinc-400 hover:text-white">
            <Ellipsis size={18} />
          </button>
        </div>

        {/* metin: whitespace-pre-line satır sonlarını korur */}
        <p className="mt-1 whitespace-pre-line text-sm text-zinc-100">{post.text}</p>

        {/* alt satır: etkileşim butonları */}
        <div className="mt-4 flex items-center gap-2">
          {actions.map(({ label, icon: Icon, count }) => (
            <button
              key={label}
              type="button"
              aria-label={label}
              className="flex items-center gap-1.5 rounded-full border border-line px-4 py-1.5 text-xs text-zinc-300 transition-colors hover:border-blue-500 hover:text-blue-400"
            >
              <Icon size={16} strokeWidth={1.75} />
              {count}
            </button>
          ))}

          <div className="ml-auto flex items-center gap-2">
            <button type="button" aria-label="Kaydet" className="rounded-full border border-line p-1.5 text-zinc-300 hover:text-blue-400">
              <Bookmark size={16} strokeWidth={1.75} />
            </button>
            <button type="button" aria-label="Paylaş" className="rounded-full border border-line p-1.5 text-zinc-300 hover:text-blue-400">
              <Share2 size={16} strokeWidth={1.75} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
