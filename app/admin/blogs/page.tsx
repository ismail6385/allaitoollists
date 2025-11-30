import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { MoreHorizontal, Search, Plus, Pencil, Trash2, Eye, ExternalLink } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function AdminBlogsPage() {
    const { data: blogs, error } = await supabase
        .from('blogs')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching blogs:', error);
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold">Manage Blogs</h1>
                    <p className="text-muted-foreground">Create and manage your blog posts.</p>
                </div>
                <Link href="/admin/blogs/create">
                    <Button>
                        <Plus className="mr-2 h-4 w-4" />
                        Create New Post
                    </Button>
                </Link>
            </div>

            {/* Filters */}
            <div className="flex items-center gap-4">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search blogs..."
                        className="pl-9 bg-card/50"
                    />
                </div>
            </div>

            {/* Blogs Table */}
            <div className="rounded-md border border-white/10 bg-card/50">
                <Table>
                    <TableHeader>
                        <TableRow className="border-white/10 hover:bg-white/5">
                            <TableHead>Title</TableHead>
                            <TableHead>Slug</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {blogs && blogs.length > 0 ? (
                            blogs.map((blog) => (
                                <TableRow key={blog.id} className="border-white/10 hover:bg-white/5">
                                    <TableCell>
                                        <div className="font-medium">{blog.title}</div>
                                        <div className="text-xs text-muted-foreground line-clamp-1">{blog.excerpt}</div>
                                    </TableCell>
                                    <TableCell>
                                        <span className="text-sm text-muted-foreground">/{blog.slug}</span>
                                    </TableCell>
                                    <TableCell>
                                        <Badge
                                            variant={blog.is_published ? 'default' : 'secondary'}
                                            className={blog.is_published ? 'bg-green-500/10 text-green-500 hover:bg-green-500/20 border-0' : 'bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20 border-0'}
                                        >
                                            {blog.is_published ? 'Published' : 'Draft'}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-muted-foreground">
                                        {new Date(blog.created_at).toLocaleDateString()}
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
                                                <Link href={`/blog/${blog.slug}`} target="_blank">
                                                    <DropdownMenuItem>
                                                        <Eye className="mr-2 h-4 w-4" />
                                                        View Live
                                                    </DropdownMenuItem>
                                                </Link>
                                                <Link href={`/admin/blogs/edit/${blog.id}`}>
                                                    <DropdownMenuItem>
                                                        <Pencil className="mr-2 h-4 w-4" />
                                                        Edit
                                                    </DropdownMenuItem>
                                                </Link>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem className="text-red-600">
                                                    <Trash2 className="mr-2 h-4 w-4" />
                                                    Delete
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                                    {error ? 'Error loading blogs' : 'No blogs found'}
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
