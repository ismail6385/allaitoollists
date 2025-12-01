'use client';

import { useState } from 'react';
import { TableCell, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { MoreHorizontal, Pencil, Trash2, ExternalLink, Eye } from 'lucide-react';
import { createBrowserClient } from '@supabase/ssr';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Tool {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    pricing: string;
    views: number;
    rating: number;
    trending: boolean;
    featured: boolean;
}

export function ToolRow({ tool }: { tool: Tool }) {
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();
    const router = useRouter();
    const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const handleDelete = async () => {
        setLoading(true);
        const { error } = await supabase
            .from('tools')
            .delete()
            .eq('id', tool.id);

        if (error) {
            toast({
                title: 'Error',
                description: 'Failed to delete tool',
                variant: 'destructive',
            });
        } else {
            toast({
                title: 'Success',
                description: 'Tool deleted successfully',
            });
            router.refresh();
        }
        setLoading(false);
        setDeleteDialogOpen(false);
    };

    return (
        <>
            <TableRow className="border-white/10 hover:bg-white/5">
                <TableCell>
                    <div className="font-medium">{tool.name}</div>
                    <div className="text-xs text-muted-foreground line-clamp-1">{tool.description}</div>
                </TableCell>
                <TableCell>
                    <Badge variant="outline">{tool.category}</Badge>
                </TableCell>
                <TableCell>
                    <Badge variant={tool.pricing === 'Free' ? 'default' : 'secondary'}>
                        {tool.pricing}
                    </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">{tool.views || 0}</TableCell>
                <TableCell>
                    <div className="flex items-center gap-2">
                        {tool.trending && <Badge className="bg-orange-500/10 text-orange-500 hover:bg-orange-500/20 border-0">Trending</Badge>}
                        {tool.featured && <Badge className="bg-purple-500/10 text-purple-500 hover:bg-purple-500/20 border-0">Featured</Badge>}
                    </div>
                </TableCell>
                <TableCell className="text-right">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <Link href={`/tool/${tool.id}`} target="_blank">
                                <DropdownMenuItem>
                                    <Eye className="mr-2 h-4 w-4" />
                                    View
                                </DropdownMenuItem>
                            </Link>
                            <Link href={tool.url} target="_blank">
                                <DropdownMenuItem>
                                    <ExternalLink className="mr-2 h-4 w-4" />
                                    Visit Site
                                </DropdownMenuItem>
                            </Link>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={async () => {
                                const { error } = await supabase
                                    .from('tools')
                                    .update({ featured: !tool.featured })
                                    .eq('id', tool.id);
                                if (!error) router.refresh();
                            }}>
                                <span className="mr-2">⭐</span>
                                {tool.featured ? 'Unfeature' : 'Mark as Featured'}
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={async () => {
                                const { error } = await supabase
                                    .from('tools')
                                    .update({ trending: !tool.trending })
                                    .eq('id', tool.id);
                                if (!error) router.refresh();
                            }}>
                                <span className="mr-2">🔥</span>
                                {tool.trending ? 'Remove Trending' : 'Mark as Trending'}
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => setDeleteDialogOpen(true)} className="text-red-600">
                                <Trash2 className="mr-2 h-4 w-4" />
                                Delete
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </TableCell>
            </TableRow>

            <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This will permanently delete "{tool.name}". This action cannot be undone.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={handleDelete} disabled={loading} className="bg-red-600 hover:bg-red-700">
                            {loading ? 'Deleting...' : 'Delete'}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}
