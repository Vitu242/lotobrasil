import Link from "next/link";

const COLOCACOES = [
  { id: "1", label: "1 PRÊMIO" },
  { id: "2", label: "2 PRÊMIO" },
  { id: "3", label: "3 PRÊMIO" },
  { id: "1-5", label: "1/5 PRÊMIO" },
];

export default function ColocacaoPage({ searchParams }: { searchParams: { tipo?: string; data?: string; modalidade?: string } }) {
  const tipo = searchParams?.tipo || "";
  const data = searchParams?.data || "";
  const modalidade = searchParams?.modalidade || "";

  return (
    <div className="p-4">
      <header className="flex items-center gap-2 mb-6 text-[#D4AF37]">
        <Link href={`/loterias/modalidade?tipo=${tipo}&data=${data}`} className="p-1">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </Link>
        <h1 className="text-xl font-bold">Colocação</h1>
      </header>
      <div className="space-y-2">
        {COLOCACOES.map((col) => (
          <Link key={col.id} href={`/loterias/palpites?tipo=${tipo}&data=${data}&modalidade=${modalidade}&colocacao=${col.id}&colLabel=${encodeURIComponent(col.label)}`} className="flex items-center justify-between rounded-xl bg-[#141D32] p-4 border border-[#258D46]/30 hover:border-[#258D46] transition-colors">
            <span className="font-semibold text-white">{col.label}</span>
            <svg className="h-5 w-5 text-[#94a3b8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </Link>
        ))}
      </div>
    </div>
  );
}
