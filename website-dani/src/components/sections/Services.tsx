// src/components/sections/Services.tsx
import { ArrowRight } from 'lucide-react';

const services = [
    {
        id: 1,
        title: 'Garduri Metalice',
        description: 'Garduri metalice personalizate cu design modern și durabil. Materiale de calitate și finisaje perfecte.',
        image: 'https://images.unsplash.com/photo-1628592102751-ba83b0314276?q=80&w=2070',
    },
    {
        id: 2,
        title: 'Porți Auto',
        description: 'Porți auto automatizate sau manuale, adaptate perfect nevoilor și spațiului dumneavoastră.',
        image: 'https://images.unsplash.com/photo-1553613600-cc786c8d4d05?q=80&w=2070',
    },
    {
        id: 3,
        title: 'Porți Pietonale',
        description: 'Porți pietonale elegante și funcționale, integrate perfect cu designul gardului.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070',
    },
    {
        id: 4,
        title: 'Hale Industriale',
        description: 'Construcție și montaj hale industriale la cheie. Proiectare, execuție și montaj.',
        image: 'https://images.unsplash.com/photo-1565636291239-a8630eb0a3b5?q=80&w=2070',
    },
    {
        id: 5,
        title: 'Balustrade',
        description: 'Balustrade metalice pentru scări și balcoane, cu design modern sau clasic.',
        image: 'https://images.unsplash.com/photo-1614149162883-504ce4d13909?q=80&w=2070',
    },
    {
        id: 6,
        title: 'Confecții Metalice',
        description: 'Confecții metalice la comandă pentru orice tip de proiect. Adaptăm soluțiile la cerințele dvs.',
        image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070',
    }
];

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
                        <div
                            key={service.id}
                            className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <div className="aspect-w-16 aspect-h-9">
                                <img
                                    src={service.image}
                                    alt={service.title}
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
                                <a
                                    href={`/servicii/${service.id}`}
                                    className="inline-flex items-center text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                >
                                    Află mai multe
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;