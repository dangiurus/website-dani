import { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import {
    Menu,
    LogOut,
    LayoutGrid,
    Package,
    Settings,
    Briefcase,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';

interface AdminLayoutProps {
    children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        { path: '/admin/dashboard', label: 'Dashboard', icon: LayoutGrid },
        { path: '/admin/products', label: 'Products', icon: Package },
        { path: '/admin/services', label: 'Services', icon: Settings },
        { path: '/admin/portfolio', label: 'Portfolio', icon: Briefcase }
    ];

    const handleLogout = () => {
        localStorage.removeItem('adminAuth');
        navigate('/admin/login');
    };

    return (
        <div className="min-h-screen bg-gray-900">
            {/* Sidebar */}
            <aside className={`
                fixed top-0 left-0 z-40 h-screen transition-all duration-300
                ${isSidebarOpen ? 'w-64' : 'w-20'}
                bg-gray-800
            `}>
                <div className="h-full px-3 py-4 overflow-y-auto">
                    <div className="flex items-center justify-between mb-6">
                        <span className={`
                            text-xl font-bold text-orange-400 transition-all duration-300
                            ${isSidebarOpen ? 'opacity-100' : 'opacity-0 hidden'}
                        `}>
                            Admin Panel
                        </span>
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="p-2 text-gray-400 hover:text-gray-100 transition-colors"
                        >
                            {isSidebarOpen ? <ChevronLeft /> : <ChevronRight />}
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
                                    <Icon className="h-5 w-5" />
                                    {isSidebarOpen && (
                                        <span className="ml-3">{item.label}</span>
                                    )}
                                </Link>
                            );
                        })}

                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center px-4 py-3 text-gray-400 hover:bg-gray-700 rounded-lg transition-colors duration-200"
                        >
                            <LogOut className="h-5 w-5" />
                            {isSidebarOpen && (
                                <span className="ml-3">Logout</span>
                            )}
                        </button>
                    </nav>
                </div>
            </aside>

            {/* Main content */}
            <div className={`
                p-4 min-h-screen transition-all duration-300
                ${isSidebarOpen ? 'ml-64' : 'ml-20'}
            `}>
                <main className="bg-gray-800 rounded-lg p-6 min-h-[calc(100vh-2rem)]">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;