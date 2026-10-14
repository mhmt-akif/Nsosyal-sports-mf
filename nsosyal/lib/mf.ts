// Module Federation ayarlarının TEK tanımlandığı yer.
// Host (nsosyal), remote'ları (nscore) çalışma anında, tarayıcıda yükler.
import { createInstance } from "@module-federation/enhanced/runtime";
import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ReactDOMClient from "react-dom/client";
import * as JsxRuntime from "react/jsx-runtime";
import * as JsxDevRuntime from "react/jsx-dev-runtime";

const NSCORE_URL = process.env.NEXT_PUBLIC_NSCORE_URL ?? "http://localhost:3001";

// Next.js kendi içine gömülü (canary) bir React kullanır. Remote'un React'a ait
// HER parçayı host'tan alması gerekir; aksi halde iki farklı sürüm karışır ve
// "Incompatible React versions" hatası çıkar.
const reactModules = {
  react: React,
  "react-dom": ReactDOM,
  "react-dom/client": ReactDOMClient,
  "react/jsx-runtime": JsxRuntime,
  "react/jsx-dev-runtime": JsxDevRuntime,
};

const shared = Object.fromEntries(
  Object.entries(reactModules).map(([name, module]) => [
    name,
    {
      version: React.version,
      lib: () => module,
      shareConfig: { singleton: true, requiredVersion: false as const },
    },
  ]),
);

// Instance'ı ilk ihtiyaç anında oluşturuyoruz (sunucuda değil, tarayıcıda).
let instance: ReturnType<typeof createInstance> | null = null;

export function getFederation() {
  if (!instance) {
    instance = createInstance({
      name: "nsosyal",
      remotes: [
        {
          name: "nscore",
          entry: `${NSCORE_URL}/remoteEntry.js`,
          // nscore Vite ile derleniyor ve ES Module üretiyor
          type: "module",
        },
      ],
      shared,
    });
  }
  return instance;
}
