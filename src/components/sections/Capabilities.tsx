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
    // ... keep other capabilities data unchanged
];

const CapabilitySection = ({ item, index }: { item: typeof capabilities[0], index: number }) => {
    const [isLoading, setIsLoading] = useState(true);
    const isEven = index % 2 === 0;

    return (
        <div className={`flex flex-col ${
            isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
        } gap-12 items-center`}>
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

            <div className="w-full lg:w-1/2">
                <h3 className="text-2xl font-bold text-gray-100 mb-4">
                    {item.title}
                </h3>
                <p className="text-lg text-gray-400 mb-6">
                    {item.description}
                </p>
                <ul className="space-y-3 mb-8">
                    {item.features.map((feature, index) => (
                        <li
                            key={index}
                            className="flex items-center text-gray-400"
                        >
                            <ArrowRight className="h-5 w-5 text-orange-400 mr-2" />
                            {feature}
                        </li>
                    ))}
                </ul>
                <Link
                    to="/contact"
                    onClick={() => window.scrollTo(0, 0)}
                    className="inline-flex items-center px-6 py-3 bg-orange-600
                    hover:bg-orange-700 text-white rounded-md transition-colors"
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
        <section className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-100 sm:text-4xl mb-4">
                        Ce Putem Realiza
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
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