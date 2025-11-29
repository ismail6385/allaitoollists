'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { tools } from '@/data/tools';
import { categories } from '@/types';
import { ToolCard } from '@/components/ToolCard';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface PageProps {
    params: {
        slug: string;
    };
}

export default function CategoryPage({ params }: PageProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const TOOLS_PER_PAGE = 20;

    // Find the category (case-insensitive)
    const category = categories.find(c => c.toLowerCase() === params.slug);

    if (!category) {
        notFound();
    }

    // Filter tools for this category
    const categoryTools = tools.filter(tool => tool.category === category);

    // Calculate pagination
    const totalPages = Math.ceil(categoryTools.length / TOOLS_PER_PAGE);
    const startIndex = (currentPage - 1) * TOOLS_PER_PAGE;
    const endIndex = startIndex + TOOLS_PER_PAGE;
    const currentTools = categoryTools.slice(startIndex, endIndex);

    const handlePrevPage = () => {
        setCurrentPage(prev => Math.max(1, prev - 1));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleNextPage = () => {
        setCurrentPage(prev => Math.min(totalPages, prev + 1));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />

            <main className="flex-grow">
                {/* Hero Section */}
                <div className="relative isolate overflow-hidden pt-24 pb-12">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-b from-white via-white/90 to-white/70 bg-clip-text text-transparent mb-6">
                                {category} AI Tools
                            </h1>
                            <p className="text-lg leading-8 text-muted-foreground">
                                Discover and compare the best {category.toLowerCase()} tools powered by AI.
                            </p>
                            <p className="text-sm text-muted-foreground mt-2">
                                Showing {startIndex + 1}-{Math.min(endIndex, categoryTools.length)} of {categoryTools.length} tools
                            </p>
                        </div>
                    </div>
                </div>

                {/* Tools Grid */}
                <div className="container mx-auto px-4 py-12">
                    {currentTools.length > 0 ? (
                        <>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
                                {currentTools.map((tool) => (
                                    <ToolCard key={tool.id} tool={tool} />
                                ))}
                            </div>

                            {/* Pagination */}
                            {totalPages > 1 && (
                                <div className="flex items-center justify-center gap-4 mt-12">
                                    <Button
                                        variant="outline"
                                        onClick={handlePrevPage}
                                        disabled={currentPage === 1}
                                        className="gap-2"
                                    >
                                        <ChevronLeft className="h-4 w-4" />
                                        Previous
                                    </Button>

                                    <div className="flex items-center gap-2">
                                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                            <Button
                                                key={page}
                                                variant={currentPage === page ? "default" : "outline"}
                                                onClick={() => {
                                                    setCurrentPage(page);
                                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                                }}
                                                className="w-10 h-10"
                                            >
                                                {page}
                                            </Button>
                                        ))}
                                    </div>

                                    <Button
                                        variant="outline"
                                        onClick={handleNextPage}
                                        disabled={currentPage === totalPages}
                                        className="gap-2"
                                    >
                                        Next
                                        <ChevronRight className="h-4 w-4" />
                                    </Button>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-xl text-muted-foreground">
                                No tools found in this category yet.
                            </p>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}
