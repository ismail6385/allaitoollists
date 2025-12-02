import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { notFound } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { dbToolToTool } from '@/types';
import CategoryClient from '@/components/CategoryClient';

export const dynamic = 'force-dynamic';

interface PageProps {
    params: {
        slug: string;
    };
}

export default async function CategoryPage({ params }: PageProps) {
    // Fetch tools for this category
    const { data: dbTools, error } = await supabase
        .from('tools')
        .select('*')
        .eq('category', params.slug)
        .order('views', { ascending: false });

    if (error) {
        console.error('Error fetching tools:', error);
    }

    // If no tools found, check if category exists at all
    if (!dbTools || dbTools.length === 0) {
        const { data: allCategories } = await supabase
            .from('tools')
            .select('category');

        const uniqueCategories = Array.from(new Set(allCategories?.map(t => t.category) || []));

        if (!uniqueCategories.includes(params.slug)) {
            notFound();
        }
    }

    const tools = (dbTools || []).map(dbToolToTool);

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />
            <main className="flex-grow">
                <CategoryClient category={params.slug} tools={tools} />
            </main>
            <Footer />
        </div>
    );
}
