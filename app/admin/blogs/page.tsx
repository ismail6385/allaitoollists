import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { BlogList } from '@/components/admin/BlogList';

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

            <BlogList initialBlogs={blogs || []} />
        </div>
    );
}
