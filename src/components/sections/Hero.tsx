// src/components/sections/Hero.tsx
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Image from '../common/Image';
import { useState } from 'react';

const Hero = () => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="relative h-[600px] w-full">
            <div className="absolute inset-0">
                <Image
                    src="/images/hero-background.jpg"
                    alt="Confecții metalice"
                    className="w-full h-full"
                    onLoadComplete={() => setIsLoading(false)}
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>

            <div className={`relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-opacity duration-500 ${
                isLoading ? 'opacity-0' : 'opacity-100'
            }`}>
                <div className="flex flex-col justify-center h-full max-w-2xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Confecții Metalice de Calitate Superioară
                    </h1>
                    <p className="text-xl text-gray-200 mb-8">
                        Specializați în garduri metalice personalizate, porți auto și pietonale,
                        balustrade și hale industriale. Calitate garantată și termene de execuție respectate.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            to="/contact"
                            onClick={() => window.scrollTo(0, 0)}
                            className="inline-flex items-center justify-center px-6 py-3 border border-transparent
                                text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700
                                transition duration-150 ease-in-out"
                        >
                            Cere Ofertă Gratuită
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                        <Link
                            to="/portfolio"
                            onClick={() => window.scrollTo(0, 0)}
                            className="inline-flex items-center justify-center px-6 py-3 border border-white
                                text-base font-medium rounded-md text-white hover:bg-white/10
                                transition duration-150 ease-in-out"
                        >
                            Vezi Proiecte Realizate
                        </Link>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white">
                        <div className="text-center">
                            <div className="font-bold text-xl">10+</div>
                            <div className="text-sm">Ani Experiență</div>
                        </div>
                        <div className="text-center">
                            <div className="font-bold text-xl">500+</div>
                            <div className="text-sm">Proiecte Finalizate</div>
                        </div>
                        <div className="text-center">
                            <div className="font-bold text-xl">100%</div>
                            <div className="text-sm">Clienți Mulțumiți</div>
                        </div>
                        <div className="text-center">
                            <div className="font-bold text-xl">5 Ani</div>
                            <div className="text-sm">Garanție</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;