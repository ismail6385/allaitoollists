import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { tools } from '@/data/tools';
import { categories } from '@/types';
import { ToolCard } from '@/components/ToolCard';
import { TrendingUp, Trophy } from 'lucide-react';

export default function Top10Page() {
    // Get top 10 tools by views
    const top10Overall = [...tools]
        .sort((a, b) => (b.views || 0) - (a.views || 0))
        .slice(0, 10);

    // Get top 10 by category
    const top10ByCategory = categories.map(category => ({
        category,
        tools: [...tools]
            .filter(tool => tool.category === category)
            .sort((a, b) => (b.views || 0) - (a.views || 0))
            .slice(0, 10)
    })).filter(cat => cat.tools.length > 0);

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />

            <main className="flex-grow">
                {/* Hero Section */}
                <div className="relative isolate overflow-hidden pt-16 md:pt-24 pb-12 md:pb-16">
                    <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <div className="flex items-center justify-center gap-2 mb-4 md:mb-6">
                                <Trophy className="h-8 w-8 md:h-10 md:w-10 text-yellow-400" />
                                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight bg-gradient-to-b from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                                    Top 10 AI Tools
                                </h1>
                            </div>
                            <p className="text-base md:text-lg leading-7 md:leading-8 text-muted-foreground px-4">
                                The most popular and trending AI tools, updated in real-time based on community views.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Overall Top 10 */}
                <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
                    <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
                        <TrendingUp className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                        <h2 className="text-2xl md:text-3xl font-bold">Overall Top 10</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-6 mb-12 md:mb-16">
                        {top10Overall.map((tool, index) => (
                            <div key={tool.id} className="relative">
                                <div className="absolute -top-2 -left-2 md:-top-3 md:-left-3 z-10 bg-gradient-to-br from-yellow-400 to-orange-500 text-black font-bold rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-sm md:text-lg shadow-lg">
                                    #{index + 1}
                                </div>
                                <ToolCard tool={tool} />
                            </div>
                        ))}
                    </div>

                    {/* Top 10 by Category */}
                    {top10ByCategory.map(({ category, tools: categoryTools }) => (
                        <div key={category} className="mb-12 md:mb-16">
                            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex flex-wrap items-center gap-2">
                                <span className="bg-primary/10 px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-base md:text-xl">
                                    {category}
                                </span>
                                <span className="text-muted-foreground text-xs md:text-sm">Top 10</span>
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-6">
                                {categoryTools.map((tool, index) => (
                                    <div key={tool.id} className="relative">
                                        <div className="absolute -top-2 -left-2 md:-top-3 md:-left-3 z-10 bg-primary text-primary-foreground font-bold rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-xs md:text-sm shadow-lg">
                                            #{index + 1}
                                        </div>
                                        <ToolCard tool={tool} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}
