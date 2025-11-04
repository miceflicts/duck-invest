import { BondTypeBadge } from "./BondTypeBadge";

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
 * Componente de linha da tabela
 */
export function BondTableRow({ bond }) {
  return (
    <tr className="hover:bg-muted/30 transition-colors">
      <td className="px-6 py-4 font-medium text-foreground">
        <div className="flex items-center gap-3">
          <BondTypeBadge type={bond.type} />
          <span>{bond.name}</span>
        </div>
      </td>
      <td className="px-6 py-4 text-muted-foreground">{bond.maturityDate}</td>
      <td className="px-6 py-4 font-medium text-foreground">
        {formatCurrency(bond.minInvestment)}
      </td>
      <td className="px-6 py-4 text-muted-foreground">
        {formatCurrency(bond.unitPrice)}
      </td>
      <td className="px-6 py-4">
        <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-3 py-1 text-sm font-semibold text-accent">
          📈 {formatPercentage(bond.investmentRate)}
        </span>
      </td>
    </tr>
  );
}
