import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        {/* Pato perdido */}
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <div className="h-24 w-24 rounded-full bg-muted flex items-center justify-center">
              <span className="text-5xl animate-float">🦆</span>
            </div>
            <div className="absolute -right-2 -top-2 h-6 w-6 rounded-full bg-accent flex items-center justify-center">
              <span className="text-sm">?</span>
            </div>
          </div>
        </div>

        {/* Título */}
        <h1 className="font-poppins text-6xl font-bold text-foreground mb-2">
          404
        </h1>
        <h2 className="font-poppins text-2xl font-semibold text-foreground mb-4">
          Página Não Encontrada
        </h2>

        {/* Descrição */}
        <p className="text-muted-foreground mb-8">
          O pato procurou por todos os lados, mas não conseguiu encontrar esta
          página. Ela pode ter sido removida ou o endereço está incorreto.
        </p>

        {/* Botão de volta */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold hover:opacity-90 transition-opacity shadow-lg"
        >
          <span>←</span>
          <span>Voltar para o Início</span>
        </Link>

        {/* Links úteis */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">Links úteis:</p>
          <div className="flex flex-col gap-2">
            <Link href="/" className="text-primary hover:underline font-medium">
              🏠 Página Principal
            </Link>
            <a
              href="https://www.tesourodireto.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              📊 Tesouro Direto Oficial
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
