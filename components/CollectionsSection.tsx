'use client';

import { Sparkles, ArrowRight, Zap, Code, Palette, TrendingUp, DollarSign, Users } from 'lucide-react';
import Link from 'next/link';

export function CollectionsSection() {
    const collections = [
        {
            id: 1,
            title: 'Best Free AI Tools',
            description: 'Top-rated AI tools that are completely free to use',
            icon: DollarSign,
            gradient: 'from-green-500 to-emerald-500',
            bgGradient: 'from-green-500/10 to-emerald-500/10',
            toolCount: 150,
            slug: 'best-free-tools',
            emoji: '🆓',
        },
        {
            id: 2,
            title: 'AI Tools for Developers',
            description: 'Coding assistants, debugging tools, and development utilities',
            icon: Code,
            gradient: 'from-blue-500 to-cyan-500',
            bgGradient: 'from-blue-500/10 to-cyan-500/10',
            toolCount: 120,
            slug: 'developer-tools',
            emoji: '💻',
        },
        {
            id: 3,
            title: 'Creative AI Suite',
            description: 'Design, art generation, and creative tools for artists',
            icon: Palette,
            gradient: 'from-purple-500 to-pink-500',
            bgGradient: 'from-purple-500/10 to-pink-500/10',
            toolCount: 95,
            slug: 'creative-tools',
            emoji: '🎨',
        },
        {
            id: 4,
            title: 'Marketing Powerhouse',
            description: 'SEO, social media, and marketing automation tools',
            icon: TrendingUp,
            gradient: 'from-orange-500 to-red-500',
            bgGradient: 'from-orange-500/10 to-red-500/10',
            toolCount: 85,
            slug: 'marketing-tools',
            emoji: '📈',
        },
        {
            id: 5,
            title: 'Productivity Boosters',
            description: 'Task automation, scheduling, and workflow optimization',
            icon: Zap,
            gradient: 'from-yellow-500 to-orange-500',
            bgGradient: 'from-yellow-500/10 to-orange-500/10',
            toolCount: 110,
            slug: 'productivity-tools',
            emoji: '⚡',
        },
        {
            id: 6,
            title: 'Enterprise Solutions',
            description: 'Professional-grade AI tools for teams and businesses',
            icon: Users,
            gradient: 'from-indigo-500 to-purple-500',
            bgGradient: 'from-indigo-500/10 to-purple-500/10',
            toolCount: 75,
            slug: 'enterprise-tools',
            emoji: '🏢',
        },
    ];

    return (
        <div className="py-20 md:py-28">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                        <Sparkles className="h-4 w-4 text-primary" />
                        <span className="text-sm font-semibold text-primary">Curated Collections</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black mb-4">
                        <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                            Explore Our
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Tool Collections
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Handpicked collections of the best AI tools for every use case
                    </p>
                </div>

                {/* Collections Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {collections.map((collection) => (
                        <Link
                            key={collection.id}
                            href={`/collections/${collection.slug}`}
                            className="group relative overflow-hidden bg-background/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 hover:scale-105"
                        >
                            {/* Background Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${collection.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            {/* Content */}
                            <div className="relative z-10">
                                {/* Icon/Emoji */}
                                <div className="mb-4">
                                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${collection.bgGradient} border border-white/10 group-hover:scale-110 transition-transform`}>
                                        <span className="text-4xl">{collection.emoji}</span>
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                    {collection.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                    {collection.description}
                                </p>

                                {/* Tool Count & Arrow */}
                                <div className="flex items-center justify-between">
                                    <span className={`text-sm font-semibold bg-gradient-to-r ${collection.gradient} bg-clip-text text-transparent`}>
                                        {collection.toolCount}+ Tools
                                    </span>
                                    <ArrowRight className={`h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all`} />
                                </div>
                            </div>

                            {/* Decorative Border */}
                            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${collection.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                        </Link>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <Link
                        href="/collections"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/30 hover:border-primary/50 transition-all hover:scale-105 font-semibold"
                    >
                        View All Collections
                        <Sparkles className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
