'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Tool } from '@/types';

interface ComparisonContextType {
    comparisonTools: Tool[];
    addToComparison: (tool: Tool) => void;
    removeFromComparison: (toolId: string) => void;
    clearComparison: () => void;
    isInComparison: (toolId: string) => boolean;
    maxTools: number;
}

const ComparisonContext = createContext<ComparisonContextType | undefined>(undefined);

export function ComparisonProvider({ children }: { children: ReactNode }) {
    const [comparisonTools, setComparisonTools] = useState<Tool[]>([]);
    const maxTools = 4;

    const addToComparison = (tool: Tool) => {
        if (comparisonTools.length < maxTools && !isInComparison(tool.id)) {
            setComparisonTools([...comparisonTools, tool]);
        }
    };

    const removeFromComparison = (toolId: string) => {
        setComparisonTools(comparisonTools.filter(t => t.id !== toolId));
    };

    const clearComparison = () => {
        setComparisonTools([]);
    };

    const isInComparison = (toolId: string) => {
        return comparisonTools.some(t => t.id === toolId);
    };

    return (
        <ComparisonContext.Provider
            value={{
                comparisonTools,
                addToComparison,
                removeFromComparison,
                clearComparison,
                isInComparison,
                maxTools,
            }}
        >
            {children}
        </ComparisonContext.Provider>
    );
}

export function useComparison() {
    const context = useContext(ComparisonContext);
    if (context === undefined) {
        throw new Error('useComparison must be used within a ComparisonProvider');
    }
    return context;
}
