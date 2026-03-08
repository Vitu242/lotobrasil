"use client";

import Link from "next/link";
import { HomeIcon, UserIcon, LotteryIcon, TrophyIcon, CheckIcon, ChartIcon, DocumentIcon, CreditCardIcon, WalletIcon, CogIcon, ChatIcon, LogoutIcon } from "./Icons";

const menuItems = [
  { href: "/", label: "Início", Icon: HomeIcon },
  { href: "/perfil", label: "Perfil", Icon: UserIcon },
  { href: "/loterias", label: "Loterias", Icon: LotteryIcon },
  { href: "/premiadas", label: "Premiadas", Icon: TrophyIcon },
  { href: "/validar-pule", label: "Validar pule", Icon: CheckIcon },
  { href: "/resultados", label: "Resultados", Icon: ChartIcon },
  { href: "/relatorios", label: "Relatórios", Icon: DocumentIcon },
  { href: "/recarga-pix", label: "Recarga PIX", Icon: CreditCardIcon },
  { href: "/solicitar-saque", label: "Solicitar saque", Icon: WalletIcon },
  { href: "/configuracoes", label: "Configurações", Icon: CogIcon },
];

export function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
      <aside className="fixed right-0 top-0 z-50 h-full w-72 bg-slate-900/95 backdrop-blur-xl border-l border-white/5 shadow-2xl">
        <div className="flex justify-between items-center p-4 border-b border-white/5">
          <span className="text-amber-400 font-semibold tracking-wide">Menu</span>
          <button onClick={onClose} className="p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors" aria-label="Fechar menu">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="p-3 space-y-0.5">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-150"
            >
              <item.Icon />
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          ))}
          <div className="pt-3 mt-3 border-t border-white/10">
            <p className="px-3 py-2 text-slate-500 text-xs font-semibold uppercase tracking-wider">Ajuda</p>
            <Link
              href="/suporte"
              onClick={onClose}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-150"
            >
              <ChatIcon />
              <span className="text-sm font-medium">Suporte</span>
            </Link>
          </div>
          <Link
            href="/login"
            onClick={onClose}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all duration-150 mt-2"
          >
            <LogoutIcon />
            <span className="text-sm font-medium">Sair</span>
          </Link>
        </nav>
      </aside>
    </>
  );
}
