/**
 * Hook personalizado para filtrar títulos por tipo
 */
import { useState, useMemo } from "react";

export function useBondFilter(bonds) {
  const [filterType, setFilterType] = useState("all");

  const filteredBonds = useMemo(() => {
    // Validar se bonds é um array válido
    if (!Array.isArray(bonds)) return [];
    if (filterType === "all") return bonds;
    return bonds.filter((bond) => bond.type === filterType);
  }, [bonds, filterType]);

  return { filteredBonds, filterType, setFilterType };
}
