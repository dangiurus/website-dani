//scr/admin/AdminDashboard.tsx

import { Package, ShoppingBag, Users, Briefcase } from 'lucide-react';

const stats = [
    {
        title: 'Total Products',
        value: '24',
        change: '+12%',
        changeType: 'increase',
        icon: Package,
    },
    {
        title: 'Active Services',
        value: '6',
        change: '0%',
        changeType: 'neutral',
        icon: ShoppingBag,
    },
    {
        title: 'Portfolio Items',
        value: '18',
        change: '+3%',
        changeType: 'increase',
        icon: Briefcase,
    },
    {
        title: 'Client Requests',
        value: '42',
        change: '+24%',
        changeType: 'increase',
        icon: Users,
    },
];

const recentActivity = [
    {
        id: 1,
        type: 'product',
        action: 'added',
        name: 'Gard Metalic Modern',
        timestamp: '2 hours ago',
    },
    {
        id: 2,
        type: 'service',
        action: 'updated',
        name: 'Montaj Porți Automate',
        timestamp: '4 hours ago',
    },
    {
        id: 3,
        type: 'portfolio',
        action: 'deleted',
        name: 'Proiect Rezidential Vista',
        timestamp: '1 day ago',
    },
];

const AdminDashboard = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-100 mb-6">Dashboard</h1>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <div key={stat.title} className="bg-gray-700 rounded-lg p-6">
                            <div className="flex items-center justify-between mb-4">
                                <Icon className="h-8 w-8 text-orange-400" />
                                <span className={`text-sm font-medium ${
                                    stat.changeType === 'increase' ? 'text-green-400' :
                                        stat.changeType === 'decrease' ? 'text-red-400' :
                                            'text-gray-400'
                                }`}>
                                    {stat.change}
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-100 mb-1">
                                {stat.value}
                            </h3>
                            <p className="text-gray-400">{stat.title}</p>
                        </div>
                    );
                })}
            </div>

            {/* Recent Activity */}
            <div className="bg-gray-700 rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-100 mb-4">Recent Activity</h2>
                <div className="space-y-4">
                    {recentActivity.map((activity) => (
                        <div key={activity.id} className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                            <div className="flex items-center space-x-4">
                                <div className={`w-2 h-2 rounded-full ${
                                    activity.action === 'added' ? 'bg-green-400' :
                                        activity.action === 'updated' ? 'bg-blue-400' :
                                            'bg-red-400'
                                }`} />
                                <div>
                                    <p className="text-gray-100">{activity.name}</p>
                                    <p className="text-sm text-gray-400">
                                        {activity.type.charAt(0).toUpperCase() + activity.type.slice(1)}{' '}
                                        {activity.action}
                                    </p>
                                </div>
                            </div>
                            <span className="text-sm text-gray-400">{activity.timestamp}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;