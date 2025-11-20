import { notFound } from "next/navigation";
import Link from "next/link";

// Força a rota a ser dinâmica
export const dynamic = "force-dynamic";
export const revalidate = 0;

/**
 * Busca todos os títulos da API
 */
async function getTreasuryBonds() {
  try {
    const response = await fetch("https://api.radaropcoes.com/bonds.json", {
      next: { revalidate: 60 },
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

/**
 * Busca um título específico pelo ID (nome codificado)
 */
async function getBondById(id) {
  const data = await getTreasuryBonds();

  if (!data?.response?.TrsrBdTradgList) {
    return null;
  }

  // Decodifica o ID para encontrar o título correspondente
  const decodedName = decodeURIComponent(id).replace(/-/g, " ");

  const bondData = data.response.TrsrBdTradgList.find((bond) => {
    const bondName = bond.TrsrBd?.nm || "";
    return bondName.toLowerCase().replace(/\s+/g, " ") === decodedName;
  });

  if (!bondData) {
    return null;
  }

  // Retorna todos os dados do título
  return {
    id: id,
    raw: bondData, // Dados brutos da API
    processed: {
      name: bondData.TrsrBd?.nm || "N/A",
      maturityDate: bondData.TrsrBd?.mtrtyDt
        ? new Date(bondData.TrsrBd.mtrtyDt).toLocaleDateString("pt-BR")
        : "N/A",
      maturityDateISO: bondData.TrsrBd?.mtrtyDt || null,
      minInvestment: bondData.TrsrBd?.minInvstmtAmt
        ? parseFloat(bondData.TrsrBd.minInvstmtAmt)
        : 0,
      unitPrice: bondData.TrsrBd?.untrRedVal
        ? parseFloat(bondData.TrsrBd.untrRedVal)
        : 0,
      investmentRate: bondData.TrsrBd?.anulInvstmtRate
        ? parseFloat(bondData.TrsrBd.anulInvstmtRate)
        : bondData.TrsrBd?.anulRedRate
        ? parseFloat(bondData.TrsrBd.anulRedRate)
        : 0,
      type: getBondType(bondData.TrsrBd?.nm || ""),
      // Campos adicionais que podem ser úteis
      features: bondData.TrsrBd?.featrs || null,
      indexer: bondData.TrsrBd?.indxr?.cd || null,
      indexerName: bondData.TrsrBd?.indxr?.nm || null,
    },
  };
}

/**
 * Determina o tipo do título pelo nome
 */
function getBondType(name) {
  if (name.includes("Selic")) return "Selic";
  if (name.includes("IPCA")) return "IPCA+";
  if (name.includes("Prefixado")) return "Prefixado";
  if (name.includes("Renda+")) return "Renda+";
  if (name.includes("Educa+")) return "Educa+";
  return "Outro";
}

/**
 * Formata valor como moeda brasileira
 */
const formatCurrency = (value) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

/**
 * Formata valor como porcentagem
 */
const formatPercentage = (value) => {
  return `${value.toFixed(2)}%`;
};

/**
 * Página de detalhes do investimento
 */
export default async function InvestimentoPage({ params }) {
  const { id } = params;
  const bond = await getBondById(id);

  if (!bond) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent hover:opacity-80 transition-opacity"
              >
                <span className="text-2xl font-bold text-white">🦆</span>
              </Link>
              <div>
                <h1 className="font-poppins text-2xl font-bold text-foreground">
                  Duck.Invest
                </h1>
                <p className="text-sm text-muted-foreground">
                  Detalhes do Investimento
                </p>
              </div>
            </div>
            <Link
              href="/"
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              ← Voltar para lista
            </Link>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Card Principal */}
          <div className="rounded-2xl bg-card border border-border overflow-hidden shadow-sm p-8">
            <div className="space-y-6">
              {/* Título e Tipo */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold ${
                      bond.processed.type === "Selic"
                        ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                        : bond.processed.type === "IPCA+"
                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                        : "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
                    }`}
                  >
                    {bond.processed.type}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-foreground">
                  {bond.processed.name}
                </h2>
              </div>

              {/* Informações Principais */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-border">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Rentabilidade Anual
                  </p>
                  <p className="text-2xl font-bold text-accent">
                    {formatPercentage(bond.processed.investmentRate)}
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Vencimento</p>
                  <p className="text-2xl font-bold text-foreground">
                    {bond.processed.maturityDate}
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Investimento Mínimo
                  </p>
                  <p className="text-2xl font-bold text-foreground">
                    {formatCurrency(bond.processed.minInvestment)}
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Preço Unitário
                  </p>
                  <p className="text-2xl font-bold text-foreground">
                    {formatCurrency(bond.processed.unitPrice)}
                  </p>
                </div>
              </div>

              {/* Informações Adicionais */}
              {bond.processed.indexerName && (
                <div className="pt-6 border-t border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Informações do Indexador
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Indexador:</span>
                      <span className="font-medium text-foreground">
                        {bond.processed.indexerName}
                      </span>
                    </div>
                    {bond.processed.indexer && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Código:</span>
                        <span className="font-medium text-foreground">
                          {bond.processed.indexer}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Card de Dados Completos (útil para desenvolvimento futuro) */}
          <details className="rounded-2xl bg-card border border-border overflow-hidden shadow-sm">
            <summary className="cursor-pointer px-8 py-4 font-semibold text-foreground hover:bg-muted/30 transition-colors">
              📊 Dados Completos da API (Desenvolvimento)
            </summary>
            <div className="px-8 py-6 border-t border-border">
              <pre className="text-xs bg-muted/50 p-4 rounded-lg overflow-auto max-h-96">
                {JSON.stringify(bond, null, 2)}
              </pre>
            </div>
          </details>

          {/* Placeholder para funcionalidades futuras */}
          <div className="rounded-2xl bg-card border border-border overflow-hidden shadow-sm p-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              🚧 Em Desenvolvimento
            </h3>
            <div className="space-y-3 text-muted-foreground">
              <p>• Simulação de investimento</p>
              <p>• Histórico de preços</p>
              <p>• Comparação com outros títulos</p>
              <p>• Calculadora de rendimentos</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
