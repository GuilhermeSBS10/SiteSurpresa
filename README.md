# Surpresa (Site Romântico Interativo)

Landing page romântica em HTML/CSS/JS com música, fotos e várias interações.

## O que tem
- Intro (2 etapas) + animação de “montagem” ao clicar em **Ver surpresa**
- Player estilo Spotify (playlist + troca de faixas + embed)
- Galeria com lightbox, carta animada, linha do tempo, “10 motivos”
- Contadores de relacionamento, mini quiz, mensagem do futuro e surpresa final
- Modo claro/escuro, QR code e impressão/PDF

## Como abrir
- Abra `index.html` na raiz do projeto no navegador
- (Recomendado) Use um servidor local, ex.: **Live Server** no VS Code

## Como personalizar
- Fotos: `assets/img/` + tags `<img>` em `index.html` (seção “Nossos momentos”)
- Capas/Títulos/Links: `musicPlaylist` em `assets/JS/script.js`
- Nome e textos: `index.html` e `assets/JS/script.js`
- Datas dos contadores: `togetherStart` e `datingStart` em `assets/JS/script.js`

## Estrutura
- `index.html` (página)
- `assets/CSS/stayle.css` (estilos/animações)
- `assets/JS/script.js` (interações/playlist/contadores)
- `assets/img/` (imagens)
- `assets/media/` (opcional para MP3 local)

## Notas
- Se o favicon não atualizar, é cache (`Ctrl+F5` / `Cmd+Shift+R`).
- Alguns embeds podem ser bloqueados por extensões de privacidade/adblock.
