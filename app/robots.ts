import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://aitoollist.com'; // Replace with your actual domain

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/admin/', '/private/'],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
