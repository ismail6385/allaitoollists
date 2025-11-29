import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Save, Globe, Shield, Sliders } from 'lucide-react';

export default function AdminSettingsPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Admin Settings</h1>
                <p className="text-muted-foreground">Manage global site configurations and admin preferences.</p>
            </div>

            <Tabs defaultValue="general" className="w-full">
                <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
                    <TabsTrigger value="general">
                        <Globe className="mr-2 h-4 w-4" />
                        General
                    </TabsTrigger>
                    <TabsTrigger value="features">
                        <Sliders className="mr-2 h-4 w-4" />
                        Features
                    </TabsTrigger>
                    <TabsTrigger value="security">
                        <Shield className="mr-2 h-4 w-4" />
                        Security
                    </TabsTrigger>
                </TabsList>

                {/* General Settings */}
                <TabsContent value="general" className="space-y-6 mt-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Site Information</CardTitle>
                            <CardDescription>Basic configuration for the public-facing site.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid gap-2">
                                <Label htmlFor="siteName">Site Name</Label>
                                <Input id="siteName" defaultValue="AI Tool List" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="siteUrl">Site URL</Label>
                                <Input id="siteUrl" defaultValue="https://aitoollist.com" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="contactEmail">Contact Email</Label>
                                <Input id="contactEmail" defaultValue="support@aitoollist.com" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="description">Meta Description</Label>
                                <Input id="description" defaultValue="The best directory for AI tools and resources." />
                            </div>
                        </CardContent>
                        <CardFooter className="border-t px-6 py-4">
                            <Button>
                                <Save className="mr-2 h-4 w-4" />
                                Save Changes
                            </Button>
                        </CardFooter>
                    </Card>
                </TabsContent>

                {/* Feature Flags */}
                <TabsContent value="features" className="space-y-6 mt-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Feature Management</CardTitle>
                            <CardDescription>Toggle specific features on or off globally.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex items-center justify-between space-x-2">
                                <Label htmlFor="registrations" className="flex flex-col space-y-1">
                                    <span>User Registrations</span>
                                    <span className="font-normal text-xs text-muted-foreground">Allow new users to sign up.</span>
                                </Label>
                                <Switch id="registrations" defaultChecked />
                            </div>
                            <Separator />
                            <div className="flex items-center justify-between space-x-2">
                                <Label htmlFor="submissions" className="flex flex-col space-y-1">
                                    <span>Tool Submissions</span>
                                    <span className="font-normal text-xs text-muted-foreground">Allow users to submit new tools.</span>
                                </Label>
                                <Switch id="submissions" defaultChecked />
                            </div>
                            <Separator />
                            <div className="flex items-center justify-between space-x-2">
                                <Label htmlFor="maintenance" className="flex flex-col space-y-1">
                                    <span>Maintenance Mode</span>
                                    <span className="font-normal text-xs text-muted-foreground">Disable public access to the site.</span>
                                </Label>
                                <Switch id="maintenance" />
                            </div>
                        </CardContent>
                        <CardFooter className="border-t px-6 py-4">
                            <Button>
                                <Save className="mr-2 h-4 w-4" />
                                Update Features
                            </Button>
                        </CardFooter>
                    </Card>
                </TabsContent>

                {/* Security Settings */}
                <TabsContent value="security" className="space-y-6 mt-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Admin Access</CardTitle>
                            <CardDescription>Manage security settings for the admin panel.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid gap-2">
                                <Label htmlFor="currentPass">Current Password</Label>
                                <Input id="currentPass" type="password" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="newPass">New Password</Label>
                                <Input id="newPass" type="password" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="confirmPass">Confirm New Password</Label>
                                <Input id="confirmPass" type="password" />
                            </div>
                        </CardContent>
                        <CardFooter className="border-t px-6 py-4">
                            <Button variant="destructive">
                                Update Password
                            </Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
