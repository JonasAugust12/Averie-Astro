import { mkdirSync, writeFileSync } from 'node:fs';
import sharp from 'sharp';

mkdirSync('src/assets/landing/ornaments', { recursive: true });

const jobs = [
    {
        in: 'public/salon/figma/hero01.svg',
        out: 'src/assets/landing/ornaments/hero01.webp',
        width: 450,
    },
    {
        in: 'public/salon/figma/hero02.svg',
        out: 'src/assets/landing/ornaments/hero02.webp',
        width: 450,
    },
    {
        in: 'public/salon/figma/hero03.svg',
        out: 'src/assets/landing/ornaments/hero03.webp',
        width: 350,
    },
    {
        in: 'public/salon/figma/logo.svg',
        out: 'src/assets/landing/ornaments/logo.webp',
        width: 314,
    },
    { in: 'public/icons/usaflag.svg', out: 'src/assets/landing/ornaments/usaflag.webp', width: 44 },
];

const log = [];

for (const job of jobs) {
    try {
        await sharp(job.in)
            .resize({ width: job.width, withoutEnlargement: true })
            .webp({ quality: 82 })
            .toFile(job.out);
        const meta = await sharp(job.out).metadata();
        log.push(`${job.out}: ${meta.width}x${meta.height}`);
    } catch (error) {
        log.push(`${job.out}: ERROR ${error}`);
        throw error;
    }
}

writeFileSync('convert-ornaments.log', log.join('\n'));
