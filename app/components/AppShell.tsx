"use client";

import { usePathname } from "next/navigation";
import { Header } from "./Header";
import { BANCA } from "@/lib/config";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLogin = pathname === "/login";

  if (isLogin) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <Header nomeBanca={BANCA.nome} />
      <main className="pb-24">{children}</main>
    </div>
  );
}
