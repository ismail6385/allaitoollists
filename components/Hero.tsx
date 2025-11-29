'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Sparkles, TrendingUp, Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

interface HeroProps {
    onSearch?: (query: string) => void;
}

export function Hero({ onSearch }: HeroProps = {}) {
    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchValue(value);
        onSearch?.(value);
    };

    const handleSearchClick = () => {
        onSearch?.(searchValue);
    };

    const trendingSearches = ['ChatGPT', 'Midjourney', 'Claude', 'DALL-E'];

    return (
        <div className="relative isolate overflow-hidden">
            {/* Animated Background Gradients */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
                <div
                    className="absolute left-[calc(50%-20rem)] top-0 aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary/30 to-purple-500/30 opacity-20 blur-3xl sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] animate-pulse"
                    style={{
                        clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>

            <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 pt-20 md:pt-32 pb-16 md:pb-24">
                <div className="mx-auto max-w-4xl text-center">
                    {/* Badge */}
                    <div className="mb-6 md:mb-8 flex justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
                        <div className="group relative rounded-full px-4 py-2 text-sm leading-6 text-muted-foreground ring-1 ring-white/10 hover:ring-primary/50 transition-all cursor-default bg-background/50 backdrop-blur-sm">
                            <span className="flex items-center gap-2">
                                <Sparkles className="h-4 w-4 text-yellow-400 animate-pulse" />
                                <span className="font-semibold text-foreground">1000+</span> AI Tools Curated
                                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </div>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 md:mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
                        <span className="bg-gradient-to-b from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                            Discover the Best
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            AI Tools
                        </span>
                        <span className="bg-gradient-to-b from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                            {' '}for Everything
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-4 md:mt-6 text-base md:text-lg lg:text-xl leading-7 md:leading-8 text-muted-foreground max-w-3xl mx-auto px-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                        Your ultimate directory of AI-powered tools. Find the perfect solution for
                        <span className="text-foreground font-medium"> writing</span>,
                        <span className="text-foreground font-medium"> coding</span>,
                        <span className="text-foreground font-medium"> design</span>, and more.
                    </p>

                    {/* Search Section */}
                    <div className="mt-8 md:mt-12 flex flex-col items-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                        <div className="relative w-full max-w-2xl group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-600 to-pink-600 rounded-full opacity-20 group-hover:opacity-40 transition duration-500 blur-lg"></div>
                            <div className="relative flex items-center bg-background/90 backdrop-blur-sm rounded-full border border-white/10 shadow-2xl">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
                                    <Search className="h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                </div>
                                <Input
                                    type="text"
                                    className="w-full rounded-full border-0 py-4 md:py-6 pl-12 md:pl-14 pr-32 md:pr-40 text-base md:text-lg bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                                    placeholder="Search AI tools..."
                                    value={searchValue}
                                    onChange={handleSearchChange}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSearchClick()}
                                />
                                <div className="absolute inset-y-0 right-2 flex items-center">
                                    <Button
                                        size="lg"
                                        className="rounded-full px-6 md:px-8 h-10 md:h-12 text-sm md:text-base font-medium bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-lg shadow-primary/25"
                                        onClick={handleSearchClick}
                                    >
                                        <Search className="h-4 w-4 mr-2" />
                                        Search
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Quick Action Buttons */}
                        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
                            <Link href="/top-10">
                                <Button variant="outline" className="rounded-full border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm">
                                    <TrendingUp className="mr-2 h-4 w-4" />
                                    Top 10
                                </Button>
                            </Link>
                            <Link href="/categories">
                                <Button variant="outline" className="rounded-full border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm">
                                    <Zap className="mr-2 h-4 w-4" />
                                    Categories
                                </Button>
                            </Link>
                            <Link href="/submit">
                                <Button variant="outline" className="rounded-full border-primary/30 bg-primary/5 hover:bg-primary/10 backdrop-blur-sm text-primary">
                                    <Sparkles className="mr-2 h-4 w-4" />
                                    Submit Tool
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Trending Searches */}
                    <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/5 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <TrendingUp className="h-4 w-4 text-green-400" />
                                <span className="font-medium text-foreground">Trending:</span>
                            </div>
                            <div className="flex flex-wrap justify-center gap-2">
                                {trendingSearches.map((term) => (
                                    <button
                                        key={term}
                                        onClick={() => {
                                            setSearchValue(term);
                                            onSearch?.(term);
                                        }}
                                        className="px-3 py-1.5 bg-secondary/30 border border-white/5 rounded-full cursor-pointer hover:bg-secondary/50 hover:border-primary/30 transition-all hover:scale-105"
                                    >
                                        {term}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Gradient */}
            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-pink-500/20 to-purple-500/20 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
        </div>
    );
}
