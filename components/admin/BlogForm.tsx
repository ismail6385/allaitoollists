'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createBrowserClient } from '@supabase/ssr';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { Loader2, Save, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { MarkdownEditor } from '@/components/admin/MarkdownEditor';

interface BlogFormProps {
    initialData?: {
        id?: string;
        title: string;
        slug: string;
        content: string;
        excerpt: string;
        cover_image: string;
        meta_title: string;
        meta_description: string;
        meta_keywords: string;
        category: string;
        is_published: boolean;
    };
    isEditing?: boolean;
}

export function BlogForm({ initialData, isEditing = false }: BlogFormProps) {
    const router = useRouter();
    const { toast } = useToast();
    const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        title: initialData?.title || '',
        slug: initialData?.slug || '',
        content: initialData?.content || '',
        excerpt: initialData?.excerpt || '',
        cover_image: initialData?.cover_image || '',
        meta_title: initialData?.meta_title || '',
        meta_description: initialData?.meta_description || '',
        meta_keywords: initialData?.meta_keywords || '',
        category: initialData?.category || '',
        is_published: initialData?.is_published || false,
    });

    const generateSlug = (title: string) => {
        return title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)+/g, '');
    };

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const title = e.target.value;
        setFormData(prev => ({
            ...prev,
            title,
            slug: !isEditing ? generateSlug(title) : prev.slug
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            // TEMP: Auth check disabled for testing
            // const { data: { user } } = await supabase.auth.getUser();
            // if (!user) throw new Error('Not authenticated');

            const blogData = {
                ...formData,
                author_id: null, // TEMP: Set to null since auth is disabled
                updated_at: new Date().toISOString(),
            };

            let error;

            if (isEditing && initialData?.id) {
                const { error: updateError } = await supabase
                    .from('blogs')
                    .update(blogData)
                    .eq('id', initialData.id);
                error = updateError;
            } else {
                const { error: insertError } = await supabase
                    .from('blogs')
                    .insert([blogData]);
                error = insertError;
            }

            if (error) throw error;

            toast({
                title: 'Success',
                description: `Blog post ${isEditing ? 'updated' : 'created'} successfully.`,
            });

            router.push('/admin/blogs');
            router.refresh();
        } catch (error: any) {
            console.error('Error saving blog:', error);
            toast({
                title: 'Error',
                description: error.message || 'Failed to save blog post',
                variant: 'destructive',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/admin/blogs">
                        <Button variant="ghost" size="icon">
                            <ArrowLeft className="h-4 w-4" />
                        </Button>
                    </Link>
                    <h1 className="text-3xl font-bold">{isEditing ? 'Edit Post' : 'Create New Post'}</h1>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center space-x-2">
                        <Switch
                            id="published"
                            checked={formData.is_published}
                            onCheckedChange={(checked) => setFormData(prev => ({ ...prev, is_published: checked }))}
                        />
                        <Label htmlFor="published">Published</Label>
                    </div>
                    <Button type="submit" disabled={loading}>
                        {loading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Saving...
                            </>
                        ) : (
                            <>
                                <Save className="mr-2 h-4 w-4" />
                                Save Post
                            </>
                        )}
                    </Button>
                </div>
            </div>

            <div className="grid gap-6">
                <Card>
                    <CardContent className="p-6 space-y-4">
                        <div className="grid gap-2">
                            <Label htmlFor="title">Title</Label>
                            <Input
                                id="title"
                                value={formData.title}
                                onChange={handleTitleChange}
                                placeholder="Enter post title"
                                required
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="slug">Slug</Label>
                            <Input
                                id="slug"
                                value={formData.slug}
                                onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                                placeholder="post-url-slug"
                                required
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="excerpt">Excerpt</Label>
                            <Textarea
                                id="excerpt"
                                value={formData.excerpt}
                                onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                                placeholder="Brief summary for cards and SEO"
                                rows={3}
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="cover_image">Cover Image URL</Label>
                            <Input
                                id="cover_image"
                                value={formData.cover_image}
                                onChange={(e) => setFormData(prev => ({ ...prev, cover_image: e.target.value }))}
                                placeholder="https://example.com/image.jpg"
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="category">Category</Label>
                            <Input
                                id="category"
                                value={formData.category}
                                onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                                placeholder="e.g., AI Tools, Technology, Tutorials"
                            />
                        </div>
                    </CardContent>
                </Card>

                {/* SEO Section */}
                <Card>
                    <CardContent className="p-6 space-y-4">
                        <div className="border-b pb-3 mb-4">
                            <h3 className="text-lg font-semibold">SEO Optimization</h3>
                            <p className="text-sm text-muted-foreground">Optimize for search engines to rank better</p>
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="meta_title">Meta Title (SEO Title)</Label>
                            <Input
                                id="meta_title"
                                value={formData.meta_title}
                                onChange={(e) => setFormData(prev => ({ ...prev, meta_title: e.target.value }))}
                                placeholder="Title for Google search results (50-60 chars)"
                                maxLength={60}
                            />
                            <p className="text-xs text-muted-foreground">{formData.meta_title.length}/60 characters</p>
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="meta_description">Meta Description</Label>
                            <Textarea
                                id="meta_description"
                                value={formData.meta_description}
                                onChange={(e) => setFormData(prev => ({ ...prev, meta_description: e.target.value }))}
                                placeholder="Description for Google search results (150-160 chars)"
                                rows={3}
                                maxLength={160}
                            />
                            <p className="text-xs text-muted-foreground">{formData.meta_description.length}/160 characters</p>
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="meta_keywords">Meta Keywords</Label>
                            <Input
                                id="meta_keywords"
                                value={formData.meta_keywords}
                                onChange={(e) => setFormData(prev => ({ ...prev, meta_keywords: e.target.value }))}
                                placeholder="keyword1, keyword2, keyword3"
                            />
                            <p className="text-xs text-muted-foreground">Separate keywords with commas</p>
                        </div>
                    </CardContent>
                </Card>

                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold">Content</h3>
                        <p className="text-sm text-muted-foreground">Write your blog post content with formatting</p>
                    </div>
                    <MarkdownEditor
                        value={formData.content}
                        onChange={(content) => setFormData(prev => ({ ...prev, content }))}
                    />
                </div>
            </div>
        </form>
    );
}
