/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: 'https://gkrcoder.me',

    generateRobotsTxt: true,
    generateIndexSitemap: false,

    sitemapSize: 7000,

    changefreq: 'daily',
    priority: 0.8,
    autoLastmod: true,

    exclude: [
        '/404',
        '/500',

        // Internal component pages
        '/about/AboutePage',
        '/experience/ProfessionalExperience',
        '/projects/ProjectDetails',
        '/projects/Projects',
        '/skill/Skills',

        // Internal/system routes
        '/**/notFound*',
        '/**/api/*',
        '/**/admin*',
        '/_*',

        // Static files
        '/opengraph-image.png',
        '/manifest.json',
        '/robots.txt',
    ],

    transform: async (config, path) => {
        let priority = 0.7;
        let changefreq = 'weekly';

        // Homepage
        if (path === '/') {
            priority = 1.0;
            changefreq = 'daily';
        }

        // Main pages
        else if (
            [
                '/about',
                '/projects',
                '/experience',
                '/skills',
                '/contact',
            ].includes(path)
        ) {
            priority = 0.9;
            changefreq = 'weekly';
        }

        // Project slug pages
        else if (path.startsWith('/projects/')) {
            priority = 0.85;
            changefreq = 'monthly';
        }

        // Resume/Open source
        else if (
            ['/resume', '/open-source'].includes(path)
        ) {
            priority = 0.8;
        }

        return {
            loc: path,
            changefreq,
            priority,
            lastmod: config.autoLastmod
                ? new Date().toISOString()
                : undefined,
        };
    },
};