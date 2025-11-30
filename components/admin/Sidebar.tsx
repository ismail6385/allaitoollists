import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, FileText, Users, Settings, LogOut, PlusCircle, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export function Sidebar() {
    // We can't use usePathname in a server component layout directly if we want it to be static, 
    // but for a dashboard, client-side interactivity for active states is fine.
    // However, since this is imported into a layout, let's make the Sidebar a client component or handle active state differently.
    // For simplicity, I'll make this a simple component and we can make it 'use client' if needed, 
    // but for now let's assume it's a server component and we might miss the active state highlighting without 'use client'.
    // Let's make it 'use client' to be safe for active states.

    return (
        <aside className="w-64 border-r border-white/10 bg-card/50 hidden md:flex flex-col">
            <div className="p-6 border-b border-white/10">
                <Link href="/admin" className="flex items-center gap-2 font-bold text-xl">
                    <span className="bg-primary/10 p-1 rounded text-primary">AI</span>
                    <span>Admin</span>
                </Link>
            </div>

            <nav className="flex-1 p-4 space-y-2">
                <SidebarLink href="/admin" icon={LayoutDashboard}>Dashboard</SidebarLink>
                <SidebarLink href="/admin/submissions" icon={FileText}>Submissions</SidebarLink>
                <SidebarLink href="/admin/tools" icon={PlusCircle}>Manage Tools</SidebarLink>
                <SidebarLink href="/admin/users" icon={Users}>Users</SidebarLink>
                <SidebarLink href="/admin/contact-messages" icon={Mail}>Contact Messages</SidebarLink>
                <SidebarLink href="/admin/settings" icon={Settings}>Settings</SidebarLink>
            </nav>

            <div className="p-4 border-t border-white/10">
                <Button variant="ghost" className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10">
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                </Button>
            </div>
        </aside>
    );
}

function SidebarLink({ href, icon: Icon, children }: { href: string; icon: any; children: React.ReactNode }) {
    return (
        <Link href={href} className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors">
            <Icon className="h-4 w-4" />
            {children}
        </Link>
    );
}
