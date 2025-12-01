'use client';

import {
    LineChart,
    Line,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

export function AnalyticsCharts({ data }: { data: any }) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            {/* Traffic Trend */}
            <Card className="bg-card/50 border-white/10">
                <CardHeader>
                    <CardTitle>Traffic Overview (Last 7 Days)</CardTitle>
                </CardHeader>
                <CardContent className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data.dailyViews}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                            <XAxis dataKey="date" stroke="#888" />
                            <YAxis stroke="#888" />
                            <Tooltip
                                contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }}
                            />
                            <Line
                                type="monotone"
                                dataKey="views"
                                stroke="#8884d8"
                                strokeWidth={2}
                                dot={{ fill: '#8884d8' }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>

            {/* Category Distribution */}
            <Card className="bg-card/50 border-white/10">
                <CardHeader>
                    <CardTitle>Tools by Category</CardTitle>
                </CardHeader>
                <CardContent className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data.categoryStats}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                fill="#8884d8"
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {data.categoryStats.map((entry: any, index: number) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip
                                contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                    <div className="flex flex-wrap justify-center gap-4 mt-4 text-xs text-muted-foreground">
                        {data.categoryStats.map((entry: any, index: number) => (
                            <div key={entry.name} className="flex items-center gap-1">
                                <div
                                    className="w-2 h-2 rounded-full"
                                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                                />
                                {entry.name} ({entry.value})
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
