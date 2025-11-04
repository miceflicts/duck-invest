/**
 * Componente de rodapé da tabela
 */
export function TableFooter() {
  return (
    <div className="border-t border-border bg-muted/30 px-6 py-4">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          💡 <strong>Dica:</strong> Clique nos cabeçalhos para ordenar os dados
        </p>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">
            Última atualização:
          </span>
          <span className="text-sm font-semibold text-foreground">
            {new Date().toLocaleString("pt-BR")}
          </span>
        </div>
      </div>
    </div>
  );
}
