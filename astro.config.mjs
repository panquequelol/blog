// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import typography from '@tailwindcss/typography';
import { defineConfig } from 'astro/config';
import remarkBreaks from 'remark-breaks';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    site: 'https://edgy.website',
    integrations: [mdx(), sitemap(), react()],
    vite: {
        plugins: [tailwindcss({
            config: {
                plugins: [typography],
            },
        })],
    },
    markdown: {
        remarkPlugins: [remarkBreaks],
        shikiConfig: {
            theme: 'github-dark',
        },
    },
});