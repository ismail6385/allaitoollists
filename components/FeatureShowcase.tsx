import { Sparkles, Target, TrendingUp, Rocket } from 'lucide-react';

export function FeatureShowcase() {
    const features = [
        {
            title: 'Discover AI Tools for Every Need',
            description: 'Whether you\'re looking for AI writing assistants, image generators, or productivity tools, our comprehensive directory has you covered. Browse through 1000+ carefully curated AI tools across 20+ categories. Each tool is verified, reviewed, and rated by real users to help you make the best choice for your specific needs.',
            icon: Sparkles,
            emoji: '🎯',
            gradient: 'from-blue-500 to-cyan-500',
            imagePosition: 'right',
        },
        {
            title: 'Compare Features & Pricing',
            description: 'Make informed decisions with our detailed comparison tools. See side-by-side feature comparisons, pricing breakdowns, and user reviews. Filter by free, freemium, or paid options to find tools that fit your budget. Our transparent pricing information helps you avoid hidden costs and choose the best value.',
            icon: Target,
            emoji: '💰',
            gradient: 'from-purple-500 to-pink-500',
            imagePosition: 'left',
        },
        {
            title: 'Stay Ahead with Latest AI Innovations',
            description: 'The AI landscape evolves rapidly. Our team updates the directory daily with new tools, features, and trends. Get notified about trending AI tools, new releases, and industry updates. Join 50,000+ users who trust us to keep them informed about the latest AI innovations.',
            icon: TrendingUp,
            emoji: '🚀',
            gradient: 'from-orange-500 to-red-500',
            imagePosition: 'right',
        },
    ];

    return (
        <div className="py-20 md:py-28 space-y-24 md:space-y-32">
            {features.map((feature, index) => (
                <section key={index} className="container mx-auto px-4 md:px-6">
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center ${feature.imagePosition === 'left' ? 'lg:flex-row-reverse' : ''
                        }`}>
                        {/* Content Side */}
                        <div className={`space-y-6 ${feature.imagePosition === 'left' ? 'lg:order-2' : ''}`}>
                            {/* Icon Badge */}
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                                <feature.icon className="h-5 w-5 text-primary" />
                                <span className="text-sm font-semibold text-primary">Feature #{index + 1}</span>
                            </div>

                            {/* Title */}
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black">
                                <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                                    {feature.title.split(' ').slice(0, -2).join(' ')}
                                </span>
                                {' '}
                                <span className={`bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                                    {feature.title.split(' ').slice(-2).join(' ')}
                                </span>
                            </h2>

                            {/* Description */}
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>

                            {/* CTA Button */}
                            <div className="pt-4">
                                <a
                                    href="/categories"
                                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r ${feature.gradient} hover:opacity-90 transition-opacity font-semibold text-white shadow-lg`}
                                >
                                    Explore Now
                                    <Rocket className="h-4 w-4" />
                                </a>
                            </div>
                        </div>

                        {/* Visual Side - Emoji/Icon */}
                        <div className={`relative ${feature.imagePosition === 'left' ? 'lg:order-1' : ''}`}>
                            <div className="relative group">
                                {/* Background Glow */}
                                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />

                                {/* Main Card */}
                                <div className="relative bg-background/90 backdrop-blur-xl border border-white/10 rounded-3xl p-12 md:p-16 hover:border-white/20 transition-all duration-300 hover:scale-105">
                                    {/* Floating Emoji */}
                                    <div className="text-center">
                                        <div className="inline-block relative">
                                            {/* Animated Ring */}
                                            <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-full blur-2xl opacity-50 animate-pulse`} />

                                            {/* Emoji */}
                                            <div className="relative text-9xl md:text-[12rem] animate-float">
                                                {feature.emoji}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Decorative Elements */}
                                    <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full blur-2xl" />
                                    <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-full blur-2xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
}
