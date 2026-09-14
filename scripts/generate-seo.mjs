import { writeFileSync } from 'node:fs';

const repository = process.env.GITHUB_REPOSITORY?.split('/');
const fallback = repository ? `https://${repository[0]}.github.io/${repository[1]}/` : 'http://localhost:5173/';
const siteUrl = (process.env.VITE_SITE_URL || fallback).replace(/\/?$/, '/');
const routes = ['', 'projects', 'projects/pricewise', 'projects/cpp-sensor-dashboard', 'projects/video-games-api', 'projects/android-contacts-app', 'projects/reposentry', 'resume'];
const urls = routes.map((route) => `  <url><loc>${siteUrl}${route}</loc></url>`).join('\n');
writeFileSync('public/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
writeFileSync('public/robots.txt', `User-agent: *\nAllow: /\nSitemap: ${siteUrl}sitemap.xml\n`);
console.log(`SEO files generated for ${siteUrl}`);
