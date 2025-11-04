# 📦 Componentes do Duck.Invest

Esta pasta contém os componentes React organizados de forma modular para facilitar manutenção e reutilização.

## 🗂️ Estrutura

```
components/
├── TreasuryBondsTable.jsx  # Componente principal (orquestrador)
├── BondFilters.jsx          # Filtros por tipo de título
├── TableHeader.jsx          # Cabeçalho da tabela com ordenação
├── BondTableRow.jsx         # Linha individual da tabela
├── BondTypeBadge.jsx        # Badge de tipo de título
├── EmptyState.jsx           # Estado vazio da tabela
├── TableFooter.jsx          # Rodapé com informações
├── Badge.jsx                # Badges genéricos
├── theme-provider.jsx       # Provider de tema claro/escuro
├── theme-toggle.jsx         # Botão de alternância de tema
└── index.js                 # Barrel export
```

## 📚 Componentes Principais

### TreasuryBondsTable

**Propósito:** Componente orquestrador principal que gerencia a exibição, filtros e ordenação dos títulos.

**Props:**

- `data` (Object): Dados da API do Tesouro Direto

**Responsabilidades:**

- Coordenar hooks personalizados (useBondData, useBondFilter, useSorting)
- Renderizar subcomponentes na ordem correta
- Gerenciar estado e props entre componentes

**Uso:**

```jsx
<TreasuryBondsTable data={apiData} />
```

---

### BondFilters

**Propósito:** Interface de filtros por tipo de título.

**Props:**

- `filterType` (string): Tipo de filtro atual
- `setFilterType` (function): Função para atualizar o filtro
- `totalBonds` (number): Total de títulos exibidos

**Tipos de filtro:**

- `all` - Todos os títulos
- `Selic` - Apenas Tesouro Selic
- `IPCA+` - Apenas Tesouro IPCA+
- `Prefixado` - Apenas Tesouro Prefixado
- `Renda+` - Apenas Tesouro Renda+
- `Educa+` - Apenas Tesouro Educa+

---

### TableHeader

**Propósito:** Cabeçalho interativo da tabela com funcionalidade de ordenação.

**Props:**

- `sortConfig` (Object): Configuração atual de ordenação
  - `key` (string): Coluna ordenada
  - `direction` (string): Direção da ordenação (`ascending` | `descending`)
- `onSort` (function): Callback para solicitar ordenação

**Colunas:**

1. Nome do Título
2. Vencimento
3. Investimento Mínimo
4. Preço Unitário
5. Taxa de Rentabilidade

---

### BondTableRow

**Propósito:** Renderizar uma linha individual da tabela com formatação adequada.

**Props:**

- `bond` (Object): Dados do título
  - `name` (string): Nome do título
  - `maturityDate` (string): Data de vencimento formatada
  - `minInvestment` (number): Investimento mínimo
  - `unitPrice` (number): Preço unitário
  - `investmentRate` (number): Taxa de rentabilidade
  - `type` (string): Tipo do título

**Formatação:**

- Valores monetários: `formatCurrency()`
- Porcentagens: `formatPercentage()`
- Badge do tipo de título

---

### BondTypeBadge

**Propósito:** Exibir badge visual colorido identificando o tipo de título.

**Props:**

- `type` (string): Tipo do título

**Configurações por tipo:**

```js
{
  Selic: { icon: "S", color: "primary" },
  IPCA+: { icon: "I", color: "accent" },
  Prefixado: { icon: "P", color: "secondary" },
  Renda+: { icon: "R", color: "purple" },
  Educa+: { icon: "E", color: "blue" }
}
```

---

### EmptyState

**Propósito:** Exibir mensagem amigável quando nenhum título corresponde aos filtros.

**Props:** Nenhuma

**UI:**

- Ícone de busca (🔍)
- Mensagem informativa

---

### TableFooter

**Propósito:** Exibir informações adicionais e dicas de uso.

**Props:** Nenhuma

**Conteúdo:**

- Dica de uso (ordenação por clique)
- Timestamp de última atualização

---

## 🎣 Hooks Personalizados

Os componentes utilizam hooks personalizados localizados em `src/app/hooks/`:

### useBondData

Processa dados brutos da API e transforma em formato utilizável.

```js
const bonds = useBondData(apiData);
```

### useBondFilter

Gerencia estado e lógica de filtros.

```js
const { filteredBonds, filterType, setFilterType } = useBondFilter(bonds);
```

### useSorting

Gerencia estado e lógica de ordenação.

```js
const { sortedBonds, sortConfig, requestSort } = useSorting(items);
```

---

## 🎨 Estilização

Todos os componentes utilizam:

- **Tailwind CSS** para estilização
- **CSS Variables** do `globals.css` para temas
- **Classes utilitárias** para responsividade

---

## 🔄 Fluxo de Dados

```
API Data
  ↓
useBondData (processar)
  ↓
useBondFilter (filtrar)
  ↓
useSorting (ordenar)
  ↓
Componentes de UI
```

---

## ✅ Boas Práticas

1. **Separação de Responsabilidades:** Cada componente tem uma única responsabilidade
2. **Composição:** Componentes pequenos e reutilizáveis
3. **Props Tipadas:** Documentação clara de props
4. **Hooks Personalizados:** Lógica de negócio separada da UI
5. **Barrel Exports:** Importações simplificadas via `index.js`

---

## 📖 Exemplo de Uso Completo

```jsx
import { TreasuryBondsTable } from "@/app/components";

export default async function Page() {
  const data = await fetch("https://api.radaropcoes.com/bonds.json");

  return (
    <main>
      <TreasuryBondsTable data={data} />
    </main>
  );
}
```

---

**Duck.Invest** - Código limpo, organizado e escalável 🦆✨
