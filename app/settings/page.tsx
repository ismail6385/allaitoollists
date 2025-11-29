import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { User, Bell, Shield, Palette, LogOut, Trash2 } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function SettingsPage() {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />

            <main className="flex-grow container mx-auto px-4 py-8 md:py-12 max-w-6xl">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar / Tabs List */}
                    <div className="w-full md:w-64 flex-shrink-0">
                        <div className="mb-6">
                            <h1 className="text-3xl font-bold">Settings</h1>
                            <p className="text-muted-foreground">Manage your account preferences</p>
                        </div>

                        <Tabs defaultValue="profile" orientation="vertical" className="w-full">
                            <TabsList className="flex flex-col h-auto bg-transparent space-y-1 p-0">
                                <TabsTrigger
                                    value="profile"
                                    className="w-full justify-start px-4 py-3 h-auto data-[state=active]:bg-secondary/50 data-[state=active]:text-primary"
                                >
                                    <User className="mr-2 h-4 w-4" />
                                    Profile
                                </TabsTrigger>
                                <TabsTrigger
                                    value="account"
                                    className="w-full justify-start px-4 py-3 h-auto data-[state=active]:bg-secondary/50 data-[state=active]:text-primary"
                                >
                                    <Shield className="mr-2 h-4 w-4" />
                                    Account
                                </TabsTrigger>
                                <TabsTrigger
                                    value="notifications"
                                    className="w-full justify-start px-4 py-3 h-auto data-[state=active]:bg-secondary/50 data-[state=active]:text-primary"
                                >
                                    <Bell className="mr-2 h-4 w-4" />
                                    Notifications
                                </TabsTrigger>
                                <TabsTrigger
                                    value="appearance"
                                    className="w-full justify-start px-4 py-3 h-auto data-[state=active]:bg-secondary/50 data-[state=active]:text-primary"
                                >
                                    <Palette className="mr-2 h-4 w-4" />
                                    Appearance
                                </TabsTrigger>
                            </TabsList>

                            {/* Mobile Content (TabsContent needs to be outside the list for vertical layout on desktop, but for simplicity we'll keep structure and adjust via CSS if needed, or just put content in the main area) */}
                            {/* Actually, Shadcn Tabs are usually horizontal. For vertical sidebar, we often separate the triggers and content manually or use a specific layout. 
                  Let's just put the content in the right column and control it via the Tabs component wrapping everything. 
              */}
                        </Tabs>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-grow">
                        <Tabs defaultValue="profile" className="w-full">
                            {/* Hidden TabsList to sync with the sidebar triggers if we were using a single Tabs context. 
                  However, standard Tabs component doesn't easily support split layout like this without custom state.
                  To keep it simple and functional without complex state management in this file, 
                  I'll restructure to put the TabsList and TabsContent inside the same parent but styled as a sidebar layout.
              */}

                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="w-full md:w-64 flex-shrink-0 hidden md:block">
                                    {/* This is a duplicate visual list for the sidebar effect, 
                       but to make it functional with Shadcn Tabs, we need the TabsList to be the controller.
                       Let's redo the structure to be correct.
                   */}
                                </div>
                            </div>
                        </Tabs>

                        {/* RE-IMPLEMENTATION WITH CORRECT STRUCTURE */}
                        <Tabs defaultValue="profile" className="flex flex-col md:flex-row gap-8 w-full">
                            <TabsList className="flex flex-col h-auto w-full md:w-64 bg-transparent space-y-1 p-0 flex-shrink-0">
                                <div className="mb-6 px-4 md:px-0 text-left w-full">
                                    <h1 className="text-2xl md:text-3xl font-bold">Settings</h1>
                                    <p className="text-sm text-muted-foreground">Manage your preferences</p>
                                </div>
                                <TabsTrigger
                                    value="profile"
                                    className="w-full justify-start px-4 py-3 h-auto data-[state=active]:bg-secondary/50 data-[state=active]:text-primary border border-transparent data-[state=active]:border-border/50 rounded-lg"
                                >
                                    <User className="mr-2 h-4 w-4" />
                                    Profile
                                </TabsTrigger>
                                <TabsTrigger
                                    value="account"
                                    className="w-full justify-start px-4 py-3 h-auto data-[state=active]:bg-secondary/50 data-[state=active]:text-primary border border-transparent data-[state=active]:border-border/50 rounded-lg"
                                >
                                    <Shield className="mr-2 h-4 w-4" />
                                    Account
                                </TabsTrigger>
                                <TabsTrigger
                                    value="notifications"
                                    className="w-full justify-start px-4 py-3 h-auto data-[state=active]:bg-secondary/50 data-[state=active]:text-primary border border-transparent data-[state=active]:border-border/50 rounded-lg"
                                >
                                    <Bell className="mr-2 h-4 w-4" />
                                    Notifications
                                </TabsTrigger>
                                <TabsTrigger
                                    value="appearance"
                                    className="w-full justify-start px-4 py-3 h-auto data-[state=active]:bg-secondary/50 data-[state=active]:text-primary border border-transparent data-[state=active]:border-border/50 rounded-lg"
                                >
                                    <Palette className="mr-2 h-4 w-4" />
                                    Appearance
                                </TabsTrigger>
                            </TabsList>

                            <div className="flex-grow space-y-6">
                                {/* Profile Tab */}
                                <TabsContent value="profile" className="space-y-6 mt-0">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Profile Information</CardTitle>
                                            <CardDescription>Update your public profile details.</CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary">
                                                    JD
                                                </div>
                                                <Button variant="outline" size="sm">Change Avatar</Button>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="firstName">First name</Label>
                                                    <Input id="firstName" defaultValue="John" />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="lastName">Last name</Label>
                                                    <Input id="lastName" defaultValue="Doe" />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="bio">Bio</Label>
                                                <Input id="bio" placeholder="Tell us about yourself" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="website">Website</Label>
                                                <Input id="website" placeholder="https://example.com" />
                                            </div>
                                        </CardContent>
                                        <CardFooter>
                                            <Button>Save Changes</Button>
                                        </CardFooter>
                                    </Card>
                                </TabsContent>

                                {/* Account Tab */}
                                <TabsContent value="account" className="space-y-6 mt-0">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Account Security</CardTitle>
                                            <CardDescription>Manage your email and password.</CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="email">Email</Label>
                                                <Input id="email" defaultValue="john.doe@example.com" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="currentPassword">Current Password</Label>
                                                <Input id="currentPassword" type="password" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="newPassword">New Password</Label>
                                                <Input id="newPassword" type="password" />
                                            </div>
                                        </CardContent>
                                        <CardFooter>
                                            <Button>Update Password</Button>
                                        </CardFooter>
                                    </Card>

                                    <Card className="border-destructive/50 bg-destructive/5">
                                        <CardHeader>
                                            <CardTitle className="text-destructive">Danger Zone</CardTitle>
                                            <CardDescription>Irreversible actions for your account.</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground mb-4">
                                                Once you delete your account, there is no going back. Please be certain.
                                            </p>
                                            <Button variant="destructive" className="w-full sm:w-auto">
                                                <Trash2 className="mr-2 h-4 w-4" />
                                                Delete Account
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </TabsContent>

                                {/* Notifications Tab */}
                                <TabsContent value="notifications" className="space-y-6 mt-0">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Email Notifications</CardTitle>
                                            <CardDescription>Choose what you want to be notified about.</CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-6">
                                            <div className="flex items-center justify-between space-x-2">
                                                <Label htmlFor="marketing" className="flex flex-col space-y-1">
                                                    <span>Marketing emails</span>
                                                    <span className="font-normal text-xs text-muted-foreground">Receive emails about new products, features, and more.</span>
                                                </Label>
                                                <Switch id="marketing" />
                                            </div>
                                            <Separator />
                                            <div className="flex items-center justify-between space-x-2">
                                                <Label htmlFor="social" className="flex flex-col space-y-1">
                                                    <span>Social notifications</span>
                                                    <span className="font-normal text-xs text-muted-foreground">Get notified when someone follows you or likes your reviews.</span>
                                                </Label>
                                                <Switch id="social" defaultChecked />
                                            </div>
                                            <Separator />
                                            <div className="flex items-center justify-between space-x-2">
                                                <Label htmlFor="security" className="flex flex-col space-y-1">
                                                    <span>Security emails</span>
                                                    <span className="font-normal text-xs text-muted-foreground">Receive emails about your account security and activity.</span>
                                                </Label>
                                                <Switch id="security" defaultChecked disabled />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </TabsContent>

                                {/* Appearance Tab */}
                                <TabsContent value="appearance" className="space-y-6 mt-0">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Appearance</CardTitle>
                                            <CardDescription>Customize the look and feel of the application.</CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div className="space-y-2">
                                                <Label>Theme</Label>
                                                <div className="grid grid-cols-3 gap-4">
                                                    <div className="border-2 border-primary rounded-md p-2 bg-background cursor-pointer hover:bg-accent">
                                                        <div className="h-20 rounded-md bg-slate-950 mb-2"></div>
                                                        <div className="text-center text-sm font-medium">Dark</div>
                                                    </div>
                                                    <div className="border rounded-md p-2 bg-white cursor-pointer hover:bg-gray-100 opacity-50">
                                                        <div className="h-20 rounded-md bg-gray-200 mb-2"></div>
                                                        <div className="text-center text-sm font-medium text-black">Light</div>
                                                    </div>
                                                    <div className="border rounded-md p-2 bg-slate-900 cursor-pointer hover:bg-slate-800 opacity-50">
                                                        <div className="h-20 rounded-md bg-slate-800 mb-2"></div>
                                                        <div className="text-center text-sm font-medium">System</div>
                                                    </div>
                                                </div>
                                                <p className="text-xs text-muted-foreground mt-2">
                                                    Currently locked to Dark Mode for the best experience.
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
