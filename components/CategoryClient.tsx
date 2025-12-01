'use client';

import { ToolCard } from '@/components/ToolCard';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Tool } from '@/types';

interface CategoryClientProps {
    category: string;
    tools: Tool[];
}

export default function CategoryClient({ category, tools }: CategoryClientProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const TOOLS_PER_PAGE = 20;

    // Calculate pagination
    const totalPages = Math.ceil(tools.length / TOOLS_PER_PAGE);
    const startIndex = (currentPage - 1) * TOOLS_PER_PAGE;
    const endIndex = startIndex + TOOLS_PER_PAGE;
    const currentTools = tools.slice(startIndex, endIndex);

    const handlePrevPage = () => {
        setCurrentPage(prev => Math.max(1, prev - 1));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleNextPage = () => {
        setCurrentPage(prev => Math.min(totalPages, prev + 1));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
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
                            Showing {startIndex + 1}-{Math.min(endIndex, tools.length)} of {tools.length} tools
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
                                    {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                                        let page;
                                        if (totalPages <= 5) {
                                            page = i + 1;
                                        } else if (currentPage <= 3) {
                                            page = i + 1;
                                        } else if (currentPage >= totalPages - 2) {
                                            page = totalPages - 4 + i;
                                        } else {
                                            page = currentPage - 2 + i;
                                        }

                                        return (
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
                                        );
                                    })}
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
        </>
    );
}
