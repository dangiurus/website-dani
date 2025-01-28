//src/admin/ProtectedRoute.tsx
import { Navigate, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Menu, LogOut, LayoutGrid, Package, Briefcase, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

// Simple auth state management (replace with your actual auth system)
const useAuth = () => {
    // This should be replaced with your actual auth logic
    const [isAuthenticated] = useState(true);
    return { isAuthenticated };
};

const ProtectedRoute = () => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/admin/login" replace />;
    }

    return <AdminLayout />;
};

const AdminLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const location = useLocation();

    const menuItems = [
        { path: '/admin/dashboard', label: 'Dashboard', icon: LayoutGrid },
        { path: '/admin/products', label: 'Products', icon: Package },
        { path: '/admin/services', label: 'Services', icon: Settings },
        { path: '/admin/portfolio', label: 'Portfolio', icon: Briefcase },
    ];

    return (
        <div className="min-h-screen bg-gray-900">
            {/* Sidebar */}
            <aside className={`
                fixed top-0 left-0 z-40 h-screen transition-transform
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                w-64 bg-gray-800
            `}>
                <div className="h-full px-3 py-4 overflow-y-auto">
                    <div className="flex items-center justify-between mb-6 px-2">
                        <span className="text-xl font-bold text-orange-400">Admin Panel</span>
                        <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-gray-400">
                            <Menu className="h-6 w-6" />
                        </button>
                    </div>

                    <nav className="space-y-2">
                        {menuItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = location.pathname === item.path;

                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`
                                        flex items-center px-4 py-3 rounded-lg
                                        transition-colors duration-200
                                        ${isActive
                                        ? 'bg-orange-600 text-white'
                                        : 'text-gray-400 hover:bg-gray-700'
                                    }
                                    `}
                                >
                                    <Icon className="h-5 w-5 mr-3" />
                                    {item.label}
                                </Link>
                            );
                        })}

                        <button
                            className="w-full flex items-center px-4 py-3 text-gray-400 hover:bg-gray-700 rounded-lg transition-colors duration-200"
                        >
                            <LogOut className="h-5 w-5 mr-3" />
                            Logout
                        </button>
                    </nav>
                </div>
            </aside>

            {/* Main content */}
            <div className={`
                lg:ml-64 p-4 min-h-screen
                transition-all duration-200
                ${isSidebarOpen ? 'ml-64' : 'ml-0'}
            `}>
                <div className="lg:hidden mb-4">
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="p-2 text-gray-400 hover:bg-gray-700 rounded-lg"
                    >
                        <Menu className="h-6 w-6" />
                    </button>
                </div>

                <main className="bg-gray-800 rounded-lg p-6 min-h-[calc(100vh-6rem)]">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default ProtectedRoute;