'use client';

import { Sparkles, TrendingUp, Zap, Star, ArrowRight, Clock, Users2, Rocket } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export function TrendingToolsSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    const trendingTools = [
        {
            name: 'ChatGPT',
            category: 'Text & Writing',
            description: 'Revolutionary AI chatbot for conversations, content creation, and problem-solving',
            trend: '+245%',
            users: '180M+',
            rating: 4.9,
            gradient: 'from-green-400 to-emerald-500',
            icon: '🤖',
        },
        {
            name: 'Midjourney',
            category: 'Image Generation',
            description: 'Create stunning AI-generated artwork and images from text descriptions',
            trend: '+189%',
            users: '15M+',
            rating: 4.8,
            gradient: 'from-purple-400 to-pink-500',
            icon: '🎨',
        },
        {
            name: 'GitHub Copilot',
            category: 'Code & Development',
            description: 'AI pair programmer that helps you write code faster with intelligent suggestions',
            trend: '+156%',
            users: '5M+',
            rating: 4.7,
            gradient: 'from-blue-400 to-cyan-500',
            icon: '💻',
        },
        {
            name: 'Runway ML',
            category: 'Video & Audio',
            description: 'AI-powered video editing and generation tools for creators',
            trend: '+134%',
            users: '8M+',
            rating: 4.6,
            gradient: 'from-orange-400 to-red-500',
            icon: '🎬',
        },
        {
            name: 'Jasper AI',
            category: 'Marketing',
            description: 'AI content platform for marketing teams to create high-quality content',
            trend: '+128%',
            users: '100K+',
            rating: 4.5,
            gradient: 'from-yellow-400 to-orange-500',
            icon: '📈',
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % trendingTools.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [trendingTools.length]);

    return (
        <div className="relative py-20 md:py-28 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-background via-orange-500/5 to-background" />
                <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 mb-6 animate-bounce">
                        <TrendingUp className="h-4 w-4 text-orange-500" />
                        <span className="text-sm font-semibold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                            Trending Now
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black mb-4">
                        <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                            Hottest AI Tools
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                            Right Now 🔥
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Discover the most popular AI tools that everyone is talking about
                    </p>
                </div>

                {/* Trending Tools Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {trendingTools.slice(0, 3).map((tool, index) => (
                        <div
                            key={tool.name}
                            className="group relative overflow-hidden bg-background/90 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-orange-500/50 transition-all duration-500 hover:scale-105"
                        >
                            {/* Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                            {/* Trending Badge */}
                            <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30">
                                <TrendingUp className="h-3 w-3 text-orange-500" />
                                <span className="text-xs font-bold text-orange-500">{tool.trend}</span>
                            </div>

                            <div className="relative">
                                {/* Icon */}
                                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {tool.icon}
                                </div>

                                {/* Tool Name */}
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-orange-500 transition-colors">
                                    {tool.name}
                                </h3>

                                {/* Category */}
                                <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold mb-3">
                                    {tool.category}
                                </div>

                                {/* Description */}
                                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                    {tool.description}
                                </p>

                                {/* Stats */}
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="flex items-center gap-1">
                                        <Users2 className="h-4 w-4 text-primary" />
                                        <span className="text-xs font-semibold">{tool.users}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                        <span className="text-xs font-semibold">{tool.rating}</span>
                                    </div>
                                </div>

                                {/* CTA */}
                                <button className={`w-full py-2 rounded-full bg-gradient-to-r ${tool.gradient} hover:opacity-90 transition-opacity font-semibold text-white text-sm flex items-center justify-center gap-2`}>
                                    Explore Tool
                                    <ArrowRight className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Trending */}
                <div className="text-center">
                    <Link
                        href="/trending"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transition-all font-bold text-white shadow-lg hover:scale-105"
                    >
                        View All Trending Tools
                        <Rocket className="h-5 w-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
