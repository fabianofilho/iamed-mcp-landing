// Constantes de link e marca, centralizadas.
// O repo iamed-mcp e publico (Apache-2.0). Ajuste aqui se o slug/dono mudar.
export const GITHUB_URL = "https://github.com/fabianofilho/iamed-mcp";
export const IAMED_URL = "https://iamed.cc";
export const APP_URL = "https://app.iamed.cc";
export const LICENSE = "Apache-2.0";
export const PROJECT = "iamed-mcp";

// Conector hospedado oficial (Tailscale Funnel, sem garantia de uptime).
// No ar desde 17/10/2026. Desde LOGIN_DESDE pede login com a conta do IA.med
// (plano Residente ou acima, ou trial ativo), pela mesma regra do app.
export const CONNECTOR_URL = "https://debian-f.tailf42a96.ts.net/iamed/mcp";
// Lido do journal do serviço: primeiro "login ligado" em 19/10/2026 22:14.
export const LOGIN_DESDE = "19/10/2026";
export const PLANOS_URL = "https://app.iamed.cc/planos";

// Data em que os exemplos e numeros desta pagina foram lidos do conector.
export const MEDIDO_EM = "17/10/2026";

// Familia de MCPs da IA.med (6 de 8 sao open source; ans e raciocinio-br sao privados).
// SELF_SLUG marca o atual (some do rodape).
export const SELF_SLUG = "iamed";
export const FAMILY = [
  { slug: "iamed", nome: "iamed-mcp", url: "https://iamed.cc/mcps/iamed", desc: "Base do IA.med: o que saiu de IA na medicina" },
  { slug: "anvisa", nome: "anvisa-mcp", url: "https://iamed.cc/mcps/anvisa", desc: "Registro sanitário da Anvisa" },
  { slug: "radar-cfm", nome: "radar-cfm-mcp", url: "https://iamed.cc/mcps/radar-cfm", desc: "Resoluções do CFM" },
  { slug: "pcdt", nome: "protocolos-pcdt-mcp", url: "https://iamed.cc/mcps/pcdt", desc: "PCDTs do Ministério da Saúde" },
  { slug: "ans", nome: "ans-mcp", url: "https://iamed.cc/mcps/ans", desc: "TUSS e operadoras da ANS" },
  { slug: "raciocinio-br", nome: "raciocinio-br-mcp", url: "https://iamed.cc/mcps/raciocinio-br", desc: "Raciocínio clínico avaliado (experimento)" },
  { slug: "revisor-notas", nome: "revisor-notas-mcp", url: "https://iamed.cc/mcps/revisor-notas", desc: "Revisão de notas SOAP" },
  { slug: "radar-papers", nome: "radar-papers-mcp", url: "https://iamed.cc/mcps/radar-papers", desc: "Monitor de PubMed e medRxiv" },
];
