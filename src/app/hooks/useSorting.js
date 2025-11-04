/**
 * Hook personalizado para lógica de ordenação
 */
import { useState, useMemo } from "react";

export function useSorting(items) {
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

  const sortedItems = useMemo(() => {
    // Validar se items é um array válido
    if (!Array.isArray(items) || items.length === 0) return [];
    if (!sortConfig.key) return items;

    const sorted = [...items].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (aValue < bValue) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    });

    return sorted;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { sortedBonds: sortedItems, sortConfig, requestSort };
}
