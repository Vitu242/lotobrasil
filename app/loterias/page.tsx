import Link from "next/link";

export default function LoteriasPage() {
  const tipos = [
    { href: "/loterias/nova-aposta?tipo=tradicional", label: "TRADICIONAL", icon: "🍀" },
    { href: "/loterias/nova-aposta?tipo=tradicional-1-10", label: "TRADICIONAL 1/10", icon: "🍀" },
    { href: "/loterias/repetir-pule", label: "REPETIR PULE", icon: "🔄" },
  ];

  return (
    <div className="p-4">
      <header className="flex items-center gap-2 mb-6 text-[#D4AF37]">
        <Link href="/" className="p-1">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </Link>
        <h1 className="text-xl font-bold">Nova aposta</h1>
      </header>
      <div className="space-y-3">
        {tipos.map((tipo) => (
          <Link key={tipo.href} href={tipo.href} className="flex items-center justify-between rounded-xl bg-[#141D32] p-4 border border-[#258D46]/30 hover:border-[#258D46] transition-colors">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{tipo.icon}</span>
              <span className="font-semibold text-white">{tipo.label}</span>
            </div>
            <svg className="h-5 w-5 text-[#94a3b8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </Link>
        ))}
      </div>
    </div>
  );
}
