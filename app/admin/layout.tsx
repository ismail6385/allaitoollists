import { Sidebar } from '@/components/admin/Sidebar';
import { AdminHeader } from '@/components/admin/AdminHeader';
import { redirect } from 'next/navigation';
import { isAdmin, getServerUser } from '@/lib/auth-helpers';

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // Check if user is logged in
    const user = await getServerUser();

    if (!user) {
        // Not logged in, redirect to login
        redirect('/login');
    }

    // Check if user is admin
    const admin = await isAdmin();

    if (!admin) {
        // Logged in but not admin, redirect to home
        redirect('/');
    }

    return (
        <div className="min-h-screen flex bg-background">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                <AdminHeader />
                <main className="flex-1 p-6 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
