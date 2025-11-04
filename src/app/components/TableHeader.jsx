/**
 * Componente de cabeçalho da tabela com opções de ordenação
 */
export function TableHeader({ sortConfig, onSort }) {
  const columns = [
    { key: "name", label: "Nome do Título" },
    { key: "maturityDate", label: "Vencimento" },
    { key: "minInvestment", label: "Investimento Mínimo" },
    { key: "unitPrice", label: "Preço Unitário" },
    { key: "investmentRate", label: "Taxa de Rentabilidade" },
  ];

  const getSortIcon = (columnKey) => {
    if (sortConfig.key !== columnKey) return null;
    return sortConfig.direction === "ascending" ? "↑" : "↓";
  };

  return (
    <thead className="bg-muted/50 text-left text-sm font-semibold">
      <tr>
        {columns.map((column) => (
          <th
            key={column.key}
            className="cursor-pointer px-6 py-4 hover:bg-muted/70 transition-colors"
            onClick={() => onSort(column.key)}
          >
            <div className="flex items-center gap-2">
              {column.label}
              {sortConfig.key === column.key && (
                <span className="text-primary">{getSortIcon(column.key)}</span>
              )}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
}
