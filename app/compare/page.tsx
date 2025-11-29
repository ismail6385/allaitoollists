import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, X, Minus, Plus } from 'lucide-react';
import { tools } from '@/data/tools';

export default function ComparePage() {
    // Mock comparison data
    const tool1 = tools[0]; // ChatGPT
    const tool2 = tools[1]; // Midjourney (assuming it's 2nd)
    const tool3 = tools[2]; // Jasper (assuming it's 3rd)

    const comparisonTools = [tool1, tool2, tool3].filter(Boolean);

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />

            <main className="flex-grow">
                {/* Hero Section */}
                <div className="relative isolate overflow-hidden pt-24 pb-12">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-b from-white via-white/90 to-white/70 bg-clip-text text-transparent mb-4">
                                Compare Tools
                            </h1>
                            <p className="text-lg text-muted-foreground">
                                Compare features, pricing, and ratings side-by-side.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Comparison Table */}
                <div className="container mx-auto px-4 py-8 max-w-7xl overflow-x-auto">
                    <div className="min-w-[800px]">
                        <div className="grid grid-cols-4 gap-4 mb-8">
                            {/* Header Column */}
                            <div className="flex flex-col justify-end pb-4">
                                <h3 className="text-lg font-bold text-muted-foreground">Features</h3>
                            </div>

                            {/* Tool Columns */}
                            {comparisonTools.map((tool) => (
                                <div key={tool.id} className="relative">
                                    <Card className="p-6 border-primary/20 bg-card/50">
                                        <div className="absolute -top-3 -right-3">
                                            <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full bg-secondary hover:bg-destructive hover:text-destructive-foreground">
                                                <X className="h-3 w-3" />
                                            </Button>
                                        </div>
                                        <div className="h-12 w-12 rounded-lg bg-white/10 mb-4 overflow-hidden">
                                            <img src={tool.icon} alt={tool.name} className="h-full w-full object-cover" />
                                        </div>
                                        <h3 className="font-bold text-lg mb-1">{tool.name}</h3>
                                        <p className="text-xs text-muted-foreground mb-3">{tool.category}</p>
                                        <div className="text-sm font-semibold text-primary">{tool.pricing}</div>
                                    </Card>
                                </div>
                            ))}

                            {/* Add Tool Column */}
                            {comparisonTools.length < 3 && (
                                <div className="flex items-center justify-center">
                                    <Button variant="outline" className="h-full w-full border-dashed border-2 flex flex-col gap-2 hover:border-primary hover:text-primary">
                                        <Plus className="h-8 w-8" />
                                        <span>Add Tool</span>
                                    </Button>
                                </div>
                            )}
                        </div>

                        {/* Comparison Rows */}
                        <div className="space-y-4">
                            {[
                                { label: 'Rating', key: 'rating', type: 'rating' },
                                { label: 'Pricing Model', key: 'pricing', type: 'text' },
                                { label: 'Platform', key: 'platform', type: 'tags' },
                                { label: 'API Available', key: 'api', type: 'boolean' },
                                { label: 'Free Trial', key: 'trial', type: 'boolean' },
                                { label: 'Mobile App', key: 'mobile', type: 'boolean' },
                            ].map((row) => (
                                <div key={row.label} className="grid grid-cols-4 gap-4 py-4 border-b border-white/5">
                                    <div className="font-medium text-muted-foreground flex items-center">{row.label}</div>
                                    {comparisonTools.map((tool) => (
                                        <div key={`${tool.id}-${row.label}`} className="flex items-center">
                                            {row.type === 'rating' && (
                                                <div className="flex items-center gap-1 text-yellow-500">
                                                    <span className="font-bold text-white">{tool.rating}</span>
                                                    <span className="text-xs text-muted-foreground">/ 5</span>
                                                </div>
                                            )}
                                            {row.type === 'text' && <span>{tool[row.key as keyof typeof tool]}</span>}
                                            {row.type === 'tags' && (
                                                <div className="flex flex-wrap gap-1">
                                                    {Array.isArray(tool.platform) ? tool.platform.map((p: string) => (
                                                        <span key={p} className="text-xs bg-secondary px-1.5 py-0.5 rounded">{p}</span>
                                                    )) : <span>{tool.platform}</span>}
                                                </div>
                                            )}
                                            {row.type === 'boolean' && (
                                                Math.random() > 0.5 ? <Check className="h-5 w-5 text-green-500" /> : <Minus className="h-5 w-5 text-muted-foreground/50" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
