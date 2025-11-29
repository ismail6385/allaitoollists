import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />

            <main className="flex-grow flex items-center justify-center px-4">
                <div className="text-center max-w-2xl">
                    <h1 className="text-9xl font-bold bg-gradient-to-b from-primary to-purple-400 bg-clip-text text-transparent mb-4">
                        404
                    </h1>
                    <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
                    <p className="text-muted-foreground text-lg mb-8">
                        Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Link href="/">
                            <button className="px-6 py-3 bg-primary hover:bg-primary/90 rounded-full font-medium transition-all">
                                Go Home
                            </button>
                        </Link>
                        <Link href="/categories">
                            <button className="px-6 py-3 bg-secondary hover:bg-secondary/80 rounded-full font-medium transition-all">
                                Browse Categories
                            </button>
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
