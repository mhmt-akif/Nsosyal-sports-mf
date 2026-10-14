import { ChevronDown, UserRound } from "lucide-react";

// Profil fotoğrafı + aşağı ok. Menünün açılması (useState) ve gerçek fotoğraf,
// kullanıcı girişi hazır olunca eklenecek.
export default function UserMenu() {
  return (
    <button
      type="button"
      aria-label="Profil menüsü"
      className="flex items-center gap-1 text-white"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-zinc-400">
        <UserRound size={26} />
      </span>
      <ChevronDown size={18} />
    </button>
  );
}
