'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, TrendingUp, Eye, Star, Share2, Scale } from 'lucide-react';
import { ShareDialog } from '@/components/ShareDialog';
import { Tool } from '@/types';
import { useComparison } from '@/contexts/ComparisonContext';

interface ToolCardProps {
    tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
    const isNew = tool.dateAdded && new Date(tool.dateAdded) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const { addToComparison, removeFromComparison, isInComparison, comparisonTools, maxTools } = useComparison();
    const inComparison = isInComparison(tool.id);
    const canAddMore = comparisonTools.length < maxTools;

    const handleCompareClick = () => {
        if (inComparison) {
            removeFromComparison(tool.id);
        } else if (canAddMore) {
            addToComparison(tool);
        }
    };

    return (
        <Card className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2">
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Top Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {/* Badges */}
            <div className="absolute top-2 right-2 z-10 flex flex-col gap-1">
                {tool.trending && (
                    <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 text-xs">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Trending
                    </Badge>
                )}
                {isNew && (
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 text-xs">
                        New
                    </Badge>
                )}
            </div>

            <CardHeader className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-3 flex-1">
                        {tool.icon && (
                            <Link href={`/tool/${tool.slug}`} className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center overflow-hidden flex-shrink-0 hover:opacity-80 transition-opacity">
                                <div className="relative w-8 h-8">
                                    <Image
                                        src={tool.icon}
                                        alt={tool.name}
                                        fill
                                        className="object-contain"
                                        sizes="32px"
                                    />
                                </div>
                            </Link>
                        )}
                        <div className="flex-1 min-w-0">
                            <Link href={`/tool/${tool.slug}`}>
                                <CardTitle className="text-lg group-hover:text-primary transition-colors truncate">
                                    {tool.name}
                                </CardTitle>
                            </Link>
                            <div className="flex items-center gap-2 mt-1 flex-wrap">
                                <Badge variant="outline" className="text-xs">
                                    {tool.category}
                                </Badge>
                                {tool.views && (
                                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                        <Eye className="h-3 w-3" />
                                        {tool.views.toLocaleString()}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Rating */}
                {tool.rating && (
                    <div className="flex items-center gap-2">
                        <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className={`h-4 w-4 ${i < Math.floor(tool.rating!)
                                        ? 'fill-yellow-400 text-yellow-400'
                                        : 'text-gray-600'
                                        }`}
                                />
                            ))}
                        </div>
                        <span className="text-sm font-medium">{tool.rating.toFixed(1)}</span>
                        {tool.reviewCount && (
                            <span className="text-xs text-muted-foreground">
                                ({tool.reviewCount.toLocaleString()})
                            </span>
                        )}
                    </div>
                )}

                <CardDescription className="line-clamp-2">
                    {tool.shortDescription}
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                    {tool.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                        </Badge>
                    ))}
                </div>

                {/* Platform badges */}
                {tool.platform && tool.platform.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                        {tool.platform.slice(0, 3).map((platform) => (
                            <Badge key={platform} variant="outline" className="text-[10px] px-1.5 py-0.5">
                                {platform}
                            </Badge>
                        ))}
                    </div>
                )}

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                            {tool.pricing}
                        </Badge>
                        <Button
                            size="icon"
                            variant="ghost"
                            className={`h-6 w-6 ${inComparison ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
                            onClick={handleCompareClick}
                            disabled={!inComparison && !canAddMore}
                            title={inComparison ? 'Remove from comparison' : 'Add to comparison'}
                        >
                            <Scale className="h-3 w-3" />
                        </Button>
                        <ShareDialog
                            url={`https://aitoollist.com/tool/${tool.slug}`}
                            title={`Check out ${tool.name} on AI Tool List!`}
                            trigger={
                                <Button size="icon" variant="ghost" className="h-6 w-6 text-muted-foreground hover:text-primary">
                                    <Share2 className="h-3 w-3" />
                                </Button>
                            }
                        />
                    </div>

                    <Link href={tool.url} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="ghost" className="group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                            Visit <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
}
