"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Sidebar } from "./Sidebar";

export function Header({ unidade = "---" }: { unidade?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 flex h-14 items-center justify-between bg-[#D4AF37] px-4 text-[#141D32] border-b border-[#141D32]/10">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/logo.svg" alt="LOTOBRASIL" width={32} height={32} className="rounded-lg" />
          <span className="font-semibold text-sm tracking-tight">Unidade {unidade}</span>
        </Link>
        <button
          onClick={() => setMenuOpen(true)}
          className="p-2 -mr-2 rounded-lg hover:bg-[#141D32]/10 transition-colors"
          aria-label="Abrir menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>
      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
