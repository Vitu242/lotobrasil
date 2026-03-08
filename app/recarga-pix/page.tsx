import Link from "next/link";

export default function RecargaPixPage() {
  return (
    <div className="p-4">
      <header className="flex items-center gap-2 mb-6 text-[#D4AF37]">
        <Link href="/" className="p-1">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </Link>
        <h1 className="text-xl font-bold">Recarga PIX</h1>
      </header>
      <div className="rounded-xl bg-[#141D32] p-6 border border-[#258D46]/30 space-y-4">
        <p className="text-[#94a3b8] text-sm">Digite o valor que deseja recarregar. Um QR Code PIX será gerado.</p>
        <input type="text" placeholder="Valor (R$)" className="w-full rounded-xl border border-[#258D46]/50 bg-white px-4 py-3 text-[#171717]" />
        <button className="w-full rounded-xl bg-[#258D46] py-3 font-semibold text-white hover:bg-[#1e7038] transition-colors">Gerar PIX</button>
      </div>
    </div>
  );
}
