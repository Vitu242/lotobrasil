import Link from "next/link";

const MODALIDADES = ["CENTENA", "MILHAR", "UNIDADE", "DEZENA", "GRUPO", "DUQUE DEZ", "TERNO DEZ", "DUQUE GP", "TERNO GP", "QUADRA GP"];

export default function ModalidadePage({ searchParams }: { searchParams: { tipo?: string; data?: string } }) {
  const tipo = searchParams?.tipo || "";
  const data = searchParams?.data || "";

  return (
    <div className="p-4">
      <header className="flex items-center gap-2 mb-6 text-[#D4AF37]">
        <Link href={`/loterias/nova-aposta?tipo=${tipo}`} className="p-1">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </Link>
        <h1 className="text-xl font-bold">Modalidade</h1>
      </header>
      <div className="space-y-2">
        {MODALIDADES.map((mod) => (
          <Link key={mod} href={`/loterias/colocacao?tipo=${tipo}&data=${data}&modalidade=${encodeURIComponent(mod)}`} className="flex items-center justify-between rounded-xl bg-[#141D32] p-4 border border-[#258D46]/30 hover:border-[#258D46] transition-colors">
            <span className="font-semibold text-white">{mod}</span>
            <svg className="h-5 w-5 text-[#94a3b8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </Link>
        ))}
      </div>
    </div>
  );
}
