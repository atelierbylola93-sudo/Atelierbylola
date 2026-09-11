import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const clientDir = join(process.cwd(), 'dist/client');
const assetsDir = join(clientDir, 'assets');

// Trouver les fichiers générés dynamiquement
const assets = readdirSync(assetsDir);
const cssFile = assets.find(f => f.startsWith('styles-') && f.endsWith('.css'));
const jsMain = assets.find(f => f.startsWith('index-') && f.endsWith('.js'));

if (!cssFile || !jsMain) {
  console.error('Fichiers assets introuvables:', { cssFile, jsMain });
  process.exit(1);
}

const html = `<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="stylesheet" href="/assets/${cssFile}" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/assets/${jsMain}"></script>
  </body>
</html>`;

writeFileSync(join(clientDir, 'index.html'), html);
console.log(`✓ index.html généré avec ${cssFile} + ${jsMain}`);
