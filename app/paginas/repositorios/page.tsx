"use client"

import { useState } from "react"
import { Check, Copy, Terminal, GitBranch, Folder, Link, Trash2, RefreshCw } from "lucide-react"

interface Step {
  number: number
  title: string
  description: string
  command?: string
  icon: React.ReactNode
  note?: string
}

const steps: Step[] = [
  {
    number: 1,
    title: "Criar um repositório no GitHub",
    description: "Acesse github.com, faça login e clique em \"New repository\". Dê um nome ao repositório e clique em \"Create repository\".",
    icon: <GitBranch className="h-6 w-6" />,
  },
  {
    number: 2,
    title: "Inicializar o Git no projeto",
    description: "Na pasta do projeto do Visual Studio, abra o terminal e digite o comando abaixo para inicializar o Git dentro da pasta do projeto.",
    command: "git init",
    icon: <Folder className="h-6 w-6" />,
    note: "Isso cria uma pasta oculta .git que gerencia o versionamento",
  },
  {
    number: 3,
    title: "Verificar repositório conectado",
    description: "Use este comando para verificar se já existe algum repositório remoto conectado ao seu projeto.",
    command: "git remote -v",
    icon: <Terminal className="h-6 w-6" />,
    note: "Se não aparecer nada, significa que ainda não há repositório conectado",
  },
  {
    number: 4,
    title: "Conectar ao repositório criado",
    description: "Conecte seu projeto local ao repositório remoto do GitHub que você criou no passo 1.",
    command: 'git remote add origin "https://github.com/usuario/repositorio"',
    icon: <Link className="h-6 w-6" />,
    note: "Substitua 'usuario' pelo seu nome de usuário e 'repositorio' pelo nome do seu repositório",
  },
  {
    number: 5,
    title: "Remover repositório (se necessário)",
    description: "Se precisar desconectar o repositório atual para conectar em outro, use o comando abaixo.",
    command: "git remote remove origin",
    icon: <Trash2 className="h-6 w-6" />,
    note: "Após remover, você pode conectar a um novo repositório usando o comando do passo 4",
  },
]

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative mt-3 group">
      <div className="bg-zinc-900 rounded-lg p-4 font-mono text-sm text-emerald-400 overflow-x-auto">
        <code>{code}</code>
      </div>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 rounded-md bg-zinc-800 hover:bg-zinc-700 transition-colors text-zinc-400 hover:text-white"
        aria-label="Copiar comando"
      >
        {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
      </button>
    </div>
  )
}

function StepCard({ step }: { step: Step }) {
  return (
    <div className="relative pl-8 pb-12 last:pb-0">
      {/* Linha conectora */}
      <div className="absolute left-[15px] top-12 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-emerald-500/20 last:hidden" />
      
      {/* Número do passo */}
      <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-500/30">
        {step.number}
      </div>
      
      {/* Conteúdo */}
      <div className="ml-6 bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 hover:border-emerald-500/30 transition-colors">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
            {step.icon}
          </div>
          <h3 className="text-xl font-semibold text-white">{step.title}</h3>
        </div>
        
        <p className="text-zinc-400 leading-relaxed">{step.description}</p>
        
        {step.command && <CodeBlock code={step.command} />}
        
        {step.note && (
          <div className="mt-4 flex items-start gap-2 text-sm text-amber-400/80 bg-amber-500/10 rounded-lg p-3">
            <RefreshCw className="h-4 w-4 mt-0.5 flex-shrink-0" />
            <span>{step.note}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default function GitHubGuidePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-3">
          <GitBranch className="h-8 w-8 text-emerald-400" />
          <span className="text-xl font-bold">Guia Git & GitHub</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
            <Terminal className="h-4 w-4" />
            Tutorial Passo a Passo
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Como conectar o projeto do{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Visual Studio
            </span>{" "}
            ao{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              GitHub
            </span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto text-pretty">
            Aprenda a versionar seu código e manter seus projetos seguros na nuvem com este guia simples e direto.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {steps.map((step) => (
            <StepCard key={step.number} step={step} />
          ))}
        </div>

        {/* Bonus Section */}
        <div className="mt-16 p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="text-2xl">💡</span> Comandos Bônus
          </h2>
          <div className="space-y-4">
            <div>
              <p className="text-zinc-300 mb-2">Adicionar todos os arquivos para commit:</p>
              <CodeBlock code="git add ." />
            </div>
            <div>
              <p className="text-zinc-300 mb-2">Criar um commit com mensagem:</p>
              <CodeBlock code='git commit -m "Sua mensagem aqui"' />
            </div>
            <div>
              <p className="text-zinc-300 mb-2">Enviar alterações para o GitHub:</p>
              <CodeBlock code="git push -u origin main" />
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-zinc-800 text-center text-zinc-500 text-sm">
          <p>Feito com Next.js e Tailwind CSS</p>
        </footer>
      </main>
    </div>
  )
}
