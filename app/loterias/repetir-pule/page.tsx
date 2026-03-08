import Link from "next/link";

export default function RepetirPulePage() {
  return (
    <div className="p-4">
      <header className="flex items-center gap-2 mb-6 text-[#D4AF37]">
        <Link href="/loterias" className="p-1">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </Link>
        <h1 className="text-xl font-bold">Repetir pule</h1>
      </header>
      <div className="rounded-xl bg-[#141D32] p-6 border border-[#258D46]/30 space-y-4">
        <input type="text" placeholder="Código do bilhete" className="w-full rounded-xl border border-[#258D46]/50 bg-white px-4 py-3 text-[#171717]" />
        <button className="w-full rounded-xl bg-[#258D46] py-3 font-semibold text-white hover:bg-[#1e7038] transition-colors">Buscar e repetir</button>
      </div>
    </div>
  );
}
