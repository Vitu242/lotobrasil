import Link from "next/link";
import { LotteryIcon, RefreshIcon } from "@/app/components/Icons";

export default function LoteriasPage() {
  const tipos = [
    { href: "/loterias/nova-aposta?tipo=tradicional", label: "Tradicional" },
    { href: "/loterias/nova-aposta?tipo=tradicional-1-10", label: "Tradicional 1/10" },
    { href: "/loterias/repetir-pule", label: "Repetir pule", Icon: RefreshIcon },
  ];

  return (
    <div className="p-4 max-w-md mx-auto min-h-[calc(100vh-3.5rem)] bg-mesh">
      <header className="flex items-center gap-3 mb-6">
        <Link href="/" className="p-2 -ml-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </Link>
        <h1 className="text-lg font-semibold text-white">Nova aposta</h1>
      </header>
      <div className="space-y-2">
        {tipos.map((tipo) => (
          <Link
            key={tipo.href}
            href={tipo.href}
            className="flex items-center justify-between rounded-2xl glass-card p-4 hover:border-white/10 transition-all duration-150 group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500/30 transition-colors">
                {tipo.Icon ? <tipo.Icon /> : <LotteryIcon />}
              </div>
              <span className="font-medium text-white">{tipo.label}</span>
            </div>
            <svg className="w-5 h-5 text-slate-400 group-hover:text-amber-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </Link>
        ))}
      </div>
    </div>
  );
}
