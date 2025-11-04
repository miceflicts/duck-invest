import { TreasuryBondsTable } from "./components/TreasuryBondsTable";

// Função para buscar dados da API do Tesouro Direto no servidor
async function getTreasuryBonds() {
  try {
    const response = await fetch("https://api.radaropcoes.com/bonds.json", {
      cache: "no-store", // Garante dados sempre atualizados
    });

    if (!response.ok) {
      throw new Error("Falha ao buscar dados do Tesouro Direto");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar títulos:", error);
    return null;
  }
}

export default async function Home() {
  const data = await getTreasuryBonds();

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                <span className="text-2xl font-bold text-white">🦆</span>
              </div>
              <div>
                <h1 className="font-poppins text-2xl font-bold text-foreground">
                  Duck.Invest
                </h1>
                <p className="text-sm text-muted-foreground">
                  Títulos Públicos - Tesouro Direto
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent"></span>
              <span className="text-sm font-medium text-accent">
                Atualizado em tempo real
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Treasury Bonds Table */}
        {data ? (
          <TreasuryBondsTable data={data} />
        ) : (
          <div className="rounded-2xl bg-card border border-border p-12 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
              <span className="text-3xl">⚠️</span>
            </div>
            <h3 className="mb-2 font-poppins text-xl font-semibold text-foreground">
              Erro ao Carregar Dados
            </h3>
            <p className="text-muted-foreground">
              Não foi possível conectar à API do Tesouro Direto. Por favor,
              tente novamente mais tarde.
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Duck.Invest - Planejamento e Organização de Investimentos
            </p>
            <p className="text-sm text-muted-foreground">
              Desenvolvido com 💚 para investidores inteligentes
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
