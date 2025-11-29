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
import { MoreHorizontal, Search, Plus, Pencil, Trash2, ExternalLink, Eye } from 'lucide-react';
import { tools } from '@/data/tools';
import Link from 'next/link';

export default function AdminToolsPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold">Manage Tools</h1>
                    <p className="text-muted-foreground">View and edit all AI tools in the directory.</p>
                </div>
                <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add New Tool
                </Button>
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
                        {tools.map((tool) => (
                            <TableRow key={tool.id} className="border-white/10 hover:bg-white/5">
                                <TableCell>
                                    <div className="flex items-center gap-3">
                                        <div className="h-9 w-9 rounded bg-primary/10 flex items-center justify-center overflow-hidden">
                                            {tool.icon ? (
                                                <img src={tool.icon} alt={tool.name} className="h-5 w-5 object-contain" />
                                            ) : (
                                                <span className="font-bold text-primary text-xs">{tool.name[0]}</span>
                                            )}
                                        </div>
                                        <div>
                                            <div className="font-medium">{tool.name}</div>
                                            <Link href={tool.url} target="_blank" className="text-xs text-muted-foreground hover:text-primary flex items-center gap-1">
                                                Visit Site <ExternalLink className="h-2 w-2" />
                                            </Link>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <Badge variant="outline" className="font-normal">
                                        {tool.category}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <span className="text-sm">{tool.pricing}</span>
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                        <Eye className="h-3 w-3" />
                                        {tool.views?.toLocaleString()}
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <Badge className="bg-green-500/10 text-green-500 hover:bg-green-500/20 border-0">
                                        Published
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
                                                <Pencil className="mr-2 h-4 w-4" />
                                                Edit Tool
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
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
