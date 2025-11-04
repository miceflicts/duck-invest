/**
 * Hook personalizado para processar dados dos títulos
 */
import { useMemo } from "react";

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
 * Processa os dados brutos da API
 */
export function useBondData(data) {
  const bonds = useMemo(() => {
    if (!data?.response?.TrsrBdTradgList) return [];

    // Filtrar apenas títulos com dados disponíveis para compra
    return data.response.TrsrBdTradgList.filter((bond) => {
      const minInvestment = bond.TrsrBd?.minInvstmtAmt || 0;
      const unitPrice = bond.TrsrBd?.untrRedVal || 0;
      // Incluir título se tiver valor mínimo de investimento OU preço unitário
      return minInvestment > 0 || unitPrice > 0;
    }).map((bond) => ({
      name: bond.TrsrBd?.nm || "N/A",
      maturityDate: bond.TrsrBd?.mtrtyDt
        ? new Date(bond.TrsrBd.mtrtyDt).toLocaleDateString("pt-BR")
        : "N/A",
      minInvestment: bond.TrsrBd?.minInvstmtAmt
        ? parseFloat(bond.TrsrBd.minInvstmtAmt)
        : 0,
      unitPrice: bond.TrsrBd?.untrRedVal
        ? parseFloat(bond.TrsrBd.untrRedVal)
        : 0,
      investmentRate: bond.TrsrBd?.anulInvstmtRate
        ? parseFloat(bond.TrsrBd.anulInvstmtRate)
        : bond.TrsrBd?.anulRedRate
        ? parseFloat(bond.TrsrBd.anulRedRate)
        : 0,
      type: getBondType(bond.TrsrBd?.nm || ""),
    }));
  }, [data]);

  return bonds;
}
