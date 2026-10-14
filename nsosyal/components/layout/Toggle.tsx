"use client";

import type { LucideIcon } from "lucide-react";
import { useState } from "react";

interface ToggleProps {
  icon: LucideIcon;
  label: string;
}

// Dar ekranda sadece anahtar görünür; geniş ekranda (lg:) ikon + yazı + anahtar.
export default function Toggle({ icon: Icon, label }: ToggleProps) {
  const [isOn, setIsOn] = useState<boolean>(false);

  return (
    <div className="flex items-center justify-between lg:w-56 lg:px-3">
      <span className="hidden items-center gap-3 whitespace-nowrap text-lg text-white lg:flex">
        <Icon size={22} strokeWidth={1.75} />
        {label}
      </span>

      <button
        type="button"
        role="switch"
        aria-checked={isOn}
        aria-label={label}
        onClick={() => setIsOn(!isOn)}
        className={`relative h-6 w-11 rounded-full transition-colors duration-300 ${
          isOn ? "bg-blue-500" : "bg-[#3a4152]"
        }`}
      >
        <span
          className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition-transform duration-300 ${
            isOn ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}
