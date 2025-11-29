import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { categories, pricingModels } from '@/types';

export default function SubmitPage() {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />

            <main className="flex-grow">
                {/* Hero Section */}
                <div className="relative isolate overflow-hidden pt-24 pb-16">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-b from-white via-white/90 to-white/70 bg-clip-text text-transparent mb-6">
                                Submit Your AI Tool
                            </h1>
                            <p className="text-lg leading-8 text-muted-foreground">
                                Share your AI tool with our community and help others discover it.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="container mx-auto px-4 py-12 max-w-2xl">
                    <Card className="p-8 bg-card/50 border-border/50">
                        <form className="space-y-6">
                            {/* Plan Selection */}
                            <div className="space-y-3 mb-8">
                                <Label className="text-base">Select Listing Type</Label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="relative flex items-start space-x-3 rounded-lg border border-white/10 bg-secondary/20 p-4 shadow-sm hover:border-primary/50 cursor-pointer transition-all">
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between">
                                                <Label htmlFor="plan-free" className="font-bold cursor-pointer">Basic Listing</Label>
                                                <span className="text-sm font-medium text-muted-foreground">Free</span>
                                            </div>
                                            <p className="text-xs text-muted-foreground mt-1">Standard listing, 7-day review queue</p>
                                        </div>
                                        <input type="radio" name="plan" id="plan-free" value="free" className="mt-1" defaultChecked />
                                    </div>
                                    <div className="relative flex items-start space-x-3 rounded-lg border border-primary/50 bg-primary/5 p-4 shadow-sm cursor-pointer transition-all">
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between">
                                                <Label htmlFor="plan-featured" className="font-bold text-primary cursor-pointer">Featured Listing</Label>
                                                <span className="text-sm font-bold text-primary">$49</span>
                                            </div>
                                            <p className="text-xs text-muted-foreground mt-1">Skip queue, Featured badge, Top results</p>
                                        </div>
                                        <input type="radio" name="plan" id="plan-featured" value="featured" className="mt-1" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="name">Tool Name *</Label>
                                <Input
                                    id="name"
                                    placeholder="e.g. ChatGPT"
                                    className="bg-secondary/50 border-white/5"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="url">Website URL *</Label>
                                <Input
                                    id="url"
                                    type="url"
                                    placeholder="https://example.com"
                                    className="bg-secondary/50 border-white/5"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="category">Category *</Label>
                                <Select>
                                    <SelectTrigger className="bg-secondary/50 border-white/5">
                                        <SelectValue placeholder="Select a category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {categories.map((category) => (
                                            <SelectItem key={category} value={category.toLowerCase()}>
                                                {category}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="pricing">Pricing Model *</Label>
                                <Select>
                                    <SelectTrigger className="bg-secondary/50 border-white/5">
                                        <SelectValue placeholder="Select pricing model" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {pricingModels.map((pricing) => (
                                            <SelectItem key={pricing} value={pricing.toLowerCase()}>
                                                {pricing}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="shortDescription">Short Description *</Label>
                                <Textarea
                                    id="shortDescription"
                                    placeholder="Brief description (max 150 characters)"
                                    className="bg-secondary/50 border-white/5 min-h-[80px]"
                                    maxLength={150}
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="fullDescription">Full Description *</Label>
                                <Textarea
                                    id="fullDescription"
                                    placeholder="Detailed description of your tool"
                                    className="bg-secondary/50 border-white/5 min-h-[150px]"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="tags">Tags (comma-separated)</Label>
                                <Input
                                    id="tags"
                                    placeholder="e.g. chatbot, nlp, automation"
                                    className="bg-secondary/50 border-white/5"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email">Your Email *</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="your@email.com"
                                    className="bg-secondary/50 border-white/5"
                                    required
                                />
                                <p className="text-xs text-muted-foreground">
                                    We'll contact you if we need more information
                                </p>
                            </div>

                            <Button type="submit" className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-lg shadow-primary/20 h-12 text-lg font-semibold">
                                Continue to Review
                            </Button>

                            <p className="text-sm text-muted-foreground text-center">
                                By submitting, you agree to our Terms of Service. Featured listings require payment on the next step.
                            </p>
                        </form>
                    </Card>
                </div>
            </main>

            <Footer />
        </div>
    );
}
