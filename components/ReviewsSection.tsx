'use client';

import { Star, Quote } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ReviewsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const reviews = [
        {
            id: 1,
            name: 'Sarah Johnson',
            role: 'Content Creator',
            avatar: '👩‍💼',
            rating: 5,
            text: 'This directory has been a game-changer for my workflow! I discovered amazing AI tools I never knew existed. The categorization makes it so easy to find exactly what I need.',
        },
        {
            id: 2,
            name: 'Michael Chen',
            role: 'Software Developer',
            avatar: '👨‍💻',
            rating: 5,
            text: 'As a developer, I love how comprehensive this tool list is. The comparison feature helped me choose the perfect AI coding assistant. Highly recommended!',
        },
        {
            id: 3,
            name: 'Emma Williams',
            role: 'Marketing Manager',
            avatar: '👩‍🎨',
            rating: 5,
            text: 'The best AI tools directory out there! I use it weekly to stay updated on the latest tools. The reviews from real users are incredibly helpful.',
        },
        {
            id: 4,
            name: 'David Rodriguez',
            role: 'Entrepreneur',
            avatar: '👨‍💼',
            rating: 5,
            text: 'Saved me countless hours of research. The filtering options are perfect, and I love that they show both free and paid options. Worth bookmarking!',
        },
        {
            id: 5,
            name: 'Lisa Anderson',
            role: 'Graphic Designer',
            avatar: '👩‍🎨',
            rating: 5,
            text: 'Found my favorite AI design tools here! The detailed descriptions and user ratings make it easy to make informed decisions. Absolutely love this platform!',
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % reviews.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [reviews.length]);

    const nextReview = () => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
    };

    const prevReview = () => {
        setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    return (
        <div className="py-20 md:py-28 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-3xl opacity-20" />
            </div>

            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                        <Star className="h-4 w-4 text-primary" />
                        <span className="text-sm font-semibold text-primary">User Reviews</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black mb-4">
                        <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                            What Our Users
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Are Saying
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Join thousands of satisfied users who trust AI Tool List
                    </p>
                </div>

                {/* Carousel */}
                <div className="max-w-4xl mx-auto relative">
                    <div className="relative bg-background/90 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 hover:border-white/20 transition-all">
                        {/* Quote Icon */}
                        <div className="absolute top-6 left-6 text-primary/20">
                            <Quote className="h-12 w-12" />
                        </div>

                        {/* Review Content */}
                        <div className="relative z-10">
                            {/* Stars */}
                            <div className="flex justify-center gap-1 mb-6">
                                {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                                    />
                                ))}
                            </div>

                            {/* Review Text */}
                            <p className="text-lg md:text-xl text-center text-foreground leading-relaxed mb-8 min-h-[120px]">
                                "{reviews[currentIndex].text}"
                            </p>

                            {/* Reviewer Info */}
                            <div className="flex flex-col items-center gap-3">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center text-3xl">
                                    {reviews[currentIndex].avatar}
                                </div>
                                <div className="text-center">
                                    <h4 className="font-bold text-lg">{reviews[currentIndex].name}</h4>
                                    <p className="text-sm text-muted-foreground">{reviews[currentIndex].role}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevReview}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 rounded-full bg-background/90 backdrop-blur-xl border border-white/20 hover:border-primary/50 transition-all hover:scale-110 flex items-center justify-center"
                    >
                        ←
                    </button>
                    <button
                        onClick={nextReview}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 rounded-full bg-background/90 backdrop-blur-xl border border-white/20 hover:border-primary/50 transition-all hover:scale-110 flex items-center justify-center"
                    >
                        →
                    </button>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-8">
                        {reviews.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                                        ? 'bg-primary w-8'
                                        : 'bg-white/20 hover:bg-white/40'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
