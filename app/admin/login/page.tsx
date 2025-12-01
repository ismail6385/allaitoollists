'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { ShieldCheck, Loader2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

export default function AdminLoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { toast } = useToast();

    // Hardcoded admin credentials
    const ADMIN_EMAIL = 'muhammadismailkpt@gmail.com';
    const ADMIN_PASSWORD = 'Ismail9988allaitoollist';

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simple credential check
        if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
            // Set a simple session flag
            localStorage.setItem('admin_logged_in', 'true');
            localStorage.setItem('admin_email', email);

            toast({
                title: 'Welcome Admin!',
                description: 'Login successful',
            });

            // Redirect to admin dashboard
            router.push('/admin');
        } else {
            toast({
                title: 'Access Denied',
                description: 'Invalid email or password',
                variant: 'destructive',
            });
        }

        setLoading(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-background p-4">
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-4 text-center">
                    <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <ShieldCheck className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">Admin Portal</CardTitle>
                    <p className="text-sm text-muted-foreground">
                        Enter your credentials to access the dashboard
                    </p>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="admin@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <Button type="submit" className="w-full" disabled={loading}>
                            {loading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Verifying...
                                </>
                            ) : (
                                'Login to Dashboard'
                            )}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
