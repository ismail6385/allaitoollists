import { supabase } from '@/lib/supabase';
import { ReviewList } from '@/components/admin/ReviewList';

export const dynamic = 'force-dynamic';

export default async function AdminReviewsPage() {
    const { data: reviews, error } = await supabase
        .from('reviews')
        .select(`
            *,
            user_profiles:user_id (
                full_name,
                email,
                avatar_url
            ),
            tools:tool_id (
                name,
                slug
            )
        `)
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching reviews:', error);
    }

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Manage Reviews</h1>
                <p className="text-muted-foreground">Monitor and moderate user reviews.</p>
            </div>

            <ReviewList initialReviews={reviews || []} />
        </div>
    );
}
