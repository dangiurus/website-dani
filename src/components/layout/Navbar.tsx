import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { label: 'Acasă', href: '/' },
        { label: 'Servicii', href: '/services' },
        { label: 'Produse', href: '/products' }
    ];

    return (
        <>
            {/* Spacer div that takes up space when navbar becomes fixed */}
            {isScrolled && <div className="h-16"></div>}

            {/* The actual navbar */}
            <nav
                className={`
                    transition-all duration-300 ease-in-out
                    ${isScrolled ?
                    'fixed top-[25px] left-1/2 -translate-x-1/2 w-[80%] rounded-full shadow-lg z-50' :
                    'w-full'
                }
                    bg-gray-800
                `}
            >
                <div className="max-w-7xl mx-auto px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <Link to="/" className="text-2xl font-bold text-orange-400">
                                MetalCraft
                            </Link>
                        </div>

                        <div className="flex items-center space-x-4">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.href}
                                    to={item.href}
                                    className="px-4 py-2 text-gray-300 hover:text-orange-400 font-semibold hover:bg-gray-700 rounded-md transition-colors"
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <Link
                                to="/contact"
                                className="px-4 py-2 bg-orange-600 text-white font-bold rounded-md hover:bg-orange-700 transition-colors"
                            >
                                Cere Ofertă
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;