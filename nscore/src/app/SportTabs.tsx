import type { Sport } from "../types"

interface SportTabsProps{
    value:Sport
    onChange:(sport:Sport)=>void  //tıklanınca App'e haber verir
    count?: Partial<Record<Sport,number>> //canlı maç sayıları

}

const sports: { value: Sport; label: string }[] = [
    { value: 'football', label: 'Futbol' },
    { value: 'basketball', label: 'Basketbol' },
    { value: 'volleyball', label: 'Voleybol' },
    { value: 'tennis', label: 'Tenis' },
    { value: 'f1', label: 'Formula 1' },
]

export const SportTabs=({value,onChange, count}:SportTabsProps)=>{
    return(
       <div className="flex flex-wrap gap-2">
            {sports.map((sport)=>{
                const isActive=sport.value===value
                const liveCount=count?.[sport.value] ?? 0

                return(
                    <button
                        key={sport.value}
                        type="button"
                        onClick={()=>onChange(sport.value)}
                        className={`flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                            isActive
                                ? "bg-blue-500 text-white"
                                : "border border-line text-zinc-400 hover:text-zinc-100"
                        }`}
                    >
                        {sport.label}

                        {/* canlı maç sayısı: sadece 0'dan büyükse */}
                        {liveCount>0 && (
                            <span className="flex size-5 items-center justify-center rounded-full bg-red-500 text-[11px] font-bold text-white">
                                {liveCount}
                            </span>
                        )}
                    </button>
                )
            })}
        </div>
    )
}
