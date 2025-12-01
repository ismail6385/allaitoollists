import { createBrowserClient } from '@supabase/ssr';

export async function logActivity(
    action: string,
    details: any = {},
    userId?: string
) {
    const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    try {
        let uid = userId;

        if (!uid) {
            const { data: { user } } = await supabase.auth.getUser();
            uid = user?.id;
        }

        if (!uid) return; // Cannot log without user

        await supabase.from('activity_logs').insert({
            user_id: uid,
            action,
            details,
            created_at: new Date().toISOString(),
        });
    } catch (error) {
        console.error('Failed to log activity:', error);
    }
}
