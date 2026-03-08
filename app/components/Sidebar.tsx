"use client";

import Link from "next/link";

const menuItems = [
  { href: "/", label: "Início", icon: "🏠" },
  { href: "/perfil", label: "Perfil", icon: "👤" },
  { href: "/loterias", label: "Loterias", icon: "🎲" },
  { href: "/premiadas", label: "Premiadas", icon: "🏆" },
  { href: "/validar-pule", label: "Validar pule", icon: "✓" },
  { href: "/resultados", label: "Resultados", icon: "📊" },
  { href: "/relatorios", label: "Relatórios", icon: "📄" },
  { href: "/recarga-pix", label: "Recarga PIX", icon: "💳" },
  { href: "/solicitar-saque", label: "Solicitar saque", icon: "💰" },
  { href: "/configuracoes", label: "Configurações", icon: "⚙" },
];

export function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/50" onClick={onClose} aria-hidden="true" />
      <aside className="fixed right-0 top-0 z-50 h-full w-72 bg-[#1A2A44] p-4 shadow-xl">
        <div className="flex justify-between items-center mb-6">
          <span className="text-[#D4AF37] font-bold">Menu</span>
          <button onClick={onClose} className="p-2 text-white hover:bg-white/10 rounded" aria-label="Fechar menu">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={onClose} className="flex items-center gap-3 px-3 py-2 rounded text-white hover:bg-[#258D46] transition-colors">
              <span>{item.icon}</span>
              {item.label}
            </Link>
          ))}
          <div className="pt-4 mt-4 border-t border-white/20">
            <p className="px-3 py-2 text-[#94a3b8] text-sm font-semibold">AJUDA</p>
            <Link href="/suporte" onClick={onClose} className="flex items-center gap-3 px-3 py-2 rounded text-white hover:bg-[#258D46] transition-colors">
              <span>💬</span> Suporte
            </Link>
          </div>
          <Link href="/login" onClick={onClose} className="flex items-center gap-3 px-3 py-2 rounded text-red-300 hover:bg-red-500/20 transition-colors mt-4">
            <span>🚪</span> Sair
          </Link>
        </nav>
      </aside>
    </>
  );
}
