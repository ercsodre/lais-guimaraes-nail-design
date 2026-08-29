# Site — Lais Guimarães Nail Design

HTML/CSS/JS puro, sem build. Abrir `index.html` direto no navegador já funciona.

## Estrutura

- `index.html` — site institucional (hero, sobre, serviços, preços, portfólio, localização, contato)
- `linktree.html` — página estilo Linktree
- `css/styles.css` — todo o estilo, cores e fontes seguem `identidade/design-guide.md`
- `js/main.js` — menu mobile, calculadora de orçamento em `#precos` e rota automática em `#localizacao`

## Pendências antes de publicar

- [x] Tabela de preços em `index.html` (seção `#precos`) — valores reais, com seleção por checkbox e total calculado ao vivo, enviando o orçamento pro WhatsApp
- [x] Foto do hero — `img/hero.png`, composição da Lais preparada no Photoshop (1440×800, com degradê pro fundo já embutido)
- [x] Localização (`#localizacao`) — mapa incorporado + botão "Como chegar" que usa a geolocalização do visitante pra montar a rota; endereço confirmado em 27/08/2026 batendo com o Perfil da Empresa no Google: Avenida Olinda, Quadra 8, 531 — Água Branca, Goiânia-GO, 74715-350 (bairro e número corrigidos — o texto antigo dizia "Jardim Novo Mundo", que veio de geocodificação reversa errada)
- [x] `img/portfolio-1.jpg` a `portfolio-6.jpg` — fotos reais dos trabalhos da Lais (trocadas em 26/08/2026)
- [x] Foto da Lais na seção Sobre — `img/sobre-retrato.jpg`, retrato real dela
- [x] 6º card do portfólio preenchido com foto real
- [x] Logo real (monograma "lg" + nome) em `img/logo.png`, `img/logo-nome.png`, `img/logo-completa.png`
- [x] Avatar do linktree — `img/sobre-retrato.jpg` + logo (`img/logo.png`), sem mais placeholder (28/08/2026)
- [x] Confirmar domínio e onde vai hospedar — GitHub Pages, ativo e buildado em https://ercsodre.github.io/lais-guimaraes-nail-design/

## Deploy

Qualquer host de site estático serve (Netlify, Vercel, GitHub Pages). Sem dependências, sem `npm install`.
