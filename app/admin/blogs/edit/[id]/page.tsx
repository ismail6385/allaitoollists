import { BlogForm } from '@/components/admin/BlogForm';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function EditBlogPage({ params }: { params: { id: string } }) {
    const cookieStore = cookies();
    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                get(name: string) {
                    return cookieStore.get(name)?.value;
                },
            },
        }
    );

    const { data: blog, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('id', params.id)
        .single();

    if (error || !blog) {
        notFound();
    }

    return <BlogForm initialData={blog} isEditing />;
}
