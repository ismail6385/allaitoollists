import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { categories } from '@/types';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
    MessageSquare,
    Image as ImageIcon,
    Video,
    Code,
    Music,
    FileText,
    Sparkles,
    Zap
} from 'lucide-react';

const categoryIcons: Record<string, any> = {
    'Text': MessageSquare,
    'Image': ImageIcon,
    'Video': Video,
    'Code': Code,
    'Audio': Music,
    'Writing': FileText,
    'Productivity': Zap,
    'Other': Sparkles,
};

const categoryDescriptions: Record<string, string> = {
    'Text': 'AI tools for text generation, editing, and analysis',
    'Image': 'Create, edit, and enhance images with AI',
    'Video': 'AI-powered video creation and editing tools',
    'Code': 'Coding assistants and development tools',
    'Audio': 'Music generation, voice synthesis, and audio editing',
    'Writing': 'Content creation and writing assistance',
    'Productivity': 'Boost your workflow with AI productivity tools',
    'Other': 'Miscellaneous AI tools and utilities',
};

export default function CategoriesPage() {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />

            <main className="flex-grow">
                {/* Hero Section */}
                <div className="relative isolate overflow-hidden pt-24 pb-16">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-b from-white via-white/90 to-white/70 bg-clip-text text-transparent mb-6">
                                Browse by Category
                            </h1>
                            <p className="text-lg leading-8 text-muted-foreground">
                                Explore AI tools organized by their primary function and use case.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Categories Grid */}
                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {categories.map((category) => {
                            const Icon = categoryIcons[category] || Sparkles;
                            return (
                                <Link key={category} href={`/category/${category.toLowerCase()}`}>
                                    <Card className="group h-full p-6 hover:bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 cursor-pointer">
                                        <div className="flex flex-col items-center text-center space-y-4">
                                            <div className="bg-primary/10 p-4 rounded-xl group-hover:bg-primary/20 transition-colors">
                                                <Icon className="h-8 w-8 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                                                    {category}
                                                </h3>
                                                <p className="text-sm text-muted-foreground">
                                                    {categoryDescriptions[category] || 'Explore AI tools in this category'}
                                                </p>
                                            </div>
                                            <Badge variant="secondary" className="mt-auto">
                                                View Tools
                                            </Badge>
                                        </div>
                                    </Card>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
