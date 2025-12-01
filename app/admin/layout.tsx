'use client';

import { Sidebar } from '@/components/admin/Sidebar';
import { AdminHeader } from '@/components/admin/AdminHeader';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const pathname = usePathname();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Skip auth check for login page
        if (pathname === '/admin/login') {
            setLoading(false);
            return;
        }

        // Check if admin is logged in
        const adminLoggedIn = localStorage.getItem('admin_logged_in');

        if (adminLoggedIn === 'true') {
            setIsAuthenticated(true);
            setLoading(false);
        } else {
            // Redirect to admin login
            router.push('/admin/login');
        }
    }, [pathname, router]);

    // Show loading or login redirect
    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    // Show login page without layout
    if (pathname === '/admin/login') {
        return <>{children}</>;
    }

    // Show admin layout only if authenticated
    if (!isAuthenticated) {
        return null;
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
