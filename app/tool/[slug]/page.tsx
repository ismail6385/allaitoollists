import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ExternalLink, Share2, Heart, CheckCircle2 } from 'lucide-react';
import { ShareDialog } from '@/components/ShareDialog';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { dbToolToTool } from '@/types';

interface PageProps {
    params: {
        slug: string;
    };
}

// Revalidate every hour
export const revalidate = 3600;

export async function generateStaticParams() {
    const { data: tools } = await supabase.from('tools').select('slug');
    return (tools || []).map((tool) => ({
        slug: tool.slug,
    }));
}

export default async function ToolDetailPage({ params }: PageProps) {
    const { data: dbTool } = await supabase
        .from('tools')
        .select('*')
        .eq('slug', params.slug)
        .single();

    if (!dbTool) {
        notFound();
    }

    const tool = dbToolToTool(dbTool);

    // Fetch similar tools
    const { data: similarDbTools } = await supabase
        .from('tools')
        .select('*')
        .eq('category', tool.category)
        .neq('id', tool.id)
        .limit(3);

    const similarTools = (similarDbTools || []).map(dbToolToTool);

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />

            <main className="flex-grow container mx-auto px-4 py-8">
                <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Tools
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden bg-muted">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-muted-foreground">
                                {tool.icon ? (
                                    <img src={tool.icon} alt={tool.name} className="w-full h-full object-contain p-8" />
                                ) : (
                                    <span className="text-6xl font-bold opacity-20">{tool.name[0]}</span>
                                )}
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <h1 className="text-4xl font-bold">{tool.name}</h1>
                                {tool.verified && (
                                    <CheckCircle2 className="h-6 w-6 text-blue-500" aria-label="Verified Tool" />
                                )}
                            </div>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                {tool.fullDescription}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {tool.tags.map((tag: string) => (
                                <Badge key={tag} variant="secondary" className="text-sm px-3 py-1">
                                    #{tag}
                                </Badge>
                            ))}
                        </div>

                        <div className="prose prose-invert max-w-none">
                            <h3>About {tool.name}</h3>
                            <p>
                                {tool.fullDescription}
                            </p>
                            {/* Placeholder for future rich content */}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        <div className="p-6 rounded-xl border border-border bg-card sticky top-24">
                            <div className="flex justify-between items-center mb-6">
                                <Badge variant={tool.pricing === 'Free' ? 'default' : 'outline'} className="text-sm px-3 py-1">
                                    {tool.pricing}
                                </Badge>
                                <div className="flex gap-2">
                                    <Button size="icon" variant="ghost">
                                        <Heart className="h-5 w-5" />
                                    </Button>
                                    <ShareDialog
                                        url={`https://aitoollist.com/tool/${tool.slug}`}
                                        title={`Check out ${tool.name} on AI Tool List!`}
                                        trigger={
                                            <Button size="icon" variant="ghost">
                                                <Share2 className="h-5 w-5" />
                                            </Button>
                                        }
                                    />
                                </div>
                            </div>

                            <Button className="w-full mb-4 text-lg py-6" size="lg" asChild>
                                <a href={tool.url} target="_blank" rel="noopener noreferrer">
                                    Visit Website <ExternalLink className="ml-2 h-5 w-5" />
                                </a>
                            </Button>

                            <div className="space-y-4 text-sm text-muted-foreground">
                                <div className="flex justify-between py-2 border-b border-border/50">
                                    <span>Category</span>
                                    <span className="font-medium text-foreground">{tool.category}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-border/50">
                                    <span>Added</span>
                                    <span className="font-medium text-foreground">
                                        {tool.dateAdded ? new Date(tool.dateAdded).toLocaleDateString() : 'N/A'}
                                    </span>
                                </div>
                                {tool.views && (
                                    <div className="flex justify-between py-2 border-b border-border/50">
                                        <span>Views</span>
                                        <span className="font-medium text-foreground">{tool.views.toLocaleString()}</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-border bg-card">
                            <h3 className="font-semibold mb-4">Similar Tools</h3>
                            <div className="space-y-4">
                                {similarTools.length > 0 ? (
                                    similarTools.map(similar => (
                                        <Link key={similar.id} href={`/tool/${similar.slug}`} className="flex items-center gap-3 group">
                                            <div className="h-10 w-10 rounded bg-muted flex items-center justify-center text-xs font-bold overflow-hidden">
                                                {similar.icon ? (
                                                    <img src={similar.icon} alt={similar.name} className="w-full h-full object-cover" />
                                                ) : (
                                                    similar.name[0]
                                                )}
                                            </div>
                                            <div>
                                                <div className="font-medium group-hover:text-primary transition-colors">{similar.name}</div>
                                                <div className="text-xs text-muted-foreground">{similar.pricing}</div>
                                            </div>
                                        </Link>
                                    ))
                                ) : (
                                    <p className="text-sm text-muted-foreground">No similar tools found.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
