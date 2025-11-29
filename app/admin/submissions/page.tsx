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
import { MoreHorizontal, Search, CheckCircle, XCircle, Eye, ExternalLink } from 'lucide-react';

// Mock Submissions Data
const submissions = [
    {
        id: 'SUB-001',
        toolName: 'SuperAI Writer',
        submitter: 'jane@example.com',
        category: 'Copywriting',
        date: '2023-12-12',
        status: 'Pending',
        url: 'https://superaiwriter.com'
    },
    {
        id: 'SUB-002',
        toolName: 'ImageGen X',
        submitter: 'mark@studio.com',
        category: 'Image Generation',
        date: '2023-12-11',
        status: 'Pending',
        url: 'https://imagegenx.io'
    },
    {
        id: 'SUB-003',
        toolName: 'CodeBuddy',
        submitter: 'dev@codebuddy.dev',
        category: 'Developer Tools',
        date: '2023-12-10',
        status: 'Reviewed',
        url: 'https://codebuddy.dev'
    },
    {
        id: 'SUB-004',
        toolName: 'VoiceMaster',
        submitter: 'audio@tech.com',
        category: 'Text to Speech',
        date: '2023-12-09',
        status: 'Rejected',
        url: 'https://voicemaster.app'
    },
];

export default function AdminSubmissionsPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold">Submissions</h1>
                    <p className="text-muted-foreground">Review and approve new tool submissions.</p>
                </div>
            </div>

            {/* Filters */}
            <div className="flex items-center gap-4">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search submissions..."
                        className="pl-9 bg-card/50"
                    />
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="hidden sm:flex">Pending</Button>
                    <Button variant="ghost" size="sm" className="hidden sm:flex">All</Button>
                </div>
            </div>

            {/* Submissions Table */}
            <div className="rounded-md border border-white/10 bg-card/50">
                <Table>
                    <TableHeader>
                        <TableRow className="border-white/10 hover:bg-white/5">
                            <TableHead>Tool Name</TableHead>
                            <TableHead>Submitter</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {submissions.map((submission) => (
                            <TableRow key={submission.id} className="border-white/10 hover:bg-white/5">
                                <TableCell>
                                    <div className="font-medium">{submission.toolName}</div>
                                    <a href={submission.url} target="_blank" rel="noreferrer" className="text-xs text-muted-foreground hover:text-primary flex items-center gap-1">
                                        {submission.url} <ExternalLink className="h-2 w-2" />
                                    </a>
                                </TableCell>
                                <TableCell>{submission.submitter}</TableCell>
                                <TableCell>
                                    <Badge variant="outline" className="font-normal">
                                        {submission.category}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-muted-foreground">
                                    {new Date(submission.date).toLocaleDateString()}
                                </TableCell>
                                <TableCell>
                                    <Badge
                                        variant={
                                            submission.status === 'Pending' ? 'secondary' :
                                                submission.status === 'Rejected' ? 'destructive' : 'default'
                                        }
                                        className={
                                            submission.status === 'Pending' ? 'bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20 border-0' :
                                                submission.status === 'Rejected' ? '' :
                                                    'bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 border-0'
                                        }
                                    >
                                        {submission.status}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-green-500 hover:text-green-600 hover:bg-green-500/10" title="Approve">
                                            <CheckCircle className="h-4 w-4" />
                                        </Button>
                                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-red-500 hover:text-red-600 hover:bg-red-500/10" title="Reject">
                                            <XCircle className="h-4 w-4" />
                                        </Button>

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
                                                    <Eye className="mr-2 h-4 w-4" />
                                                    View Details
                                                </DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem className="text-green-500">
                                                    <CheckCircle className="mr-2 h-4 w-4" />
                                                    Approve
                                                </DropdownMenuItem>
                                                <DropdownMenuItem className="text-red-600">
                                                    <XCircle className="mr-2 h-4 w-4" />
                                                    Reject
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
