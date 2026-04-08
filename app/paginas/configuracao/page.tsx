export default function Configuracao() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-8 font-sans">
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* Cabeçalho */}
        <header className="border-b border-slate-700 pb-6">
          <h1 className="text-3xl font-bold text-blue-400">
            Configuração do GitHub no Visual Studio Code
          </h1>
          <p className="text-slate-400 mt-2">
            Siga os passos abaixo para preparar seu ambiente de desenvolvimento.
          </p>
        </header>

        {/* Passo 1 */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <span className="bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">1</span>
            Instalar o Git via Terminal
          </h2>
          <div className="bg-black rounded-lg p-4 font-mono text-sm border border-slate-700">
            <p className="text-gray-500 mb-2"># Execute no terminal do VS Code:</p>
            <code className="text-green-400">
              winget install --id Git.Git -e --source winget
            </code>
          </div>
        </section>

         {/* Passo 1.1 */}
         <section className="space-y-4">
          <div className="flex items-center-col gap-4"> </div>
            <span className="flex h-8 w-8 items center text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">1.1</span>
          <h2 className="text-xl font-bold"> 
            Reiniciar o Visual studio</h2>

          <div className="bg-black rounded-lg p-4 font-mono text-sm border border-slate-700">
            <p className="text-gray-500 mb-2">Lembre-se de reiniciar o VS Code após a instalação concluir!</p>
             <p className="text-gray-500 mb-2">No terminal do VS Code verifique se o github foi instalado! </p>
            <code className="text-green-400">
              git --version
            </code>
          </div>
        </section>


        {/* Passo 2 */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <span className="bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">2</span>
            Configurar Usuário Global
          </h2>
          <div className="bg-black rounded-lg p-4 font-mono text-sm border border-slate-700 space-y-2">
            <p className="text-gray-500 mb-2"># Identifique-se para o Git:</p>
            <div>
              <code className="text-blue-300">git config --global user.email </code>
              <code className="text-yellow-200">{"email@exemplo.com"}</code>
            </div>
            <div>
              <code className="text-blue-300">git config --global user.name </code>
              <code className="text-yellow-200">{"SeuNomeDeUsuario"}</code>
            </div>
          </div>
        </section>

        {/* Passo 3 */}
        <section className="bg-blue-900/30 border border-blue-500/50 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="text-blue-400 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d=" orbit-13 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-200 uppercase tracking-wide">Autorização</h3>
              <p className="text-slate-300">
                Ao tentar realizar o primeiro <strong>push</strong> ou <strong>clone</strong>, o VS Code abrirá uma janela no seu navegador. 
                <span className="block mt-2 font-medium text-white underline decoration-blue-400">
                  Clique em {"Authorize"} para permitir o acesso à sua conta.
                </span>
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}