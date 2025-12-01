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
import { Search, Plus, Upload } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { ToolRow } from '@/components/admin/ToolRow';

export const dynamic = 'force-dynamic';

export default async function AdminToolsPage() {
    const { data: tools, error } = await supabase
        .from('tools')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching tools:', error);
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold">Manage Tools</h1>
                    <p className="text-muted-foreground">View and manage all AI tools in your directory.</p>
                </div>
                <div className="flex gap-2">
                    <Link href="/admin/tools/import">
                        <Button variant="outline">
                            <Upload className="mr-2 h-4 w-4" />
                            Import CSV
                        </Button>
                    </Link>
                    <Link href="/submit">
                        <Button>
                            <Plus className="mr-2 h-4 w-4" />
                            Add New Tool
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Filters */}
            <div className="flex items-center gap-4">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search tools..."
                        className="pl-9 bg-card/50"
                    />
                </div>
            </div>

            {/* Tools Table */}
            <div className="rounded-md border border-white/10 bg-card/50">
                <Table>
                    <TableHeader>
                        <TableRow className="border-white/10 hover:bg-white/5">
                            <TableHead>Tool Name</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Pricing</TableHead>
                            <TableHead>Views</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {tools && tools.length > 0 ? (
                            tools.map((tool) => (
                                <ToolRow key={tool.id} tool={tool} />
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={6} className="text-center text-muted-foreground py-8">
                                    {error ? 'Error loading tools' : 'No tools found'}
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
