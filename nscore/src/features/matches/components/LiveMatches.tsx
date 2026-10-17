import type { Team } from '../../../types'

// Şimdilik basit prop'lar; maç verisi gelince yerine `match: Match` alınacak
interface LiveMatchesProps {
    league: string
    clock: string // canlıysa süre: "67'"
    isLive: boolean
    home: Team
    away: Team
    score: { home: number; away: number }
    possession?: { home: number; away: number } // topla oynama yüzdesi; yoksa çubuk gösterilmez
}

// Takım satırı: renkli rozet + isim + skor
const TeamLine=({team,score}:{team:Team;score:number})=>{
    return(
        <div className="flex items-center gap-3">
            <span
                style={{ backgroundColor: team.color }}
                className="flex size-7 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white"
            >
                {team.short}
            </span>
            <span className="flex-1 truncate font-semibold text-white">{team.name}</span>
            <span className="text-xl font-bold text-white">{score}</span>
        </div>
    )
}

export const LiveMatches=({league,clock,isLive,home,away,score,possession}:LiveMatchesProps)=>{
    return(
        <div className="flex w-68 shrink-0 flex-col gap-3 rounded-3xl border border-line bg-surface p-4">
            {/*header */}
            <div className="flex items-center justify-between">
                <span className="truncate text-sm text-zinc-400">{league}</span>

                {/* canlıysa kırmızı nokta + süre, değilse gri "MS" */}
                <div className={`flex shrink-0 items-center gap-1.5 text-sm font-semibold ${isLive ? 'text-red-400' : 'text-zinc-500'}`}>
                    {isLive && <span className="size-1.5 rounded-full bg-red-500" />}
                    <span>{isLive ? clock : 'MS'}</span>
                </div>
            </div>

            {/*takım karşılaşmaları */}
            <TeamLine team={home} score={score.home} />
            <TeamLine team={away} score={score.away} />

            {/* topla oynama: mavi kısım ev sahibinin payı */}
            {possession && (
                <div className="border-t border-line pt-3">
                    <div className="mb-1.5 flex justify-between text-xs text-zinc-500">
                        <span>%{possession.home}</span>
                        <span>Topla oynama</span>
                        <span>%{possession.away}</span>
                    </div>
                    <div className="h-1 overflow-hidden rounded-full bg-line">
                        <div className="h-full rounded-full bg-blue-500" style={{ width: `${possession.home}%` }} />
                    </div>
                </div>
            )}
        </div>
    )
}
