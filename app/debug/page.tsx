'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function DebugPage() {
    const [status, setStatus] = useState<string>('Testing connection...');
    const [envCheck, setEnvCheck] = useState<any>({});
    const [tableCheck, setTableCheck] = useState<any>({});
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        checkEnvironment();
        checkConnection();
        checkUser();
    }, []);

    const checkEnvironment = () => {
        setEnvCheck({
            url: process.env.NEXT_PUBLIC_SUPABASE_URL ? 'Defined' : 'Missing',
            key: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'Defined' : 'Missing',
        });
    };

    const checkUser = async () => {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user) {
            // Fetch profile to check admin status
            const { data: profile } = await supabase
                .from('user_profiles')
                .select('*')
                .eq('id', session.user.id)
                .single();

            setUser({ ...session.user, profile });
        } else {
            setUser(null);
        }
    };

    const checkConnection = async () => {
        try {
            // Test 1: Simple select
            const { data, error } = await supabase.from('tools').select('count').limit(1);

            if (error) {
                setStatus(`Connection Failed: ${error.message}`);
                console.error('Supabase Error:', error);
            } else {
                setStatus('Connection Successful! Supabase is reachable.');
            }

            // Test 2: Check user_profiles table
            const { error: profileError } = await supabase.from('user_profiles').select('count').limit(1);
            setTableCheck((prev: any) => ({ ...prev, user_profiles: profileError ? `Error: ${profileError.message}` : 'Accessible' }));

            // Test 3: Check contact_messages table
            const { error: contactError } = await supabase.from('contact_messages').select('count').limit(1);
            setTableCheck((prev: any) => ({ ...prev, contact_messages: contactError ? `Error: ${contactError.message}` : 'Accessible' }));

        } catch (err: any) {
            setStatus(`Unexpected Error: ${err.message}`);
        }
    };

    return (
        <div className="p-8 max-w-2xl mx-auto space-y-6">
            <h1 className="text-2xl font-bold">System Debug</h1>

            <Card className="p-4 space-y-4">
                <h2 className="font-semibold">Current User Session</h2>
                <div className="space-y-2">
                    <div className="grid grid-cols-[100px_1fr] gap-2">
                        <span className="font-medium">Status:</span>
                        <span className={user ? 'text-green-500' : 'text-yellow-500'}>
                            {user ? 'Logged In' : 'Not Logged In'}
                        </span>
                    </div>
                    {user && (
                        <>
                            <div className="grid grid-cols-[100px_1fr] gap-2">
                                <span className="font-medium">Email:</span>
                                <span className="font-mono">{user.email}</span>
                            </div>
                            <div className="grid grid-cols-[100px_1fr] gap-2">
                                <span className="font-medium">User ID:</span>
                                <span className="font-mono text-xs">{user.id}</span>
                            </div>
                            <div className="grid grid-cols-[100px_1fr] gap-2">
                                <span className="font-medium">Is Admin:</span>
                                <span className={user.profile?.is_admin ? 'text-green-500 font-bold' : 'text-red-500 font-bold'}>
                                    {user.profile?.is_admin ? 'YES' : 'NO'}
                                </span>
                            </div>
                        </>
                    )}
                </div>
            </Card>

            <Card className="p-4 space-y-4">
                <h2 className="font-semibold">Environment Variables</h2>
                <div className="grid grid-cols-2 gap-2">
                    <div>NEXT_PUBLIC_SUPABASE_URL:</div>
                    <div className={envCheck.url === 'Defined' ? 'text-green-500' : 'text-red-500'}>{envCheck.url}</div>
                    <div>NEXT_PUBLIC_SUPABASE_ANON_KEY:</div>
                    <div className={envCheck.key === 'Defined' ? 'text-green-500' : 'text-red-500'}>{envCheck.key}</div>
                </div>
            </Card>

            <Card className="p-4 space-y-4">
                <h2 className="font-semibold">Connection Status</h2>
                <div className={`font-mono p-2 rounded ${status.includes('Successful') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {status}
                </div>
            </Card>

            <Card className="p-4 space-y-4">
                <h2 className="font-semibold">Table Checks</h2>
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <span>user_profiles:</span>
                        <span className={tableCheck.user_profiles === 'Accessible' ? 'text-green-500' : 'text-red-500'}>
                            {tableCheck.user_profiles || 'Checking...'}
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span>contact_messages:</span>
                        <span className={tableCheck.contact_messages === 'Accessible' ? 'text-green-500' : 'text-red-500'}>
                            {tableCheck.contact_messages || 'Checking...'}
                        </span>
                    </div>
                </div>
            </Card>

            <div className="text-sm text-muted-foreground">
                <p>If tables are missing, please run the SQL scripts in your Supabase Dashboard.</p>
            </div>
        </div>
    );
}
