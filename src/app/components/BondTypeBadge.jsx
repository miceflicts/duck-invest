/**
 * Componente de badge para tipo de título
 */
export function BondTypeBadge({ type }) {
  const getBadgeConfig = (bondType) => {
    const configs = {
      Selic: {
        bg: "bg-primary/10",
        text: "text-primary",
        icon: "S",
      },
      "IPCA+": {
        bg: "bg-accent/10",
        text: "text-accent",
        icon: "I",
      },
      Prefixado: {
        bg: "bg-secondary",
        text: "text-secondary-foreground",
        icon: "P",
      },
      "Renda+": {
        bg: "bg-purple-500/10",
        text: "text-purple-600 dark:text-purple-400",
        icon: "R",
      },
      "Educa+": {
        bg: "bg-blue-500/10",
        text: "text-blue-600 dark:text-blue-400",
        icon: "E",
      },
    };

    return (
      configs[bondType] || {
        bg: "bg-muted",
        text: "text-muted-foreground",
        icon: "?",
      }
    );
  };

  const config = getBadgeConfig(type);

  return (
    <span
      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${config.bg} ${config.text}`}
      title={type}
    >
      {config.icon}
    </span>
  );
}
