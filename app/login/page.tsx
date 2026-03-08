"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-mesh p-4">
      <div className="w-full max-w-sm rounded-2xl glass-card p-8">
        <div className="flex flex-col items-center gap-6">
          <Image src="/logo.svg" alt="LOTOBRASIL" width={80} height={80} />
          <h1 className="text-2xl font-bold text-amber-400">LOTOBRASIL</h1>
          <p className="text-slate-400 text-sm text-center">Acesse sua conta para realizar apostas</p>
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <div>
              <label className="block text-sm text-slate-400 mb-1">Telefone</label>
              <input type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} placeholder="(00) 0 0000 0000" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/30 [color-scheme:dark]" required />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-1">Senha</label>
              <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="••••••••" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/30 [color-scheme:dark]" required />
            </div>
            <button type="submit" className="w-full rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 py-3 font-semibold text-white hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-lg shadow-emerald-500/20">Entrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}
