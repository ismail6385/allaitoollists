import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
    MessageSquare,
    Image as ImageIcon,
    Video,
    Code,
    Music,
    FileText,
    Sparkles,
    Zap,
    Layout
} from 'lucide-react';
import { supabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

const categoryIcons: Record<string, any> = {
    'Text': MessageSquare,
    'Image': ImageIcon,
    'Video': Video,
    'Code': Code,
    'Audio': Music,
    'Writing': FileText,
    'Productivity': Zap,
    'Other': Sparkles,
    'Design': Layout,
};

const categoryDescriptions: Record<string, string> = {
    'Text': 'AI tools for text generation, editing, and analysis',
    'Image': 'Create, edit, and enhance images with AI',
    'Video': 'AI-powered video creation and editing tools',
    'Code': 'Coding assistants and development tools',
    'Audio': 'Music generation, voice synthesis, and audio editing',
    'Writing': 'Content creation and writing assistance',
    'Productivity': 'Boost your workflow with AI productivity tools',
    'Other': 'Miscellaneous AI tools and utilities',
    'Design': 'Tools for UI/UX, graphic design, and prototyping',
};

export default async function CategoriesPage() {
    // Fetch all tools to calculate category counts
    const { data: tools } = await supabase
        .from('tools')
        .select('category');

    // Calculate counts
    const categoryCounts: Record<string, number> = {};
    tools?.forEach(tool => {
        const cat = tool.category;
        categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
    });

    // Get unique categories and sort by count
    const categories = Object.keys(categoryCounts).sort((a, b) => categoryCounts[b] - categoryCounts[a]);

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />

            <main className="flex-grow">
                {/* Hero Section */}
                <div className="relative isolate overflow-hidden pt-24 pb-16">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-b from-white via-white/90 to-white/70 bg-clip-text text-transparent mb-6">
                                Browse by Category
                            </h1>
                            <p className="text-lg leading-8 text-muted-foreground">
                                Explore AI tools organized by their primary function and use case.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Categories Grid */}
                <div className="container mx-auto px-4 py-12">
                    {categories.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {categories.map((category) => {
                                const Icon = categoryIcons[category] || Sparkles;
                                const count = categoryCounts[category];
                                return (
                                    <Link key={category} href={`/?category=${encodeURIComponent(category)}`}>
                                        <Card className="group h-full p-6 hover:bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 cursor-pointer">
                                            <div className="flex flex-col items-center text-center space-y-4">
                                                <div className="bg-primary/10 p-4 rounded-xl group-hover:bg-primary/20 transition-colors">
                                                    <Icon className="h-8 w-8 text-primary" />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                                                        {category}
                                                    </h3>
                                                    <p className="text-sm text-muted-foreground mb-3">
                                                        {categoryDescriptions[category] || 'Explore AI tools in this category'}
                                                    </p>
                                                    <Badge variant="secondary" className="bg-secondary/50">
                                                        {count} {count === 1 ? 'Tool' : 'Tools'}
                                                    </Badge>
                                                </div>
                                            </div>
                                        </Card>
                                    </Link>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-muted-foreground text-lg">No categories found.</p>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}
