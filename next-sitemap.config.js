// module.exports = {
//     siteUrl: 'https://gkrcoder.me',  // Replace with your website URL
//     generateRobotsTxt: true,  // Generates robots.txt file automatically
//     changefreq: 'daily',  // Change frequency, adjust as needed
//     priority: 0.7,  // Default priority
// }


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
        '/about/AboutePage',
        '/experience/ProfessionalExperience',
        '/projects/ProjectDetails',
        '/projects/Projects',
        '/projects/*',
        '/skill/Skills',
        '/**/notFound*',
        '/**/api/*',
        '/**/admin*',
        '/_*',
        '/opengraph-image.png',
        '/manifest.json',
        '/robots.txt',
    ],
    // Prioritize main routes
    transform: async (config, path) => {
        // Set priority based on route importance
        let priority = 0.7;
        
        if (path === '' || path === '/') {
            priority = 1.0;
        } else if (['/about', '/projects', '/experience', '/skills', '/contact'].includes(path)) {
            priority = 0.9;
        } else if (['/resume', '/open-source'].includes(path)) {
            priority = 0.8;
        }
        
        return {
            loc: `${config.siteUrl}${path}`,
            changefreq: config.changefreq,
            priority,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        };
    },
}


