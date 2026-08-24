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
- [x] Localização (`#localizacao`) — mapa incorporado + botão "Como chegar" que usa a geolocalização do visitante pra montar a rota; endereço (Avenida Olinda, Jardim Novo Mundo, Goiânia-GO) veio de geocodificação reversa das coordenadas do Google Maps — **confirmar se o número do endereço está certo, não veio no link**
- [ ] `img/portfolio-1.jpg` a `portfolio-5.jpg` são fotos de banco (Unsplash, uso livre) só pra visualizar o layout — trocar pelos trabalhos reais do Instagram @laysgrocha antes de publicar
- [ ] Foto da Lais na seção Sobre e avatar do linktree — ainda `.img-placeholder` (não usamos banco de imagens aí de propósito, só pode ser foto real dela)
- [ ] 6º card do portfólio ainda é placeholder — completar com mais uma foto real
- [ ] Logo real em `identidade/logo.png` (ainda não fornecido — ver observação no design-guide)
- [ ] Confirmar domínio e onde vai hospedar (Netlify/Vercel/GitHub Pages)

## Deploy

Qualquer host de site estático serve (Netlify, Vercel, GitHub Pages). Sem dependências, sem `npm install`.
