# Mensagem para o assistente – Deploy LOTOBRASIL no servidor

**Use este texto na próxima vez que for subir o LOTOBRASIL ou atualizações.** Cole na conversa para o assistente seguir o fluxo correto.

---

## Contexto do projeto

- **Projeto:** LOTOBRASIL (Next.js – site de apostas para clientes)
- **Repositório:** (criar no GitHub, ex: https://github.com/Vitu242/lotobrasil)
- **Servidor:** 167.71.168.183 (Ubuntu)
- **Pasta no servidor:** /var/www/lotobrasil
- **Porta:** 3001 (premiacoes-admin usa 3000)
- **Método de deploy:** Git (push no PC → pull no servidor)

---

## Primeira vez (setup)

### 1. Criar repositório no GitHub

Crie um repositório `lotobrasil` no GitHub (pode ser vazio).

### 2. No PC – conectar e fazer primeiro push

```powershell
cd C:\Users\User\lotobrasil
git init
git add -A
git status
git commit -m "Initial commit - LOTOBRASIL"
git branch -M main
git remote add origin https://github.com/Vitu242/lotobrasil.git
git push -u origin main
```

**Importante:** No PowerShell, caminhos com parênteses precisam de aspas:
- `git add "app/(app)/page.tsx"` (e não `git add app/(app)/...`)

### 3. No servidor – clone e primeiro deploy

```bash
ssh root@167.71.168.183
cd /var/www
# Se existir pasta lotobrasil do SCP anterior, remover:
rm -rf lotobrasil
git clone https://github.com/Vitu242/lotobrasil.git
cd lotobrasil
npm install
npm run build
pm2 start npm --name "lotobrasil" -- start
pm2 save
```

### 4. Testar

Acessar: **http://167.71.168.183:3001**

---

## Fluxo de deploy (atualizações)

### 1. No PC (PowerShell)

```powershell
cd C:\Users\User\lotobrasil
git add -A
git status
git commit -m "Descrição das alterações"
git push origin main
```

### 2. No servidor (SSH)

```bash
ssh root@167.71.168.183
cd /var/www/lotobrasil
git pull origin main
npm install
npm run build
pm2 restart lotobrasil
```

### 3. Testar

Acessar: **http://167.71.168.183:3001**

---

## O que garantir antes de fazer push

1. **Verificar TypeScript localmente:**
   `npx tsc --noEmit` — deve passar sem erros.

2. **Não usar SCP** — apenas Git. O SCP manda `.git`, `node_modules` e `.next`, o que atrasa e pode causar conflitos.

3. **`.gitignore`** — deve incluir `node_modules`, `.next`, `.env.local`.

---

## Comandos úteis no servidor

| Comando | Descrição |
|---------|-----------|
| `pm2 status` | Status das aplicações (premiacoes-admin + lotobrasil) |
| `pm2 logs lotobrasil` | Ver logs em tempo real |
| `pm2 restart lotobrasil` | Reiniciar após alterações |
| `pm2 restart premiacoes-admin` | Reiniciar o outro projeto |

---

## Resumo dos projetos no servidor

| Projeto | Pasta | Porta | URL |
|---------|-------|-------|-----|
| premiacoes-admin | /var/www/premiacoes-admin | 3000 | http://167.71.168.183:3000 |
| LOTOBRASIL | /var/www/lotobrasil | 3001 | http://167.71.168.183:3001 |
