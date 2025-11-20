import { useState, useEffect } from "react";

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
 * Hook personalizado para buscar dados de um investimento específico
 * @param {string} bondId - ID codificado do título
 * @returns {Object} - { bond, loading, error }
 */
export function useBondDetail(bondId) {
  const [bond, setBond] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!bondId) {
      setLoading(false);
      return;
    }

    async function fetchBondDetail() {
      try {
        setLoading(true);
        setError(null);

        // Busca todos os títulos
        const response = await fetch("https://api.radaropcoes.com/bonds.json");

        if (!response.ok) {
          throw new Error("Falha ao buscar dados do Tesouro Direto");
        }

        const data = await response.json();

        if (!data?.response?.TrsrBdTradgList) {
          throw new Error("Dados inválidos recebidos da API");
        }

        // Decodifica o ID para encontrar o título correspondente
        const decodedName = decodeURIComponent(bondId).replace(/-/g, " ");

        const bondData = data.response.TrsrBdTradgList.find((bond) => {
          const bondName = bond.TrsrBd?.nm || "";
          return bondName.toLowerCase().replace(/\s+/g, " ") === decodedName;
        });

        if (!bondData) {
          throw new Error("Título não encontrado");
        }

        // Processa os dados do título
        const processedBond = {
          id: bondId,
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
            // Campos adicionais
            features: bondData.TrsrBd?.featrs || null,
            indexer: bondData.TrsrBd?.indxr?.cd || null,
            indexerName: bondData.TrsrBd?.indxr?.nm || null,
          },
        };

        setBond(processedBond);
      } catch (err) {
        console.error("Erro ao buscar detalhes do título:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchBondDetail();
  }, [bondId]);

  return { bond, loading, error };
}
