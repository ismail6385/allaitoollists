import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AlertCircle, ExternalLink, DollarSign, Shield } from 'lucide-react';

export default function DisclaimerPage() {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />

            <main className="flex-grow">
                {/* Hero Section */}
                <div className="relative isolate overflow-hidden pt-16 md:pt-24 pb-12 md:pb-16 border-b border-white/10">
                    <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8 text-center">
                        <div className="flex items-center justify-center mb-6">
                            <div className="bg-primary/10 p-4 rounded-2xl">
                                <AlertCircle className="h-12 w-12 text-primary" />
                            </div>
                        </div>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                            Disclaimer
                        </h1>
                        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                            Please read this disclaimer carefully before using AI Tool List.
                        </p>
                    </div>
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 max-w-4xl">
                    <div className="space-y-12">

                        {/* General Disclaimer */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold flex items-center gap-3">
                                <Shield className="h-6 w-6 text-primary" />
                                General Disclaimer
                            </h2>
                            <div className="bg-card/50 p-6 rounded-xl border border-white/5">
                                <p className="text-muted-foreground leading-relaxed">
                                    The information provided by AI Tool List ("we," "us," or "our") on our website is for general informational purposes only. All information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
                                </p>
                                <p className="text-muted-foreground leading-relaxed mt-4 font-semibold">
                                    Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.
                                </p>
                            </div>
                        </div>

                        {/* External Links */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold flex items-center gap-3">
                                <ExternalLink className="h-6 w-6 text-primary" />
                                External Links Disclaimer
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the site or any website or feature linked in any banner or other advertising. We will not be a party to or in any way be responsible for monitoring any transaction between you and third-party providers of products or services.
                            </p>
                        </div>

                        {/* Affiliate Disclaimer */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold flex items-center gap-3">
                                <DollarSign className="h-6 w-6 text-primary" />
                                Affiliate Disclaimer
                            </h2>
                            <div className="bg-secondary/20 p-6 rounded-xl border border-primary/20">
                                <p className="text-muted-foreground leading-relaxed">
                                    The Site may contain links to affiliate websites, and we receive an affiliate commission for any purchases made by you on the affiliate website using such links. Our affiliates include the following:
                                </p>
                                <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                                    <li>Various AI Tool Affiliate Programs</li>
                                    <li>Software Service Providers</li>
                                    <li>Advertising Networks</li>
                                </ul>
                                <p className="text-muted-foreground leading-relaxed mt-4">
                                    We are a participant in various affiliate programs designed to provide a means for us to earn fees by linking to affiliated sites. This comes at no extra cost to you and helps support the maintenance of our website.
                                </p>
                            </div>
                        </div>

                        {/* Professional Advice */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold flex items-center gap-3">
                                <AlertCircle className="h-6 w-6 text-primary" />
                                Professional Advice Disclaimer
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                The Site cannot and does not contain legal, financial, or medical advice. The information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of legal, financial, or medical advice.
                            </p>
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
