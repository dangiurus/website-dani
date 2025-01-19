// src/components/layout/Navbar.tsx
const Navbar = () => {
    const menuItems = [
        { label: 'Acasă', href: '/' },
        { label: 'Servicii', href: '/services' },
        { label: 'Produse', href: '/products' },
        { label: 'Contact', href: '/contact' },
    ];

    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <span className="text-2xl font-bold text-gray-800">MetalCraft</span>
                    </div>

                    <div className="flex items-center space-x-4">
                        {menuItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="px-4 py-2 text-gray-800 hover:text-gray-900 font-semibold hover:bg-gray-50 rounded-md transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                        <a
                            href="/src/pages/ContactPage"
                            className="px-4 py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition-colors"
                        >
                            Cere Ofertă
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
