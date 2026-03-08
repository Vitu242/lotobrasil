import Link from "next/link";

function formatDate(date: Date) {
  return date.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" });
}

function getDiaSemana(date: Date) {
  const dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
  return dias[date.getDay()];
}

export default function NovaApostaDataPage({ searchParams }: { searchParams: { tipo?: string } }) {
  const tipo = searchParams?.tipo || "tradicional";
  const dates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return d;
  });

  return (
    <div className="p-4">
      <header className="flex items-center gap-2 mb-6 text-[#D4AF37]">
        <Link href="/loterias" className="p-1">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </Link>
        <h1 className="text-xl font-bold">Data</h1>
      </header>
      <div className="space-y-2">
        {dates.map((d, i) => (
          <Link key={i} href={`/loterias/modalidade?tipo=${tipo}&data=${formatDate(d)}`} className="flex items-center justify-between rounded-xl bg-[#141D32] p-4 border border-[#258D46]/30 hover:border-[#258D46] transition-colors">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📅</span>
              <div>
                <p className="font-semibold text-white">{formatDate(d)}</p>
                <p className="text-sm text-[#94a3b8]">{getDiaSemana(d)}{i === 0 ? " (Hoje)" : ""}</p>
              </div>
            </div>
            <svg className="h-5 w-5 text-[#94a3b8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </Link>
        ))}
      </div>
    </div>
  );
}
