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
import { Search, UserPlus } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { UserRow } from '@/components/admin/UserRow';

export const dynamic = 'force-dynamic';

export default async function AdminUsersPage() {
    // Fetch users from auth.users
    const { data: authUsers, error: authError } = await supabase.auth.admin.listUsers();

    // Fetch user profiles to get is_admin status
    const { data: profiles } = await supabase
        .from('user_profiles')
        .select('id, is_admin');

    const profilesMap = new Map(profiles?.map(p => [p.id, p.is_admin]) || []);

    const users = authUsers?.users.map(user => ({
        id: user.id,
        email: user.email || '',
        created_at: user.created_at,
        is_admin: profilesMap.get(user.id) || false,
    })) || [];

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold">Manage Users</h1>
                    <p className="text-muted-foreground">View and manage all registered users</p>
                </div>
            </div>

            {/* Search */}
            <div className="flex items-center gap-4">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search users..."
                        className="pl-9 bg-card/50"
                    />
                </div>
            </div>

            {/* Users Table */}
            <div className="rounded-md border border-white/10 bg-card/50">
                <Table>
                    <TableHeader>
                        <TableRow className="border-white/10 hover:bg-white/5">
                            <TableHead>Email</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Joined</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users && users.length > 0 ? (
                            users.map((user) => (
                                <UserRow key={user.id} user={user} />
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={4} className="text-center text-muted-foreground py-8">
                                    {authError ? 'Error loading users' : 'No users found'}
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}


