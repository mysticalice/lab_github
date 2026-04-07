import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
      <main className="flex flex-1 w-full max-w-4xl flex-col items-center justify-center py-20 px-8 sm:items-start gap-12">
        
        {/* Header com Identidade */}
        <header className="flex flex-col gap-6 w-full items-center sm:items-start">
          <div className="flex items-center gap-4">
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={100}
              height={20}
              priority
            />
            <span className="text-zinc-400 text-2xl">+</span>
            <div className="bg-zinc-900 dark:bg-zinc-100 p-2 rounded-lg">
              <svg height="24" viewBox="0 0 16 16" version="1.1" width="24" className="fill-white dark:fill-black">
                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
              </svg>
            </div>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-center sm:text-left">
            Conheça o <span className="text-purple-600 dark:text-purple-400">GitHub</span>
          </h1>
        </header>

        {/* Seção Explicativa */}
        <section className="grid gap-6 md:grid-cols-2 w-full">
          <div className="flex flex-col gap-4 p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <span className="w-2 h-6 bg-purple-500 rounded-full"></span>
              O que é?
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              O GitHub é uma plataforma de hospedagem de código-fonte e arquivos que utiliza o sistema de controle de versões **Git**. É como uma rede social para programadores, onde o código é o centro de tudo.
            </p>
          </div>

          <div className="flex flex-col gap-4 p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <span className="w-2 h-6 bg-blue-500 rounded-full"></span>
              Para que serve?
            </h2>
            <ul className="text-zinc-600 dark:text-zinc-400 space-y-2">
              <li>• <strong>Colaboração:</strong> Milhares de pessoas podem trabalhar no mesmo projeto.</li>
              <li>• <strong>Backup:</strong> Mantém seu código seguro na nuvem.</li>
              <li>• <strong>Portfólio:</strong> Mostra suas habilidades para recrutadores.</li>
              <li>• <strong>Open Source:</strong> Base para projetos gratuitos e comunitários.</li>
            </ul>
          </div>
        </section>

        {/* Botões de Ação */}
        <div className="flex flex-col gap-4 w-full sm:flex-row items-center pt-4">
          <a
            className="flex h-12 w-full sm:w-auto items-center justify-center rounded-full bg-zinc-900 text-zinc-50 px-8 transition-all hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 font-medium"
            href="https://github.com/signup"
            target="_blank"
            rel="noopener noreferrer"
          >
            Criar conta gratuita
          </a>
          <a
            className="flex h-12 w-full sm:w-auto items-center justify-center rounded-full border border-zinc-300 dark:border-zinc-700 px-8 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-900 font-medium"
            href="https://docs.github.com/pt"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ler documentação
          </a>
        </div>

        {/* Rodapé Curiosidade */}
        <footer className="w-full py-8 border-t border-zinc-200 dark:border-zinc-800 text-center sm:text-left text-sm text-zinc-500">
          Você sabia? O mascote oficial do GitHub se chama <strong>Octocat</strong>.
        </footer>
      </main>
    </div>
  );
}