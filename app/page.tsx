import Link from "next/link";
import { CloverIcon, PixIcon, HeadsetIcon } from "./components/Icons";

export default function HomePage() {
  return (
    <div className="p-4 space-y-6 max-w-lg mx-auto">
      <section className="rounded-2xl bg-[#141D32] p-5 border border-white/5 shadow-xl">
        <div className="space-y-1">
          <p className="text-[#94a3b8] text-sm font-medium">Saldo disponível</p>
          <p className="text-3xl font-bold text-[#D4AF37] tracking-tight">R$ 0,00</p>
          <div className="flex gap-4 pt-2 text-sm">
            <span className="text-[#94a3b8]">Disp. jogos <span className="text-white font-medium">R$ 0,00</span></span>
            <span className="text-[#258D46]">Bônus <span className="text-white font-medium">R$ 0,00</span></span>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-2 gap-3">
        <Link
          href="/loterias"
          className="group flex flex-col items-center justify-center gap-3 rounded-2xl bg-[#258D46] p-6 text-white hover:bg-[#1e7038] transition-all duration-200 shadow-lg hover:shadow-[#258D46]/25 hover:-translate-y-0.5"
        >
          <div className="p-2 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors text-white/90">
            <CloverIcon />
          </div>
          <span className="font-semibold text-sm tracking-wide">Loterias</span>
        </Link>

        <Link
          href="/recarga-pix"
          className="group flex flex-col items-center justify-center gap-3 rounded-2xl bg-[#0d9488] p-6 text-white hover:bg-[#0f766e] transition-all duration-200 shadow-lg hover:shadow-teal-500/25 hover:-translate-y-0.5"
        >
          <div className="p-2 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors text-white/90">
            <PixIcon />
          </div>
          <span className="font-semibold text-sm tracking-wide">Recarga PIX</span>
        </Link>

        <Link
          href="/suporte"
          className="group col-span-2 flex flex-col items-center justify-center gap-3 rounded-2xl bg-[#141D32] p-5 text-white border border-white/5 hover:border-[#258D46]/50 transition-all duration-200"
        >
          <div className="p-2 rounded-xl bg-[#258D46]/20 group-hover:bg-[#258D46]/30 transition-colors text-[#258D46]">
            <HeadsetIcon />
          </div>
          <span className="font-semibold text-sm tracking-wide">Suporte</span>
        </Link>
      </div>
    </div>
  );
}
