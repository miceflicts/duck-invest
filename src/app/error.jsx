"use client";

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        {/* Ícone de erro */}
        <div className="mb-6 flex justify-center">
          <div className="h-24 w-24 rounded-full bg-destructive/10 flex items-center justify-center">
            <span className="text-5xl">😔</span>
          </div>
        </div>

        {/* Título */}
        <h1 className="font-poppins text-3xl font-bold text-foreground mb-4">
          Ops! Algo deu errado
        </h1>

        {/* Descrição */}
        <p className="text-muted-foreground mb-6">
          Não foi possível carregar os dados do Tesouro Direto. Por favor, tente
          novamente.
        </p>

        {/* Mensagem de erro (apenas em desenvolvimento) */}
        {process.env.NODE_ENV === "development" && (
          <div className="mb-6 p-4 rounded-lg bg-muted text-left">
            <p className="text-sm font-mono text-destructive break-all">
              {error.message}
            </p>
          </div>
        )}

        {/* Botões de ação */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => reset()}
            className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            ↻ Tentar Novamente
          </button>
          <a
            href="/"
            className="px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/80 transition-colors"
          >
            ← Voltar ao Início
          </a>
        </div>

        {/* Informações adicionais */}
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Se o problema persistir, entre em contato com o suporte.
          </p>
        </div>
      </div>
    </div>
  );
}
