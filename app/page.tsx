import Link from "next/link";

export default function HomePage() {
  return (
    <div className="p-4 space-y-6">
      <section className="rounded-xl bg-[#141D32] p-4 border border-[#258D46]/30">
        <div className="space-y-2">
          <p className="text-[#94a3b8] text-sm">Saldo</p>
          <p className="text-2xl font-bold text-[#D4AF37]">R$ 0,00</p>
          <p className="text-[#94a3b8] text-sm">Disp/Games <span className="text-white">R$ 0,00</span></p>
          <p className="text-[#258D46] text-sm">Bônus <span className="text-white">R$ 0,00</span></p>
        </div>
      </section>

      <div className="grid grid-cols-2 gap-4">
        <Link
          href="/loterias"
          className="flex flex-col items-center justify-center gap-3 rounded-xl bg-[#258D46] p-6 text-white hover:bg-[#1e7038] transition-colors shadow-lg"
        >
          <span className="text-4xl">🍀</span>
          <span className="font-bold text-center">LOTERIAS</span>
        </Link>

        <Link
          href="/recarga-pix"
          className="flex flex-col items-center justify-center gap-3 rounded-xl bg-[#0d9488] p-6 text-white hover:bg-[#0f766e] transition-colors shadow-lg"
        >
          <span className="text-4xl">💳</span>
          <span className="font-bold text-center">RECARGA PIX</span>
        </Link>

        <Link
          href="/suporte"
          className="flex flex-col items-center justify-center gap-3 rounded-xl bg-[#258D46] p-6 text-white hover:bg-[#1e7038] transition-colors shadow-lg"
        >
          <span className="text-4xl">💬</span>
          <span className="font-bold text-center">SUPORTE</span>
        </Link>
      </div>
    </div>
  );
}
