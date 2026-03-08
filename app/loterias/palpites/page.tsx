import Link from "next/link";

export default function PalpitesPage() {
  return (
    <div className="p-4">
      <header className="flex items-center gap-2 mb-6 text-[#D4AF37]">
        <Link href="/loterias" className="p-1">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </Link>
        <h1 className="text-xl font-bold">Palpites</h1>
      </header>
      <div className="rounded-xl bg-[#141D32] p-6 border border-[#258D46]/30">
        <p className="text-[#94a3b8] text-center">Digite seus palpites (Em desenvolvimento)</p>
      </div>
    </div>
  );
}
