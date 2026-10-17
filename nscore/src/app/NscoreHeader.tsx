import { SegmentedControl } from "../components/ui/SegmentedControl"
import type { Day } from "../types"

interface NscoreHeaderProps {
    value: Day
    onChange: (day: Day) => void  // tıklanınca App'e haber verir
    liveCount: number             // başlığın yanındaki "● 5 CANLI" sayısı
}

const days: { value: Day; label: string }[] = [
    { value: "yesterday", label: "Dün" },
    { value: "today", label: "Bugün" },
    { value: "tomorrow", label: "Yarın" },
]

// Sayfanın başlık satırı: solda "NSCore ● 5 CANLI", sağda gün seçimi
export const NscoreHeader = ({ value, onChange, liveCount }: NscoreHeaderProps) => {
    return (
        <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
                <h1 className="text-2xl font-bold text-white">NSCore</h1>

                {/* canlı maç yoksa rozet gösterilmez */}
                {liveCount > 0 && (
                    <span className="flex items-center gap-1.5 rounded-md bg-red-500/15 px-2 py-0.5 text-xs font-bold text-red-400">
                        <span className="size-1.5 rounded-full bg-red-500" />
                        {liveCount} CANLI
                    </span>
                )}
            </div>

            <SegmentedControl options={days} value={value} onChange={onChange} />
        </div>
    )
}
