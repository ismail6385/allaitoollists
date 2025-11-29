import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, TrendingUp, Eye, Star, Share2 } from 'lucide-react';
import { ShareDialog } from '@/components/ShareDialog';
import { Tool } from '@/types';

interface ToolCardProps {
    tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
    const isNew = tool.dateAdded && new Date(tool.dateAdded) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

    return (
        <Card className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 bg-card/50 backdrop-blur-sm relative overflow-hidden">
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
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center overflow-hidden flex-shrink-0">
                                <img src={tool.icon} alt={tool.name} className="w-8 h-8 object-contain" />
                            </div>
                        )}
                        <div className="flex-1 min-w-0">
                            <CardTitle className="text-lg group-hover:text-primary transition-colors truncate">
                                {tool.name}
                            </CardTitle>
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
                        <ShareDialog
                            url={`https://aitoollist.com/tool/${tool.id}`}
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
