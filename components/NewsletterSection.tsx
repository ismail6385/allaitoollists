'use client';

import { Mail, Sparkles, Gift, Bell } from 'lucide-react';
import { useState } from 'react';

export function NewsletterSection() {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSuccess(true);
        setEmail('');

        setTimeout(() => setIsSuccess(false), 3000);
    };

    return (
        <div className="relative py-20 md:py-28 overflow-hidden">
            {/* Magical Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10" />
                {/* Animated Orbs */}
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-primary/30 to-purple-500/30 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

                {/* Floating Icons */}
                <div className="absolute top-10 left-10 animate-float">
                    <Sparkles className="h-8 w-8 text-primary/30" />
                </div>
                <div className="absolute top-20 right-20 animate-float" style={{ animationDelay: '0.5s' }}>
                    <Gift className="h-10 w-10 text-purple-500/30" />
                </div>
                <div className="absolute bottom-20 left-1/3 animate-float" style={{ animationDelay: '1s' }}>
                    <Bell className="h-6 w-6 text-pink-500/30" />
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="relative bg-gradient-to-br from-background/95 via-background/90 to-background/95 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 md:p-12 overflow-hidden">
                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-pink-500/20 to-purple-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                        <div className="relative z-10">
                            {/* Header */}
                            <div className="text-center mb-8">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                                    <Mail className="h-4 w-4 text-primary" />
                                    <span className="text-sm font-semibold text-primary">Stay Updated</span>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-black mb-4">
                                    <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                                        Get the Latest
                                    </span>
                                    <br />
                                    <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                        AI Tools Weekly 📬
                                    </span>
                                </h2>

                                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                    Join 50,000+ subscribers and get exclusive access to new AI tools, tips, and special deals
                                </p>
                            </div>

                            {/* Benefits */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                                {[
                                    { icon: '🎯', text: 'Weekly AI Tool Roundup' },
                                    { icon: '💡', text: 'Exclusive Tips & Tricks' },
                                    { icon: '🎁', text: 'Early Access & Deals' },
                                ].map((benefit, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all hover:scale-105"
                                    >
                                        <span className="text-3xl">{benefit.icon}</span>
                                        <span className="text-sm font-semibold">{benefit.text}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Email Form */}
                            <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email address"
                                        required
                                        className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 text-white placeholder:text-white/50 transition-all"
                                    />
                                    <button
                                        type="submit"
                                        disabled={isSubmitting || isSuccess}
                                        className="px-8 py-4 rounded-full bg-gradient-to-r from-primary via-purple-500 to-pink-500 hover:opacity-90 transition-all font-bold text-white shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                Subscribing...
                                            </>
                                        ) : isSuccess ? (
                                            <>
                                                ✓ Subscribed!
                                            </>
                                        ) : (
                                            <>
                                                Subscribe Free
                                                <Sparkles className="h-4 w-4" />
                                            </>
                                        )}
                                    </button>
                                </div>
                                <p className="text-xs text-muted-foreground text-center mt-4">
                                    🔒 We respect your privacy. Unsubscribe anytime.
                                </p>
                            </form>

                            {/* Social Proof */}
                            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                                <div className="flex -space-x-2">
                                    {['👨‍💼', '👩‍💻', '👨‍🎨', '👩‍🔬', '👨‍💻'].map((avatar, i) => (
                                        <div
                                            key={i}
                                            className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 border-2 border-background flex items-center justify-center text-xs"
                                        >
                                            {avatar}
                                        </div>
                                    ))}
                                </div>
                                <span>Join 50,000+ happy subscribers</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
}
