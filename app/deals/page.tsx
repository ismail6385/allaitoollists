import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tag, Clock, ExternalLink, Percent } from 'lucide-react';
import Link from 'next/link';

export default function DealsPage() {
    const deals = [
        {
            id: 1,
            tool: "Jasper AI",
            offer: "20% OFF Annual Plan",
            code: "JASPER20",
            expires: "2 days left",
            description: "Get 20% off your first year of Jasper Boss Mode. Perfect for content creators and marketing teams.",
            image: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&q=80&w=800",
            category: "Writing",
            exclusive: true
        },
        {
            id: 2,
            tool: "Midjourney",
            offer: "Extended Free Trial",
            code: "No code needed",
            expires: "Limited time",
            description: "Get double the fast hours for your first month when you sign up through our link.",
            image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?auto=format&fit=crop&q=80&w=800",
            category: "Image Gen",
            exclusive: false
        },
        {
            id: 3,
            tool: "Notion AI",
            offer: "3 Months Free",
            code: "NOTIONAI3",
            expires: "Ends soon",
            description: "Try Notion AI features completely free for 3 months. Streamline your notes and docs.",
            image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
            category: "Productivity",
            exclusive: true
        },
        {
            id: 4,
            tool: "Synthesia",
            offer: "15% OFF Starter",
            code: "VIDEO15",
            expires: "5 days left",
            description: "Create professional AI videos at a discount. Valid for new customers only.",
            image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=800",
            category: "Video",
            exclusive: false
        },
        {
            id: 5,
            tool: "Copy.ai",
            offer: "40% OFF First Month",
            code: "COPY40",
            expires: "24 hours left",
            description: "Flash sale! Get nearly half off your first month of Pro subscription.",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
            category: "Writing",
            exclusive: false
        },
        {
            id: 6,
            tool: "Beautiful.ai",
            offer: "Student Discount (50%)",
            code: "EDU50",
            expires: "Ongoing",
            description: "Students and educators get 50% off Pro plans with a valid .edu email.",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
            category: "Design",
            exclusive: false
        }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />

            <main className="flex-grow">
                {/* Hero Section */}
                <div className="relative isolate overflow-hidden pt-24 pb-16">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <div className="flex justify-center mb-6">
                                <div className="bg-primary/10 p-3 rounded-2xl">
                                    <Percent className="h-10 w-10 text-primary" />
                                </div>
                            </div>
                            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-b from-white via-white/90 to-white/70 bg-clip-text text-transparent mb-6">
                                Exclusive AI Deals
                            </h1>
                            <p className="text-lg leading-8 text-muted-foreground">
                                Save money on your favorite AI tools with our curated list of coupons, discounts, and extended trials.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Deals Grid */}
                <div className="container mx-auto px-4 py-8 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {deals.map((deal) => (
                            <Card key={deal.id} className="group overflow-hidden bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 flex flex-col h-full relative">
                                {deal.exclusive && (
                                    <div className="absolute top-0 right-0 z-10">
                                        <div className="bg-gradient-to-l from-primary to-purple-600 text-white text-[10px] font-bold px-6 py-1 rotate-45 translate-x-6 translate-y-3 shadow-sm">
                                            EXCLUSIVE
                                        </div>
                                    </div>
                                )}

                                <div className="relative h-40 overflow-hidden">
                                    <img
                                        src={deal.image}
                                        alt={deal.tool}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-60 group-hover:opacity-80"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                                    <div className="absolute bottom-4 left-4">
                                        <h3 className="text-2xl font-bold text-white">{deal.tool}</h3>
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center justify-between mb-4">
                                        <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                                            {deal.offer}
                                        </Badge>
                                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                                            <Clock className="h-3 w-3" /> {deal.expires}
                                        </span>
                                    </div>

                                    <p className="text-muted-foreground text-sm mb-6 flex-grow">
                                        {deal.description}
                                    </p>

                                    <div className="bg-secondary/30 p-3 rounded-lg border border-white/5 flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-2">
                                            <Tag className="h-4 w-4 text-muted-foreground" />
                                            <code className="text-sm font-mono font-bold text-primary">{deal.code}</code>
                                        </div>
                                        <Button variant="ghost" size="sm" className="h-6 text-xs hover:bg-primary/20 hover:text-primary">
                                            Copy
                                        </Button>
                                    </div>

                                    <Button className="w-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors group-hover:bg-primary">
                                        Claim Deal <ExternalLink className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
