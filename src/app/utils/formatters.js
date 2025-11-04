/**
 * Funções utilitárias para formatação de dados
 */

/**
 * Formata valor como moeda brasileira
 * @param {number} value - Valor a ser formatado
 * @returns {string} Valor formatado (ex: R$ 1.234,56)
 */
export function formatCurrency(value) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

/**
 * Formata valor como porcentagem
 * @param {number} value - Valor a ser formatado
 * @param {number} decimals - Número de casas decimais (padrão: 2)
 * @returns {string} Valor formatado (ex: 12.34%)
 */
export function formatPercentage(value, decimals = 2) {
  return `${value.toFixed(decimals)}%`;
}

/**
 * Formata data no padrão brasileiro
 * @param {string|Date} date - Data a ser formatada
 * @returns {string} Data formatada (ex: 01/03/2029)
 */
export function formatDate(date) {
  if (!date) return "N/A";
  const dateObj = typeof date === "string" ? new Date(date) : date;
  return dateObj.toLocaleDateString("pt-BR");
}

/**
 * Formata data e hora no padrão brasileiro
 * @param {string|Date} date - Data a ser formatada
 * @returns {string} Data e hora formatadas (ex: 01/03/2029 às 14:30)
 */
export function formatDateTime(date) {
  if (!date) return "N/A";
  const dateObj = typeof date === "string" ? new Date(date) : date;
  return dateObj.toLocaleString("pt-BR");
}

/**
 * Determina o tipo de título pelo nome
 * @param {string} name - Nome do título
 * @returns {string} Tipo do título (Selic, IPCA+, Prefixado, Outro)
 */
export function getBondType(name) {
  if (!name) return "Outro";
  if (name.includes("Selic")) return "Selic";
  if (name.includes("IPCA")) return "IPCA+";
  if (name.includes("Prefixado")) return "Prefixado";
  return "Outro";
}

/**
 * Calcula o número de anos até o vencimento
 * @param {string|Date} maturityDate - Data de vencimento
 * @returns {number} Número de anos
 */
export function getYearsToMaturity(maturityDate) {
  if (!maturityDate) return 0;
  const today = new Date();
  const maturity = new Date(maturityDate);
  const diffTime = Math.abs(maturity - today);
  const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);
  return Math.ceil(diffYears);
}

/**
 * Valida se um valor é numérico válido
 * @param {any} value - Valor a ser validado
 * @returns {boolean} True se for numérico válido
 */
export function isValidNumber(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}

/**
 * Trunca texto com reticências
 * @param {string} text - Texto a ser truncado
 * @param {number} maxLength - Comprimento máximo
 * @returns {string} Texto truncado
 */
export function truncateText(text, maxLength = 50) {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
}

/**
 * Combina classes CSS do Tailwind de forma inteligente
 * @param {...string} classes - Classes a serem combinadas
 * @returns {string} Classes combinadas
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
