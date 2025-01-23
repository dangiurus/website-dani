// src/components/sections/Capabilities.tsx
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Image from '../common/Image';
import Skeleton from '../common/Skeleton';
import { Link } from 'react-router-dom';

const capabilities = [
    {
        id: 1,
        title: "Garduri Metalice",
        description: "Garduri metalice personalizate cu design modern sau clasic. Execuție la cele mai înalte standarde, cu posibilitatea de a include decupaje laser și modele unice.",
        image: "/images/capabilities/gates.jpg",
        features: [
            "Decupaje laser personalizate",
            "Finisaje de înaltă calitate",
            "Tratamente anticorozive",
            "Montaj profesional inclus"
        ]
    },
    {
        id: 2,
        title: "Porți Auto și Pietonale",
        description: "Porți auto culisante sau batante, cu sau fără automatizare. Sisteme moderne de acces și siguranță integrate.",
        image: "/images/capabilities/gates-auto.jpg",
        features: [
            "Sisteme de automatizare",
            "Telecomandă și acces smart",
            "Design personalizat",
            "Sisteme de siguranță"
        ]
    },
    {
        id: 3,
        title: "Hale Industriale",
        description: "Construcție și montaj hale industriale la cheie. Proiectare și execuție conform standardelor în vigoare.",
        image: "/images/capabilities/industrial.jpg",
        features: [
            "Proiectare personalizată",
            "Structuri metalice durabile",
            "Execuție la cheie",
            "Conformitate cu normele"
        ]
    },
    {
        id: 4,
        title: "Confecții Metalice Speciale",
        description: "Realizăm orice tip de confecție metalică la comandă, adaptată perfect nevoilor dumneavoastră.",
        image: "/images/capabilities/custom.jpg",
        features: [
            "Proiecte personalizate",
            "Consultanță tehnică",
            "Execuție precisă",
            "Adaptare la cerințe"
        ]
    }
];

const CapabilitySection = ({ item, index }: { item: typeof capabilities[0], index: number }) => {
    const [isLoading, setIsLoading] = useState(true);
    const isEven = index % 2 === 0;

    return (
        <div className={`flex flex-col ${
            isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
        } gap-12 items-center`}>
            {/* Image */}
            <div className="w-full lg:w-1/2">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-xl shadow-lg">
                    {isLoading && (
                        <Skeleton className="w-full h-full" />
                    )}
                    <Image
                        src={item.image}
                        alt={item.title}
                        onLoadComplete={() => setIsLoading(false)}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {item.title}
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                    {item.description}
                </p>
                <ul className="space-y-3 mb-8">
                    {item.features.map((feature, index) => (
                        <li
                            key={index}
                            className="flex items-center text-gray-700"
                        >
                            <ArrowRight className="h-5 w-5 text-blue-600 mr-2" />
                            {feature}
                        </li>
                    ))}
                </ul>
                <Link
                    to="/contact"
                    onClick={() => window.scrollTo(0, 0)}
                    className="inline-flex items-center px-6 py-3 border border-transparent
                     text-base font-medium rounded-md text-white bg-blue-600
                     hover:bg-blue-700 transition duration-150 ease-in-out"
                >
                    Solicită Ofertă
                    <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </div>
        </div>
    );
};

const Capabilities = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
                        Ce Putem Realiza
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Descoperă gama noastră completă de servicii și produse.
                        Cu echipamente moderne și personal calificat, suntem pregătiți
                        să transformăm viziunea ta în realitate.
                    </p>
                </div>

                <div className="space-y-20">
                    {capabilities.map((item, index) => (
                        <CapabilitySection
                            key={item.id}
                            item={item}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Capabilities;