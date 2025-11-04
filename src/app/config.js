/**
 * Configurações e constantes da aplicação Duck.Invest
 */

// API do Tesouro Direto
export const API_CONFIG = {
  TREASURY_URL: "https://api.radaropcoes.com/bonds.json",
  CACHE_REVALIDATE: 0, // Desabilita cache para dados sempre atualizados
};

// Tipos de títulos
export const BOND_TYPES = {
  SELIC: "Selic",
  IPCA: "IPCA+",
  PREFIXADO: "Prefixado",
  ALL: "all",
};

// Configurações de formatação
export const FORMAT_CONFIG = {
  LOCALE: "pt-BR",
  CURRENCY: "BRL",
  TIMEZONE: "America/Sao_Paulo",
};

// Informações da empresa
export const COMPANY_INFO = {
  NAME: "Duck.Invest",
  TAGLINE: "Planejamento e Organização de Investimentos",
  DESCRIPTION:
    "Títulos públicos são investimentos de renda fixa emitidos pelo Governo Federal. Invista com segurança e rentabilidade garantida.",
  YEAR: 2025,
  AUTHOR: "Paulo Montes Cardoso Xavier",
  INSTITUTION: "Instituto Federal Goiano Campus Urutaí",
};

// Links úteis
export const LINKS = {
  TESOURO_DIRETO: "https://www.tesourodireto.com.br",
  B3: "https://www.b3.com.br",
  GOVERNO_FEDERAL: "https://www.gov.br/tesouronacional",
};
