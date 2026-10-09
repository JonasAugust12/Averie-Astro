import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/** Keep in sync with `build.assets` in astro.config.mjs */
const ASSETS_DIR = 'c';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');

/** @param {string} dir @param {string[]} out */
function collectHtmlFiles(dir, out = []) {
    if (!fs.existsSync(dir)) return out;
    for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, ent.name);
        if (ent.isDirectory()) collectHtmlFiles(full, out);
        else if (ent.name.endsWith('.html')) out.push(full);
    }
    return out;
}

/** @param {string} html */
function stripHtmlComments(html) {
    return html.replace(/<!--[\s\S]*?-->/g, '');
}

/** Fail build if production HTML/JS leaks common framework fingerprints. */
const FORBIDDEN_PATTERNS = [
    { label: '_astro path', re: /\/_astro\//i },
    { label: 'data-astro', re: /data-astro-/i },
    { label: '__NEXT_DATA__', re: /__NEXT_DATA__/ },
    { label: 'next.js', re: /next\.js/i },
    { label: 'react-dom', re: /react-dom/i },
    { label: '@vite/', re: /@vite\//i },
    { label: '.astro asset', re: /\.astro/i },
];

/** @param {string} dir */
function verifyNoFingerprints(dir) {
    const files = [];
    for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, ent.name);
        if (ent.isDirectory()) {
            if (ent.name === ASSETS_DIR) {
                for (const js of fs.readdirSync(full)) {
                    if (js.endsWith('.js')) files.push(path.join(full, js));
                }
            }
            continue;
        }
        if (ent.name.endsWith('.html')) files.push(full);
    }

    const hits = [];
    for (const file of files) {
        const text = fs.readFileSync(file, 'utf8');
        for (const { label, re } of FORBIDDEN_PATTERNS) {
            if (re.test(text)) {
                hits.push(`${path.relative(dist, file)} (${label})`);
            }
        }
    }

    if (hits.length > 0) {
        console.error('[strip-asset-fingerprint] Stack fingerprint check failed:');
        for (const hit of hits) console.error(`  - ${hit}`);
        process.exit(1);
    }
}

if (!fs.existsSync(dist)) {
    process.exit(0);
}

const assetsPath = path.join(dist, ASSETS_DIR);
const htmlFiles = collectHtmlFiles(dist);

if (fs.existsSync(assetsPath)) {
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

        for (const htmlPath of htmlFiles) {
            const html = fs.readFileSync(htmlPath, 'utf8');
            if (!html.includes(oldUrl)) continue;
            fs.writeFileSync(htmlPath, html.replaceAll(oldUrl, newUrl));
        }
    }
}

for (const htmlPath of htmlFiles) {
    const html = fs.readFileSync(htmlPath, 'utf8');
    const stripped = stripHtmlComments(html);
    if (stripped !== html) fs.writeFileSync(htmlPath, stripped);
}

verifyNoFingerprints(dist);
