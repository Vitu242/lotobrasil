"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Sidebar } from "./Sidebar";

export function Header({ unidade = "---" }: { unidade?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 flex h-14 items-center justify-between bg-[#D4AF37] px-4 text-[#141D32] shadow">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="LOTOBRASIL" width={36} height={36} />
          <span className="font-bold">UNIDADE: {unidade}</span>
        </Link>
        <button
          onClick={() => setMenuOpen(true)}
          className="p-2"
          aria-label="Abrir menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>
      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
