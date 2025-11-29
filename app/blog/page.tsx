import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock } from 'lucide-react';
import Link from 'next/link';

const blogPosts = [
    {
        id: 1,
        title: 'Top 10 AI Tools for Content Creation in 2024',
        excerpt: 'Discover the best AI-powered tools that are revolutionizing content creation for writers, marketers, and creators.',
        category: 'Tools',
        date: '2024-01-15',
        readTime: '5 min read',
        image: '/blog/content-creation.jpg'
    },
    {
        id: 2,
        title: 'How AI is Transforming Software Development',
        excerpt: 'Explore how artificial intelligence is changing the way developers write, test, and deploy code.',
        category: 'Development',
        date: '2024-01-10',
        readTime: '7 min read',
        image: '/blog/development.jpg'
    },
    {
        id: 3,
        title: 'Getting Started with AI Image Generation',
        excerpt: 'A beginner-friendly guide to creating stunning images using AI tools like Midjourney and DALL-E.',
        category: 'Tutorial',
        date: '2024-01-05',
        readTime: '6 min read',
        image: '/blog/image-gen.jpg'
    },
];

export default function BlogPage() {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />

            <main className="flex-grow">
                {/* Hero Section */}
                <div className="relative isolate overflow-hidden pt-24 pb-16">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-b from-white via-white/90 to-white/70 bg-clip-text text-transparent mb-6">
                                Blog & Guides
                            </h1>
                            <p className="text-lg leading-8 text-muted-foreground">
                                Learn about AI tools, tutorials, and industry insights.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Blog Posts */}
                <div className="container mx-auto px-4 py-12 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <Link key={post.id} href={`/blog/${post.id}`}>
                                <Card className="group h-full overflow-hidden hover:bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                                    {/* Image Placeholder */}
                                    <div className="relative h-48 w-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center">
                                        <span className="text-4xl opacity-30">📝</span>
                                    </div>

                                    <div className="p-6">
                                        <div className="flex items-center gap-2 mb-3">
                                            <Badge variant="secondary">{post.category}</Badge>
                                        </div>

                                        <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>

                                        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                                            {post.excerpt}
                                        </p>

                                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="h-3 w-3" />
                                                {new Date(post.date).toLocaleDateString('en-US', {
                                                    month: 'short',
                                                    day: 'numeric',
                                                    year: 'numeric'
                                                })}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="h-3 w-3" />
                                                {post.readTime}
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </Link>
                        ))}
                    </div>

                    {/* Coming Soon Message */}
                    <div className="mt-12 text-center">
                        <p className="text-muted-foreground">
                            More articles coming soon! Subscribe to our newsletter to stay updated.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
