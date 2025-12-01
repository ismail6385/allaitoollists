'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Trash2, Edit } from 'lucide-react';
import { createBrowserClient } from '@supabase/ssr';
import { useToast } from '@/components/ui/use-toast';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';

export default function CategoriesPage() {
    const [categories, setCategories] = useState<any[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({ name: '', description: '', color: '#6366f1' });
    const { toast } = useToast();
    const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    useEffect(() => {
        loadCategories();
    }, []);

    const loadCategories = async () => {
        const { data } = await supabase.from('categories').select('*').order('name');
        if (data) setCategories(data);
    };

    const handleSave = async () => {
        const slug = formData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        const { error } = await supabase.from('categories').insert([{ ...formData, slug }]);

        if (error) {
            toast({ title: 'Error', description: error.message, variant: 'destructive' });
        } else {
            toast({ title: 'Success', description: 'Category added' });
            setIsOpen(false);
            setFormData({ name: '', description: '', color: '#6366f1' });
            loadCategories();
        }
    };

    const handleDelete = async (id: string) => {
        const { error } = await supabase.from('categories').delete().eq('id', id);
        if (!error) {
            toast({ title: 'Success', description: 'Category deleted' });
            loadCategories();
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Categories</h1>
                    <p className="text-muted-foreground">Manage tool categories</p>
                </div>
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogTrigger asChild>
                        <Button>
                            <Plus className="mr-2 h-4 w-4" />
                            Add Category
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Add New Category</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                            <div className="space-y-2">
                                <Label>Name</Label>
                                <Input
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="e.g., Writing"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Description</Label>
                                <Input
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    placeholder="Brief description"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Color</Label>
                                <Input
                                    type="color"
                                    value={formData.color}
                                    onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                                />
                            </div>
                            <Button onClick={handleSave} className="w-full">Save Category</Button>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categories.map((cat) => (
                    <Card key={cat.id}>
                        <CardContent className="p-4">
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <Badge style={{ backgroundColor: cat.color }} className="mb-2">
                                        {cat.name}
                                    </Badge>
                                    <p className="text-sm text-muted-foreground">{cat.description}</p>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => handleDelete(cat.id)}
                                    className="text-destructive"
                                >
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
