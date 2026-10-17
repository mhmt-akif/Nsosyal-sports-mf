// Tek bir seçenek: ekranda görünen yazı (label) + arkadaki değer (value)
interface Option<T extends string> {
    value: T
    label: string
}

interface SegmentedControlProps<T extends string> {
    options: Option<T>[]          // gösterilecek seçenekler
    value: T                      // şu an seçili olan
    onChange: (value: T) => void  // tıklanınca üst bileşene haber verir
}

// Yan yana seçenekler, biri seçili: "Dün / Bugün / Yarın", "Tümü / Canlı / ..." gibi
export const SegmentedControl = <T extends string>({ options, value, onChange }: SegmentedControlProps<T>) => {
    return (
        <div className="flex rounded-lg border border-line p-0.5">
            {options.map((option) => {
                const isActive = option.value === value

                return (
                    <button
                        key={option.value}
                        type="button"
                        onClick={() => onChange(option.value)}
                        className={`rounded-md px-3 py-1 text-sm transition-colors ${
                            isActive
                                ? "bg-surface font-semibold text-white"
                                : "text-zinc-400 hover:text-zinc-100"
                        }`}
                    >
                        {option.label}
                    </button>
                )
            })}
        </div>
    )
}
