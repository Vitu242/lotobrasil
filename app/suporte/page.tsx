import Link from "next/link";

export default function SuportePage() {
  return (
    <div className="p-4">
      <header className="flex items-center gap-2 mb-6 text-[#D4AF37]">
        <Link href="/" className="p-1">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </Link>
        <h1 className="text-xl font-bold">Suporte</h1>
      </header>
      <div className="rounded-xl bg-[#141D32] p-6 border border-[#258D46]/30">
        <a href="https://wa.me/5571999999999" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full rounded-xl bg-[#25D366] py-3 font-semibold text-white hover:bg-[#20BD5A] transition-colors">💬 Abrir WhatsApp</a>
      </div>
    </div>
  );
}
