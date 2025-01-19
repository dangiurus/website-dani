// src/components/layout/Footer.tsx
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">MetalCraft</h3>
                        <p className="text-gray-400">
                            Specialiști în confecții metalice, garduri și hale industriale.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>Telefon: +40 123 456 789</li>
                            <li>Email: contact@metalcraft.ro</li>
                            <li>Adresă: Str. Exemplu, Nr. 123, Oraș</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Program</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>Luni - Vineri: 08:00 - 17:00</li>
                            <li>Sâmbătă: 09:00 - 14:00</li>
                            <li>Duminică: Închis</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} MetalCraft. Toate drepturile rezervate.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;