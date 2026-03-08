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
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#1A2A44] p-4">
      <div className="w-full max-w-sm rounded-2xl bg-[#141D32] p-8 shadow-xl border border-[#258D46]/30">
        <div className="flex flex-col items-center gap-6">
          <Image src="/logo.svg" alt="LOTOBRASIL" width={80} height={80} />
          <h1 className="text-2xl font-bold text-[#D4AF37]">LOTOBRASIL</h1>
          <p className="text-[#94a3b8] text-sm text-center">Acesse sua conta para realizar apostas</p>
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <div>
              <label className="block text-sm text-[#94a3b8] mb-1">Telefone</label>
              <input type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} placeholder="(00) 0 0000 0000" className="w-full rounded-lg border border-[#258D46]/50 bg-white px-4 py-3 text-[#171717]" required />
            </div>
            <div>
              <label className="block text-sm text-[#94a3b8] mb-1">Senha</label>
              <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="••••••••" className="w-full rounded-lg border border-[#258D46]/50 bg-white px-4 py-3 text-[#171717]" required />
            </div>
            <button type="submit" className="w-full rounded-lg bg-[#258D46] py-3 font-semibold text-white hover:bg-[#1e7038] transition-colors">Entrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}
