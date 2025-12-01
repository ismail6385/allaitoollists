import { supabase } from '@/lib/supabase';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

interface BlogPostPageProps {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const { data: blog } = await supabase
        .from('blogs')
        .select('*')
        .eq('slug', params.slug)
        .eq('is_published', true)
        .single();

    if (!blog) {
        return {
            title: 'Blog Post Not Found',
        };
    }

    return {
        title: blog.meta_title || blog.title,
        description: blog.meta_description || blog.excerpt,
        keywords: blog.meta_keywords,
        openGraph: {
            title: blog.meta_title || blog.title,
            description: blog.meta_description || blog.excerpt,
            images: blog.cover_image ? [blog.cover_image] : [],
            type: 'article',
            publishedTime: blog.created_at,
        },
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { data: blog, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('slug', params.slug)
        .eq('is_published', true)
        .single();

    if (error || !blog) {
        notFound();
    }

    // Increment views
    await supabase
        .from('blogs')
        .update({ views: (blog.views || 0) + 1 })
        .eq('id', blog.id);

    // Simple markdown to HTML converter
    const markdownToHtml = (markdown: string) => {
        let html = markdown
            .replace(/^### (.*$)/gim, '<h3 class="text-2xl font-bold mt-8 mb-4">$1</h3>')
            .replace(/^## (.*$)/gim, '<h2 class="text-3xl font-bold mt-10 mb-6">$1</h2>')
            .replace(/^# (.*$)/gim, '<h1 class="text-4xl font-bold mt-12 mb-8">$1</h1>')
            .replace(/\*\*(.*?)\*\*/gim, '<strong class="font-semibold">$1</strong>')
            .replace(/\*(.*?)\*/gim, '<em class="italic">$1</em>')
            .replace(/\[([^\]]+)\]\(([^\)]+)\)/gim, '<a href="$2" class="text-primary hover:underline">$1</a>')
            .replace(/!\[([^\]]*)\]\(([^\)]+)\)/gim, '<img src="$2" alt="$1" class="max-w-full h-auto my-8 rounded-lg" />')
            .replace(/^\- (.*$)/gim, '<li class="ml-6 mb-2">$1</li>')
            .replace(/^(\d+)\. (.*$)/gim, '<li class="ml-6 mb-2">$2</li>')
            .replace(/`([^`]+)`/gim, '<code class="bg-muted px-2 py-1 rounded text-sm font-mono">$1</code>')
            .replace(/```([\s\S]*?)```/gim, '<pre class="bg-muted p-4 rounded-lg my-6 overflow-x-auto"><code class="font-mono text-sm">$1</code></pre>')
            .replace(/> (.*$)/gim, '<blockquote class="border-l-4 border-primary pl-4 italic my-6 text-muted-foreground">$1</blockquote>')
            .replace(/\n\n/gim, '</p><p class="mb-4">')
            .replace(/\n/gim, '<br />');

        return `<p class="mb-4">${html}</p>`;
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
                {/* Back Button */}
                <div className="container mx-auto px-4 pt-8">
                    <Link href="/blog">
                        <Button variant="ghost" className="gap-2">
                            <ArrowLeft className="h-4 w-4" />
                            Back to Blog
                        </Button>
                    </Link>
                </div>

                {/* Article Header */}
                <article className="container mx-auto px-4 py-8 max-w-4xl">
                    {blog.cover_image && (
                        <div className="mb-8 rounded-lg overflow-hidden">
                            <img
                                src={blog.cover_image}
                                alt={blog.title}
                                className="w-full h-auto max-h-[500px] object-cover"
                            />
                        </div>
                    )}

                    <div className="space-y-6">
                        {blog.category && (
                            <Badge variant="secondary" className="text-sm">
                                {blog.category}
                            </Badge>
                        )}

                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                            {blog.title}
                        </h1>

                        {blog.excerpt && (
                            <p className="text-xl text-muted-foreground">
                                {blog.excerpt}
                            </p>
                        )}

                        <div className="flex items-center gap-6 text-sm text-muted-foreground border-y py-4">
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                <span>{new Date(blog.created_at).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <User className="h-4 w-4" />
                                <span>Admin</span>
                            </div>
                            {blog.views && (
                                <div>
                                    {blog.views} views
                                </div>
                            )}
                        </div>

                        {/* Article Content */}
                        <div
                            className="prose prose-lg dark:prose-invert max-w-none 
                         prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
                         prose-p:text-base prose-p:leading-relaxed prose-p:mb-4
                         prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                         prose-img:rounded-lg prose-img:my-8
                         prose-code:bg-muted prose-code:px-2 prose-code:py-1 prose-code:rounded
                         prose-pre:bg-muted prose-pre:p-6
                         prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4
                         prose-strong:font-semibold"
                            dangerouslySetInnerHTML={{ __html: markdownToHtml(blog.content || '') }}
                        />

                        {/* Tags */}
                        {blog.tags && blog.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 pt-8 border-t">
                                <span className="text-sm font-medium">Tags:</span>
                                {blog.tags.map((tag: string, index: number) => (
                                    <Badge key={index} variant="outline">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        )}

                        {/* Share Section */}
                        <div className="flex items-center gap-4 pt-8 border-t">
                            <span className="text-sm font-medium">Share:</span>
                            <Button variant="outline" size="sm" className="gap-2">
                                <Share2 className="h-4 w-4" />
                                Share Article
                            </Button>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
}
