import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function TermsPage() {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />

            <main className="flex-grow">
                <div className="container mx-auto px-4 py-24 max-w-4xl">
                    <h1 className="text-4xl font-bold mb-8 bg-gradient-to-b from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                        Terms of Service
                    </h1>

                    <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
                        <p className="text-sm">Last updated: {new Date().toLocaleDateString()}</p>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                            <p>
                                By accessing and using AI Tool List, you accept and agree to be bound by the terms and
                                provision of this agreement.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">2. Use License</h2>
                            <p>
                                Permission is granted to temporarily access the materials on AI Tool List for personal,
                                non-commercial transitory viewing only.
                            </p>
                            <p>This license shall automatically terminate if you violate any of these restrictions.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">3. User Content</h2>
                            <p>
                                When you submit content (such as tool submissions), you grant us a non-exclusive,
                                worldwide, royalty-free license to use, reproduce, and display such content.
                            </p>
                            <p>You represent that you own or have the necessary rights to the content you submit.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">4. Disclaimer</h2>
                            <p>
                                The materials on AI Tool List are provided on an 'as is' basis. We make no warranties,
                                expressed or implied, and hereby disclaim all other warranties.
                            </p>
                            <p>
                                We do not warrant that the tools listed on our platform will meet your requirements or
                                that their operation will be uninterrupted or error-free.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">5. Limitations</h2>
                            <p>
                                In no event shall AI Tool List or its suppliers be liable for any damages arising out
                                of the use or inability to use the materials on our website.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">6. Links</h2>
                            <p>
                                AI Tool List has not reviewed all of the sites linked to its website and is not
                                responsible for the contents of any such linked site.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">7. Modifications</h2>
                            <p>
                                We may revise these terms of service at any time without notice. By using this website,
                                you are agreeing to be bound by the current version of these terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">8. Contact</h2>
                            <p>
                                If you have any questions about these Terms, please contact us at terms@aitoollist.com
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
