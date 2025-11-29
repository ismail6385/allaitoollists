import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Target, Users, Zap, Heart } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />

            <main className="flex-grow">
                {/* Hero Section */}
                <div className="relative isolate overflow-hidden pt-24 pb-16">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-b from-white via-white/90 to-white/70 bg-clip-text text-transparent mb-6">
                                About AI Tool List
                            </h1>
                            <p className="text-lg leading-8 text-muted-foreground">
                                Your trusted directory for discovering the best AI tools and technologies.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 py-12 max-w-4xl">
                    <div className="prose prose-invert max-w-none">
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold mb-4 text-foreground">Our Mission</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                We're on a mission to help individuals and businesses discover, compare, and leverage
                                the best AI tools available. In a rapidly evolving AI landscape, we provide a curated,
                                comprehensive directory that makes it easy to find the right tool for your needs.
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                            <Card className="p-6 bg-card/50 border-border/50">
                                <Target className="h-10 w-10 text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-2 text-foreground">Curated Selection</h3>
                                <p className="text-muted-foreground">
                                    Every tool is carefully reviewed and categorized to ensure quality and relevance.
                                </p>
                            </Card>

                            <Card className="p-6 bg-card/50 border-border/50">
                                <Users className="h-10 w-10 text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-2 text-foreground">Community Driven</h3>
                                <p className="text-muted-foreground">
                                    Built by the community, for the community. Submit your favorite tools and help others discover them.
                                </p>
                            </Card>

                            <Card className="p-6 bg-card/50 border-border/50">
                                <Zap className="h-10 w-10 text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-2 text-foreground">Always Updated</h3>
                                <p className="text-muted-foreground">
                                    We continuously update our directory with the latest AI tools and technologies.
                                </p>
                            </Card>

                            <Card className="p-6 bg-card/50 border-border/50">
                                <Heart className="h-10 w-10 text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-2 text-foreground">Free Forever</h3>
                                <p className="text-muted-foreground">
                                    Our directory is and will always be free to use. No hidden fees, no paywalls.
                                </p>
                            </Card>
                        </div>

                        <div className="mt-12">
                            <h2 className="text-3xl font-bold mb-4 text-foreground">Why AI Tool List?</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                                The AI revolution is here, and new tools are emerging every day. Whether you're a developer,
                                designer, writer, or business owner, finding the right AI tool can be overwhelming.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                That's where we come in. AI Tool List provides a centralized, easy-to-navigate platform
                                where you can discover tools by category, pricing model, and use case. Save time, make
                                informed decisions, and stay ahead of the curve.
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
