'use client';

import { useComparison } from '@/contexts/ComparisonContext';
import { Button } from '@/components/ui/button';
import { X, Scale, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { ComparisonModal } from '@/components/ComparisonModal';

export function ComparisonBar() {
    const { comparisonTools, removeFromComparison, clearComparison } = useComparison();
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (comparisonTools.length === 0) return null;

    return (
        <>
            <div className="fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom duration-300">
                <div className="bg-background/95 backdrop-blur-xl border-t border-white/20 shadow-2xl">
                    <div className="container mx-auto px-4 py-4">
                        <div className="flex items-center justify-between gap-4">
                            {/* Left: Tools */}
                            <div className="flex items-center gap-3 flex-1 overflow-x-auto">
                                <div className="flex items-center gap-2 shrink-0">
                                    <Scale className="h-5 w-5 text-primary" />
                                    <span className="font-semibold text-sm">Compare Tools:</span>
                                </div>
                                <div className="flex gap-2">
                                    {comparisonTools.map((tool) => (
                                        <div
                                            key={tool.id}
                                            className="flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-3 py-1.5 text-sm"
                                        >
                                            <span className="font-medium truncate max-w-[150px]">
                                                {tool.name}
                                            </span>
                                            <button
                                                onClick={() => removeFromComparison(tool.id)}
                                                className="hover:text-destructive transition-colors"
                                            >
                                                <X className="h-3.5 w-3.5" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right: Actions */}
                            <div className="flex items-center gap-2 shrink-0">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={clearComparison}
                                    className="rounded-full"
                                >
                                    Clear All
                                </Button>
                                <Button
                                    size="sm"
                                    onClick={() => setIsModalOpen(true)}
                                    className="rounded-full bg-gradient-to-r from-primary via-purple-600 to-pink-600 hover:opacity-90 gap-2"
                                    disabled={comparisonTools.length < 2}
                                >
                                    Compare Now
                                    <ArrowRight className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ComparisonModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}
