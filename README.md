# iamed-mcp-landing

Landing page do [`iamed-mcp`](https://github.com/fabianofilho/iamed-mcp), um
servidor MCP somente leitura com o conteúdo publicado mais recente da base do
IA.med sobre IA na medicina. Pode ser usado pelo conector hospedado
(`https://mcp.iamed.cc/iamed/mcp`, sem garantia de
disponibilidade) ou instalado localmente. Um projeto [IA.med](https://iamed.cc).

Página estática, sem backend e sem coleta de dados de visitante.

## Stack

- [Astro](https://astro.build) (saída estática)
- [Tailwind CSS](https://tailwindcss.com) via `@astrojs/tailwind`
- Realce de código com Shiki (build-time, componente `Code` do Astro)
- Sem framework de UI no cliente; JavaScript mínimo (apenas o botão de copiar código)

Estrutura copiada do [`anvisa-mcp-landing`](https://github.com/fabianofilho/anvisa-mcp-landing)
(origin/main de 12/10/2026), com o conteúdo trocado.

## Rodar localmente

```bash
npm install
npm run dev
```

A página abre em `http://localhost:4321/mcps/iamed` (o `base` é `/mcps/iamed`).

## Build

```bash
npm run build     # gera dist/
npm run preview   # serve o build localmente
```

## Imagem de compartilhamento

`public/og-image.png` (1200x630) sai de `og/og.svg`, renderizado pelo Chrome
headless:

```bash
cd og
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new \
  --hide-scrollbars --force-device-scale-factor=1 --window-size=1200,630 \
  --screenshot="$PWD/../public/og-image.png" "file://$PWD/og.html"
```

Mudou licença, endereço ou modo? Edite o SVG e gere de novo, não a imagem.

## Deploy

Publicada em `https://iamed.cc/mcps/iamed` (`site` + `base` em
`astro.config.mjs`). Este repositório não publica nada sozinho. O `dist/` do build
é copiado para `mcps/iamed/` do repositório do site
([Medicina-IA/medicina-ia.github.io](https://github.com/Medicina-IA/medicina-ia.github.io)),
e é o deploy desse repositório na Vercel (pela CLI, não por push) que serve o
`iamed.cc`.

```bash
npm run build
rm -rf ../medicina-ia.github.io/mcps/iamed
cp -r dist ../medicina-ia.github.io/mcps/iamed
```

## Notas

- O repositório do `iamed-mcp` é público (Apache-2.0).
- Os exemplos de retorno das três tools são saídas reais do conector hospedado,
  obtidas em 17/10/2026 por `tools/call` na URL pública.
- Os totais por tipo (274 artigos, 225 news, 72 repositórios, 37 episódios, 18
  eventos, 5 aulas e 3 conferências, 634 no total) são o `total` de
  `listar_recentes(dias=365, tipos=[X])` no conector em 17/10/2026. Os 117 testes
  foram contados com `pytest --collect-only` no mesmo dia.
- O número de itens com nota de especialidade (94) vem do spec do iamed-mcp,
  medido em 16/10/2026.

## Licença

Apache-2.0.
