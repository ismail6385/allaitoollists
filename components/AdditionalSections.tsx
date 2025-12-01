import { Users, Award, Lightbulb, CheckCircle, ArrowRight } from 'lucide-react';

export function AdditionalSections() {
    const useCases = [
        {
            title: 'Content Creators',
            description: 'Find AI tools for video editing, thumbnail creation, script writing, and social media management.',
            tools: ['ChatGPT', 'Midjourney', 'Runway ML'],
            icon: '🎬',
            color: 'from-purple-500 to-pink-500',
        },
        {
            title: 'Developers',
            description: 'Discover AI coding assistants, debugging tools, documentation generators, and code review automation.',
            tools: ['GitHub Copilot', 'Cursor', 'Tabnine'],
            icon: '💻',
            color: 'from-blue-500 to-cyan-500',
        },
        {
            title: 'Marketers',
            description: 'Explore AI for SEO optimization, ad copy generation, email campaigns, and analytics insights.',
            tools: ['Jasper', 'Copy.ai', 'Surfer SEO'],
            icon: '📈',
            color: 'from-green-500 to-emerald-500',
        },
        {
            title: 'Designers',
            description: 'Access AI design tools for logo creation, UI/UX design, color palettes, and image enhancement.',
            tools: ['Canva AI', 'Figma AI', 'Adobe Firefly'],
            icon: '🎨',
            color: 'from-orange-500 to-red-500',
        },
    ];

    const benefits = [
        {
            icon: CheckCircle,
            title: 'Save Time',
            description: 'Automate repetitive tasks and focus on what matters most',
        },
        {
            icon: Award,
            title: 'Boost Productivity',
            description: 'Get more done in less time with AI-powered efficiency',
        },
        {
            icon: Lightbulb,
            title: 'Unlock Creativity',
            description: 'Generate fresh ideas and innovative solutions instantly',
        },
        {
            icon: Users,
            title: 'Scale Your Work',
            description: 'Handle larger projects without increasing your team size',
        },
    ];

    return (
        <div className="space-y-20 md:space-y-28 py-16 md:py-20">
            {/* Use Cases Section */}
            <section className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-black mb-4">
                        <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                            AI Tools for
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Every Professional
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        No matter your profession, we have the perfect AI tools to supercharge your workflow
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {useCases.map((useCase, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden bg-background/90 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500"
                        >
                            {/* Background Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${useCase.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                            <div className="relative">
                                {/* Icon */}
                                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {useCase.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold mb-3">{useCase.title}</h3>

                                {/* Description */}
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    {useCase.description}
                                </p>

                                {/* Popular Tools */}
                                <div className="space-y-2">
                                    <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                                        Popular Tools:
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {useCase.tools.map((tool, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10"
                                            >
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="relative overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-purple-500/5 to-background" />

                <div className="container mx-auto px-4 md:px-6 relative">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-5xl font-black mb-4">
                            <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                                Why Use
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                AI Tools?
                            </span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Transform the way you work with artificial intelligence
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="group relative bg-background/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                                <div className="relative">
                                    <div className="inline-flex p-3 rounded-xl bg-primary/10 border border-primary/20 mb-4 group-hover:scale-110 transition-transform">
                                        <benefit.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="container mx-auto px-4 md:px-6">
                <div className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-purple-500/20 to-pink-500/20 rounded-3xl border border-white/10 p-12 md:p-16">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-40 h-40 bg-primary rounded-full blur-3xl" />
                        <div className="absolute bottom-0 right-0 w-60 h-60 bg-purple-500 rounded-full blur-3xl" />
                    </div>

                    <div className="relative text-center">
                        <h2 className="text-3xl md:text-5xl font-black mb-6">
                            <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                                Ready to Discover Your
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Perfect AI Tool?
                            </span>
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Join 50,000+ professionals who use AI Tool List to find the best AI solutions for their needs
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/categories"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary hover:bg-primary/90 transition-all font-bold text-white shadow-lg hover:scale-105"
                            >
                                Browse All Tools
                                <ArrowRight className="h-5 w-5" />
                            </a>
                            <a
                                href="/submit"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all font-bold hover:scale-105"
                            >
                                Submit Your Tool
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
