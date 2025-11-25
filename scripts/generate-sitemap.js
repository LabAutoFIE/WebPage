// scripts/generate-sitemap.js
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { ROUTES } from '../src/config/routes.config.js';

const BASE_URL = process.env.SITE_URL || 'http://localhost:5173';
// 👆 Usa variable de entorno p/ diferenciar Vercel/Netlify

async function generate() {
    const smStream = new SitemapStream({ hostname: BASE_URL });

    ROUTES.filter(r => r.isPublic !== false).forEach(route => {
        smStream.write({
            url: route.path,
            changefreq: route.changefreq,
            priority: route.priority,
        });
    });

    smStream.end();
    const data = await streamToPromise(smStream);
    createWriteStream('./public/sitemap.xml').write(data.toString());
    console.log('✅ Sitemap generado en public/sitemap.xml');
}

generate().catch(err => {
    console.error(err);
    process.exit(1);
});