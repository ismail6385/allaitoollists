import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Scale, FileText, Mail, AlertTriangle } from 'lucide-react';

export default function DMCAPage() {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />

            <main className="flex-grow">
                {/* Hero Section */}
                <div className="relative isolate overflow-hidden pt-16 md:pt-24 pb-12 md:pb-16 border-b border-white/10">
                    <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8 text-center">
                        <div className="flex items-center justify-center mb-6">
                            <div className="bg-primary/10 p-4 rounded-2xl">
                                <Scale className="h-12 w-12 text-primary" />
                            </div>
                        </div>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                            DMCA Policy
                        </h1>
                        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                            Digital Millennium Copyright Act Notice and Takedown Policy.
                        </p>
                    </div>
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 max-w-4xl">
                    <div className="prose prose-invert max-w-none space-y-8">
                        <div className="bg-card/30 p-6 rounded-xl border border-white/5">
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                AI Tool List respects the intellectual property rights of others and expects its users to do the same.
                                In accordance with the Digital Millennium Copyright Act of 1998 ("DMCA"), we will respond expeditiously to claims of copyright infringement committed using our service.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold flex items-center gap-2">
                                <FileText className="h-6 w-6 text-primary" />
                                Filing a DMCA Notice
                            </h2>
                            <p className="text-muted-foreground">
                                If you are a copyright owner, or are authorized to act on behalf of one, or authorized to act under any exclusive right under copyright, please report alleged copyright infringements taking place on or through the Site by completing the following DMCA Notice of Alleged Infringement and delivering it to our Designated Copyright Agent.
                            </p>
                            <div className="bg-secondary/20 p-6 rounded-lg border-l-4 border-primary">
                                <h3 className="font-bold mb-4">Your Notice must include:</h3>
                                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                    <li>Identify the copyrighted work that you claim has been infringed.</li>
                                    <li>Identify the material that you claim is infringing (URL or specific location).</li>
                                    <li>Your mailing address, telephone number, and email address.</li>
                                    <li>A statement that you have a good faith belief that use of the material is not authorized by the copyright owner, its agent, or the law.</li>
                                    <li>A statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the copyright owner.</li>
                                    <li>Your physical or electronic signature.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold flex items-center gap-2">
                                <AlertTriangle className="h-6 w-6 text-primary" />
                                Counter-Notice
                            </h2>
                            <p className="text-muted-foreground">
                                If you believe that your material that was removed (or to which access was disabled) is not infringing, or that you have the authorization from the copyright owner, the copyright owner's agent, or pursuant to the law, to post and use the material in your content, you may send a counter-notice containing the following information to the Copyright Agent:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Your physical or electronic signature.</li>
                                <li>Identification of the material that has been removed or to which access has been disabled and the location at which the material appeared before it was removed or disabled.</li>
                                <li>A statement that you have a good faith belief that the material was removed or disabled as a result of mistake or a misidentification of the material.</li>
                                <li>Your name, address, telephone number, and e-mail address.</li>
                            </ul>
                        </div>

                        <div className="mt-12 p-8 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 text-center">
                            <h2 className="text-2xl font-bold mb-4">Designated Copyright Agent</h2>
                            <div className="flex flex-col items-center gap-2 text-muted-foreground">
                                <p className="font-semibold text-foreground">Attn: DMCA Agent</p>
                                <p>AI Tool List Inc.</p>
                                <p>123 AI Boulevard, Tech District</p>
                                <p>San Francisco, CA 94102</p>
                                <div className="flex items-center gap-2 mt-4 text-primary font-bold">
                                    <Mail className="h-5 w-5" />
                                    <a href="mailto:dmca@aitoollist.com" className="hover:underline">dmca@aitoollist.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
