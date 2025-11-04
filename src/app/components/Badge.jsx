/**
 * Componente Badge para exibir tipos de títulos
 */

export function BondTypeBadge({ type }) {
  const getBadgeStyles = (bondType) => {
    switch (bondType) {
      case "Selic":
        return {
          bg: "bg-primary/10",
          text: "text-primary",
          icon: "S",
          label: "Selic",
        };
      case "IPCA+":
        return {
          bg: "bg-accent/10",
          text: "text-accent",
          icon: "I",
          label: "IPCA+",
        };
      case "Prefixado":
        return {
          bg: "bg-secondary",
          text: "text-secondary-foreground",
          icon: "P",
          label: "Prefixado",
        };
      default:
        return {
          bg: "bg-muted",
          text: "text-muted-foreground",
          icon: "?",
          label: "Outro",
        };
    }
  };

  const styles = getBadgeStyles(type);

  return (
    <span
      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${styles.bg} ${styles.text}`}
      title={styles.label}
    >
      {styles.icon}
    </span>
  );
}

/**
 * Componente Badge para rentabilidade
 */
export function RateBadge({ rate }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-3 py-1 text-sm font-semibold text-accent">
      📈 {rate}
    </span>
  );
}

/**
 * Componente Badge de status
 */
export function StatusBadge({ status, children }) {
  const getStatusStyles = () => {
    switch (status) {
      case "success":
        return "bg-accent/10 text-accent";
      case "error":
        return "bg-destructive/10 text-destructive";
      case "warning":
        return "bg-yellow-500/10 text-yellow-600 dark:text-yellow-500";
      case "info":
        return "bg-primary/10 text-primary";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium ${getStatusStyles()}`}
    >
      {children}
    </span>
  );
}
