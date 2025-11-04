/**
 * Componente de estado vazio quando não há títulos
 */
export function EmptyState() {
  return (
    <tr>
      <td colSpan="5" className="px-6 py-12 text-center">
        <div className="flex flex-col items-center gap-3">
          <span className="text-4xl">🔍</span>
          <p className="text-muted-foreground">
            Nenhum título encontrado com este filtro
          </p>
        </div>
      </td>
    </tr>
  );
}
