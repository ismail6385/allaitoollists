import { Sparkles } from 'lucide-react';
import Link from 'next/link';

interface CategoryWithCount {
    name: string;
    count: number;
    description: string;
}

interface SEOContentProps {
    categories?: CategoryWithCount[];
}

export function SEOContent({ categories = [] }: SEOContentProps) {
    // Category descriptions mapping
    const categoryDescriptions: Record<string, string> = {
        'Text & Writing': 'AI writing assistants, content generators, and grammar tools',
        'Image Generation': 'AI art generators, image editors, and design tools',
        'Video & Audio': 'Video editing, voice synthesis, and audio processing tools',
        'Code & Development': 'AI coding assistants, debugging tools, and code generators',
        'Productivity': 'Task automation, scheduling, and workflow optimization tools',
        'Marketing': 'SEO tools, social media management, and ad optimization',
        'Design': 'UI/UX design tools, prototyping, and creative AI assistants',
        'Data & Analytics': 'Data visualization, analysis, and business intelligence tools',
        'Customer Support': 'Chatbots, help desk automation, and support tools',
        'Sales': 'Lead generation, CRM automation, and sales enablement tools',
    };

    const faqs = [
        {
            question: 'What is AI Tool List?',
            answer: 'AI Tool List is a comprehensive directory of the best AI-powered tools and software. We curate and categorize over 1000 AI tools to help users find the perfect solution for their needs, whether it\'s for writing, coding, design, marketing, or productivity.',
        },
        {
            question: 'How do I find the right AI tool for my needs?',
            answer: 'You can browse tools by category, use our search function, or filter by pricing (free, freemium, or paid). Each tool includes detailed descriptions, user reviews, and ratings to help you make an informed decision.',
        },
        {
            question: 'Are all the AI tools free?',
            answer: 'We list a mix of free, freemium, and paid AI tools. You can filter by pricing to find tools that fit your budget. Many tools offer free trials or free tiers so you can test them before committing.',
        },
        {
            question: 'How often is the directory updated?',
            answer: 'We update our directory daily with new AI tools and remove outdated ones. Our team continuously monitors the AI landscape to ensure you have access to the latest and most innovative tools.',
        },
        {
            question: 'Can I submit my own AI tool?',
            answer: 'Yes! We welcome tool submissions from developers and companies. Simply use our "Submit Tool" form, and our team will review and add it to the directory if it meets our quality standards.',
        },
    ];

    return (
        <div className="space-y-20 md:space-y-28 py-16 md:py-20">
            {/* Dynamic Categories Overview Section */}
            {categories.length > 0 && (
                <section className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-5xl font-black mb-4">
                            <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                                Explore AI Tools by
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Category
                            </span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Find the perfect AI tool for your specific use case across various categories
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categories.map((category) => (
                            <Link
                                key={category.name}
                                href={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                                className="group relative overflow-hidden bg-background/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="text-xl font-bold">{category.name}</h3>
                                        <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                                            {category.count}+
                                        </span>
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        {category.description || categoryDescriptions[category.name] || 'Discover amazing AI tools in this category'}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="text-center mt-10">
                        <Link
                            href="/categories"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/30 hover:border-primary/50 transition-all hover:scale-105 font-semibold"
                        >
                            View All Categories
                            <Sparkles className="h-4 w-4" />
                        </Link>
                    </div>
                </section>
            )}

            {/* FAQ Section */}
            <section className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-black mb-4">
                        <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                            Frequently Asked
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Questions
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Everything you need to know about AI Tool List
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <details
                            key={index}
                            className="group bg-background/90 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all"
                        >
                            <summary className="cursor-pointer p-6 font-semibold text-lg flex items-center justify-between hover:text-primary transition-colors">
                                {faq.question}
                                <span className="ml-4 text-primary group-open:rotate-180 transition-transform">
                                    ▼
                                </span>
                            </summary>
                            <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                                {faq.answer}
                            </div>
                        </details>
                    ))}
                </div>
            </section>
        </div>
    );
}
