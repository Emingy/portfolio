#!/usr/bin/env node
import { existsSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import toIco from 'to-ico';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const PUBLIC = join(root, 'public');
const SRC = join(PUBLIC, 'icon.png');

async function resize(size) {
    return sharp(SRC).resize(size, size).png().toBuffer();
}

async function main() {
    if (!existsSync(SRC)) {
        console.error(`icon source not found: ${SRC}`);
        process.exit(1);
    }

    const ico = await toIco(await Promise.all([16, 32, 48].map(resize)));
    writeFileSync(join(PUBLIC, 'favicon.ico'), ico);
    console.log('icons: favicon.ico (16, 32, 48)');

    await sharp(SRC).resize(180, 180).png().toFile(join(PUBLIC, 'apple-touch-icon.png'));
    console.log('icons: apple-touch-icon.png (180)');

    await sharp(SRC).resize(192, 192).png().toFile(join(PUBLIC, 'icon-192.png'));
    await sharp(SRC).resize(512, 512).png().toFile(join(PUBLIC, 'icon-512.png'));
    console.log('icons: icon-192.png, icon-512.png');
}

main().catch((err) => {
    console.error(err.message);
    process.exit(1);
});
