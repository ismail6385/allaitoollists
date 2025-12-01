'use client';

import { X } from 'lucide-react';

interface QuickFiltersProps {
    selectedFilters: string[];
    onFilterToggle: (filter: string) => void;
    onClearAll: () => void;
}

export function QuickFilters({ selectedFilters, onFilterToggle, onClearAll }: QuickFiltersProps) {
    const quickFilters = [
        { id: 'free', label: '🆓 Free', value: 'Free' },
        { id: 'new', label: '✨ New', value: 'new' },
        { id: 'trending', label: '🔥 Trending', value: 'trending' },
        { id: 'popular', label: '⭐ Popular', value: 'popular' },
        { id: 'beginner', label: '👶 Beginner Friendly', value: 'beginner' },
        { id: 'enterprise', label: '🏢 Enterprise', value: 'enterprise' },
        { id: 'open-source', label: '🔓 Open Source', value: 'open-source' },
        { id: 'no-signup', label: '🚀 No Signup', value: 'no-signup' },
    ];

    return (
        <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
                <h3 className="text-sm font-semibold text-muted-foreground">Quick Filters:</h3>
                {selectedFilters.length > 0 && (
                    <button
                        onClick={onClearAll}
                        className="text-xs text-primary hover:underline flex items-center gap-1"
                    >
                        <X className="h-3 w-3" />
                        Clear All
                    </button>
                )}
            </div>

            <div className="flex flex-wrap gap-2 overflow-x-auto pb-2">
                {quickFilters.map((filter) => {
                    const isActive = selectedFilters.includes(filter.value);
                    return (
                        <button
                            key={filter.id}
                            onClick={() => onFilterToggle(filter.value)}
                            className={`
                                inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                                transition-all duration-200 whitespace-nowrap
                                ${isActive
                                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-105'
                                    : 'bg-secondary/40 hover:bg-secondary/60 border border-white/10 hover:border-primary/30 hover:scale-105'
                                }
                            `}
                        >
                            {filter.label}
                            {isActive && <X className="h-3 w-3" />}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
