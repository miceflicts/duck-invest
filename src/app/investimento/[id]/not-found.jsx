import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-6 px-4">
        <div className="flex justify-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
            <span className="text-5xl">🦆</span>
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-foreground">
            Investimento não encontrado
          </h1>
          <p className="text-muted-foreground">
            O título que você está procurando não existe ou foi removido.
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary/90 transition-colors"
        >
          ← Voltar para a lista de investimentos
        </Link>
      </div>
    </main>
  );
}
