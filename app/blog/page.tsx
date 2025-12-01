import { supabase } from '@/lib/supabase';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const dynamic = 'force-dynamic';

export const metadata = {
    title: 'Blog - AI Tools Insights & Tutorials | AI Tool List',
    description: 'Read the latest articles, tutorials, and insights about AI tools, artificial intelligence, and technology trends.',
};

export default async function BlogPage() {
    const { data: blogs, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('is_published', true)
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching blogs:', error);
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative py-24 bg-gradient-to-br from-primary/10 via-background to-background">
                    <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px]" />
                    <div className="container relative mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center space-y-4">
                            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                                Blog & Insights
                            </h1>
                            <p className="text-xl text-muted-foreground">
                                Discover the latest trends, tutorials, and insights about AI tools and technology
                            </p>
                        </div>
                    </div>
                </section>

                {/* Blog Grid */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        {blogs && blogs.length > 0 ? (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {blogs.map((blog) => (
                                    <Link key={blog.id} href={`/blog/${blog.slug}`}>
                                        <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-white/10 bg-card/50 backdrop-blur overflow-hidden group">
                                            {blog.cover_image && (
                                                <div className="relative h-48 overflow-hidden bg-muted">
                                                    <img
                                                        src={blog.cover_image}
                                                        alt={blog.title}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                    />
                                                </div>
                                            )}
                                            <CardContent className="p-6 space-y-4">
                                                {blog.category && (
                                                    <Badge variant="secondary" className="mb-2">
                                                        {blog.category}
                                                    </Badge>
                                                )}
                                                <h3 className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
                                                    {blog.title}
                                                </h3>
                                                {blog.excerpt && (
                                                    <p className="text-muted-foreground line-clamp-3 text-sm">
                                                        {blog.excerpt}
                                                    </p>
                                                )}
                                                <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4 border-t">
                                                    <div className="flex items-center gap-1">
                                                        <Calendar className="h-4 w-4" />
                                                        <span>{new Date(blog.created_at).toLocaleDateString()}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Clock className="h-4 w-4" />
                                                        <span>5 min read</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2 text-primary font-medium pt-2">
                                                    Read More
                                                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16">
                                <p className="text-xl text-muted-foreground">
                                    {error ? 'Failed to load blogs' : 'No blog posts published yet'}
                                </p>
                                <p className="text-sm text-muted-foreground mt-2">
                                    Check back soon for new articles!
                                </p>
                            </div>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
