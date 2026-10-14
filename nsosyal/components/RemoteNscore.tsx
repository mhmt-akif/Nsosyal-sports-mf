"use client";

import { useEffect, useState, type ComponentType } from "react";
import { getFederation } from "@/lib/mf";

type LoadState =
  | { status: "loading" }
  | { status: "ready"; Component: ComponentType }
  | { status: "error" };

// nscore'un "./App" modülünü yükleyip host'un içinde normal bir bileşen gibi gösterir.
export default function RemoteNscore() {
  const [state, setState] = useState<LoadState>({ status: "loading" });

  useEffect(() => {
    // Sayfadan ayrılınca gelen cevabı yok saymak için
    let cancelled = false;

    getFederation()
      .loadRemote<{ default: ComponentType }>("nscore/App")
      .then((module) => {
        if (cancelled) return;
        if (!module) throw new Error("nscore/App bulunamadı");
        setState({ status: "ready", Component: module.default });
      })
      .catch((error) => {
        // Remote'un kapalı olması beklenen bir durum; uyarı olarak logla
        console.warn("NSCore yüklenemedi:", error);
        if (!cancelled) setState({ status: "error" });
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (state.status === "loading") {
    return <p className="p-6 text-zinc-500">NSCore yükleniyor...</p>;
  }

  if (state.status === "error") {
    return (
      <div className="m-6 rounded-lg border border-amber-300 bg-amber-50 p-4 text-amber-900">
        NSCore şu anda kullanılamıyor. Lütfen daha sonra tekrar deneyin.
      </div>
    );
  }

  const { Component } = state;
  return <Component />;
}
