# PROGRESS: iamed-mcp-landing

## Objetivo
Landing page estática (Astro + Tailwind) do `iamed-mcp` (servidor MCP somente
leitura da base do IA.med), tom anti-hype, publicada sob
`https://iamed.cc/mcps/iamed`. Apresenta o conector hospedado e a instalação local,
sem backend.

## Decisões (e por quê)
- **Molde**: cópia limpa do `anvisa-mcp-landing` (origin/main 35bff09, via `git
  archive`), mesmas seções e componentes, para a família ficar com a mesma cara.
- **Domínio**: `site: 'https://iamed.cc'` + `base: '/mcps/iamed'`.
- **Fonte do conteúdo**: README, PROGRESS e spec (16/10/2026) do `iamed-mcp`, mais
  chamadas reais à URL pública do conector em 17/10/2026 (tools/list e tools/call).
  Nenhum número sem origem: ver a seção Notas do README.
- **Base**: em vez do "cerca de 650" (README) ou "cerca de 1.000" (spec), a página
  mostra o `total` medido por tipo na janela de 365 dias.
- **og-image**: gerada de `og/og.svg` com Chrome headless (1200x630), para o texto
  vir de fonte editável e não de imagem retocada.
- **Família**: `FAMILY` em `src/consts.ts` com os 8 servidores (6 de 8 abertos,
  visibilidade conferida na API do GitHub em 17/10/2026).

## Restrições ativas
- Não inventar o que o servidor faz; não prometer disponibilidade do conector.
- Não imprimir a chave anon em lugar nenhum: a página manda ao README.
- pt-BR com acentos, sem travessão, sem aspas tipográficas, sem emoji.
- Não executar deploy: o site publica pela CLI da Vercel, depois.

## Sub-passos
1. [x] Cópia do molde, base `/mcps/iamed`, conteúdo novo em todos os componentes
2. [x] og-image.png e favicon (favicon igual ao da família)
3. [x] npm install + npm run build
4. [x] npm run preview + conferência (curl 200 e textos)
5. [x] git init main + commit, repo público fabianofilho/iamed-mcp-landing
6. [x] dist copiado para `mcps/iamed/` do site, numa branch, com PR aberto (sem merge)

## Próximo passo
1. Revisar e mergear o PR do site; publicar com `npx vercel --prod --yes` a partir da
   main atualizada (autor do HEAD `fabiano.nb@gmail.com`).
2. Acrescentar o iamed ao array `FAMILY` dos outros sete `*-mcp-landing`, rebuild e
   copiar os dists, senão os rodapés deles ficam sem o irmão novo.
3. Quando a base mudar muito, refazer os exemplos e totais e trocar `MEDIDO_EM`.

## Fora de escopo (e por quê)
- Os outros landings e o `iamed-mcp` em si (a tarefa proibia mexer).
- Entrada do iamed na aba /mcps do app (`web/src/lib/mcps.ts` do med-ia-app): é outro PR.
- Analytics.
