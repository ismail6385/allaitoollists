import { MetadataRoute } from 'next';
import { tools } from '@/data/tools';
import { categories } from '@/types';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://aitoollist.com';

    // Static routes
    const routes = [
        '',
        '/about',
        '/blog',
        '/categories',
        '/submit',
        '/pricing',
        '/login',
        '/register',
        '/terms',
        '/privacy',
        '/cookies',
        '/dmca',
        '/disclaimer',
        '/top-10',
        '/news',
        '/tutorials',
        '/deals',
        '/compare',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic tool routes
    const toolRoutes = tools.map((tool) => ({
        url: `${baseUrl}/tool/${tool.id}`,
        lastModified: new Date(tool.dateAdded || new Date()),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
    }));

    // Dynamic category routes
    const categoryRoutes = categories.map((category) => ({
        url: `${baseUrl}/category/${category.toLowerCase()}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    return [...routes, ...toolRoutes, ...categoryRoutes];
}
