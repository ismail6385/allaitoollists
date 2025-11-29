import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { tools } from '@/data/tools';
import { Users, FileText, Eye, TrendingUp, DollarSign } from 'lucide-react';

export default function AdminDashboard() {
    // Mock stats
    const stats = [
        {
            title: "Total Tools",
            value: tools.length,
            change: "+12%",
            icon: FileText,
        },
        {
            title: "Pending Submissions",
            value: "8",
            change: "+4",
            icon: FileText,
            alert: true
        },
        {
            title: "Total Views",
            value: "45.2k",
            change: "+24%",
            icon: Eye,
        },
        {
            title: "Revenue (Mo)",
            value: "$1,240",
            change: "+8%",
            icon: DollarSign,
        },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p className="text-muted-foreground">Overview of your directory's performance.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <Card key={stat.title} className="bg-card/50 border-white/10">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">
                                {stat.title}
                            </CardTitle>
                            <stat.icon className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <p className={`text-xs ${stat.alert ? 'text-red-400 font-bold' : 'text-muted-foreground'}`}>
                                {stat.change} from last month
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Submissions */}
                <Card className="bg-card/50 border-white/10">
                    <CardHeader>
                        <CardTitle>Recent Submissions</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-secondary/20 border border-white/5">
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 rounded bg-primary/10 flex items-center justify-center font-bold text-primary">
                                            AI
                                        </div>
                                        <div>
                                            <div className="font-medium">New AI Tool {i}</div>
                                            <div className="text-xs text-muted-foreground">Submitted 2h ago</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="text-xs bg-green-500/10 text-green-500 px-2 py-1 rounded hover:bg-green-500/20">Approve</button>
                                        <button className="text-xs bg-red-500/10 text-red-500 px-2 py-1 rounded hover:bg-red-500/20">Reject</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Top Performing Tools */}
                <Card className="bg-card/50 border-white/10">
                    <CardHeader>
                        <CardTitle>Top Performing Tools</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {tools.slice(0, 5).map((tool, i) => (
                                <div key={tool.id} className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <span className="text-muted-foreground w-4">{i + 1}</span>
                                        <div className="font-medium">{tool.name}</div>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <Eye className="h-3 w-3" />
                                        {tool.views?.toLocaleString()}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
