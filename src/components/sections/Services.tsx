// src/components/sections/Services.tsx
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Image from '../common/Image';
import Skeleton from '../common/Skeleton';
import { Link } from 'react-router-dom';

const services = [
    {
        id: 1,
        title: 'Garduri Metalice',
        description: 'Garduri metalice personalizate cu design modern și durabil. Materiale de calitate și finisaje perfecte.',
        image: '/images/services/gates.jpg',
    },
    {
        id: 2,
        title: 'Porți Auto',
        description: 'Porți auto automatizate sau manuale, adaptate perfect nevoilor și spațiului dumneavoastră.',
        image: '/images/services/auto-gates.jpg',
    },
    {
        id: 3,
        title: 'Porți Pietonale',
        description: 'Porți pietonale elegante și funcționale, integrate perfect cu designul gardului.',
        image: '/images/services/pedestrian-gates.jpg',
    },
    {
        id: 4,
        title: 'Hale Industriale',
        description: 'Construcție și montaj hale industriale la cheie. Proiectare, execuție și montaj.',
        image: '/images/services/industrial.jpg',
    },
    {
        id: 5,
        title: 'Balustrade',
        description: 'Balustrade metalice pentru scări și balcoane, cu design modern sau clasic.',
        image: '/images/services/railings.jpg',
    },
    {
        id: 6,
        title: 'Confecții Metalice',
        description: 'Confecții metalice la comandă pentru orice tip de proiect. Adaptăm soluțiile la cerințele dvs.',
        image: '/images/services/custom.jpg',
    }
];

const ServiceCard = ({ service }: { service: typeof services[0] }) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            {isLoading && (
                <Skeleton className="w-full h-64" />
            )}
            <div className="aspect-w-16 aspect-h-9">
                <Image
                    src={service.image}
                    alt={service.title}
                    onLoadComplete={() => setIsLoading(false)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white mb-2">
                    {service.title}
                </h3>
                <p className="text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {service.description}
                </p>
                <Link
                    to={`/services#${service.id}`}
                    onClick={() => window.scrollTo(0, 0)}
                    className="inline-flex items-center text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                    Află mai multe
                    <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </div>
        </div>
    );
};

const Services = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
                        Serviciile Noastre
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Oferim o gamă completă de servicii în domeniul confecțiilor metalice,
                        cu focus pe calitate și satisfacția clientului.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;