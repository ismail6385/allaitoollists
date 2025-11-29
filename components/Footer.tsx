'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Bot, Send, Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Youtube, Instagram, Github } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';

export function Footer() {
    const [email, setEmail] = useState('');
    const { toast } = useToast();

    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            toast({
                title: "Successfully subscribed! 🎉",
                description: "You'll receive our weekly AI tools newsletter.",
            });
            setEmail('');
        }
    };

    const footerLinks = {
        platform: [
            { label: 'Browse Tools', href: '/categories' },
            { label: 'Top 10 Rankings', href: '/top-10' },
            { label: 'New Tools', href: '/new' },
            { label: 'Trending', href: '/trending' },
            { label: 'Free Tools', href: '/free' },
            { label: 'Submit Tool', href: '/submit' },
        ],
        resources: [
            { label: 'AI News', href: '/news' },
            { label: 'Tutorials', href: '/tutorials' },
            { label: 'Blog', href: '/blog' },
            { label: 'GPTs Directory', href: '/gpts' },
            { label: 'API Documentation', href: '/api' },
            { label: 'Affiliate Program', href: '/affiliate' },
        ],
        company: [
            { label: 'About Us', href: '/about' },
            { label: 'Contact', href: '/contact' },
            { label: 'Careers', href: '/careers' },
            { label: 'Press Kit', href: '/press' },
            { label: 'Partners', href: '/partners' },
            { label: 'Advertise', href: '/advertise' },
        ],
        legal: [
            { label: 'Privacy Policy', href: '/privacy' },
            { label: 'Terms of Service', href: '/terms' },
            { label: 'Cookie Policy', href: '/cookies' },
            { label: 'DMCA', href: '/dmca' },
            { label: 'Disclaimer', href: '/disclaimer' },
        ],
    };

    const socialLinks = [
        { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:text-blue-400' },
        { icon: Facebook, href: 'https://facebook.com', label: 'Facebook', color: 'hover:text-blue-600' },
        { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-500' },
        { icon: Youtube, href: 'https://youtube.com', label: 'YouTube', color: 'hover:text-red-500' },
        { icon: Instagram, href: 'https://instagram.com', label: 'Instagram', color: 'hover:text-pink-500' },
        { icon: Github, href: 'https://github.com', label: 'GitHub', color: 'hover:text-gray-400' },
    ];

    const categories = [
        'Text & Writing', 'Image Generation', 'Video & Audio', 'Code & Development',
        'Productivity', 'Marketing', 'Design', 'Data & Analytics'
    ];

    return (
        <footer className="border-t border-white/10 bg-background/50 backdrop-blur-sm">
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-2 space-y-4">
                        <Link href="/" className="flex items-center space-x-2 group w-fit">
                            <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                                <Bot className="h-6 w-6 text-primary" />
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                                AI Tool List
                            </span>
                        </Link>
                        <p className="text-sm text-muted-foreground max-w-xs">
                            Your ultimate directory of AI-powered tools. Discover, compare, and choose the best AI solutions for your needs.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4" />
                                <a href="mailto:hello@aitoollist.com" className="hover:text-primary transition-colors">
                                    hello@aitoollist.com
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4" />
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                <span>San Francisco, CA</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-3 pt-2">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all ${social.color}`}
                                    aria-label={social.label}
                                >
                                    <social.icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Platform Links */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-sm uppercase tracking-wider">Platform</h3>
                        <ul className="space-y-2">
                            {footerLinks.platform.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-sm uppercase tracking-wider">Resources</h3>
                        <ul className="space-y-2">
                            {footerLinks.resources.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-sm uppercase tracking-wider">Company</h3>
                        <ul className="space-y-2">
                            {footerLinks.company.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter Section */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-sm uppercase tracking-wider">Newsletter</h3>
                        <p className="text-sm text-muted-foreground">
                            Get weekly updates on new AI tools and trends.
                        </p>
                        <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                            <div className="relative">
                                <Input
                                    type="email"
                                    placeholder="Your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="pr-10 bg-white/5 border-white/10"
                                    required
                                />
                                <Button
                                    type="submit"
                                    size="icon"
                                    className="absolute right-1 top-1 h-8 w-8"
                                >
                                    <Send className="h-4 w-4" />
                                </Button>
                            </div>
                            <p className="text-xs text-muted-foreground">
                                By subscribing, you agree to our Privacy Policy.
                            </p>
                        </form>
                    </div>
                </div>

                {/* Popular Categories */}
                <div className="mt-12 pt-8 border-t border-white/10">
                    <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">Popular Categories</h3>
                    <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                            <Link
                                key={category}
                                href={`/categories/${category.toLowerCase().replace(/\s+/g, '-')}`}
                                className="px-3 py-1.5 text-xs rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 transition-all"
                            >
                                {category}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 bg-background/80">
                <div className="container mx-auto px-4 md:px-6 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-muted-foreground text-center md:text-left">
                            © {new Date().getFullYear()} AI Tool List. All rights reserved.
                        </p>

                        {/* Legal Links */}
                        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                            {footerLinks.legal.map((link, index) => (
                                <span key={link.label} className="flex items-center gap-4">
                                    <Link href={link.href} className="hover:text-primary transition-colors">
                                        {link.label}
                                    </Link>
                                    {index < footerLinks.legal.length - 1 && (
                                        <span className="hidden md:inline text-white/20">•</span>
                                    )}
                                </span>
                            ))}
                        </div>

                        {/* Built with badge */}
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span>Built with</span>
                            <span className="text-primary">❤️</span>
                            <span>using Next.js</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
