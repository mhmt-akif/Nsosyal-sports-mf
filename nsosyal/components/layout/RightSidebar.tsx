import PopularTags from "./PopularTags";
import SearchBar from "./SearchBar";
import UserMenu from "./UserMenu";

// Sağ kenar. Dar ekranda gizli. İçerik kutusu (w-72) sütunun soluna, yani orta içeriğe
// yakın durur; sağında boşluk kalır (sol sidebar'ın aynası).
export default function RightSidebar() {
  return (
    <aside className="sticky top-0 hidden h-screen p-4 lg:block lg:pl-6">
      <div className="flex w-72 flex-col gap-6">
        {/* üst satır: arama + profil */}
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <SearchBar />
          </div>
          <UserMenu />
        </div>

        <PopularTags />
      </div>
    </aside>
  );
}
