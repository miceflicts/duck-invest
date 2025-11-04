/**
 * Componente de filtros para a tabela de títulos
 */
export function BondFilters({ filterType, setFilterType, totalBonds }) {
  const filters = ["all", "Selic", "IPCA+", "Prefixado", "Renda+", "Educa+"];

  return (
    <div className="border-b border-border bg-muted/30 p-4">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-medium text-muted-foreground mr-2">
          Filtrar por tipo:
        </span>
        {filters.map((type) => (
          <button
            key={type}
            onClick={() => setFilterType(type)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
              filterType === type
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {type === "all" ? "Todos" : type}
          </button>
        ))}
        <span className="ml-auto text-sm text-muted-foreground">
          {totalBonds} título{totalBonds !== 1 ? "s" : ""} disponível
          {totalBonds !== 1 ? "eis" : ""}
        </span>
      </div>
    </div>
  );
}
