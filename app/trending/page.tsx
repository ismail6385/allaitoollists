import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ToolCard } from '@/components/ToolCard';
import { TrendingUp, Flame } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { dbToolToTool } from '@/types';

export const dynamic = 'force-dynamic';

export default async function TrendingPage() {
    // Fetch trending tools
    const { data: dbTools, error } = await supabase
        .from('tools')
        .select('*')
        .eq('trending', true)
        .order('views', { ascending: false });

    if (error) {
        console.error('Error fetching trending tools:', error);
    }

    const trendingTools = (dbTools || []).map(dbToolToTool);

    // Group by category
    const categoryCounts: Record<string, typeof trendingTools> = {};
    trendingTools.forEach(tool => {
        if (!categoryCounts[tool.category]) {
            categoryCounts[tool.category] = [];
        }
        categoryCounts[tool.category].push(tool);
    });

    const trendingByCategory = Object.entries(categoryCounts)
        .map(([category, tools]) => ({ category, tools }))
        .sort((a, b) => b.tools.length - a.tools.length);

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />

            <main className="flex-grow">
                {/* Hero Section */}
                <div className="relative isolate overflow-hidden pt-24 pb-12">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <div className="flex items-center justify-center gap-2 mb-6">
                                <Flame className="h-10 w-10 text-orange-500" />
                                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-b from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                                    Trending AI Tools
                                </h1>
                            </div>
                            <p className="text-lg leading-8 text-muted-foreground">
                                Discover the hottest AI tools right now, ranked by popularity and user engagement.
                            </p>
                        </div>
                    </div>
                </div>

                {/* All Trending Tools */}
                <div className="container mx-auto px-4 py-12">
                    <div className="flex items-center gap-3 mb-8">
                        <TrendingUp className="h-6 w-6 text-primary" />
                        <h2 className="text-3xl font-bold">All Trending Tools</h2>
                        <span className="text-muted-foreground">({trendingTools.length})</span>
                    </div>

                    {trendingTools.length > 0 ? (
                        <>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
                                {trendingTools.map((tool) => (
                                    <ToolCard key={tool.id} tool={tool} />
                                ))}
                            </div>

                            {/* Trending by Category */}
                            {trendingByCategory.length > 0 && (
                                <div className="space-y-16">
                                    <h2 className="text-3xl font-bold">Trending by Category</h2>

                                    {trendingByCategory.map(({ category, tools: categoryTools }) => (
                                        <div key={category}>
                                            <div className="flex items-center justify-between mb-6">
                                                <h3 className="text-2xl font-bold flex items-center gap-2">
                                                    <span className="bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2 rounded-lg text-white">
                                                        {category}
                                                    </span>
                                                    <span className="text-muted-foreground text-sm">
                                                        {categoryTools.length} trending
                                                    </span>
                                                </h3>
                                            </div>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                                {categoryTools.map((tool) => (
                                                    <ToolCard key={tool.id} tool={tool} />
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-xl text-muted-foreground">
                                No trending tools at the moment.
                            </p>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}
