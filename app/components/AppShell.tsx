"use client";

import { usePathname } from "next/navigation";
import { Header } from "./Header";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLogin = pathname === "/login";

  if (isLogin) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-[#1A2A44]">
      <Header unidade="712553" />
      <main className="pb-24">{children}</main>
    </div>
  );
}
