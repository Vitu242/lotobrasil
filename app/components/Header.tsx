"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Sidebar } from "./Sidebar";

export function Header({ nomeBanca = "LOTOBRASIL" }: { nomeBanca?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 flex h-14 items-center justify-between px-4 bg-slate-900/80 backdrop-blur-xl border-b border-white/5">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/logo.svg" alt={nomeBanca} width={28} height={28} className="rounded-lg" />
          <span className="font-semibold text-sm text-white tracking-tight">{nomeBanca}</span>
        </Link>
        <button
          onClick={() => setMenuOpen(true)}
          className="p-2 -mr-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
          aria-label="Abrir menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>
      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
