import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/** Keep in sync with `build.assets` in astro.config.mjs */
const ASSETS_DIR = 'c';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const assetsPath = path.join(dist, ASSETS_DIR);

if (!fs.existsSync(assetsPath)) {
    process.exit(0);
}

const astroPattern = /\.astro|_astro_/i;

for (const name of fs.readdirSync(assetsPath)) {
    if (!name.endsWith('.js') || !astroPattern.test(name)) continue;

    const hash = name.match(/\.([A-Za-z0-9_-]+)\.js$/)?.[1];
    if (!hash) continue;

    const oldPath = path.join(assetsPath, name);
    const newName = `${hash}.js`;
    const newPath = path.join(assetsPath, newName);

    if (oldPath === newPath) continue;
    if (fs.existsSync(newPath)) fs.unlinkSync(newPath);
    fs.renameSync(oldPath, newPath);

    const oldUrl = `/${ASSETS_DIR}/${name}`;
    const newUrl = `/${ASSETS_DIR}/${newName}`;

    for (const htmlName of ['index.html', '404.html']) {
        const htmlPath = path.join(dist, htmlName);
        if (!fs.existsSync(htmlPath)) continue;

        const html = fs.readFileSync(htmlPath, 'utf8');
        if (!html.includes(oldUrl)) continue;

        fs.writeFileSync(htmlPath, html.replaceAll(oldUrl, newUrl));
    }
}
