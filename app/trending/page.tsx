import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { tools } from '@/data/tools';
import { categories } from '@/types';
import { ToolCard } from '@/components/ToolCard';
import { TrendingUp, Flame } from 'lucide-react';

export default function TrendingPage() {
    // Filter and sort trending tools
    const trendingTools = tools
        .filter(tool => tool.trending)
        .sort((a, b) => (b.views || 0) - (a.views || 0));

    // Group trending tools by category
    const trendingByCategory = categories.map(category => ({
        category,
        tools: trendingTools.filter(tool => tool.category === category)
    })).filter(group => group.tools.length > 0);

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

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
                        {trendingTools.map((tool) => (
                            <ToolCard key={tool.id} tool={tool} />
                        ))}
                    </div>

                    {/* Trending by Category */}
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
                </div>
            </main>

            <Footer />
        </div>
    );
}
