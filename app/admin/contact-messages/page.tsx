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
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { MoreHorizontal, Search, Mail, CheckCheck, Trash2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export default async function ContactMessagesPage() {
    const { data: messages, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching contact messages:', error);
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold">Contact Messages</h1>
                    <p className="text-muted-foreground">View and manage messages from your contact form.</p>
                </div>
            </div>

            {/* Filters */}
            <div className="flex items-center gap-4">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search messages..."
                        className="pl-9 bg-card/50"
                    />
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="hidden sm:flex">Unread</Button>
                    <Button variant="ghost" size="sm" className="hidden sm:flex">All</Button>
                </div>
            </div>

            {/* Messages Table */}
            <div className="rounded-md border border-white/10 bg-card/50">
                <Table>
                    <TableHeader>
                        <TableRow className="border-white/10 hover:bg-white/5">
                            <TableHead>From</TableHead>
                            <TableHead>Subject</TableHead>
                            <TableHead>Message</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {messages && messages.length > 0 ? (
                            messages.map((message) => (
                                <TableRow key={message.id} className="border-white/10 hover:bg-white/5">
                                    <TableCell>
                                        <div>
                                            <div className="font-medium">{message.name}</div>
                                            <div className="text-xs text-muted-foreground">{message.email}</div>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <span className="font-medium">{message.subject}</span>
                                    </TableCell>
                                    <TableCell>
                                        <p className="text-sm text-muted-foreground line-clamp-2 max-w-md">
                                            {message.message}
                                        </p>
                                    </TableCell>
                                    <TableCell className="text-muted-foreground">
                                        {new Date(message.created_at).toLocaleDateString()}
                                    </TableCell>
                                    <TableCell>
                                        <Badge
                                            variant={message.status === 'unread' ? 'secondary' : 'default'}
                                            className={
                                                message.status === 'unread' ? 'bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 border-0' :
                                                    message.status === 'replied' ? 'bg-green-500/10 text-green-500 hover:bg-green-500/20 border-0' :
                                                        'bg-gray-500/10 text-gray-500 hover:bg-gray-500/20 border-0'
                                            }
                                        >
                                            {message.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" className="h-8 w-8 p-0">
                                                    <span className="sr-only">Open menu</span>
                                                    <MoreHorizontal className="h-4 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                <DropdownMenuItem>
                                                    <Mail className="mr-2 h-4 w-4" />
                                                    Reply
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CheckCheck className="mr-2 h-4 w-4" />
                                                    Mark as Read
                                                </DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem className="text-red-600">
                                                    <Trash2 className="mr-2 h-4 w-4" />
                                                    Delete
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={6} className="text-center text-muted-foreground py-8">
                                    {error ? 'Error loading messages' : 'No messages found'}
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
