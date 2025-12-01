import { getServerUser, isAdmin } from '@/lib/auth-helpers';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export const dynamic = 'force-dynamic';

export default async function AdminDebugPage() {
    const user = await getServerUser();
    const adminStatus = await isAdmin();

    let profileData = null;
    let profileError = null;

    if (user) {
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

        const { data, error } = await supabase
            .from('user_profiles')
            .select('*')
            .eq('id', user.id)
            .single();

        profileData = data;
        profileError = error;
    }

    return (
        <div className="p-8 max-w-2xl mx-auto space-y-6">
            <h1 className="text-2xl font-bold">Server-Side Admin Debug</h1>

            <div className="p-4 border rounded bg-gray-50 dark:bg-gray-900">
                <h2 className="font-bold mb-2">1. Auth User (getServerUser)</h2>
                <pre className="bg-black text-white p-2 rounded overflow-auto">
                    {JSON.stringify(user, null, 2)}
                </pre>
            </div>

            <div className="p-4 border rounded bg-gray-50 dark:bg-gray-900">
                <h2 className="font-bold mb-2">2. Admin Status (isAdmin)</h2>
                <div className={`text-xl font-bold ${adminStatus ? 'text-green-600' : 'text-red-600'}`}>
                    {adminStatus ? 'TRUE (You are Admin)' : 'FALSE (Not Admin)'}
                </div>
            </div>

            <div className="p-4 border rounded bg-gray-50 dark:bg-gray-900">
                <h2 className="font-bold mb-2">3. Raw Profile Data</h2>
                <pre className="bg-black text-white p-2 rounded overflow-auto">
                    {JSON.stringify({ data: profileData, error: profileError }, null, 2)}
                </pre>
            </div>
        </div>
    );
}
