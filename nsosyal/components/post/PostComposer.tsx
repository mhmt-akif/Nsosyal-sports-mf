"use client";

import {
  CalendarClock,
  ChartNoAxesColumn,
  CirclePlus,
  Feather,
  Globe,
  Image as ImageIcon,
  Info,
  Smile,
  Sticker,
  UserRound,
} from "lucide-react";
import { useState } from "react";

const MAX_LENGTH = 10000;

// Araç çubuğundaki ikonlar (şimdilik sadece görünüş)
const tools = [
  { label: "Görsel", icon: ImageIcon },
  { label: "Anket", icon: ChartNoAxesColumn },
  { label: "Bilgi", icon: Info },
  { label: "Emoji", icon: Smile },
  { label: "Zamanla", icon: CalendarClock },
  { label: "Çıkartma", icon: Sticker },
];

interface PostComposerProps {
  // Gönder'e basılınca çağrılır. Gönderiyi listeye eklemek ebeveynin (Feed) işi.
  onSubmit: (text: string) => void;
}

// "Gönderi oluşturmak için..." kutusu. Yazılan metin useState'te; sayaç ona göre güncellenir.
export default function PostComposer({ onSubmit }: PostComposerProps) {
  const [text, setText] = useState("");
  const isEmpty = text.trim().length === 0;

  function handleSubmit() {
    if (isEmpty) return;
    onSubmit(text.trim());
    setText(""); // gönderdikten sonra kutuyu temizle
  }

  return (
    <div className="border-b border-line p-5">
      <div className="flex gap-3">
        {/* avatar */}
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-zinc-400">
          <UserRound size={26} />
        </span>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          maxLength={MAX_LENGTH}
          placeholder="Gönderi oluşturmak için..."
          rows={3}
          className="w-full resize-none bg-transparent pt-2 text-sm text-white outline-none placeholder:text-zinc-500"
        />
      </div>

      {/* alt satır: araçlar solda, görünürlük ve Gönder sağda */}
      <div className="mt-3 flex items-center justify-between pl-13">
        <div className="flex items-center gap-3 text-zinc-300">
          {tools.map(({ label, icon: Icon }) => (
            <button
              key={label}
              type="button"
              aria-label={label}
              className="transition-colors hover:text-blue-400"
            >
              <Icon size={18} strokeWidth={1.75} />
            </button>
          ))}

          <span className="mx-1 h-5 w-px bg-line" />

          <span className="text-xs text-zinc-300">
            {text.length}/{MAX_LENGTH}
          </span>
          <CirclePlus size={18} strokeWidth={1.5} className="text-blue-500" />
        </div>

        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-sm text-zinc-300">
            <Globe size={16} strokeWidth={1.75} />
            Herkese açık
          </span>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isEmpty}
            className="flex items-center gap-2 rounded-full bg-surface px-4 py-1.5 text-sm text-zinc-300 transition-colors enabled:hover:bg-blue-600 enabled:hover:text-white disabled:opacity-60"
          >
            <Feather size={16} strokeWidth={1.75} />
            Gönder
          </button>
        </div>
      </div>
    </div>
  );
}
