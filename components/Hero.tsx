'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Sparkles, TrendingUp, Zap, ArrowRight, Star, Rocket, Brain } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface HeroProps {
    onSearch?: (query: string) => void;
}

export function Hero({ onSearch }: HeroProps = {}) {
    const [searchValue, setSearchValue] = useState('');
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchValue(value);
        onSearch?.(value);
    };

    const handleSearchClick = () => {
        onSearch?.(searchValue);
    };

    const trendingSearches = ['ChatGPT', 'Midjourney', 'Claude', 'DALL-E'];

    const floatingIcons = [
        { Icon: Brain, delay: '0s', duration: '20s', x: '10%', y: '20%' },
        { Icon: Rocket, delay: '2s', duration: '25s', x: '85%', y: '15%' },
        { Icon: Star, delay: '4s', duration: '22s', x: '15%', y: '70%' },
        { Icon: Sparkles, delay: '1s', duration: '18s', x: '90%', y: '60%' },
    ];

    return (
        <div className="relative isolate overflow-hidden min-h-[90vh] flex items-center">
            {/* Animated Grid Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
            </div>

            {/* Dynamic Gradient Orbs */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                {/* Main gradient orb */}
                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-primary/30 via-purple-500/30 to-pink-500/30 blur-3xl opacity-20 animate-pulse"
                    style={{
                        animation: 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                    }}
                />

                {/* Secondary gradient orbs */}
                <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s', animationDuration: '10s' }} />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '4s', animationDuration: '12s' }} />

                {/* Mouse-following gradient */}
                <div
                    className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 blur-3xl opacity-30 pointer-events-none transition-all duration-1000 ease-out"
                    style={{
                        left: `${mousePosition.x}px`,
                        top: `${mousePosition.y}px`,
                        transform: 'translate(-50%, -50%)',
                    }}
                />
            </div>

            {/* Floating Icons */}
            {floatingIcons.map(({ Icon, delay, duration, x, y }, index) => (
                <div
                    key={index}
                    className="absolute opacity-10 pointer-events-none"
                    style={{
                        left: x,
                        top: y,
                        animation: `float ${duration} ease-in-out infinite`,
                        animationDelay: delay,
                    }}
                >
                    <Icon className="w-12 h-12 text-primary" />
                </div>
            ))}

            <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-20 md:py-32 relative z-10">
                <div className="mx-auto max-w-4xl text-center">
                    {/* Animated Badge */}
                    <div className="mb-6 md:mb-8 flex justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
                        <div className="group relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-600 to-pink-600 rounded-full opacity-70 blur group-hover:opacity-100 transition duration-500 animate-pulse" />
                            <div className="relative rounded-full px-5 py-2.5 bg-background/90 backdrop-blur-xl border border-white/20 shadow-2xl">
                                <span className="flex items-center gap-2 text-sm font-medium">
                                    <Sparkles className="h-4 w-4 text-yellow-400 animate-pulse" />
                                    <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-400 bg-clip-text text-transparent font-bold">1000+</span>
                                    <span className="text-foreground">AI Tools Curated</span>
                                    <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Main Heading with Enhanced Gradients */}
                    <h1 className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tight mb-6 md:mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
                        <span className="inline-block bg-gradient-to-b from-white via-white/95 to-white/80 bg-clip-text text-transparent drop-shadow-2xl">
                            Discover the
                        </span>
                        <br />
                        <span className="inline-block relative">
                            <span className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 blur-2xl opacity-50" />
                            <span className="relative bg-gradient-to-r from-primary via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                                Best AI Tools
                            </span>
                        </span>
                        <br />
                        <span className="inline-block bg-gradient-to-b from-white via-white/95 to-white/80 bg-clip-text text-transparent drop-shadow-2xl">
                            for Everything
                        </span>
                    </h1>

                    {/* Enhanced Subtitle */}
                    <p className="mt-6 text-lg md:text-xl lg:text-2xl leading-8 text-muted-foreground max-w-3xl mx-auto px-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                        Your ultimate directory of{' '}
                        <span className="text-primary font-semibold">AI-powered tools</span>.
                        Find the perfect solution for{' '}
                        <span className="text-foreground font-semibold">writing</span>,{' '}
                        <span className="text-foreground font-semibold">coding</span>,{' '}
                        <span className="text-foreground font-semibold">design</span>, and more.
                    </p>

                    {/* Enhanced Search Section */}
                    <div className="mt-10 md:mt-14 flex flex-col items-center gap-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                        <div className="relative w-full max-w-3xl group">
                            {/* Animated border gradient */}
                            <div className="absolute -inset-2 bg-gradient-to-r from-primary via-purple-600 to-pink-600 rounded-full opacity-30 group-hover:opacity-60 transition duration-500 blur-xl group-focus-within:opacity-70 animate-pulse" />

                            <div className="relative flex items-center bg-background/95 backdrop-blur-xl rounded-full border-2 border-white/20 shadow-2xl overflow-hidden">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-6 pointer-events-none">
                                    <Search className="h-6 w-6 text-muted-foreground group-focus-within:text-primary transition-colors duration-300" />
                                </div>
                                <Input
                                    type="text"
                                    className="w-full rounded-full border-0 py-6 md:py-8 pl-14 md:pl-16 pr-36 md:pr-44 text-lg md:text-xl bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground/60"
                                    placeholder="Search 1000+ AI tools..."
                                    value={searchValue}
                                    onChange={handleSearchChange}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSearchClick()}
                                />
                                <div className="absolute inset-y-0 right-3 flex items-center">
                                    <Button
                                        size="lg"
                                        className="rounded-full px-8 md:px-10 h-12 md:h-14 text-base md:text-lg font-bold bg-gradient-to-r from-primary via-purple-600 to-pink-600 hover:from-primary/90 hover:via-purple-600/90 hover:to-pink-600/90 shadow-xl shadow-primary/30 transition-all hover:scale-105"
                                        onClick={handleSearchClick}
                                    >
                                        <Search className="h-5 w-5 mr-2" />
                                        Search
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Enhanced Quick Action Buttons */}
                        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
                            <Link href="/top-10">
                                <Button variant="outline" className="group rounded-full border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                                    <TrendingUp className="mr-2 h-4 w-4 text-yellow-400 group-hover:rotate-12 transition-transform" />
                                    Top 10
                                </Button>
                            </Link>
                            <Link href="/categories">
                                <Button variant="outline" className="group rounded-full border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                                    <Zap className="mr-2 h-4 w-4 text-blue-400 group-hover:rotate-12 transition-transform" />
                                    Categories
                                </Button>
                            </Link>
                            <Link href="/submit">
                                <Button variant="outline" className="group rounded-full border-primary/40 bg-primary/10 hover:bg-primary/20 backdrop-blur-xl text-primary shadow-lg hover:shadow-xl hover:shadow-primary/20 hover:scale-105 transition-all duration-300">
                                    <Sparkles className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                                    Submit Tool
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Enhanced Trending Searches */}
                    <div className="mt-12 md:mt-16 pt-8 border-t border-white/10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
                            <div className="flex items-center gap-2">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-green-400 rounded-full blur-md opacity-50 animate-pulse" />
                                    <TrendingUp className="relative h-5 w-5 text-green-400" />
                                </div>
                                <span className="font-semibold text-foreground text-base">Trending Now:</span>
                            </div>
                            <div className="flex flex-wrap justify-center gap-2">
                                {trendingSearches.map((term) => (
                                    <button
                                        key={term}
                                        onClick={() => {
                                            setSearchValue(term);
                                            onSearch?.(term);
                                        }}
                                        className="group relative px-4 py-2 bg-secondary/40 border border-white/10 rounded-full cursor-pointer hover:bg-secondary/60 hover:border-primary/40 transition-all hover:scale-110 backdrop-blur-sm shadow-lg"
                                    >
                                        <span className="relative z-10 font-medium">{term}</span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                }
                @keyframes gradient {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                .animate-gradient {
                    background-size: 200% auto;
                    animation: gradient 3s ease infinite;
                }
            `}</style>
        </div>
    );
}
