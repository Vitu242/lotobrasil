import Link from "next/link";
import Image from "next/image";
import { CloverIcon, PixIcon, HeadsetIcon } from "./components/Icons";

export default function HomePage() {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] bg-mesh">
      <div className="p-5 max-w-md mx-auto space-y-6">
        {/* Logo central - identidade forte */}
        <div className="flex justify-center pt-2 pb-4">
          <Image src="/logo.png" alt="LOTOBRASIL" width={80} height={80} priority className="drop-shadow-lg" />
        </div>

        {/* Card de saldo - glassmorphism */}
        <section className="glass-card rounded-2xl p-5">
          <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">Saldo disponível</p>
          <p className="text-3xl font-bold text-[#eab308] tracking-tight mb-3">R$ 0,00</p>
          <div className="flex gap-6 text-sm">
            <span className="text-slate-400">Jogos <span className="text-white font-medium">R$ 0,00</span></span>
            <span className="text-emerald-500">Bônus <span className="text-white font-medium">R$ 0,00</span></span>
          </div>
        </section>

        {/* Grid de ações - cards compactos e modernos */}
        <div className="grid grid-cols-2 gap-3">
          <Link
            href="/loterias"
            className="group flex flex-col items-center gap-4 rounded-2xl p-6 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white hover:from-emerald-600 hover:to-emerald-700 transition-all duration-200 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="p-3 rounded-xl bg-white/15 group-hover:bg-white/25 transition-colors">
              <CloverIcon className="w-8 h-8" />
            </div>
            <span className="font-semibold text-sm">Loterias</span>
          </Link>

          <Link
            href="/recarga-pix"
            className="group flex flex-col items-center gap-4 rounded-2xl p-6 bg-gradient-to-br from-cyan-500 to-teal-500 text-white hover:from-cyan-600 hover:to-teal-600 transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="p-3 rounded-xl bg-white/15 group-hover:bg-white/25 transition-colors">
              <PixIcon className="w-8 h-8" />
            </div>
            <span className="font-semibold text-sm">Recarga PIX</span>
          </Link>

          <Link
            href="/suporte"
            className="col-span-2 group flex flex-row items-center justify-center gap-4 rounded-2xl p-4 glass-card hover:border-white/10 transition-all duration-200"
          >
            <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500/30 transition-colors">
              <HeadsetIcon className="w-6 h-6" />
            </div>
            <span className="font-medium text-sm text-slate-200">Suporte</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
