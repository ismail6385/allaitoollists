import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ToolCard } from '@/components/ToolCard';
import { Sparkles } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { dbToolToTool } from '@/types';

export const dynamic = 'force-dynamic';

export default async function NewToolsPage() {
    // Fetch tools sorted by date added (newest first)
    const { data: dbTools, error } = await supabase
        .from('tools')
        .select('*')
        .order('date_added', { ascending: false })
        .limit(50); // Show last 50 tools

    if (error) {
        console.error('Error fetching new tools:', error);
    }

    const sortedTools = (dbTools || []).map(dbToolToTool);

    // Group by category
    const toolsByCategory: Record<string, typeof sortedTools> = {};
    sortedTools.forEach(tool => {
        if (!toolsByCategory[tool.category]) {
            toolsByCategory[tool.category] = [];
        }
        if (toolsByCategory[tool.category].length < 8) { // Max 8 per category
            toolsByCategory[tool.category].push(tool);
        }
    });

    const categorizedTools = Object.entries(toolsByCategory)
        .map(([category, tools]) => ({ category, tools }))
        .filter(group => group.tools.length > 0);

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />

            <main className="flex-grow">
                {/* Hero Section */}
                <div className="relative isolate overflow-hidden pt-24 pb-12">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <div className="flex items-center justify-center gap-2 mb-6">
                                <Sparkles className="h-10 w-10 text-primary" />
                                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-b from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                                    New AI Tools
                                </h1>
                            </div>
                            <p className="text-lg leading-8 text-muted-foreground">
                                Discover the latest AI tools added to our directory, organized by category.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Tools by Category */}
                <div className="container mx-auto px-4 py-12 space-y-16">
                    {categorizedTools.length > 0 ? (
                        categorizedTools.map(({ category, tools: categoryTools }) => (
                            <div key={category}>
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-2xl font-bold flex items-center gap-2">
                                        <span className="bg-primary/10 px-4 py-2 rounded-lg">
                                            {category}
                                        </span>
                                        <span className="text-muted-foreground text-sm">
                                            {categoryTools.length} new {categoryTools.length === 1 ? 'tool' : 'tools'}
                                        </span>
                                    </h2>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                    {categoryTools.map((tool) => (
                                        <ToolCard key={tool.id} tool={tool} />
                                    ))}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-xl text-muted-foreground">
                                No new tools available.
                            </p>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}
