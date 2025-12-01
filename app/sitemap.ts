import { MetadataRoute } from 'next';
import { supabase } from '@/lib/supabase';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://aitoollist.com'; // Replace with your actual domain

    // Fetch all tools
    const { data: tools } = await supabase
        .from('tools')
        .select('slug, category, updated_at');

    // Static routes
    const routes = [
        '',
        '/categories',
        '/submit',
        '/trending',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'daily' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Tool routes
    const toolRoutes = (tools || []).map((tool) => ({
        url: `${baseUrl}/tool/${tool.slug}`,
        lastModified: tool.updated_at || new Date().toISOString(),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
    }));

    // Category routes
    const categories = Array.from(new Set((tools || []).map((tool) => tool.category).filter(Boolean)));
    const categoryRoutes = categories.map((category) => ({
        url: `${baseUrl}/category/${category.toLowerCase().replace(/\s+/g, '-')}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'daily' as const,
        priority: 0.7,
    }));

    return [...routes, ...categoryRoutes, ...toolRoutes];
}
